import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ProblemsSolutions } from './components/ProblemsSolutions';
import { BookContents } from './components/BookContents';
import { TargetAudience } from './components/TargetAudience';
import { HeartGuideWidget } from './components/HeartGuideWidget';
import { AuthorSection } from './components/AuthorSection';
import { PricingCta } from './components/PricingCta';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PurchaseNotifications } from './components/PurchaseNotifications';
import { LeseprobeModal } from './components/LeseprobeModal';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800">
      {/* 1. Header / Navigation */}
      <TopBar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. What it solves (4 pillars + nutrition) */}
        <ProblemsSolutions />

        {/* 5. Interactive Values Widget */}
        <HeartGuideWidget />

        {/* 6. Chapter Breakdown */}
        <BookContents onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* 7. Who it is for & Who it is not for */}
        <TargetAudience />

        {/* 8. About the Author */}
        <AuthorSection />

        {/* 9. Final Offer / Pricing CTA */}
        <PricingCta />

        {/* 10. FAQs */}
        <FaqSection />
      </main>

      {/* 11. Footer with all social contact buttons */}
      <Footer />

      {/* Floating Bottom-Left Purchase Notifications (no names, verified purchase) */}
      <PurchaseNotifications />

      {/* Free Sample Preview Modal */}
      <LeseprobeModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </div>
  );
}
