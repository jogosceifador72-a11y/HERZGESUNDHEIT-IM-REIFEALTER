import React from 'react';
import { Check, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL } from './TopBar';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E7E0D3]" id="fuer-wen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#996e25] uppercase font-sans mb-2">
            <span>Ehrliche Orientierung</span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span>Zielgruppen-Fokus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#10223D] tracking-tight">
            Für wen ist dieser Leitfaden gedacht?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
            Wir möchten sicherstellen, dass dieses E-Book Ihnen den größtmöglichen praktischen Nutzen bringt. Bitte prüfen Sie, ob diese Punkte auf Sie zutreffen:
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Column 1: Für Sie (Positiv) */}
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border-2 border-[#B88A3B]/40 shadow-xs space-y-6 text-left relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Perfekt geeignet</span>
                <h3 className="text-xl font-serif font-bold text-[#10223D]">Es ist für Sie, wenn Sie:</h3>
              </div>
            </div>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  Ihr Herz schützen möchten, ganz ohne Komplikationen.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  Ab 50 sind und klare Orientierung für Blutdruck, Ernährung & Vorsorge brauchen.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  Eine praxisnahe Methode suchen, die Sie sofort in Ihrem eigenen Tempo umsetzen können.
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#E7E0D3]">
              <p className="text-xs text-slate-600 italic">
                „Sie sparen wertvolle Lebenszeit und gewinnen die beruhigende Gewissheit, das Richtige für Ihre Gefäße zu tun.“
              </p>
            </div>
          </div>

          {/* Column 2: Nicht für Sie (Ausschluss) */}
          <div className="p-8 rounded-2xl bg-[#F9F7F4] border border-[#E7E0D3] shadow-xs space-y-6 text-left relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 border border-slate-300">
                <X className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Bitte beachten</span>
                <h3 className="text-xl font-serif font-bold text-slate-700">Es ist NICHT für Sie, wenn Sie:</h3>
              </div>
            </div>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[2]" />
                </div>
                <span className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Wunderergebnisse über Nacht erwarten, ohne selbst im Alltag aktiv zu werden.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[2]" />
                </div>
                <span className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Lange, rein theoretische oder akademische Texte einem kompakten, direkten Leitfaden vorziehen.
                </span>
              </li>
            </ul>

            <div className="pt-8 border-t border-[#E7E0D3]">
              <p className="text-xs text-slate-500">
                Dieses Buch setzt auf machbare, tägliche Gewohnheiten statt auf leere Heilsversprechen.
              </p>
            </div>
          </div>

        </div>

        {/* Small Call to Action under qualification */}
        <div className="mt-12 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#10223D] hover:bg-[#192e4f] text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg"
          >
            <span>Trifft auf Sie zu? Jetzt E-Book für 27,14 € sichern</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
