import { getUtilisateur } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const metierLabels: Record<string, string> = {
  CLIMATISATION: "Climatisation",
  PLOMBERIE: "Plomberie",
  ELECTRICITE: "Électricité",
  ELECTROMENAGER: "Froid & Électroménager",
  PEINTURE: "Peinture & Carrelage",
};

const statutLabels: Record<string, string> = {
  EN_ATTENTE: "En attente",
  ACCEPTEE: "Acceptée",
  EN_COURS: "En cours",
  TERMINEE: "Terminée",
  PAYEE: "Payée",
  ANNULEE: "Annulée",
};

export default async function Pro() {
  const user = await getUtilisateur();

  // protection : artisan connecté uniquement
  if (!user) redirect("/connexion");
  if (user.role !== "ARTISAN") redirect("/compte");

  // on récupère le profil artisan de cet utilisateur
  const artisan = await prisma.artisan.findUnique({
    where: { userId: user.id },
  });

  if (!artisan) redirect("/compte");

  // ses demandes, les plus récentes d'abord
  const demandes = await prisma.demande.findMany({
    where: { artisanId: artisan.id },
    include: { client: true },
    orderBy: { createdAt: "desc" },
  });

  const enAttente = demandes.filter((d) => d.statut === "EN_ATTENTE");

  return (
    <main style={{ minHeight: "100vh", background: "#F6F7F5", fontFamily: "system-ui, sans-serif" }}>
      <header style={{ background: "#0F6E72", color: "#fff", padding: "20px 22px" }}>
        <p style={{ margin: 0, fontSize: "11px", letterSpacing: "0.1em", color: "#9FE0DE", fontWeight: 700 }}>
          ESPACE PRO
        </p>
        <h1 style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: 800 }}>
          Bonjour, {user.name}
        </h1>
        <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#cfeae8" }}>
          {enAttente.length} nouvelle{enAttente.length > 1 ? "s" : ""} demande{enAttente.length > 1 ? "s" : ""} en attente
        </p>
      </header>

      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h2 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "14px" }}>Mes demandes</h2>

        {demandes.length === 0 ? (
          <p style={{ color: "#67767A" }}>Aucune demande pour l&apos;instant.</p>
        ) : (
          demandes.map((d) => (
            <div
              key={d.id}
              style={{
                background: "#fff",
                border: "1px solid #E6EAE9",
                borderRadius: "16px",
                padding: "16px",
                marginBottom: "12px",
                borderLeft: d.statut === "EN_ATTENTE" ? "4px solid #F5A623" : "4px solid #E6EAE9",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontWeight: 700, fontSize: "15px" }}>{d.client.name}</span>
                <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "999px", background: "#DCEBEA", color: "#0A4D50" }}>
                  {statutLabels[d.statut]}
                </span>
              </div>
              <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#67767A" }}>
                {metierLabels[d.metier]} · {d.commune}
              </p>
              <p style={{ margin: 0, fontSize: "14px", color: "#1A2A36" }}>{d.description}</p>
              <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#67767A" }}>📍 {d.adresse}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}