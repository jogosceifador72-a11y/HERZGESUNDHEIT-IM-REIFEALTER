import React from 'react';
import { ArrowRight, Check, ShieldCheck, Mail, Smartphone, Download, Lock } from 'lucide-react';
import { CHECKOUT_URL } from './TopBar';

export const PricingCta: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden" id="bestellen">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-radial from-[#C5A059]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-left">
        
        {/* Main Offer Card */}
        <div className="rounded-3xl bg-white border-2 border-[#B88A3B]/40 shadow-xl overflow-hidden">
          
          {/* Card Header Strip */}
          <div className="bg-[#10223D] px-6 sm:px-10 py-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#D4B26F] uppercase">
                Digitaler PDF-Leitfaden · Sofortzugang
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-0.5">
                HERZGESUNDHEIT IM REIFEALTER
              </h2>
            </div>
            <div className="sm:text-right shrink-0">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4B26F] tabular-nums">
                27,14 €
              </span>
              <span className="block text-[11px] text-slate-300">
                Einmalzahlung · Keine Folgekosten
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-10 space-y-8">
            <p className="text-base text-slate-700 leading-relaxed font-sans">
              Investieren Sie in die Langlebigkeit und Vitalität Ihrer Gefäße. Auf 30 prägnanten Seiten erhalten Sie das klare Rüstzeug, um Blutdruck, Ernährung und Bewegung bis ins hohe Alter aktiv zu steuern.
            </p>

            {/* Inclusions List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm text-slate-700">
                  <strong className="text-[#10223D] font-semibold">30 Seiten kompakter PDF-Leitfaden</strong> ohne theoretischen Ballast
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm text-slate-700">
                  <strong className="text-[#10223D] font-semibold">Sofortiger digitaler Zugang:</strong> Direkt nach Zahlung per E-Mail
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm text-slate-700">
                  <strong className="text-[#10223D] font-semibold">Laborwerte-Referenztabelle:</strong> Blutdruck, Cholesterin & Blutzucker
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm text-slate-700">
                  <strong className="text-[#10223D] font-semibold">Mediterrane Einkaufsliste:</strong> Gefäßschutz und schmackhafte Salz-Alternativen
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm text-slate-700">
                  <strong className="text-[#10223D] font-semibold">Gelenkschonende Herz-Übungen:</strong> 20–30 Minuten für mehr Gefäßelastizität
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-sm text-slate-700">
                  <strong className="text-[#10223D] font-semibold">Lebenslanger Zugriff:</strong> Auf Smartphone, Tablet oder Computer lesbar
                </span>
              </div>
            </div>

            {/* Delivery Specifications (from prompt) */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E0D3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-[#B88A3B] shrink-0" />
                <span className="text-xs text-slate-700">
                  <strong>Format:</strong> PDF (ideal lesbar auf Smartphone, Tablet & Computer)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#B88A3B] shrink-0" />
                <span className="text-xs text-slate-700">
                  <strong>Lieferung:</strong> Per E-Mail direkt nach Zahlungsbestätigung
                </span>
              </div>
            </div>

            {/* Big Checkout Button */}
            <div className="space-y-4 pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-[#10223D] hover:bg-[#192e4f] text-white rounded-xl text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group text-center"
              >
                <Download className="w-5 h-5 text-[#D4B26F]" />
                <span>Jetzt E-Book für 27,14 € sicher kaufen</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 pt-2">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sichere 256-Bit SSL-Verschlüsselung</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Offizielle Zahlungsabwicklung über Hotmart</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>Sofortiger Download-Link</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
