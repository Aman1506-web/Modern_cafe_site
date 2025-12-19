"use client";

import { useEffect, useState } from "react";
import HeroCarousel from "@/components/hero-carousel";
import {
  CravingPills,
  // ReservePromo,
  ReviewsSection,
  VisitSection,
  WhyChooseUs,
} from "@/components/home-sections";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoaderOverlay } from "@/components/loader-overlay";
import { TopBanner } from "@/components/top-banner";
import MyStory from "@/components/MyStory";
import ProductsDaily from "@/components/ProductsDaily";
import LogoBanner from "@/components/LogoBanner";
import CafeGallery from "@/components/CafeGallery";
import ChefSection from "@/components/ChefSection";

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
        <ProductsDaily/>
        {/* Moving banner for companies */}
        <LogoBanner />
       {/* <ReservePromo /> */}
        <MyStory />
        <CafeGallery/>
        <ChefSection/>
        <CravingPills />
        {/* <StaffSection /> */}
        <WhyChooseUs />
        <ReviewsSection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}
