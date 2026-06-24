"use server";

import { prisma } from "./prisma";
import { creerSession } from "./session";

// Génère un code à 6 chiffres, le range en base
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

// Vérifie le code, connecte l'utilisateur, signale si c'est un nouveau compte
export async function verifierCode(phone: string, code: string) {
  const numero = phone.trim();

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

  // le code est bon : compte existant ou nouveau ?
  let user = await prisma.user.findUnique({ where: { phone: numero } });
  let nouveau = false;

  if (!user) {
    user = await prisma.user.create({
      data: { phone: numero, name: "Nouveau client" },
    });
    nouveau = true;
  }

  // on nettoie les codes utilisés
  await prisma.codeVerif.deleteMany({ where: { phone: numero } });

  await creerSession(user.id);

  return {
    ok: true,
    message: "Connecté",
    userId: user.id,
    role: user.role,
    nouveau, // true si le compte vient d'être créé
  };
}

// Enregistre le nom d'un nouvel utilisateur
export async function enregistrerNom(phone: string, nom: string) {
  const numero = phone.trim();

  if (!nom.trim()) {
    return { ok: false, message: "Indique ton nom" };
  }

  await prisma.user.update({
    where: { phone: numero },
    data: { name: nom.trim() },
  });

  return { ok: true, message: "Nom enregistré" };
}