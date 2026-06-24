import Link from "next/link";
import { Snowflake, Droplet, Zap, Refrigerator, PaintRoller } from "lucide-react";

const metiers = [
  { cle: "CLIMATISATION", label: "Climatisation", Icone: Snowflake },
  { cle: "PLOMBERIE", label: "Plomberie", Icone: Droplet },
  { cle: "ELECTRICITE", label: "Électricité", Icone: Zap },
  { cle: "ELECTROMENAGER", label: "Froid & Électroménager", Icone: Refrigerator },
  { cle: "PEINTURE", label: "Peinture & Carrelage", Icone: PaintRoller },
];

const confiance = ["Artizens vérifiés", "Prix affichés", "Garantie Zen 30j"];

export default function Accueil() {
  return (
    <main className="min-h-screen bg-[#F6F7F5]">
      <header className="bg-[#0F6E72] text-white px-6 pt-8 pb-7 rounded-b-3xl">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight">
            artizen<span className="text-[#F5A623]">.</span>
          </h1>
          <p className="text-xl font-bold mt-3">Réparé sans stress.</p>
          <p className="text-sm text-[#cfeae8] mt-1">
            Un artisan vérifié chez toi, prix affiché, travail garanti.
          </p>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-5 py-6">
        <div className="flex gap-2 mb-7">
          {confiance.map((t) => (
            <div key={t} className="flex-1 bg-[#DCEBEA] rounded-xl py-2.5 px-1.5 text-center">
              <span className="text-xs font-bold text-[#0A4D50] leading-tight">{t}</span>
            </div>
          ))}
        </div>

        <h2 className="text-base font-bold text-[#1A2A36] mb-3.5">
          Que veux-tu réparer&nbsp;?
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {metiers.map((m) => {
            const Icone = m.Icone;
            return (
              <Link
                key={m.cle}
                href={`/artisans/${m.cle}`}
                className="bg-white border border-[#E6EAE9] rounded-2xl p-5 flex flex-col items-center justify-center text-center min-h-[110px] transition-all hover:border-[#0F6E72] hover:shadow-md active:scale-[0.98]"
              >
                <span className="w-12 h-12 rounded-xl bg-[#DCEBEA] flex items-center justify-center mb-2.5">
                  <Icone className="w-6 h-6 text-[#0F6E72]" strokeWidth={2} />
                </span>
                <span className="text-sm font-bold text-[#1A2A36] leading-tight">
                  {m.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link href="/connexion" className="text-sm font-semibold text-[#0F6E72]">
            Se connecter →
          </Link>
        </div>
      </div>
    </main>
  );
}