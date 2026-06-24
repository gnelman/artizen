"use server";

import { prisma } from "./prisma";
import { getUtilisateur } from "./session";

// Le client confirme que le travail est bien terminé
export async function confirmerDemande(demandeId: string) {
  const user = await getUtilisateur();
  if (!user) return { ok: false, message: "Non connecté." };

  const demande = await prisma.demande.findUnique({ where: { id: demandeId } });
  if (!demande || demande.clientId !== user.id) {
    return { ok: false, message: "Demande introuvable." };
  }

  await prisma.demande.update({
    where: { id: demandeId },
    data: { statut: "CONFIRMEE" },
  });

  return { ok: true, message: "Travail confirmé" };
}

// Le client note l'artisan (1 à 5 + commentaire)
export async function noterArtisan(data: {
  demandeId: string;
  note: number;
  commentaire: string;
}) {
  const user = await getUtilisateur();
  if (!user) return { ok: false, message: "Non connecté." };

  const demande = await prisma.demande.findUnique({ where: { id: data.demandeId } });
  if (!demande || demande.clientId !== user.id || !demande.artisanId) {
    return { ok: false, message: "Demande introuvable." };
  }

  if (data.note < 1 || data.note > 5) {
    return { ok: false, message: "Note invalide." };
  }

  // un seul avis par demande
  const dejaNote = await prisma.avis.findUnique({ where: { demandeId: data.demandeId } });
  if (dejaNote) {
    return { ok: false, message: "Tu as déjà noté cette intervention." };
  }

  // on crée l'avis
  await prisma.avis.create({
    data: {
      note: data.note,
      commentaire: data.commentaire.trim(),
      demandeId: data.demandeId,
      artisanId: demande.artisanId,
      clientId: user.id,
    },
  });

  // on recalcule la vraie moyenne de l'artisan
  const tousLesAvis = await prisma.avis.findMany({
    where: { artisanId: demande.artisanId },
  });
  const total = tousLesAvis.reduce((somme, a) => somme + a.note, 0);
  const moyenne = total / tousLesAvis.length;

  await prisma.artisan.update({
    where: { id: demande.artisanId },
    data: {
      note: Math.round(moyenne * 10) / 10, // arrondi à 1 décimale
      nbAvis: tousLesAvis.length,
    },
  });

  return { ok: true, message: "Merci pour ton avis" };
}

// Le client signale un artisan
export async function signalerArtisan(data: {
  demandeId: string;
  motif: string;
  description: string;
}) {
  const user = await getUtilisateur();
  if (!user) return { ok: false, message: "Non connecté." };

  const demande = await prisma.demande.findUnique({ where: { id: data.demandeId } });
  if (!demande || demande.clientId !== user.id || !demande.artisanId) {
    return { ok: false, message: "Demande introuvable." };
  }

  await prisma.signalement.create({
    data: {
      motif: data.motif as never,
      description: data.description.trim(),
      demandeId: data.demandeId,
      artisanId: demande.artisanId,
      clientId: user.id,
    },
  });

  return { ok: true, message: "Signalement envoyé. Notre équipe va vérifier." };
}