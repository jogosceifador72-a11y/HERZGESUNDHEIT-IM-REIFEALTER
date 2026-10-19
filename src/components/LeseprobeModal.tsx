import React, { useEffect } from 'react';
import { X, BookOpen, Download, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { CHECKOUT_URL } from './TopBar';

interface LeseprobeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeseprobeModal: React.FC<LeseprobeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#D9CEBC] overflow-hidden my-8 z-10 text-left">
        
        {/* Header */}
        <div className="bg-[#FAF8F5] border-b border-[#E7E0D3] p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10223D] text-[#D4B26F] flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#996e25] uppercase">
                Exklusive Leseprobe · Auszug aus Kapitel 1 & 2
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#10223D]">
                Herzgesundheit im Reifealter
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Reader Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6 text-slate-700 font-sans text-sm sm:text-base leading-relaxed bg-[#FCFBF9]">
          
          <div className="p-4 rounded-xl bg-white border border-[#E7E0D3] shadow-xs space-y-2">
            <span className="text-xs font-mono text-[#996e25] uppercase font-semibold">Seite 4 · Kapitel 1: Die Gefäße ab 50</span>
            <h4 className="text-xl font-serif font-bold text-[#10223D]">
              Warum der Gefäßschutz im Reifealter anders funktioniert
            </h4>
            <p className="text-slate-600 text-sm">
              „Mit zunehmenden Lebensjahren verliert das Gefäßsystem einen Teil seiner natürlichen Elastizität. Die Hauptschlagader (Aorta) und die arteriellen Verzweigungen werden starrer. Das ist ein physiologischer Prozess – kein Schicksalsschlag. Wer die 3 biochemischen Auslöser von Gefäßsteifigkeit kennt, kann diese Versteifung um Jahre verlangsamen...“
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E7E0D3] shadow-xs space-y-3">
            <span className="text-xs font-mono text-[#996e25] uppercase font-semibold">Seite 9 · Kapitel 2: Laborwerte verstehen</span>
            <h4 className="text-xl font-serif font-bold text-[#10223D]">
              Der Labor-Kompass: Was Ihnen Ihr Arzt oft nicht ausführlich erklärt
            </h4>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                <strong>Systolischer Wert:</strong> Zeigt den Spitzendruck beim Pumpstoß des linken Herzventrikels. Ab 50 ist ein Wert um 125–135 mmHg oft physiologisch normal, solange der diastolische Wert stabil bleibt.
              </p>
              <p>
                <strong>LDL-Cholesterin:</strong> Entscheidend ist nicht nur der isolierte Gesamtwert, sondern das Verhältnis von LDL zu HDL und den Entzündungsmarkern (hs-CRP).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#D9CEBC] text-center space-y-2">
            <Heart className="w-6 h-6 text-[#B88A3B] mx-auto" />
            <p className="text-xs font-serif font-bold text-[#10223D]">
              Möchten Sie das vollständige 30-Seiten E-Book inklusive aller Tabellen, Rezeptlisten & Praxis-Checklisten lesen?
            </p>
            <p className="text-xs text-slate-600">
              Erhalten Sie sofortigen Zugang als PDF für nur 27,14 €.
            </p>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 sm:p-6 bg-white border-t border-[#E7E0D3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-2xl font-serif font-bold text-[#10223D] tabular-nums">27,14 €</span>
            <span className="block text-[11px] text-slate-500">Einmalig · Sofort-Download als PDF</span>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#10223D] hover:bg-[#192e4f] text-white rounded-xl text-sm font-semibold transition-colors shadow-md group cursor-pointer whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-[#D4B26F]" />
            <span>Vollständiges E-Book kaufen</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
};
