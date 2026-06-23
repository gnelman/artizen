"use server";

import { cookies } from "next/headers";
import { prisma } from "./prisma";

// Dépose le cookie de session après une connexion réussie
export async function creerSession(userId: string) {
  const cookieStore = await cookies();
  cookieStore.set("artizen_session", userId, {
    httpOnly: true,                      // inaccessible au JavaScript du navigateur (sécurité)
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,           // 30 jours
    path: "/",
  });
}

// Récupère l'utilisateur actuellement connecté (ou null)
export async function getUtilisateur() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("artizen_session")?.value;

  if (!userId) return null;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user;
}

// Déconnexion : supprime le cookie
export async function deconnexion() {
  const cookieStore = await cookies();
  cookieStore.delete("artizen_session");
}