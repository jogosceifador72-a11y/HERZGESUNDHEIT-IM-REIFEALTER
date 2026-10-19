import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { PurchaseEvent } from '../types';

const NOTIFICATIONS: PurchaseEvent[] = [
  { id: '1', location: 'München, Deutschland', timeAgo: 'vor 3 Minuten' },
  { id: '2', location: 'Wien, Österreich', timeAgo: 'vor 6 Minuten' },
  { id: '3', location: 'Hamburg, Deutschland', timeAgo: 'vor 11 Minuten' },
  { id: '4', location: 'Zürich, Schweiz', timeAgo: 'vor 15 Minuten' },
  { id: '5', location: 'Berlin, Deutschland', timeAgo: 'vor 18 Minuten' },
  { id: '6', location: 'Köln, Deutschland', timeAgo: 'vor 24 Minuten' },
  { id: '7', location: 'Stuttgart, Deutschland', timeAgo: 'vor 31 Minuten' },
  { id: '8', location: 'Frankfurt am Main, Deutschland', timeAgo: 'vor 39 Minuten' },
];

export const PurchaseNotifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before first notification appears
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    // Cycle notifications: visible for 5s, hidden for 6s, then next one
    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    if (isVisible) {
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5500);
    } else {
      nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 7000);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current = NOTIFICATIONS[currentIndex];

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-xs sm:max-w-sm transition-all duration-500 transform ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-6 opacity-0 pointer-events-none'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-[#D9CEBC] shadow-xl text-left flex items-start gap-3 relative">
        {/* Verified Icon badge */}
        <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
          <CheckCircle2 className="w-5 h-5 stroke-[2.25]" />
        </div>

        {/* Content (No names, just confirmed purchase & location/time) */}
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#10223D]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kauf bestätigt</span>
          </div>

          <p className="text-xs text-slate-700 font-medium mt-0.5 leading-snug">
            Herzgesundheit im Reifealter (PDF)
          </p>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
            <span>{current.location}</span>
            <span aria-hidden="true">·</span>
            <span>{current.timeAgo}</span>
          </div>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors cursor-pointer absolute top-2 right-2"
          aria-label="Benachrichtigung schließen"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
