import { getUtilisateur } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import CarteDemande from "./CarteDemande";

export default async function Pro() {
  const user = await getUtilisateur();

  if (!user) redirect("/connexion");
  if (user.role !== "ARTISAN") redirect("/compte");

  const artisan = await prisma.artisan.findUnique({
    where: { userId: user.id },
  });

  if (!artisan) redirect("/compte");

  const demandes = await prisma.demande.findMany({
    where: { artisanId: artisan.id },
    include: { client: true },
    orderBy: { createdAt: "desc" },
  });

  const enAttente = demandes.filter((d) => d.statut === "EN_ATTENTE");
  const terminees = demandes.filter((d) => d.statut === "TERMINEE" || d.statut === "PAYEE");

  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      {/* En-tête */}
      <header className="bg-[#0F6E72] text-white px-5 pt-5 pb-6 rounded-b-3xl">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] tracking-widest text-[#9FE0DE] font-bold">ESPACE PRO</p>
          <h1 className="text-2xl font-extrabold mt-1">Bonjour, {user.name}</h1>

          {/* Mini-stats */}
          <div className="flex gap-3 mt-4">
            <div className="flex-1 bg-white/15 rounded-2xl px-3 py-3 text-center">
              <div className="text-2xl font-extrabold">{enAttente.length}</div>
              <div className="text-[11px] text-[#cfeae8]">En attente</div>
            </div>
            <div className="flex-1 bg-white/15 rounded-2xl px-3 py-3 text-center">
              <div className="text-2xl font-extrabold">{demandes.length}</div>
              <div className="text-[11px] text-[#cfeae8]">Total demandes</div>
            </div>
            <div className="flex-1 bg-white/15 rounded-2xl px-3 py-3 text-center">
              <div className="text-2xl font-extrabold">{terminees.length}</div>
              <div className="text-[11px] text-[#cfeae8]">Terminées</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-5">
        <h2 className="text-base font-bold text-[#1A2A36] mb-3.5">Mes demandes</h2>

        {demandes.length === 0 ? (
          <div className="bg-white border border-[#E6EAE9] rounded-2xl p-8 text-center text-[#67767A]">
            Aucune demande pour l&apos;instant.
          </div>
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