import { prisma } from "../lib/prisma";

// 5 artizens de test, un par métier
const artizens = [
  { name: "Konan B.",   phone: "0700000001", metier: "CLIMATISATION",  commune: "Cocody",  note: 4.9, nbAvis: 127, experience: 8 },
  { name: "Aya Y.",     phone: "0700000002", metier: "PLOMBERIE",      commune: "Marcory", note: 4.8, nbAvis: 94,  experience: 6 },
  { name: "Ibrahim M.", phone: "0700000003", metier: "ELECTRICITE",    commune: "Zone 4",  note: 5.0, nbAvis: 63,  experience: 10 },
  { name: "Adjoua K.",  phone: "0700000004", metier: "ELECTROMENAGER", commune: "Yopougon",note: 4.7, nbAvis: 41,  experience: 5 },
  { name: "Roland G.",  phone: "0700000005", metier: "PEINTURE",       commune: "Cocody",  note: 4.6, nbAvis: 38,  experience: 7 },
];

async function main() {
  console.log("🌱 Création des artizens de test...");

  for (const a of artizens) {
    // 1. on crée (ou retrouve) le compte utilisateur, avec le rôle ARTISAN
    const user = await prisma.user.upsert({
      where: { phone: a.phone },
      update: { role: "ARTISAN", name: a.name },
      create: { phone: a.phone, name: a.name, role: "ARTISAN" },
    });

    // 2. on crée (ou met à jour) son profil artizen, vérifié
    await prisma.artisan.upsert({
      where: { userId: user.id },
      update: {},
      create: {
        userId: user.id,
        metiers: [a.metier as any],
        commune: a.commune,
        verifie: true,
        note: a.note,
        nbAvis: a.nbAvis,
        experience: a.experience,
      },
    });

    console.log(`✅ ${a.name} — ${a.metier} (${a.commune})`);
  }

  console.log("🎉 Terminé !");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });