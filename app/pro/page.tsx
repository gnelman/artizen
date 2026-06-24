import { getUtilisateur } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import CarteDemande from "./CarteDemande";

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
            <CarteDemande
              key={d.id}
              demande={{
                id: d.id,
                statut: d.statut,
                metier: d.metier,
                commune: d.commune,
                description: d.description,
                adresse: d.adresse,
                prixDevis: d.prixDevis,
                clientNom: d.client.name,
              }}
            />
          ))
        )}
      </div>
    </main>
  );
}