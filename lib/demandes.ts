"use server";

import { prisma } from "./prisma";
import { getUtilisateur } from "./session";

export async function creerDemande(data: {
  artisanId: string;
  metier: string;
  description: string;
  commune: string;
  adresse: string;
}) {
  // il faut être connecté pour faire une demande
  const user = await getUtilisateur();
  if (!user) {
    return { ok: false, message: "Tu dois être connecté pour faire une demande." };
  }

  if (!data.description.trim() || !data.adresse.trim()) {
    return { ok: false, message: "Décris ton souci et indique ton adresse." };
  }

  const demande = await prisma.demande.create({
    data: {
      metier: data.metier as any,
      description: data.description.trim(),
      commune: data.commune.trim(),
      adresse: data.adresse.trim(),
      clientId: user.id,
      artisanId: data.artisanId,
      statut: "EN_ATTENTE",
    },
  });

  return { ok: true, message: "Demande envoyée", demandeId: demande.id };
}