"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { accepterDemande, fixerDevis, terminerDemande } from "@/lib/demandes";

const statutStyle: Record<string, string> = {
  EN_ATTENTE: "bg-[#FFF4E0] text-[#D6860B]",
  ACCEPTEE: "bg-[#DCEBEA] text-[#0A4D50]",
  EN_COURS: "bg-[#DCEBEA] text-[#0A4D50]",
  TERMINEE: "bg-[#E7F6EC] text-[#15803d]",
  PAYEE: "bg-[#E7F6EC] text-[#15803d]",
  ANNULEE: "bg-[#F0F3F2] text-[#67767A]",
};

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
    router.refresh();
  }

  const borderColor = demande.statut === "EN_ATTENTE" ? "border-l-[#F5A623]" : "border-l-[#0F6E72]";

  return (
    <div className={`bg-white border border-[#E6EAE9] border-l-4 ${borderColor} rounded-2xl p-4 mb-3`}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-[15px] text-[#1A2A36]">{demande.clientNom}</span>
        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${statutStyle[demande.statut]}`}>
          {statutLabels[demande.statut]}
        </span>
      </div>

      <p className="text-[13px] text-[#67767A] mb-1.5">
        {metierLabels[demande.metier]} · {demande.commune}
      </p>
      <p className="text-sm text-[#1A2A36]">{demande.description}</p>
      <p className="text-xs text-[#67767A] mt-2">📍 {demande.adresse}</p>

      {demande.prixDevis && (
        <p className="text-sm font-bold text-[#0F6E72] mt-2">
          Devis : {demande.prixDevis.toLocaleString("fr-FR")} FCFA
        </p>
      )}

      <div className="mt-3.5">
        {demande.statut === "EN_ATTENTE" && (
          <button
            onClick={() => action(() => accepterDemande(demande.id))}
            disabled={enCours}
            className="w-full bg-[#0F6E72] text-white font-bold text-sm py-3 rounded-xl active:scale-[0.99] transition-transform disabled:opacity-60"
          >
            {enCours ? "..." : "Accepter la demande"}
          </button>
        )}

        {demande.statut === "ACCEPTEE" && (
          <div>
            <p className="text-xs text-[#67767A] mb-2">Annonce ton prix (barème : 15 000 – 40 000 F)</p>
            <div className="flex gap-2">
              <input
                type="number"
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
                placeholder="Prix en FCFA"
                className="flex-1 px-3 py-3 rounded-xl border border-[#E6EAE9] text-[15px] outline-none focus:border-[#0F6E72]"
              />
              <button
                onClick={() => action(() => fixerDevis(demande.id, Number(prix)))}
                disabled={enCours}
                className="bg-[#0F6E72] text-white font-bold text-sm px-5 rounded-xl active:scale-[0.99] transition-transform disabled:opacity-60"
              >
                Envoyer
              </button>
            </div>
          </div>
        )}

        {demande.statut === "EN_COURS" && (
          <button
            onClick={() => action(() => terminerDemande(demande.id))}
            disabled={enCours}
            className="w-full bg-[#F5A623] text-[#3a2a08] font-bold text-sm py-3 rounded-xl active:scale-[0.99] transition-transform disabled:opacity-60"
          >
            {enCours ? "..." : "Marquer comme terminé"}
          </button>
        )}

        {demande.statut === "TERMINEE" && (
          <p className="text-[13px] text-[#15803d] font-bold">✓ Travail terminé</p>
        )}
      </div>
    </div>
  );
}