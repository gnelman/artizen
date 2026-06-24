import { prisma } from "@/lib/prisma";
import Link from "next/link";

const labels: Record<string, string> = {
  CLIMATISATION: "Climatisation",
  PLOMBERIE: "Plomberie",
  ELECTRICITE: "Électricité",
  ELECTROMENAGER: "Froid & Électroménager",
  PEINTURE: "Peinture & Carrelage",
};

export default async function ListeArtisans({
  params,
}: {
  params: Promise<{ metier: string }>;
}) {
  const { metier } = await params;
  const label = labels[metier] ?? metier;

  const artisans = await prisma.artisan.findMany({
    where: { verifie: true, metiers: { has: metier as never } },
    include: { user: true },
    orderBy: { note: "desc" },
  });

  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <header className="bg-white border-b border-[#E6EAE9] px-5 py-4 flex items-center gap-3 sticky top-0 z-10">
        <Link href="/" className="text-[#1A2A36] text-2xl font-bold leading-none">
          ←
        </Link>
        <h1 className="text-lg font-bold text-[#1A2A36]">{label}</h1>
      </header>

      <div className="max-w-xl mx-auto px-5 py-5">
        <p className="text-sm text-[#67767A] mb-4">
          {artisans.length} Artizen{artisans.length > 1 ? "s" : ""} vérifié
          {artisans.length > 1 ? "s" : ""} près de toi
        </p>

        {artisans.length === 0 ? (
          <p className="text-[#67767A]">
            Aucun artizen disponible pour ce métier pour l&apos;instant.
          </p>
        ) : (
          artisans.map((a) => (
            <Link
              key={a.id}
              href={`/artisan/${a.id}`}
              className="block bg-white border border-[#E6EAE9] rounded-2xl p-4 mb-3 transition-all hover:border-[#0F6E72] hover:shadow-md active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <div className="w-13 h-13 rounded-full bg-[#0F6E72] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {a.user.name.substring(0, 2).toUpperCase()}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-bold text-base text-[#1A2A36]">{a.user.name}</div>
                  <div className="text-sm text-[#67767A]">{a.commune}</div>
                  <div className="inline-flex items-center gap-1 mt-1.5 bg-[#0F6E72] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                    <span>✓</span> Artizen Vérifié
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-[#F5A623] text-sm font-bold">★ {a.note.toFixed(1)}</div>
                  <div className="text-[11px] text-[#67767A]">{a.nbAvis} avis</div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}