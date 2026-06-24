import { getUtilisateur } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deconnexion } from "@/lib/session";
import { redirect } from "next/navigation";
import CarteDemandeClient from "./CarteDemandeClient";

export default async function Compte() {
  const user = await getUtilisateur();

  if (!user) redirect("/connexion");

  // les demandes du client, avec l'artisan et l'avis éventuel
  const demandes = await prisma.demande.findMany({
    where: { clientId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      artisan: { include: { user: true } },
      avis: true,
    },
  });

  async function seDeconnecter() {
    "use server";
    await deconnexion();
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <header className="bg-[#0F6E72] text-white px-5 pt-5 pb-6 rounded-b-3xl">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-[11px] tracking-widest text-[#9FE0DE] font-bold">MON ESPACE</p>
            <h1 className="text-2xl font-extrabold mt-1">Bonjour, {user.name}</h1>
          </div>
          <Link
            href="/"
            className="bg-white/15 text-white text-sm font-bold px-4 py-2 rounded-xl"
          >
            + Demande
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-5">
        <h2 className="text-base font-bold text-[#1A2A36] mb-3.5">Mes demandes</h2>

        {demandes.length === 0 ? (
          <div className="bg-white border border-[#E6EAE9] rounded-2xl p-8 text-center">
            <p className="text-[#67767A] mb-4">Tu n&apos;as pas encore de demande.</p>
            <Link
              href="/"
              className="inline-block bg-[#0F6E72] text-white font-bold text-sm px-5 py-3 rounded-xl"
            >
              Trouver un Artizen
            </Link>
          </div>
        ) : (
          demandes.map((d) => (
            <CarteDemandeClient
              key={d.id}
              demande={{
                id: d.id,
                statut: d.statut,
                metier: d.metier,
                description: d.description,
                prixDevis: d.prixDevis,
                artisanNom: d.artisan?.user.name ?? "Artizen",
                dejaNote: d.avis !== null,
              }}
            />
          ))
        )}

        <form action={seDeconnecter} className="mt-6 text-center">
          <button type="submit" className="text-sm text-[#67767A] font-semibold">
            Se déconnecter
          </button>
        </form>
      </div>
    </main>
  );
}