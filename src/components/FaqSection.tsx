import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

const FAQS: FaqItem[] = [
  {
    question: 'Wie und wann erhalte ich das E-Book nach dem Kauf?',
    answer: 'Sofort nach Ihrer Zahlungsbestätigung erhalten Sie eine E-Mail mit Ihrem persönlichen Download-Link für das E-Book im universellen PDF-Format. Sie können es sofort auf Ihrem Smartphone, Tablet, Laptop oder Desktop-PC öffnen und speichern.',
  },
  {
    question: 'Warum hat das E-Book genau 30 Seiten?',
    answer: 'Weil dieses Werk bewusst als prägnanter Handlungsleitfaden konzipiert ist. Keine langatmigen Theorien, kein überflüssiges Füllmaterial. Auf 30 Seiten erhalten Sie exakt die konkreten Maßnahmen, die für den Gefäßschutz ab 50 den größten messbaren Unterschied machen.',
  },
  {
    question: 'Brauche ich medizinisches Vorwissen, um das Buch zu verstehen?',
    answer: 'Nein, keineswegs. Dr. Elena Sommer verzichtet ganz bewusst auf unverständliches Fachchinesisch. Alle Werte (Blutdruck, Cholesterin, Blutzucker) und physiologischen Zusammenhänge sind in klarer, bodenständiger Sprache erklärt.',
  },
  {
    question: 'Welche Zahlungsmethoden werden akzeptiert?',
    answer: 'Die Zahlungsabwicklung erfolgt über die renommierte, hochsichere Plattform Hotmart mit 256-Bit SSL-Verschlüsselung. Sie können bequem per Kreditkarte, PayPal, Sofortüberweisung oder den gängigen regionalen Zahlungsmitteln zahlen.',
  },
  {
    question: 'Was ist mit dem angeblichen Nutzen von täglichem Rotwein?',
    answer: 'Im Kapitel 6 „Die 5 populärsten Herz-Mythen im Faktencheck“ erfahren Sie anhand aktueller kardiologischer Studien, warum der tägliche Alkoholgenuss den Gefäßen mehr schadet als nützt – und welche natürlichen Antioxidantien Ihre Arterien wirklich schützen.',
  },
  {
    question: 'Ersetzt der Leitfaden die Untersuchung beim Hausarzt oder Kardiologen?',
    answer: 'Nein. Der Leitfaden ist ein fundierter präventiver Ratgeber für Ihren Alltag. Er versetzt Sie jedoch in die Lage, Ihre Untersuchungsergebnisse eigenständig zu verstehen und künftige Arztbesuche deutlich gezielter und vorbereiteter zu führen.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E7E0D3]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#996e25] uppercase font-sans mb-2">
            <span>Transparenz & Klarheit</span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span>Ihre Fragen</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#10223D] tracking-tight">
            Häufig gestellte Fragen (FAQ)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um den Leitfaden und den Sofortzugang:
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E7E0D3] bg-[#FAF8F5] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left font-serif font-bold text-base sm:text-lg text-[#10223D] hover:text-[#996e25] transition-colors cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#B88A3B] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 font-sans leading-relaxed border-t border-[#F1EAE0]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
