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

// L'artisan accepte une demande
export async function accepterDemande(demandeId: string) {
  const user = await getUtilisateur();
  if (!user || user.role !== "ARTISAN") {
    return { ok: false, message: "Non autorisé." };
  }

  await prisma.demande.update({
    where: { id: demandeId },
    data: { statut: "ACCEPTEE" },
  });

  return { ok: true, message: "Demande acceptée" };
}

// L'artisan fixe son devis (prix) et passe la demande en cours
export async function fixerDevis(demandeId: string, prix: number) {
  const user = await getUtilisateur();
  if (!user || user.role !== "ARTISAN") {
    return { ok: false, message: "Non autorisé." };
  }

  if (!prix || prix <= 0) {
    return { ok: false, message: "Indique un prix valide." };
  }

  await prisma.demande.update({
    where: { id: demandeId },
    data: { prixDevis: prix, statut: "EN_COURS" },
  });

  return { ok: true, message: "Devis envoyé" };
}

// L'artisan marque le travail terminé
export async function terminerDemande(demandeId: string) {
  const user = await getUtilisateur();
  if (!user || user.role !== "ARTISAN") {
    return { ok: false, message: "Non autorisé." };
  }

  await prisma.demande.update({
    where: { id: demandeId },
    data: { statut: "TERMINEE" },
  });

  return { ok: true, message: "Travail terminé" };
}