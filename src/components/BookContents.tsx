import React, { useState } from 'react';
import { BookOpen, ChevronRight, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { Chapter } from '../types';
import { CHECKOUT_URL } from './TopBar';

const CHAPTERS: Chapter[] = [
  {
    number: 'Kapitel 1',
    title: 'Das reife Herz verstehen',
    subtitle: 'Was sich ab 50 biologisch verändert & wie Sie präventiv gegensteuern',
    summary: 'Erfahren Sie, warum die arterielle Steifigkeit im Alter zunimmt, wie der Herzmuskel arbeitet und warum proaktiver Schutz ab dem 50. Lebensjahr die wirksamste Verjüngungskur für Ihre Gefäße ist.',
    highlights: [
      'Gefäßalterung verlangsamen durch endotheliale Unterstützung',
      'Der Unterschied zwischen chronischer Belastung und natürlicher Anpassung',
      'Die 3 wichtigsten Frühwarnsignale, die Sie kennen sollten',
    ],
  },
  {
    number: 'Kapitel 2',
    title: 'Labor & Werte ohne Fachchinesisch',
    subtitle: 'Blutdruck, Cholesterin (LDL/HDL) und Blutzucker sicher einordnen',
    summary: 'Nie wieder Verwirrung bei ärztlichen Befunden. Eine verständliche Schritt-für-Schritt-Anleitung zur Interpretation von systolischen und diastolischen Werten sowie dem tatsächlichen Stellenwert von Blutfettwerten.',
    highlights: [
      'Klartext zu systolischen und diastolischen Grenzwerten ab 50',
      'Das Verhältnis von LDL zu HDL und Triglyceriden richtig deuten',
      'Blutzuckerspitzen und deren heimliche Auswirkung auf die Gefäßinnenwand',
    ],
  },
  {
    number: 'Kapitel 3',
    title: 'Die mediterrane Gefäß-Küche',
    subtitle: 'Omega-3-Power, Polyphenole und wirkungsvolle Alternativen zu Salz',
    summary: 'Genussvoll essen und das Herz schützen. Entdecken Sie konkrete Einkaufslisten, schonende Zubereitungsweisen und natürliche Kräuter-Würzmischungen, die überflüssiges Kochsalz ersetzen.',
    highlights: [
      'Die besten pflanzlichen und marinen Quellen für bioverfügbares Omega-3',
      'Kräuter und Gewürze mit nachgewiesener gefäßerweiternder Wirkung',
      'Konkrete Mahlzeitenideen für den Alltag ohne langes Kochen',
    ],
  },
  {
    number: 'Kapitel 4',
    title: 'Gelenkschonende Herz-Bewegung',
    subtitle: 'Sanftes Ausdauertraining, das Gefäße elastisch hält – ohne Überlastung',
    summary: 'Sie müssen keinen Marathon laufen. Schon 20 bis 30 Minuten gezielte moderate Alltagsaktivität stärken das Herzvolumen und senken den Ruhepuls spürbar.',
    highlights: [
      'Die optimale Trainingspulszone für Menschen im reifen Alter',
      'Gehen, Radfahren oder Schwimmen: Was schützt welches Gefäßareal am besten?',
      'Einfache 5-Minuten-Mikrogymnastik für Zuhause',
    ],
  },
  {
    number: 'Kapitel 5',
    title: 'Schlaf & vegetative Regeneration',
    subtitle: 'Wie Erholung und Tiefschlafphasen Herzrhythmusstörungen vorbeugen',
    summary: 'Nachts regeneriert das Herz-Kreislauf-System am stärksten. Bei chronischem Schlafmangel schüttet der Körper Stresshormone aus, die den Blutdruck oben halten.',
    highlights: [
      'Die Verbindung zwischen Cortisolspiegel und nächtlichem Blutdruckabfall (Dipping)',
      'Einschlafrituale für eine tiefere nächtliche Herzfrequenzvariabilität (HRV)',
      'Warum Schnarchen und Atemaussetzer sofort abgeklärt werden sollten',
    ],
  },
  {
    number: 'Kapitel 6',
    title: 'Die 5 populärsten Herz-Mythen',
    subtitle: 'Wissenschaftlicher Faktencheck: Was wirklich schützt und was schadet',
    summary: 'Von teuren Wundermitteln bis zum angeblich lebensverlängernden täglichen Glas Wein: Dr. Elena Sommer trennt Fakten von lukrativen Marketingversprechen.',
    highlights: [
      'Der Mythos vom gesunden Rotwein – was die neuesten Studien wirklich zeigen',
      'Braucht man Nahrungsergänzungsmittel wie Q10 oder hochdosiertes Magnesium?',
      'Kaffee und Blutdruck: Schädlicher Reizstoff oder Gefäßelixier?',
    ],
  },
];

interface BookContentsProps {
  onOpenPreview: () => void;
}

export const BookContents: React.FC<BookContentsProps> = ({ onOpenPreview }) => {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]" id="inhalte">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#996e25] uppercase font-sans mb-2">
              <span>Inhaltsverzeichnis</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span>30 Seiten komprimierte Praxis</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#10223D] tracking-tight">
              Was erwartet Sie im E-Book?
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-sans">
              Kein theoretisches Lehrbuch, sondern ein verständlicher, anwendungsorientierter Leitfaden, strukturiert in 6 präzise Abschnitte:
            </p>
          </div>

          <button
            onClick={onOpenPreview}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#D9CEBC] hover:border-[#10223D] text-[#10223D] rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#B88A3B]" />
            <span>Leseprobe durchblättern</span>
          </button>
        </div>

        {/* Chapters Interactive Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Chapter Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {CHAPTERS.map((chap, idx) => {
              const isSelected = activeChapter === idx;
              return (
                <button
                  key={chap.number}
                  onClick={() => setActiveChapter(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-[#B88A3B] shadow-sm'
                      : 'bg-[#F4EFE6]/60 border-transparent hover:bg-white hover:border-[#E7E0D3]'
                  }`}
                >
                  <div className="pr-3">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#996e25]">
                      {chap.number}
                    </span>
                    <h3 className={`text-base font-serif font-bold transition-colors ${isSelected ? 'text-[#10223D]' : 'text-slate-700 group-hover:text-[#10223D]'}`}>
                      {chap.title}
                    </h3>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#B88A3B] translate-x-1' : 'text-slate-400 group-hover:text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Chapter Details Card (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-[#E7E0D3] shadow-xs text-left">
            <div className="flex items-center justify-between border-b border-[#E7E0D3] pb-4 mb-6">
              <div>
                <span className="text-xs font-mono font-semibold text-[#996e25] tracking-widest uppercase">
                  {CHAPTERS[activeChapter].number} · PDF Leitfaden
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#10223D] mt-1">
                  {CHAPTERS[activeChapter].title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#D9CEBC] flex items-center justify-center text-[#B88A3B] shrink-0">
                <FileText className="w-5 h-5 stroke-[1.75]" />
              </div>
            </div>

            <p className="text-sm font-medium text-slate-800 leading-snug mb-3 font-serif italic">
              „{CHAPTERS[activeChapter].subtitle}“
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
              {CHAPTERS[activeChapter].summary}
            </p>

            <div className="space-y-3 pt-4 border-t border-[#F3EFE9]">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
                Wichtigste Erkenntnisse in diesem Kapitel:
              </p>
              {CHAPTERS[activeChapter].highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#B88A3B] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 leading-normal">{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E7E0D3] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Kompakt auf den Punkt gebracht · Ohne medizinische Vorkenntnisse
              </span>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#10223D] hover:bg-[#192e4f] text-white rounded-lg text-xs font-semibold transition-colors shrink-0 whitespace-nowrap"
              >
                <span>Jetzt für 27,14 € lesen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
