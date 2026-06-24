import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

const tarifs = [
  { poste: "Déplacement + diagnostic", prix: "3 000 – 5 000 F" },
  { poste: "Entretien d'un split", prix: "10 000 – 25 000 F" },
  { poste: "Recharge de gaz", prix: "20 000 – 45 000 F" },
  { poste: "Dépannage", prix: "15 000 – 40 000 F" },
  { poste: "Installation (pose)", prix: "25 000 – 60 000 F" },
];

const avis = [
  { nom: "Sandra F.", texte: "Ponctuel, propre, et le prix annoncé était le prix final. Mon split refroidit comme au premier jour." },
  { nom: "Yao T.", texte: "Il a tout expliqué avant de toucher. Pas de recharge gaz forcée. Du sérieux." },
];

export default async function ProfilArtisan({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const artisan = await prisma.artisan.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!artisan) notFound();

  return (
    <main className="min-h-screen bg-[#F6F7F5] pb-24">
      {/* En-tête teal */}
      <header className="bg-[#0F6E72] text-white px-5 pt-4 pb-6">
        <Link href="/" className="text-white text-2xl font-bold leading-none">←</Link>
        <div className="flex items-center gap-4 mt-3.5">
          <div className="w-18 h-18 rounded-full bg-white text-[#0F6E72] flex items-center justify-center font-extrabold text-2xl shrink-0">
            {artisan.user.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">{artisan.user.name}</h1>
            <p className="text-sm text-[#cfeae8] mt-0.5 mb-2">{artisan.commune}</p>
            <span className="inline-flex items-center gap-1 bg-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
              <span>✓</span> Artizen Vérifié
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-5 py-5">
        {/* Stats */}
        <div className="flex bg-white border border-[#E6EAE9] rounded-2xl overflow-hidden mb-4">
          <div className="flex-1 text-center py-3.5 border-r border-[#E6EAE9]">
            <div className="font-extrabold text-lg text-[#1A2A36]">{artisan.note.toFixed(1)} ★</div>
            <div className="text-[11px] text-[#67767A]">{artisan.nbAvis} avis</div>
          </div>
          <div className="flex-1 text-center py-3.5">
            <div className="font-extrabold text-lg text-[#1A2A36]">{artisan.experience} ans</div>
            <div className="text-[11px] text-[#67767A]">d&apos;expérience</div>
          </div>
        </div>

        {/* Garantie Zen */}
        <div className="bg-[#DCEBEA] rounded-2xl px-4 py-3.5 mb-5">
          <div className="font-bold text-sm text-[#0A4D50]">Garantie Zen — 30 jours</div>
          <div className="text-xs text-[#0A4D50]/85 mt-0.5">
            Si la panne revient sous 30 jours, il revient gratuitement.
          </div>
        </div>

        {/* Tarifs */}
        <h2 className="text-base font-bold text-[#1A2A36] mb-2">Ses tarifs</h2>
        <div className="bg-white border border-[#E6EAE9] rounded-2xl px-4 mb-5">
          {tarifs.map((t, i) => (
            <div
              key={t.poste}
              className={`flex justify-between py-3 text-sm ${i < tarifs.length - 1 ? "border-b border-[#F0F3F2]" : ""}`}
            >
              <span className="text-[#1A2A36]">{t.poste}</span>
              <span className="font-bold text-[#0F6E72]">{t.prix}</span>
            </div>
          ))}
        </div>

        {/* Avis */}
        <h2 className="text-base font-bold text-[#1A2A36] mb-2">Ce que disent les clients</h2>
        <div className="space-y-3 mb-2">
          {avis.map((a) => (
            <div key={a.nom} className="bg-white border border-[#E6EAE9] rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-full bg-[#0F6E72] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {a.nom.substring(0, 2).toUpperCase()}
                </div>
                <span className="font-bold text-sm text-[#1A2A36]">{a.nom}</span>
                <span className="text-[#F5A623] text-sm ml-auto">★★★★★</span>
              </div>
              <p className="text-sm text-[#36454d]">{a.texte}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bouton fixe en bas */}
      <div className="fixed bottom-0 inset-x-0 bg-[#F6F7F5]/95 backdrop-blur border-t border-[#E6EAE9] px-5 py-3">
        <div className="max-w-xl mx-auto">
          <Link
            href={`/demande/${artisan.id}`}
            className="block text-center bg-[#F5A623] text-[#3a2a08] font-bold text-base py-4 rounded-2xl active:scale-[0.99] transition-transform"
          >
            Demander {artisan.user.name}
          </Link>
        </div>
      </div>
    </main>
  );
}