"use server";

import { prisma } from "./prisma";
import { creerSession } from "./session";

// Génère un code à 6 chiffres, le range en base, et (pour l'instant) le renvoie
export async function envoyerCode(phone: string) {
  const numero = phone.trim();

  if (numero.length < 8) {
    return { ok: false, message: "Numéro invalide" };
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  await prisma.codeVerif.create({
    data: { phone: numero, code, expiresAt },
  });

  console.log(`📲 Code de vérification pour ${numero} : ${code}`);

  return { ok: true, message: "Code envoyé" };
}

// Vérifie le code saisi et connecte l'utilisateur (le crée s'il n'existe pas)
export async function verifierCode(phone: string, code: string) {
  const numero = phone.trim();

  // cherche le dernier code généré pour ce numéro
  const dernierCode = await prisma.codeVerif.findFirst({
    where: { phone: numero },
    orderBy: { createdAt: "desc" },
  });

  if (!dernierCode) {
    return { ok: false, message: "Aucun code demandé pour ce numéro" };
  }

  if (dernierCode.expiresAt < new Date()) {
    return { ok: false, message: "Code expiré, redemande un code" };
  }

  if (dernierCode.code !== code.trim()) {
    return { ok: false, message: "Code incorrect" };
  }

  // code bon : on récupère l'utilisateur, ou on le crée si c'est sa première fois
  let user = await prisma.user.findUnique({ where: { phone: numero } });

  if (!user) {
    user = await prisma.user.create({
      data: { phone: numero, name: "Nouveau client" },
    });
  }

  // on nettoie les codes utilisés pour ce numéro
  await prisma.codeVerif.deleteMany({ where: { phone: numero } });
  await creerSession(user.id);
  return { ok: true, message: "Connecté", userId: user.id, role: user.role };
}