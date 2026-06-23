import { getUtilisateur } from "@/lib/session";
import Link from "next/link";

export default async function Compte() {
  const user = await getUtilisateur();

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
        textAlign: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "360px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#0F6E72", margin: "0 0 20px" }}>
          artizen<span style={{ color: "#F5A623" }}>.</span>
        </h1>

        {user ? (
          <div
            style={{
              background: "#fff",
              border: "1px solid #E6EAE9",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <p style={{ fontSize: "15px", color: "#67767A", margin: 0 }}>Tu es connecté 🎉</p>
            <p style={{ fontSize: "20px", fontWeight: 700, color: "#1A2A36", margin: "8px 0 4px" }}>
              {user.name}
            </p>
            <p style={{ fontSize: "15px", color: "#1A2A36", margin: 0 }}>{user.phone}</p>
            <p
              style={{
                display: "inline-block",
                marginTop: "14px",
                background: "#DCEBEA",
                color: "#0A4D50",
                fontWeight: 700,
                fontSize: "13px",
                padding: "5px 12px",
                borderRadius: "999px",
              }}
            >
              Rôle : {user.role}
            </p>
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              border: "1px solid #E6EAE9",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <p style={{ color: "#1A2A36", fontWeight: 600 }}>Tu n&apos;es pas connecté.</p>
            <Link
              href="/connexion"
              style={{
                display: "inline-block",
                marginTop: "12px",
                background: "#0F6E72",
                color: "#fff",
                fontWeight: 700,
                padding: "12px 20px",
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              Se connecter
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}