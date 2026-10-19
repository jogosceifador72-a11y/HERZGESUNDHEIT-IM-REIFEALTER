import React from 'react';
import { Eye, Heart, BookOpen, ShieldCheck } from 'lucide-react';

interface BookMockupProps {
  onOpenPreview?: () => void;
}

export const BookMockup: React.FC<BookMockupProps> = ({ onOpenPreview }) => {
  return (
    <div className="relative group max-w-sm sm:max-w-md mx-auto book-perspective">
      {/* Soft ambient backlight glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#C5A059]/20 via-[#B88A3B]/10 to-transparent rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Book Container with 3D angle */}
      <div className="relative book-card rounded-r-xl rounded-l-xs overflow-hidden shadow-2xl border-y border-r border-[#D9CEBC] bg-[#FAF7F0] flex">
        {/* Book Spine (Left edge depth) */}
        <div className="w-4 sm:w-5 bg-gradient-to-r from-[#0C1B33] via-[#10223D] to-[#0A162B] shrink-0 relative flex flex-col justify-between py-6 items-center border-r border-[#C5A059]/30">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
          <span className="text-[9px] uppercase tracking-widest text-[#D4B26F] -rotate-90 whitespace-nowrap font-serif select-none">
            DR. SOMMER · HERZGESUNDHEIT
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
        </div>

        {/* Book Cover Face */}
        <div className="relative flex-1 p-5 sm:p-7 bg-gradient-to-br from-[#FCFBF8] via-[#FAF6EF] to-[#F2ECE0] flex flex-col justify-between min-h-[480px] sm:min-h-[520px]">
          {/* Subtle glossy sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />

          {/* Arched Photo Cutout on Right (Matching the original cover) */}
          <div className="absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden pointer-events-none">
            <div className="w-full h-full relative">
              <img
                src="/src/assets/images/book_cover_sunset_1792173924982.jpg"
                alt="Aktives reifes Paar beim Spaziergang bei Sonnenuntergang am See"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              {/* Elegant curved separator mask gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EF] via-transparent to-transparent w-16" />
              <div className="absolute inset-y-0 left-0 w-px bg-[#C5A059]/40" />
            </div>
          </div>

          {/* Left Text Content */}
          <div className="relative z-10 w-[55%] flex flex-col">
            {/* Heart Crest */}
            <div className="mb-4">
              <div className="w-9 h-9 rounded-full border border-[#B88A3B]/50 flex items-center justify-center bg-white/80 shadow-xs">
                <Heart className="w-4 h-4 text-[#B88A3B] stroke-[1.75]" />
              </div>
            </div>

            {/* Main Title */}
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#10223D] tracking-tight leading-[1.15] mb-3">
              HERZGESUNDHEIT
              <br />
              <span className="text-[#192e4f] font-normal">IM REIFEALTER</span>
            </h2>

            {/* Gold Divider with Diamond */}
            <div className="flex items-center gap-2 my-2 w-28">
              <div className="h-px bg-[#B88A3B]/60 flex-1" />
              <span className="text-[10px] text-[#B88A3B]">◇</span>
              <div className="h-px bg-[#B88A3B]/60 flex-1" />
            </div>

            {/* Subtitle */}
            <p className="text-[11px] sm:text-xs text-slate-700 font-sans leading-relaxed mb-4">
              Ein eleganter Leitfaden zur Prävention von Herz-Kreislauf-Erkrankungen.
            </p>

            <div className="w-8 h-0.5 bg-[#B88A3B]/50 mb-3" />

            <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium leading-normal mb-8">
              Ein wissenschaftlich fundierter Leitfaden für ein langes, aktives Leben.
            </p>
          </div>

          {/* Author Section at bottom */}
          <div className="relative z-10 w-[55%] pt-4 border-t border-[#D9CEBC]/60">
            <p className="text-xs sm:text-sm font-serif font-bold text-[#10223D]">
              Dr. Med. Elena V. Sommer
            </p>
            <div className="flex items-center gap-1.5 my-1">
              <div className="h-px bg-[#B88A3B]/40 w-4" />
              <span className="text-[8px] text-[#B88A3B]">◇</span>
              <div className="h-px bg-[#B88A3B]/40 flex-1" />
            </div>
            <p className="text-[10px] text-slate-600 font-sans">
              Spezialistin für Präventivmedizin
            </p>
          </div>

          {/* Bottom center page number mark */}
          <div className="absolute bottom-2 left-6 text-[9px] text-[#B88A3B]/70 tracking-widest font-mono">
            — 1 —
          </div>
        </div>

        {/* Paper Pages Stack Depth (Right Edge) */}
        <div className="w-2.5 sm:w-3.5 bg-gradient-to-r from-[#EDE5D8] via-[#F9F5EC] to-[#E3D9C9] shrink-0 border-l border-[#D5C7B4] relative">
          <div className="absolute inset-y-0 right-0 w-px bg-[#C1B29E]" />
        </div>
      </div>

      {/* Floating Interactive Badge (Leseprobe Vorschau) */}
      {onOpenPreview && (
        <button
          onClick={onOpenPreview}
          type="button"
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-md text-[#10223D] hover:text-[#B88A3B] border border-[#D9CEBC] rounded-full text-xs font-semibold shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group"
        >
          <Eye className="w-3.5 h-3.5 text-[#B88A3B]" />
          <span>Kostenlose Leseprobe öffnen</span>
        </button>
      )}

      {/* Format & Instant Delivery Tag */}
      <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-600">
        <span className="inline-flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5 text-[#B88A3B]" />
          30-Seiten PDF Leitfaden
        </span>
        <span aria-hidden="true" className="text-slate-300">·</span>
        <span className="inline-flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B88A3B]" />
          Sofortige Bereitstellung
        </span>
      </div>
    </div>
  );
};
