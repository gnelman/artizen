"use server";

import { prisma } from "./prisma";
import { getUtilisateur } from "./session";

// Transforme un utilisateur (client) en Artizen vérifié
export async function validerArtisan(data: {
  userId: string;
  nom: string;
  metier: string;
  commune: string;
  experience: number;
}) {
  // sécurité : seul un admin peut faire ça
  const admin = await getUtilisateur();
  if (!admin || admin.role !== "ADMIN") {
    return { ok: false, message: "Non autorisé." };
  }

  if (!data.commune.trim()) {
    return { ok: false, message: "Indique la commune." };
  }

  // 1. on passe le compte en rôle ARTISAN et on enregistre son vrai nom
  await prisma.user.update({
    where: { id: data.userId },
    data: { role: "ARTISAN", name: data.nom.trim() || "Artizen" },
  });

  // 2. on crée (ou met à jour) son profil artisan, vérifié
  await prisma.artisan.upsert({
    where: { userId: data.userId },
    update: {
      metiers: [data.metier as never],
      commune: data.commune.trim(),
      experience: data.experience,
      verifie: true,
    },
    create: {
      userId: data.userId,
      metiers: [data.metier as never],
      commune: data.commune.trim(),
      experience: data.experience,
      verifie: true,
    },
  });

  return { ok: true, message: "Artizen validé et vérifié" };
}

// Retire le statut artisan (repasse en client)
export async function retirerArtisan(userId: string) {
  const admin = await getUtilisateur();
  if (!admin || admin.role !== "ADMIN") {
    return { ok: false, message: "Non autorisé." };
  }

  await prisma.user.update({
    where: { id: userId },
    data: { role: "CLIENT" },
  });

  return { ok: true, message: "Statut artisan retiré" };
}

// Marque un signalement comme traité
export async function traiterSignalement(signalementId: string) {
  const admin = await getUtilisateur();
  if (!admin || admin.role !== "ADMIN") {
    return { ok: false, message: "Non autorisé." };
  }

  await prisma.signalement.update({
    where: { id: signalementId },
    data: { statut: "TRAITE" },
  });

  return { ok: true, message: "Signalement traité" };
}