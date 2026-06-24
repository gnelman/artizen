import Link from "next/link";

const metiers = [
  { cle: "CLIMATISATION",  label: "Climatisation" },
  { cle: "PLOMBERIE",      label: "Plomberie" },
  { cle: "ELECTRICITE",    label: "Électricité" },
  { cle: "ELECTROMENAGER", label: "Froid & Électroménager" },
  { cle: "PEINTURE",       label: "Peinture & Carrelage" },
];

export default function Accueil() {
  return (
    <main style={{ minHeight: "100vh", background: "#F6F7F5", fontFamily: "system-ui, sans-serif" }}>
      {/* En-tête */}
      <div style={{ background: "#0F6E72", color: "#fff", padding: "28px 22px 26px", borderRadius: "0 0 24px 24px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 800, margin: 0, letterSpacing: "-1px" }}>
          artizen<span style={{ color: "#F5A623" }}>.</span>
        </h1>
        <p style={{ fontSize: "20px", fontWeight: 700, margin: "10px 0 4px" }}>Réparé sans stress.</p>
        <p style={{ fontSize: "14px", color: "#cfeae8", margin: 0 }}>
          Un artisan vérifié chez toi, prix affiché, travail garanti.
        </p>
      </div>

      <div style={{ maxWidth: "520px", margin: "0 auto", padding: "22px" }}>
        {/* Bandeau de confiance */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "26px" }}>
          {["Artizens vérifiés", "Prix affichés", "Garantie Zen 30j"].map((t) => (
            <div key={t} style={{ flex: 1, background: "#DCEBEA", borderRadius: "12px", padding: "10px 6px", textAlign: "center" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#0A4D50" }}>{t}</span>
            </div>
          ))}
        </div>

        {/* Métiers */}
        <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#1A2A36", marginBottom: "14px" }}>
          Que veux-tu réparer ?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {metiers.map((m) => (
            <Link
              key={m.cle}
              href={`/artisans/${m.cle}`}
              style={{
                background: "#fff",
                border: "1px solid #E6EAE9",
                borderRadius: "16px",
                padding: "22px 16px",
                textDecoration: "none",
                color: "#1A2A36",
                fontWeight: 700,
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "90px",
              }}
            >
              {m.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}