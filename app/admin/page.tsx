import { getUtilisateur } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Admin() {
  const user = await getUtilisateur();

  // protection : seul un admin connecté peut voir cette page
  if (!user) redirect("/connexion");
  if (user.role !== "ADMIN") redirect("/compte");

  // on compte les données de la base
  const nbClients = await prisma.user.count({ where: { role: "CLIENT" } });
  const nbArtisans = await prisma.artisan.count();
  const nbArtisansVerifies = await prisma.artisan.count({ where: { verifie: true } });
  const nbDemandes = await prisma.demande.count();

  const stats = [
    { label: "Clients inscrits", valeur: nbClients },
    { label: "Artizens", valeur: nbArtisans },
    { label: "Artizens vérifiés", valeur: nbArtisansVerifies },
    { label: "Demandes", valeur: nbDemandes },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#F6F7F5", fontFamily: "system-ui, sans-serif" }}>
      {/* en-tête */}
      <header style={{ background: "#0F6E72", color: "#fff", padding: "20px 24px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.1em", color: "#9FE0DE", fontWeight: 700 }}>
          ADMINISTRATION
        </p>
        <h1 style={{ margin: "4px 0 0", fontSize: "26px", fontWeight: 800 }}>
          artizen<span style={{ color: "#F5A623" }}>.</span>
        </h1>
      </header>

      <div style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#1A2A36", marginBottom: "16px" }}>
          Vue d&apos;ensemble
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "14px",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#fff",
                border: "1px solid #E6EAE9",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <p style={{ margin: 0, fontSize: "13px", color: "#67767A", fontWeight: 600 }}>{s.label}</p>
              <p style={{ margin: "6px 0 0", fontSize: "32px", fontWeight: 800, color: "#0F6E72" }}>
                {s.valeur}
              </p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "28px", color: "#67767A", fontSize: "14px" }}>
          Connecté en tant qu&apos;administrateur ({user.phone}).
        </p>
      </div>
    </main>
  );
}