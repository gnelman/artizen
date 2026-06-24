"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { envoyerCode, verifierCode, enregistrerNom } from "@/lib/auth";

export default function Connexion() {
  const router = useRouter();
  const [etape, setEtape] = useState<"numero" | "code" | "nom">("numero");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [nom, setNom] = useState("");
  const [role, setRole] = useState("CLIENT");
  const [message, setMessage] = useState("");
  const [enCours, setEnCours] = useState(false);

  function rediriger(r: string) {
    if (r === "ADMIN") router.push("/admin");
    else if (r === "ARTISAN") router.push("/pro");
    else router.push("/compte");
  }

  async function demanderCode() {
    setEnCours(true);
    setMessage("");
    const res = await envoyerCode(phone);
    setEnCours(false);
    if (res.ok) {
      setEtape("code");
    } else {
      setMessage(res.message);
    }
  }

  async function validerCode() {
    setEnCours(true);
    setMessage("");
    const res = await verifierCode(phone, code);
    setEnCours(false);
    if (res.ok) {
      setRole(res.role ?? "CLIENT");
      if (res.nouveau) {
        // nouveau compte : on demande le nom
        setEtape("nom");
      } else {
        rediriger(res.role ?? "CLIENT");
      }
    } else {
      setMessage(res.message);
    }
  }

  async function validerNom() {
    setEnCours(true);
    setMessage("");
    const res = await enregistrerNom(phone, nom);
    setEnCours(false);
    if (res.ok) {
      rediriger(role);
    } else {
      setMessage(res.message);
    }
  }

  return (
    <main className="min-h-screen bg-[#F6F7F5] flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-extrabold text-[#0F6E72] tracking-tight">
          artizen<span className="text-[#F5A623]">.</span>
        </h1>

        {/* ÉTAPE 1 : NUMÉRO */}
        {etape === "numero" && (
          <>
            <p className="text-[#1A2A36] font-semibold mt-2 mb-7">Connecte-toi pour continuer</p>
            <label className="block font-bold text-sm text-[#1A2A36] mb-2">
              Ton numéro de téléphone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ex : 0707070707"
              className="w-full px-4 py-3.5 text-base rounded-xl border-[1.5px] border-[#E6EAE9] outline-none focus:border-[#0F6E72] mb-4"
            />
            <button
              onClick={demanderCode}
              disabled={enCours}
              className="w-full py-4 text-base font-bold text-white bg-[#0F6E72] rounded-xl active:scale-[0.99] transition-transform disabled:opacity-60"
            >
              {enCours ? "Envoi..." : "Recevoir mon code"}
            </button>
          </>
        )}

        {/* ÉTAPE 2 : CODE */}
        {etape === "code" && (
          <>
            <p className="text-[#1A2A36] font-semibold mt-2 mb-7">
              Entre le code reçu au {phone}
            </p>
            <label className="block font-bold text-sm text-[#1A2A36] mb-2">Code à 6 chiffres</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="______"
              maxLength={6}
              className="w-full px-4 py-3.5 rounded-xl border-[1.5px] border-[#E6EAE9] outline-none focus:border-[#0F6E72] mb-4 text-center text-2xl font-bold tracking-[8px]"
            />
            <button
              onClick={validerCode}
              disabled={enCours}
              className="w-full py-4 text-base font-bold text-white bg-[#0F6E72] rounded-xl active:scale-[0.99] transition-transform disabled:opacity-60"
            >
              {enCours ? "Vérification..." : "Valider"}
            </button>
            <button
              onClick={() => { setEtape("numero"); setCode(""); setMessage(""); }}
              className="w-full py-3 text-[#0F6E72] font-semibold mt-1"
            >
              ← Changer de numéro
            </button>
          </>
        )}

        {/* ÉTAPE 3 : NOM (nouveaux comptes seulement) */}
        {etape === "nom" && (
          <>
            <p className="text-[#1A2A36] font-semibold mt-2 mb-1">Bienvenue sur Artizen 👋</p>
            <p className="text-sm text-[#67767A] mb-7">Comment tu t&apos;appelles ?</p>
            <label className="block font-bold text-sm text-[#1A2A36] mb-2">Ton nom</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Ex : Sandra Koffi"
              className="w-full px-4 py-3.5 text-base rounded-xl border-[1.5px] border-[#E6EAE9] outline-none focus:border-[#0F6E72] mb-4"
            />
            <button
              onClick={validerNom}
              disabled={enCours}
              className="w-full py-4 text-base font-bold text-white bg-[#0F6E72] rounded-xl active:scale-[0.99] transition-transform disabled:opacity-60"
            >
              {enCours ? "..." : "C'est parti"}
            </button>
          </>
        )}

        {message && <p className="mt-4 text-[#B5462F] font-semibold">{message}</p>}
      </div>
    </main>
  );
}