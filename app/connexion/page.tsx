"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { envoyerCode, verifierCode } from "@/lib/auth";

export default function Connexion() {
    const router = useRouter();
  const [etape, setEtape] = useState<"numero" | "code">("numero");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [enCours, setEnCours] = useState(false);

  async function demanderCode() {
    setEnCours(true);
    setMessage("");
    const res = await envoyerCode(phone);
    setEnCours(false);
    if (res.ok) {
      setEtape("code");
      setMessage("");
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
      // redirection selon le rôle
      if (res.role === "ADMIN") {
        router.push("/admin");
      } else if (res.role === "ARTISAN") {
        router.push("/pro");
      } else {
        router.push("/compte");
      }
    } else {
      setMessage(res.message);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#F6F7F5",
        fontFamily: "system-ui, sans-serif",
        padding: "24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "360px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: 800, color: "#0F6E72", margin: 0, letterSpacing: "-1px" }}>
          artizen<span style={{ color: "#F5A623" }}>.</span>
        </h1>

        {etape === "numero" ? (
          <>
            <p style={{ color: "#1A2A36", fontWeight: 600, marginTop: "8px", marginBottom: "28px" }}>
              Connecte-toi pour continuer
            </p>
            <label style={{ display: "block", fontWeight: 700, fontSize: "14px", marginBottom: "8px", color: "#1A2A36" }}>
              Ton numéro de téléphone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ex : 0707070707"
              style={inputStyle}
            />
            <button onClick={demanderCode} disabled={enCours} style={btnStyle}>
              {enCours ? "Envoi..." : "Recevoir mon code"}
            </button>
          </>
        ) : (
          <>
            <p style={{ color: "#1A2A36", fontWeight: 600, marginTop: "8px", marginBottom: "28px" }}>
              Entre le code reçu au {phone}
            </p>
            <label style={{ display: "block", fontWeight: 700, fontSize: "14px", marginBottom: "8px", color: "#1A2A36" }}>
              Code à 6 chiffres
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="______"
              maxLength={6}
              style={{ ...inputStyle, letterSpacing: "8px", textAlign: "center", fontSize: "22px", fontWeight: 700 }}
            />
            <button onClick={validerCode} disabled={enCours} style={btnStyle}>
              {enCours ? "Vérification..." : "Valider"}
            </button>
            <button
              onClick={() => { setEtape("numero"); setCode(""); setMessage(""); }}
              style={{ ...btnStyle, background: "transparent", color: "#0F6E72", marginTop: "8px" }}
            >
              ← Changer de numéro
            </button>
          </>
        )}

        {message && (
          <p style={{ marginTop: "16px", color: "#0F6E72", fontWeight: 600 }}>{message}</p>
        )}
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  fontSize: "16px",
  borderRadius: "12px",
  border: "1.5px solid #E6EAE9",
  outline: "none",
  marginBottom: "16px",
};

const btnStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px",
  fontSize: "16px",
  fontWeight: 700,
  color: "#fff",
  background: "#0F6E72",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
};