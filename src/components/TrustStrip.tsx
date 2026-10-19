import React from 'react';
import { MailCheck, Smartphone, Lock, Award, Zap } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-y border-[#E7E0D3] bg-[#FAF6F0] py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center text-left">
          {/* Trust Item 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#D9CEBC] flex items-center justify-center shrink-0 text-[#B88A3B]">
              <MailCheck className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#10223D]">Sofortige Lieferung</p>
              <p className="text-[11px] text-slate-600">Per E-Mail direkt nach Zahlung</p>
            </div>
          </div>

          {/* Trust Item 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#D9CEBC] flex items-center justify-center shrink-0 text-[#B88A3B]">
              <Smartphone className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#10223D]">Universelles PDF</p>
              <p className="text-[11px] text-slate-600">Auf Handy, Tablet & PC lesbar</p>
            </div>
          </div>

          {/* Trust Item 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#D9CEBC] flex items-center justify-center shrink-0 text-[#B88A3B]">
              <Lock className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#10223D]">Sichere Bezahlung</p>
              <p className="text-[11px] text-slate-600">256-Bit SSL über Hotmart</p>
            </div>
          </div>

          {/* Trust Item 4 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#D9CEBC] flex items-center justify-center shrink-0 text-[#B88A3B]">
              <Award className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#10223D]">Medizinisch fundiert</p>
              <p className="text-[11px] text-slate-600">Von Dr. Med. Elena V. Sommer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
