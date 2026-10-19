import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CHECKOUT_URL = 'https://pay.hotmart.com/A108024291L';

export const TopBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-[#E7E0D3] shadow-xs'
          : 'bg-[#FAF8F5] border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-base sm:text-lg font-serif font-bold tracking-tight text-[#10223D] whitespace-nowrap shrink-0 hover:text-[#B88A3B] transition-colors"
        >
          HERZGESUNDHEIT
        </a>

        {/* Zone 2: 4-5 Single-line Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
          <a
            href="#ueber-das-buch"
            className="hover:text-[#10223D] transition-colors whitespace-nowrap shrink-0"
          >
            Über das Buch
          </a>
          <a
            href="#inhalte"
            className="hover:text-[#10223D] transition-colors whitespace-nowrap shrink-0"
          >
            Inhalte
          </a>
          <a
            href="#fuer-wen"
            className="hover:text-[#10223D] transition-colors whitespace-nowrap shrink-0"
          >
            Für wen
          </a>
          <a
            href="#autorin"
            className="hover:text-[#10223D] transition-colors whitespace-nowrap shrink-0"
          >
            Autorin
          </a>
          <a
            href="#faq"
            className="hover:text-[#10223D] transition-colors whitespace-nowrap shrink-0"
          >
            Häufige Fragen
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#10223D] hover:bg-[#192e4f] rounded-lg transition-all duration-200 shadow-xs hover:shadow-md whitespace-nowrap shrink-0 group"
          >
            <span>Jetzt sichern · 27,14 €</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};
