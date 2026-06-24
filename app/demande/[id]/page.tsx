import { prisma } from "@/lib/prisma";
import { getUtilisateur } from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import FormulaireDemande from "./FormulaireDemande";

export default async function Demande({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // il faut être connecté : sinon, direction la connexion
  const user = await getUtilisateur();
  if (!user) redirect("/connexion");

  const artisan = await prisma.artisan.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!artisan) notFound();

  return (
    <FormulaireDemande
      artisanId={artisan.id}
      artisanNom={artisan.user.name}
      metier={artisan.metiers[0]}
      commune={artisan.commune}
    />
  );
}