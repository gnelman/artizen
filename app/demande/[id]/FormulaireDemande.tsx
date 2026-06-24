"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { creerDemande } from "@/lib/demandes";

export default function FormulaireDemande({
  artisanId,
  artisanNom,
  metier,
  commune,
}: {
  artisanId: string;
  artisanNom: string;
  metier: string;
  commune: string;
}) {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [adresse, setAdresse] = useState("");
  const [message, setMessage] = useState("");
  const [enCours, setEnCours] = useState(false);

  async function envoyer() {
    setEnCours(true);
    setMessage("");
    const res = await creerDemande({ artisanId, metier, description, commune, adresse });
    setEnCours(false);
    if (res.ok) {
      router.push("/compte");
    } else {
      setMessage(res.message);
    }
  }

  return (
    <main style={{ minHeight: "100vh", background: "#F6F7F5", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "#fff", borderBottom: "1px solid #E6EAE9", padding: "16px 20px" }}>
        <h1 style={{ fontSize: "18px", fontWeight: 700, margin: 0 }}>Demander {artisanNom}</h1>
      </div>

      <div style={{ maxWidth: "520px", margin: "0 auto", padding: "20px" }}>
        <label style={labelStyle}>Décris ton souci</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ex : le split de la chambre ne souffle plus de froid depuis 2 jours."
          style={{ ...inputStyle, minHeight: "90px", resize: "none" }}
        />

        <label style={labelStyle}>Ton adresse ({commune})</label>
        <input
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
          placeholder="Ex : Riviera 3, Rue des Jardins"
          style={inputStyle}
        />

        <div style={{ background: "#fff", border: "1px solid #E6EAE9", borderRadius: "14px", padding: "14px", margin: "8px 0 18px" }}>
          <div style={{ fontSize: "13px", color: "#67767A" }}>
            Le prix exact est confirmé par {artisanNom} avant l&apos;intervention. Tu paies à la fin, une fois le travail validé.
          </div>
        </div>

        <button onClick={envoyer} disabled={enCours} style={btnStyle}>
          {enCours ? "Envoi..." : "Confirmer la demande"}
        </button>

        {message && <p style={{ marginTop: "14px", color: "#B5462F", fontWeight: 600 }}>{message}</p>}
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = { display: "block", fontWeight: 700, fontSize: "14px", marginBottom: "8px", marginTop: "12px", color: "#1A2A36" };
const inputStyle: React.CSSProperties = { width: "100%", padding: "13px", fontSize: "15px", borderRadius: "12px", border: "1.5px solid #E6EAE9", outline: "none", fontFamily: "system-ui, sans-serif" };
const btnStyle: React.CSSProperties = { width: "100%", padding: "15px", fontSize: "16px", fontWeight: 700, color: "#fff", background: "#0F6E72", border: "none", borderRadius: "12px", cursor: "pointer" };