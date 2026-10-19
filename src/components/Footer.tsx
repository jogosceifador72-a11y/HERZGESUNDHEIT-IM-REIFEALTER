import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { CHECKOUT_URL } from './TopBar';

interface SocialLink {
  name: string;
  url: string;
  iconSvg?: React.ReactNode;
  category: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
    category: '@karinzeit',
    iconSvg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Facebook Profil',
    url: 'https://www.facebook.com/share/1c8J76URqe/',
    category: 'Persönlich',
    iconSvg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.456 5 15.782 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
      </svg>
    ),
  },
  {
    name: 'Facebook Seite',
    url: 'https://www.facebook.com/share/1DzZyfFWRL/',
    category: 'Offizielle Seite',
    iconSvg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
    ),
  },
  {
    name: 'Kwai',
    url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
    category: '@kariningrid673',
    iconSvg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@karinzeit',
    category: '@karinzeit',
    iconSvg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .58.05.84.13V9.43a6.37 6.37 0 0 0-.84-.06A6.33 6.33 0 0 0 3 15.7a6.33 6.33 0 0 0 6.34 6.33 6.33 6.33 0 0 0 6.33-6.33V8.81a8.27 8.27 0 0 0 4.92 1.6V7a4.84 4.84 0 0 1-1-.31z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
    category: '@karinzeit',
    iconSvg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    url: 'https://www.threads.com/@karinzeit',
    category: '@karinzeit',
    iconSvg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12.186 24C5.467 24 0 18.533 0 11.814 0 5.094 5.467 0 12.186 0c6.72 0 12.186 5.094 12.186 11.814 0 2.164-.564 4.225-1.637 6.012l-2.09-1.246c.805-1.341 1.233-2.887 1.233-4.766 0-5.352-4.354-9.706-9.692-9.706-5.338 0-9.692 4.354-9.692 9.706 0 5.352 4.354 9.706 9.692 9.706 3.037 0 5.856-1.42 7.733-3.896l1.986 1.404C19.467 22.187 15.992 24 12.186 24z" />
      </svg>
    ),
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1B33] text-slate-300 pt-16 pb-12 border-t border-[#192e4f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 text-left">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#D4B26F] uppercase">
              HERZGESUNDHEIT IM REIFEALTER
            </span>
            <p className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              Schützen Sie Ihr Herz mit einfachen Schritten.
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Praktischer 30-Seiten PDF-Leitfaden von Dr. Med. Elena V. Sommer · 27,14 €
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B88A3B] hover:bg-[#C5A059] text-[#0C1B33] font-bold rounded-xl text-xs sm:text-sm transition-colors shadow-sm shrink-0 whitespace-nowrap"
          >
            <span>Jetzt kaufen (27,14 €)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Social Contacts in Button Format (Requested by user) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#D4B26F] uppercase tracking-wider font-sans">
            <span>Vernetzen & Kontakt</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Folgen Sie mir auf Social Media</span>
          </div>

          <p className="text-xs text-slate-400">
            Haben Sie Fragen oder möchten Sie weitere Gesundheitstipps erhalten? Klicken Sie auf einen der Buttons unten:
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4B26F]/60 text-white hover:text-[#D4B26F] text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer group shadow-xs whitespace-nowrap"
              >
                <span className="text-[#D4B26F] group-hover:scale-110 transition-transform">
                  {link.iconSvg}
                </span>
                <span>{link.name}</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="pt-8 border-t border-white/10 space-y-4 text-xs text-slate-400 leading-relaxed">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-semibold text-slate-300 mb-1">
              Wichtiger gesundheitlicher & rechtlicher Hinweis:
            </p>
            <p>
              Die in diesem E-Book und auf dieser Webseite bereitgestellten Inhalte dienen ausschließlich Informations- und Präventionszwecken. Sie stellen keine medizinische Diagnose, Behandlungsempfehlung oder ein Heilversprechen dar und ersetzen zu keinem Zeitpunkt die persönliche Beratung, Diagnose oder Behandlung durch einen qualifizierten Arzt oder Facharzt. Ändern oder beenden Sie bestehende Medikationen niemals eigenmächtig ohne Rücksprache mit Ihrem behandelnden Arzt.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
            <p>© {new Date().getFullYear()} Herzgesundheit im Reifealter. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-4">
              <span>Sichere Auslieferung über Hotmart</span>
              <span aria-hidden="true">·</span>
              <span>Sofortiger PDF-Zugang</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
