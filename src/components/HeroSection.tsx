import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Download, Sparkles } from 'lucide-react';
import { BookMockup } from './BookMockup';
import { CHECKOUT_URL } from './TopBar';

interface HeroSectionProps {
  onOpenPreview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPreview }) => {
  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden" id="ueber-das-buch">
      {/* Subtle organic background gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#10223D]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clean Unboxed Metadata Kicker (Anti-slop zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#996e25] uppercase font-sans">
              <span>Dr. Med. Elena V. Sommer</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span>Präventivmedizin für Herz & Gefäße</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span>Ab 50 Jahren</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#10223D] tracking-tight leading-[1.15] text-balance">
              Schützen Sie Ihr Herz mit einfachen Schritten und bleiben Sie bis ins hohe Alter aktiv & vital.
            </h1>

            {/* Subheadline / Intro */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-sans">
              Das E-Book <strong className="font-semibold text-[#10223D]">„Herzgesundheit im Reifealter“</strong> ist Ihr kompakter, praktischer 30-Seiten-PDF-Leitfaden. Ohne lange Theorie und ohne Umschweife: Konkrete Schritte, mit denen Sie Blutdruck, Cholesterin und Gefäße in Ihrem eigenen Tempo schützen.
            </p>

            {/* Key Outcomes / Bullet checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B88A3B] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-700">
                  <strong className="text-[#10223D] font-semibold">Unklare Werte verstehen:</strong> Blutdruck, Cholesterin (LDL/HDL) und Blutzucker sicher einordnen.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B88A3B] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-700">
                  <strong className="text-[#10223D] font-semibold">Ernährung ohne Zweifel:</strong> Mediterraner Gefäßschutz, Omega-3-Quellen und wirkungsvolle Salzalternativen.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B88A3B] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-700">
                  <strong className="text-[#10223D] font-semibold">Mythen entlarvt:</strong> Vermeiden Sie Zeit- und Geldverlust durch falsche Ratschläge wie das angebliche „gesunde Glas Rotwein“.
                </p>
              </div>
            </div>

            {/* Pricing Box & CTA */}
            <div className="pt-4 border-t border-[#E7E0D3] space-y-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#10223D] tabular-nums">
                  27,14 €
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Einmalige Zahlung · Keine Abofalle · Inkl. gesetzl. MwSt.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#10223D] hover:bg-[#192e4f] text-white rounded-xl text-base font-semibold shadow-md hover:shadow-xl transition-all duration-200 group whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#D4B26F]" />
                  <span>Jetzt E-Book sichern – 27,14 €</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={onOpenPreview}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-[#F8F5EE] text-[#10223D] border border-[#D9CEBC] rounded-xl text-sm font-semibold transition-colors shadow-xs"
                >
                  <span>Leseprobe ansehen</span>
                </button>
              </div>

              {/* Instant Delivery Notice */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sofortiger digitaler PDF-Download direkt per E-Mail nach Zahlungsbestätigung.</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Book Cover Presentation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <BookMockup onOpenPreview={onOpenPreview} />
          </div>

        </div>
      </div>
    </section>
  );
};
