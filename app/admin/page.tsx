import { getUtilisateur } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import LigneUtilisateur from "./LigneUtilisateur";
import CarteSignalement from "./CarteSignalement";

export default async function Admin() {
  const user = await getUtilisateur();

  if (!user) redirect("/connexion");
  if (user.role !== "ADMIN") redirect("/compte");

  const nbClients = await prisma.user.count({ where: { role: "CLIENT" } });
  const nbArtisans = await prisma.artisan.count();
  const nbArtisansVerifies = await prisma.artisan.count({ where: { verifie: true } });
  const nbDemandes = await prisma.demande.count();

  const stats = [
    { label: "Clients", valeur: nbClients },
    { label: "Artizens", valeur: nbArtisans },
    { label: "Vérifiés", valeur: nbArtisansVerifies },
    { label: "Demandes", valeur: nbDemandes },
  ];

  // signalements : nouveaux d'abord
  const signalements = await prisma.signalement.findMany({
    orderBy: [{ statut: "asc" }, { createdAt: "desc" }],
    include: {
      client: true,
      artisan: { include: { user: true } },
    },
  });
  const nbNouveaux = signalements.filter((s) => s.statut === "NOUVEAU").length;

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <header className="bg-[#0F6E72] text-white px-5 pt-5 pb-6 rounded-b-3xl">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] tracking-widest text-[#9FE0DE] font-bold">ADMINISTRATION</p>
          <h1 className="text-2xl font-extrabold mt-1">
            artizen<span className="text-[#F5A623]">.</span>
          </h1>

          <div className="grid grid-cols-4 gap-2 mt-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/15 rounded-2xl px-2 py-3 text-center">
                <div className="text-2xl font-extrabold">{s.valeur}</div>
                <div className="text-[10px] text-[#cfeae8] leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-5">
        {/* Signalements */}
        <h2 className="text-base font-bold text-[#1A2A36] mb-3.5">
          Signalements{nbNouveaux > 0 && (
            <span className="ml-2 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#B5462F] text-white align-middle">
              {nbNouveaux} nouveau{nbNouveaux > 1 ? "x" : ""}
            </span>
          )}
        </h2>

        {signalements.length === 0 ? (
          <div className="bg-white border border-[#E6EAE9] rounded-2xl p-6 text-center text-[#67767A] mb-8">
            Aucun signalement. Tout va bien.
          </div>
        ) : (
          <div className="mb-8">
            {signalements.map((s) => (
              <CarteSignalement
                key={s.id}
                signalement={{
                  id: s.id,
                  motif: s.motif,
                  description: s.description,
                  statut: s.statut,
                  clientNom: s.client.name,
                  artisanNom: s.artisan.user.name,
                  artisanUserId: s.artisan.userId,
                }}
              />
            ))}
          </div>
        )}

        {/* Utilisateurs */}
        <h2 className="text-base font-bold text-[#1A2A36] mb-3.5">
          Utilisateurs ({users.length})
        </h2>
        {users.map((u) => (
          <LigneUtilisateur
            key={u.id}
            user={{ id: u.id, name: u.name, phone: u.phone, role: u.role }}
          />
        ))}
      </div>
    </main>
  );
}