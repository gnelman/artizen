"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { confirmerDemande, noterArtisan, signalerArtisan } from "@/lib/client";

const statutInfo: Record<string, { label: string; classe: string }> = {
  EN_ATTENTE: { label: "En attente de réponse", classe: "bg-[#FFF4E0] text-[#D6860B]" },
  ACCEPTEE: { label: "Acceptée", classe: "bg-[#DCEBEA] text-[#0A4D50]" },
  EN_COURS: { label: "En cours", classe: "bg-[#DCEBEA] text-[#0A4D50]" },
  TERMINEE: { label: "Terminée — à confirmer", classe: "bg-[#FFF4E0] text-[#D6860B]" },
  CONFIRMEE: { label: "Confirmée", classe: "bg-[#E7F6EC] text-[#15803d]" },
  PAYEE: { label: "Payée", classe: "bg-[#E7F6EC] text-[#15803d]" },
  ANNULEE: { label: "Annulée", classe: "bg-[#F0F3F2] text-[#67767A]" },
};

const metierLabels: Record<string, string> = {
  CLIMATISATION: "Climatisation",
  PLOMBERIE: "Plomberie",
  ELECTRICITE: "Électricité",
  ELECTROMENAGER: "Froid & Électroménager",
  PEINTURE: "Peinture & Carrelage",
};

const motifs = [
  { cle: "TRAVAIL_MAL_FAIT", label: "Travail mal fait" },
  { cle: "PRIX_ABUSIF", label: "Prix abusif / arnaque" },
  { cle: "COMPORTEMENT", label: "Comportement déplacé" },
  { cle: "ABSENT", label: "Ne s'est pas présenté" },
  { cle: "AUTRE", label: "Autre" },
];

export default function CarteDemandeClient({
  demande,
}: {
  demande: {
    id: string;
    statut: string;
    metier: string;
    description: string;
    prixDevis: number | null;
    artisanNom: string;
    dejaNote: boolean;
  };
}) {
  const router = useRouter();
  const [enCours, setEnCours] = useState(false);
  const [vue, setVue] = useState<"carte" | "noter" | "signaler">("carte");
  const [note, setNote] = useState(0);
  const [commentaire, setCommentaire] = useState("");
  const [motif, setMotif] = useState("TRAVAIL_MAL_FAIT");
  const [descSignal, setDescSignal] = useState("");

  const info = statutInfo[demande.statut] ?? statutInfo.EN_ATTENTE;

  async function confirmer() {
    setEnCours(true);
    await confirmerDemande(demande.id);
    setEnCours(false);
    router.refresh();
  }

  async function envoyerNote() {
    if (note < 1) return;
    setEnCours(true);
    await noterArtisan({ demandeId: demande.id, note, commentaire });
    setEnCours(false);
    setVue("carte");
    router.refresh();
  }

  async function envoyerSignalement() {
    setEnCours(true);
    await signalerArtisan({ demandeId: demande.id, motif, description: descSignal });
    setEnCours(false);
    setVue("carte");
    router.refresh();
  }

  return (
    <div className="bg-white border border-[#E6EAE9] rounded-2xl p-4 mb-3">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="font-bold text-[15px] text-[#1A2A36]">{metierLabels[demande.metier]}</div>
          <div className="text-sm text-[#67767A]">{demande.artisanNom}</div>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${info.classe}`}>
          {info.label}
        </span>
      </div>

      <p className="text-sm text-[#1A2A36]">{demande.description}</p>

      {demande.prixDevis && (
        <p className="text-sm font-bold text-[#0F6E72] mt-2">
          Devis : {demande.prixDevis.toLocaleString("fr-FR")} FCFA
        </p>
      )}

      {/* VUE CARTE : actions selon le statut */}
      {vue === "carte" && (
        <div className="mt-3">
          {demande.statut === "TERMINEE" && (
            <button
              onClick={confirmer}
              disabled={enCours}
              className="w-full bg-[#0F6E72] text-white font-bold text-sm py-3 rounded-xl active:scale-[0.99] transition-transform disabled:opacity-60"
            >
              {enCours ? "..." : "Confirmer que c'est réglé"}
            </button>
          )}

          {demande.statut === "CONFIRMEE" && !demande.dejaNote && (
            <div className="flex gap-2">
              <button
                onClick={() => setVue("noter")}
                className="flex-1 bg-[#F5A623] text-[#3a2a08] font-bold text-sm py-3 rounded-xl"
              >
                Noter {demande.artisanNom}
              </button>
              <button
                onClick={() => setVue("signaler")}
                className="px-4 bg-white border border-[#E6EAE9] text-[#B5462F] font-bold text-sm py-3 rounded-xl"
              >
                Signaler
              </button>
            </div>
          )}

          {demande.statut === "CONFIRMEE" && demande.dejaNote && (
            <p className="text-[13px] text-[#15803d] font-bold">✓ Merci, tu as noté cette intervention.</p>
          )}
        </div>
      )}

      {/* VUE NOTER */}
      {vue === "noter" && (
        <div className="mt-3 bg-[#F6F7F5] rounded-xl p-3">
          <p className="text-sm font-bold text-[#1A2A36] mb-2">Note ton Artizen</p>
          <div className="flex gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setNote(n)}
                className={`text-3xl ${n <= note ? "text-[#F5A623]" : "text-[#D8DEDD]"}`}
              >
                ★
              </button>
            ))}
          </div>
          <textarea
            value={commentaire}
            onChange={(e) => setCommentaire(e.target.value)}
            placeholder="Un mot sur ton expérience (optionnel)"
            className="w-full px-3 py-2.5 rounded-lg border border-[#E6EAE9] text-sm mb-2 min-h-[70px] resize-none"
          />
          <div className="flex gap-2">
            <button
              onClick={envoyerNote}
              disabled={enCours || note < 1}
              className="flex-1 bg-[#0F6E72] text-white font-bold text-sm py-2.5 rounded-lg disabled:opacity-60"
            >
              {enCours ? "..." : "Envoyer"}
            </button>
            <button
              onClick={() => setVue("carte")}
              className="px-4 bg-white border border-[#E6EAE9] text-[#67767A] font-bold text-sm py-2.5 rounded-lg"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* VUE SIGNALER */}
      {vue === "signaler" && (
        <div className="mt-3 bg-[#FDF3F0] rounded-xl p-3">
          <p className="text-sm font-bold text-[#B5462F] mb-2">Signaler un problème</p>
          <select
            value={motif}
            onChange={(e) => setMotif(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-[#E6EAE9] text-sm bg-white mb-2"
          >
            {motifs.map((m) => (
              <option key={m.cle} value={m.cle}>{m.label}</option>
            ))}
          </select>
          <textarea
            value={descSignal}
            onChange={(e) => setDescSignal(e.target.value)}
            placeholder="Explique ce qui s'est passé"
            className="w-full px-3 py-2.5 rounded-lg border border-[#E6EAE9] text-sm mb-2 min-h-[70px] resize-none"
          />
          <div className="flex gap-2">
            <button
              onClick={envoyerSignalement}
              disabled={enCours}
              className="flex-1 bg-[#B5462F] text-white font-bold text-sm py-2.5 rounded-lg disabled:opacity-60"
            >
              {enCours ? "..." : "Envoyer le signalement"}
            </button>
            <button
              onClick={() => setVue("carte")}
              className="px-4 bg-white border border-[#E6EAE9] text-[#67767A] font-bold text-sm py-2.5 rounded-lg"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}