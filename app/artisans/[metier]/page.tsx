import { prisma } from "@/lib/prisma";
import Link from "next/link";

const labels: Record<string, string> = {
  CLIMATISATION: "Climatisation",
  PLOMBERIE: "Plomberie",
  ELECTRICITE: "Électricité",
  ELECTROMENAGER: "Froid & Électroménager",
  PEINTURE: "Peinture & Carrelage",
};

export default async function ListeArtisans({
  params,
}: {
  params: Promise<{ metier: string }>;
}) {
  const { metier } = await params;
  const label = labels[metier] ?? metier;

  // on récupère les artizens vérifiés qui ont ce métier
  const artisans = await prisma.artisan.findMany({
    where: {
      verifie: true,
      metiers: { has: metier as any },
    },
    include: { user: true },
    orderBy: { note: "desc" },
  });

  return (
    <main style={{ minHeight: "100vh", background: "#F6F7F5", fontFamily: "system-ui, sans-serif" }}>
      {/* En-tête */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E6EAE9", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#1A2A36", fontSize: "22px", fontWeight: 700 }}>←</Link>
        <h1 style={{ fontSize: "18px", fontWeight: 700, margin: 0, color: "#1A2A36" }}>{label}</h1>
      </div>

      <div style={{ maxWidth: "520px", margin: "0 auto", padding: "18px" }}>
        <p style={{ fontSize: "13px", color: "#67767A", marginBottom: "14px" }}>
          {artisans.length} Artizen{artisans.length > 1 ? "s" : ""} vérifié{artisans.length > 1 ? "s" : ""} près de toi
        </p>

        {artisans.length === 0 ? (
          <p style={{ color: "#67767A" }}>Aucun artizen disponible pour ce métier pour l&apos;instant.</p>
        ) : (
          artisans.map((a) => (
            <Link
              key={a.id}
              href={`/artisan/${a.id}`}
              style={{
                display: "block",
                background: "#fff",
                border: "1px solid #E6EAE9",
                borderRadius: "16px",
                padding: "14px",
                marginBottom: "12px",
                textDecoration: "none",
                color: "#1A2A36",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#0F6E72", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "17px", flex: "none" }}>
                  {a.user.name.substring(0, 2).toUpperCase()}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "16px" }}>{a.user.name}</div>
                  <div style={{ fontSize: "13px", color: "#67767A" }}>{a.commune}</div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "5px", background: "#0F6E72", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "3px 8px", borderRadius: "999px" }}>
                    ✓ Artizen Vérifié
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "#F5A623", fontSize: "14px" }}>★ {a.note.toFixed(1)}</div>
                  <div style={{ fontSize: "11px", color: "#67767A" }}>{a.nbAvis} avis</div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}