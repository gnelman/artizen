export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0F6E72",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "64px", fontWeight: 800, margin: 0, letterSpacing: "-2px" }}>
        artizen<span style={{ color: "#F5A623" }}>.</span>
      </h1>
      <p style={{ fontSize: "22px", fontWeight: 600, marginTop: "8px" }}>
        Réparé sans stress.
      </p>
      <p style={{ fontSize: "15px", color: "#cfeae8", marginTop: "16px", maxWidth: "320px" }}>
        Le réseau d&apos;artisans vérifiés d&apos;Abidjan. Bientôt disponible.
      </p>
    </main>
  );
}