"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { traiterSignalement, retirerArtisan } from "@/lib/admin";

const motifLabels: Record<string, string> = {
  TRAVAIL_MAL_FAIT: "Travail mal fait",
  PRIX_ABUSIF: "Prix abusif / arnaque",
  COMPORTEMENT: "Comportement déplacé",
  ABSENT: "Ne s'est pas présenté",
  AUTRE: "Autre",
};

export default function CarteSignalement({
  signalement,
}: {
  signalement: {
    id: string;
    motif: string;
    description: string;
    statut: string;
    clientNom: string;
    artisanNom: string;
    artisanUserId: string;
  };
}) {
  const router = useRouter();
  const [enCours, setEnCours] = useState(false);

  async function action(fn: () => Promise<{ ok: boolean; message: string }>) {
    setEnCours(true);
    await fn();
    setEnCours(false);
    router.refresh();
  }

  const estNouveau = signalement.statut === "NOUVEAU";

  return (
    <div className={`bg-white border rounded-2xl p-4 mb-3 ${estNouveau ? "border-[#E9B7AB] border-l-4 border-l-[#B5462F]" : "border-[#E6EAE9] opacity-70"}`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FDF3F0] text-[#B5462F]">
            {motifLabels[signalement.motif]}
          </span>
        </div>
        {!estNouveau && (
          <span className="text-[11px] font-bold text-[#15803d]">✓ Traité</span>
        )}
      </div>

      <p className="text-sm text-[#1A2A36] mb-2">{signalement.description || "—"}</p>

      <div className="text-xs text-[#67767A] mb-3">
        Artizen visé : <span className="font-bold text-[#1A2A36]">{signalement.artisanNom}</span>
        {" · "}signalé par {signalement.clientNom}
      </div>

      {estNouveau && (
        <div className="flex gap-2">
          <button
            onClick={() => action(() => retirerArtisan(signalement.artisanUserId))}
            disabled={enCours}
            className="bg-[#B5462F] text-white font-bold text-sm py-2.5 px-4 rounded-xl disabled:opacity-60"
          >
            Retirer le badge Artizen
          </button>
          <button
            onClick={() => action(() => traiterSignalement(signalement.id))}
            disabled={enCours}
            className="bg-white border border-[#E6EAE9] text-[#67767A] font-bold text-sm py-2.5 px-4 rounded-xl disabled:opacity-60"
          >
            Marquer traité
          </button>
        </div>
      )}
    </div>
  );
}