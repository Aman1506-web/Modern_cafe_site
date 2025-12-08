"use client";

import { useEffect, useState } from "react";
import { HeroCarousel } from "@/components/hero-carousel";
import {
  CravingPills,
  FeaturedBakes,
  ReservePromo,
  ReviewsSection,
  StaffSection,
  VisitSection,
  WhyChooseUs,
} from "@/components/home-sections";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoaderOverlay } from "@/components/loader-overlay";
import { TopBanner } from "@/components/top-banner";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-cream">
      {showLoader ? <LoaderOverlay /> : null}
      <TopBanner />
      <Navbar />
      <main className="pb-12">
        <HeroCarousel />
        <ReservePromo />
        <FeaturedBakes />
        <CravingPills />
        <StaffSection />
        <WhyChooseUs />
        <ReviewsSection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}
