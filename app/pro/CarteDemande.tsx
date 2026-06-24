"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { accepterDemande, fixerDevis, terminerDemande } from "@/lib/demandes";

const statutLabels: Record<string, string> = {
  EN_ATTENTE: "En attente",
  ACCEPTEE: "Acceptée",
  EN_COURS: "En cours",
  TERMINEE: "Terminée",
  PAYEE: "Payée",
  ANNULEE: "Annulée",
};

const metierLabels: Record<string, string> = {
  CLIMATISATION: "Climatisation",
  PLOMBERIE: "Plomberie",
  ELECTRICITE: "Électricité",
  ELECTROMENAGER: "Froid & Électroménager",
  PEINTURE: "Peinture & Carrelage",
};

export default function CarteDemande({
  demande,
}: {
  demande: {
    id: string;
    statut: string;
    metier: string;
    commune: string;
    description: string;
    adresse: string;
    prixDevis: number | null;
    clientNom: string;
  };
}) {
  const router = useRouter();
  const [prix, setPrix] = useState("");
  const [enCours, setEnCours] = useState(false);

  async function action(fn: () => Promise<{ ok: boolean; message: string }>) {
    setEnCours(true);
    await fn();
    setEnCours(false);
    router.refresh(); // recharge la page pour voir le nouveau statut
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E6EAE9",
        borderRadius: "16px",
        padding: "16px",
        marginBottom: "12px",
        borderLeft: demande.statut === "EN_ATTENTE" ? "4px solid #F5A623" : "4px solid #0F6E72",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <span style={{ fontWeight: 700, fontSize: "15px" }}>{demande.clientNom}</span>
        <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "999px", background: "#DCEBEA", color: "#0A4D50" }}>
          {statutLabels[demande.statut]}
        </span>
      </div>
      <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#67767A" }}>
        {metierLabels[demande.metier]} · {demande.commune}
      </p>
      <p style={{ margin: 0, fontSize: "14px", color: "#1A2A36" }}>{demande.description}</p>
      <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#67767A" }}>📍 {demande.adresse}</p>

      {demande.prixDevis && (
        <p style={{ margin: "8px 0 0", fontSize: "14px", fontWeight: 700, color: "#0F6E72" }}>
          Devis : {demande.prixDevis.toLocaleString("fr-FR")} FCFA
        </p>
      )}

      {/* Boutons selon le statut */}
      <div style={{ marginTop: "14px" }}>
        {demande.statut === "EN_ATTENTE" && (
          <button onClick={() => action(() => accepterDemande(demande.id))} disabled={enCours} style={btnPrimary}>
            {enCours ? "..." : "Accepter la demande"}
          </button>
        )}

        {demande.statut === "ACCEPTEE" && (
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="number"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
              placeholder="Prix en FCFA"
              style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "1.5px solid #E6EAE9", fontSize: "15px" }}
            />
            <button onClick={() => action(() => fixerDevis(demande.id, Number(prix)))} disabled={enCours} style={btnPrimary}>
              Envoyer
            </button>
          </div>
        )}

        {demande.statut === "EN_COURS" && (
          <button onClick={() => action(() => terminerDemande(demande.id))} disabled={enCours} style={btnSaffron}>
            {enCours ? "..." : "Marquer comme terminé"}
          </button>
        )}

        {demande.statut === "TERMINEE" && (
          <p style={{ margin: 0, fontSize: "13px", color: "#15803d", fontWeight: 700 }}>✓ Travail terminé</p>
        )}
      </div>
    </div>
  );
}

const btnPrimary: React.CSSProperties = { background: "#0F6E72", color: "#fff", border: "none", borderRadius: "10px", padding: "12px 16px", fontWeight: 700, fontSize: "14px", cursor: "pointer" };
const btnSaffron: React.CSSProperties = { background: "#F5A623", color: "#3a2a08", border: "none", borderRadius: "10px", padding: "12px 16px", fontWeight: 700, fontSize: "14px", cursor: "pointer", width: "100%" };