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

export default function Home() {
  return (
    <div className="bg-cream">
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
