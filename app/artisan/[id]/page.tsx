import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

const tarifs = [
  { poste: "Déplacement + diagnostic", prix: "3 000 – 5 000 F" },
  { poste: "Entretien d'un split", prix: "10 000 – 25 000 F" },
  { poste: "Recharge de gaz", prix: "20 000 – 45 000 F" },
  { poste: "Dépannage", prix: "15 000 – 40 000 F" },
  { poste: "Installation (pose)", prix: "25 000 – 60 000 F" },
];

export default async function ProfilArtisan({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const artisan = await prisma.artisan.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!artisan) notFound();

  return (
    <main style={{ minHeight: "100vh", background: "#F6F7F5", fontFamily: "system-ui, sans-serif" }}>
      {/* En-tête teal */}
      <div style={{ background: "#0F6E72", color: "#fff", padding: "16px 20px 26px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#fff", fontSize: "22px", fontWeight: 700 }}>←</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "14px" }}>
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#fff", color: "#0F6E72", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "26px", flex: "none" }}>
            {artisan.user.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 style={{ fontSize: "22px", fontWeight: 800, margin: 0 }}>{artisan.user.name}</h1>
            <p style={{ fontSize: "13px", color: "#cfeae8", margin: "2px 0 8px" }}>{artisan.commune}</p>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(255,255,255,0.18)", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "4px 9px", borderRadius: "999px" }}>
              ✓ Artizen Vérifié
            </span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "520px", margin: "0 auto", padding: "18px" }}>
        {/* Stats */}
        <div style={{ display: "flex", background: "#fff", border: "1px solid #E6EAE9", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
          <div style={{ flex: 1, textAlign: "center", padding: "14px 4px", borderRight: "1px solid #E6EAE9" }}>
            <div style={{ fontWeight: 800, fontSize: "17px" }}>{artisan.note.toFixed(1)} ★</div>
            <div style={{ fontSize: "11px", color: "#67767A" }}>{artisan.nbAvis} avis</div>
          </div>
          <div style={{ flex: 1, textAlign: "center", padding: "14px 4px" }}>
            <div style={{ fontWeight: 800, fontSize: "17px" }}>{artisan.experience} ans</div>
            <div style={{ fontSize: "11px", color: "#67767A" }}>d&apos;expérience</div>
          </div>
        </div>

        {/* Garantie Zen */}
        <div style={{ background: "#DCEBEA", borderRadius: "14px", padding: "13px 14px", marginBottom: "18px" }}>
          <div style={{ fontWeight: 700, fontSize: "13px", color: "#0A4D50" }}>Garantie Zen — 30 jours</div>
          <div style={{ fontSize: "12px", color: "#0A4D50", opacity: 0.85, marginTop: "2px" }}>
            Si la panne revient sous 30 jours, il revient gratuitement.
          </div>
        </div>

        {/* Tarifs */}
        <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>Ses tarifs</h2>
        <div style={{ background: "#fff", border: "1px solid #E6EAE9", borderRadius: "16px", padding: "4px 16px", marginBottom: "18px" }}>
          {tarifs.map((t, i) => (
            <div key={t.poste} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: i < tarifs.length - 1 ? "1px solid #F0F3F2" : "none", fontSize: "14px" }}>
              <span>{t.poste}</span>
              <span style={{ fontWeight: 700, color: "#0F6E72" }}>{t.prix}</span>
            </div>
          ))}
        </div>

        {/* Bouton demander */}
        <Link
          href={`/demande/${artisan.id}`}
          style={{ display: "block", textAlign: "center", background: "#F5A623", color: "#3a2a08", fontWeight: 700, fontSize: "16px", padding: "15px", borderRadius: "14px", textDecoration: "none" }}
        >
          Demander {artisan.user.name}
        </Link>
      </div>
    </main>
  );
}