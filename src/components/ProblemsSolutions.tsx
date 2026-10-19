import React from 'react';
import { Activity, Apple, Clock, HeartPulse, Check, X, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from './TopBar';

export const ProblemsSolutions: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E7E0D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#996e25] uppercase font-sans mb-2">
            <span>Prävention statt Ratlosigkeit</span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span>Konkrete Alltagshelfer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#10223D] tracking-tight leading-tight">
            Was dieses E-Book für Sie löst
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-sans">
            Viele Menschen ab 50 erhalten unklare Laborberichte oder widersprüchliche Ernährungstipps. „Herzgesundheit im Reifealter“ beseitigt die 4 größten Hürden im Alltag:
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Unklare Werte */}
          <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D3] space-y-4 hover:border-[#C5A059]/60 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D9CEBC] flex items-center justify-center text-[#10223D]">
              <Activity className="w-5 h-5 text-[#B88A3B]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#996e25] tracking-wider uppercase font-semibold">01. Labor & Diagnose</span>
              <h3 className="text-xl font-serif font-bold text-[#10223D] mt-1">Unklare Werte endlich verstehen</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sie verstehen Blutdruck, Cholesterin (LDL, HDL, Triglyceride) und Blutzucker verständlich aufbereitet. Sie wissen genau, welche Grenzwerte für Ihr Alter normal sind und wann gezieltes Handeln notwendig wird.
            </p>
            <div className="pt-2 text-xs font-medium text-[#10223D] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88A3B]" />
              Inklusive übersichtlicher Referenztabelle für Ihren nächsten Arztbesuch
            </div>
          </div>

          {/* Card 2: Unsicherheit bei der Ernährung */}
          <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D3] space-y-4 hover:border-[#C5A059]/60 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D9CEBC] flex items-center justify-center text-[#10223D]">
              <Apple className="w-5 h-5 text-[#B88A3B]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#996e25] tracking-wider uppercase font-semibold">02. Gefäßgesunde Ernährung</span>
              <h3 className="text-xl font-serif font-bold text-[#10223D] mt-1">Schluss mit den Ernährungszweifeln</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Keine radikalen Crash-Diäten. Sie lernen die bewährte mediterrane Ernährung, natürliche Omega-3-Quellen und genussvolle Alternativen zu schädlichem Tafelsalz kennen, die den Gefäßdruck sanft senken.
            </p>
            <div className="pt-2 text-xs font-medium text-[#10223D] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88A3B]" />
              Einfache Zutaten aus jedem gewöhnlichen Supermarkt
            </div>
          </div>

          {/* Card 3: Zeit- und Geldverlust */}
          <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D3] space-y-4 hover:border-[#C5A059]/60 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D9CEBC] flex items-center justify-center text-[#10223D]">
              <Clock className="w-5 h-5 text-[#B88A3B]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#996e25] tracking-wider uppercase font-semibold">03. Zeit- & Geldersparnis</span>
              <h3 className="text-xl font-serif font-bold text-[#10223D] mt-1">Gefährliche Mythen entlarven</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Vermeiden Sie kostspielige Fehlinvestitionen in nutzlose Wundermittel und decken Sie hartnäckige Fehlinformationen auf – wie den Mythos vom angeblich herzgesunden täglichen Glas Rotwein.
            </p>
            <div className="pt-2 text-xs font-medium text-[#10223D] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88A3B]" />
              Wissenschaftlicher Faktencheck nach aktuellem kardiologischem Stand
            </div>
          </div>

          {/* Card 4: Endergebnis */}
          <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D3] space-y-4 hover:border-[#C5A059]/60 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D9CEBC] flex items-center justify-center text-[#10223D]">
              <HeartPulse className="w-5 h-5 text-[#B88A3B]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#996e25] tracking-wider uppercase font-semibold">04. Ihr messbares Ergebnis</span>
              <h3 className="text-xl font-serif font-bold text-[#10223D] mt-1">Nachhaltiger Schutz im eigenen Tempo</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Nach der Lektüre wissen Sie genau, wie Sie Ihr Herz mit kleinen, praxiserprobten Gewohnheiten im Alltag schützen – ohne Stress, ohne Überforderung und mit spürbar mehr Lebensfreude.
            </p>
            <div className="pt-2 text-xs font-medium text-[#10223D] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88A3B]" />
              30 Seiten, die Sie an einem gemütlichen Nachmittag durchlesen
            </div>
          </div>

        </div>

        {/* Feature Spotlight: Mediterranean Diet Image Card */}
        <div className="rounded-3xl bg-[#FAF8F5] border border-[#E7E0D3] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-10 space-y-5 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#996e25] uppercase tracking-wider">
              <span>Wissenschaft & Genuss</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#10223D] leading-tight">
              Gefäßschutz auf dem Teller: Natürlich, einfach & köstlich
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Dr. Med. Elena V. Sommer zeigt Ihnen im Ernährungskapitel, wie hochwertige Fettsäuren aus nativem Olivenöl, Wildfisch, Nüssen und dunklen Beeren Gefäßentzündungen dämpfen und die arterielle Elastizität bewahren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#10223D] hover:bg-[#192e4f] text-white rounded-xl text-sm font-semibold transition-colors shadow-xs"
              >
                <span>E-Book für 27,14 € sichern</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 h-72 sm:h-80 lg:h-full relative min-h-[320px]">
            <img
              src="/src/assets/images/mediterranean_heart_diet_1792173925445.jpg"
              alt="Frische mediterrane Herzernährung mit Wildlachs, Olivenöl, Avocado und Nüssen"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none lg:hidden" />
          </div>
        </div>

      </div>
    </section>
  );
};
