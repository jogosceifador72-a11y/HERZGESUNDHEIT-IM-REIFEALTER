import React from 'react';
import { Award, Stethoscope, HeartHandshake, CheckCircle } from 'lucide-react';
import { CHECKOUT_URL } from './TopBar';

export const AuthorSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E7E0D3]" id="autorin">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Author Portrait (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border border-[#D9CEBC] shadow-xl bg-[#FAF8F5]">
              <img
                src="/src/assets/images/doctor_elena_sommer_1792173925342.jpg"
                alt="Dr. Med. Elena V. Sommer, Spezialistin für Präventivmedizin"
                className="w-full h-auto object-cover aspect-square"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              <div className="p-4 bg-white border-t border-[#E7E0D3] text-left">
                <p className="text-base font-serif font-bold text-[#10223D]">
                  Dr. Med. Elena V. Sommer
                </p>
                <p className="text-xs text-[#996e25] font-medium mt-0.5">
                  Spezialistin für Präventivmedizin & Herz-Kreislauf-Gesundheit
                </p>
              </div>
            </div>

            {/* Subtle decorative gold badge */}
            <div className="hidden sm:flex absolute -bottom-4 -right-2 bg-[#FAF8F5] border border-[#D9CEBC] rounded-xl p-3 shadow-md items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#10223D] text-[#D4B26F] flex items-center justify-center shrink-0">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-[#10223D]">Ärztliche Praxis</p>
                <p className="text-[10px] text-slate-500">Prävention & Gefäßschutz</p>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#996e25] uppercase font-sans">
              <span>Über die Autorin</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span>Wissenschaft & Praxis</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#10223D] tracking-tight">
              „Prävention ist der Schlüssel zu einem selbstbestimmten, vitalen Ruhestand.“
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                In ihrer langjährigen ärztlichen Praxis erlebt Dr. Med. Elena V. Sommer immer wieder dasselbe Phänomen: Patientinnen und Patienten ab 50 erhalten Laborbefunde voller Fachbegriffe und gehen mit mehr Fragen als Antworten nach Hause.
              </p>
              <p>
                Gleichzeitig kursieren in Zeitschriften und im Internet unzählige Halbwahrheiten – von überteuerten Nahrungsergänzungsmitteln bis hin zu veralteten Diätempfehlungen.
              </p>
              <blockquote className="p-4 rounded-xl bg-[#FAF8F5] border-l-2 border-[#B88A3B] italic text-slate-800 font-serif text-base sm:text-lg">
                „Ich habe diesen 30-seitigen Leitfaden geschrieben, um Ihnen die Essenz modernen kardiologischen Wissens ohne Fachchinesisch in die Hand zu geben. Sie erfahren genau, was zählt – und was Sie getrost ignorieren können.“
              </blockquote>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle className="w-4 h-4 text-[#B88A3B] shrink-0" />
                <span>Wissenschaftlich fundiert nach ESC-Leitlinien</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle className="w-4 h-4 text-[#B88A3B] shrink-0" />
                <span>Praxiserprobt für Menschen ab 50</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle className="w-4 h-4 text-[#B88A3B] shrink-0" />
                <span>Keine unverständlichen Fachbegriffe</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle className="w-4 h-4 text-[#B88A3B] shrink-0" />
                <span>Konkrete Schritte im eigenen Tempo</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
