"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validerArtisan, retirerArtisan } from "@/lib/admin";

const metiers = [
  { cle: "CLIMATISATION", label: "Climatisation" },
  { cle: "PLOMBERIE", label: "Plomberie" },
  { cle: "ELECTRICITE", label: "Électricité" },
  { cle: "ELECTROMENAGER", label: "Froid & Électroménager" },
  { cle: "PEINTURE", label: "Peinture & Carrelage" },
];

export default function LigneUtilisateur({
  user,
}: {
  user: { id: string; name: string; phone: string; role: string };
}) {
  const router = useRouter();
  const [ouvert, setOuvert] = useState(false);
  const [nom, setNom] = useState(user.name === "Nouveau client" ? "" : user.name);
  const [metier, setMetier] = useState("CLIMATISATION");
  const [commune, setCommune] = useState("");
  const [experience, setExperience] = useState("");
  const [enCours, setEnCours] = useState(false);

  async function valider() {
    setEnCours(true);
    await validerArtisan({
      userId: user.id,
      nom,
      metier,
      commune,
      experience: Number(experience) || 0,
    });
    setEnCours(false);
    setOuvert(false);
    router.refresh();
  }

  async function retirer() {
    setEnCours(true);
    await retirerArtisan(user.id);
    setEnCours(false);
    router.refresh();
  }

  const roleStyle: Record<string, string> = {
    CLIENT: "bg-[#F0F3F2] text-[#67767A]",
    ARTISAN: "bg-[#DCEBEA] text-[#0A4D50]",
    ADMIN: "bg-[#FFF4E0] text-[#D6860B]",
  };

  return (
    <div className="bg-white border border-[#E6EAE9] rounded-2xl p-4 mb-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-[15px] text-[#1A2A36]">{user.name}</div>
          <div className="text-sm text-[#67767A]">{user.phone}</div>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${roleStyle[user.role]}`}>
          {user.role}
        </span>
      </div>

      <div className="mt-3">
        {user.role === "CLIENT" && !ouvert && (
          <button
            onClick={() => setOuvert(true)}
            className="bg-[#0F6E72] text-white font-bold text-sm py-2.5 px-4 rounded-xl active:scale-[0.99] transition-transform"
          >
            Valider comme Artizen
          </button>
        )}

        {user.role === "CLIENT" && ouvert && (
          <div className="bg-[#F6F7F5] rounded-xl p-3 space-y-2.5">
            <div>
              <label className="block text-xs font-bold text-[#1A2A36] mb-1">Nom complet</label>
              <input
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Ex : Konan Bama"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E6EAE9] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#1A2A36] mb-1">Métier</label>
              <select
                value={metier}
                onChange={(e) => setMetier(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-[#E6EAE9] text-sm bg-white"
              >
                {metiers.map((m) => (
                  <option key={m.cle} value={m.cle}>{m.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#1A2A36] mb-1">Commune</label>
              <input
                value={commune}
                onChange={(e) => setCommune(e.target.value)}
                placeholder="Ex : Cocody"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E6EAE9] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#1A2A36] mb-1">Années d&apos;expérience</label>
              <input
                type="number"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Ex : 5"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E6EAE9] text-sm"
              />
            </div>
            <div className="flex gap-2 pt-1">
              <button
                onClick={valider}
                disabled={enCours}
                className="flex-1 bg-[#0F6E72] text-white font-bold text-sm py-2.5 rounded-lg disabled:opacity-60"
              >
                {enCours ? "..." : "Confirmer"}
              </button>
              <button
                onClick={() => setOuvert(false)}
                className="px-4 bg-white border border-[#E6EAE9] text-[#67767A] font-bold text-sm py-2.5 rounded-lg"
              >
                Annuler
              </button>
            </div>
          </div>
        )}

        {user.role === "ARTISAN" && (
          <button
            onClick={retirer}
            disabled={enCours}
            className="text-[#B5462F] text-sm font-semibold disabled:opacity-60"
          >
            {enCours ? "..." : "Retirer le statut Artizen"}
          </button>
        )}
      </div>
    </div>
  );
}