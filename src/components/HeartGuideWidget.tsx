import React, { useState } from 'react';
import { Activity, ShieldAlert, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from './TopBar';

interface ValueCategory {
  label: string;
  range: string;
  status: 'optimal' | 'normal' | 'attention' | 'action';
  title: string;
  description: string;
  chapterAdvice: string;
}

const CATEGORIES: ValueCategory[] = [
  {
    label: 'Optimal',
    range: '< 120 / < 80 mmHg',
    status: 'optimal',
    title: 'Hervorragender Gefäßschutz',
    description: 'Ihr Gefäßsystem wird minimal belastet. Im reiferen Alter geht es nun vor allem darum, diese Elastizität durch gezielte Mikronährstoffe und sanfte Bewegung zu bewahren.',
    chapterAdvice: 'In Kapitel 1 & 4 erfahren Sie, wie Sie diesen Zustand bis ins hohe Alter stabil halten.',
  },
  {
    label: 'Normal',
    range: '120–129 / 80–84 mmHg',
    status: 'normal',
    title: 'Solider Normbereich ab 50',
    description: 'Vollkommen im grünen Bereich für aktive Erwachsene. Achten Sie auf verstecktes Natrium in Fertigprodukten und ausreichende Kaliumzufuhr über Gemüse.',
    chapterAdvice: 'In Kapitel 3 lernen Sie die besten natürlichen Salz-Alternativen kennen.',
  },
  {
    label: 'Hoch-Normal',
    range: '130–139 / 85–89 mmHg',
    status: 'attention',
    title: 'Aufmerksamkeit geboten (Graubereich)',
    description: 'Noch kein pathologischer Bluthochdruck, aber ein deutliches Signal Ihrer Arterienwände. Mit gezielten Ernährungsanpassungen lässt sich dieser Wert oft ganz ohne Medikamente stabilisieren.',
    chapterAdvice: 'In Kapitel 2 & 3 zeigt Dr. Elena Sommer konkrete Schritte zur natürlichen Blutdrucksenkung.',
  },
  {
    label: 'Erhöht (Grad 1)',
    range: '140–159 / 90–99 mmHg',
    status: 'action',
    title: 'Handlungsbedarf für Herz & Nieren',
    description: 'Dauerhafter Druck schädigt auf Dauer die feinen Kapillaren im Gehirn, im Herzen und in den Nieren. Ein aktiver Lebensstil und kardiologische Begleitung sind jetzt dringend geboten.',
    chapterAdvice: 'In Kapitel 2 erhalten Sie die Checkliste für das Arztgespräch und wirkungsvolle Sofortmaßnahmen.',
  },
];

export const HeartGuideWidget: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const current = CATEGORIES[selectedIndex];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E7E0D3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#996e25] uppercase font-sans mb-2">
            <span>Interaktiver Selbsttest</span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span>Werte-Orientierung</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#10223D]">
            Wo stehen Ihre Blutdruckwerte aktuell?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Wählen Sie Ihren typischen Ruhe-Messwert aus, um die medizinische Einschätzung nach Leitlinien für das reife Alter zu sehen:
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-[#F2EDE2] rounded-2xl mb-8 border border-[#E7E0D3]">
          {CATEGORIES.map((cat, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedIndex(idx)}
                className={`py-3 px-3 text-center rounded-xl transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-[#10223D] font-bold shadow-sm border border-[#D9CEBC]'
                    : 'text-slate-600 hover:text-[#10223D] font-medium'
                }`}
              >
                <div className="text-xs uppercase tracking-wider">{cat.label}</div>
                <div className="text-[11px] font-mono text-slate-500 mt-0.5">{cat.range}</div>
              </button>
            );
          })}
        </div>

        {/* Display Card */}
        <div className="bg-white rounded-2xl border border-[#E7E0D3] p-6 sm:p-8 shadow-xs text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#F3EFE9] gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#996e25] uppercase">
                Kategorie: {current.label} ({current.range})
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#10223D] mt-0.5">
                {current.title}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D9CEBC] text-xs font-semibold text-[#10223D] self-start sm:self-auto">
              <Activity className="w-4 h-4 text-[#B88A3B]" />
              <span>Präventive Einordnung</span>
            </div>
          </div>

          <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            {current.description}
          </p>

          <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E0D3] flex items-start gap-3">
            <Heart className="w-5 h-5 text-[#B88A3B] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-[#10223D] uppercase tracking-wider font-sans">
                Empfehlung von Dr. Med. Elena V. Sommer:
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {current.chapterAdvice}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#F3EFE9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Alle Normwerte für Blutdruck, Cholesterin (LDL/HDL) & Blutzucker auf einen Blick.
            </span>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#10223D] hover:bg-[#192e4f] text-white rounded-lg text-xs font-semibold transition-colors shrink-0"
            >
              <span>Vollständigen Leitfaden anfordern</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
