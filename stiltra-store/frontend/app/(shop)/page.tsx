import HeroSection from "@/components/home/HeroSection";
import PromoBanner from "@/components/home/PromoBanner";
import CategorySection from "@/components/home/CategorySection";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import NewArrivals from "@/components/home/NewArrivals";
import BrandCTA from "@/components/home/BrandCTA";

export default function HomePage() {
  return (
    <main>

      <HeroSection />

      <PromoBanner />

      <CategorySection />

      <FeaturedCollections />

      <NewArrivals />

      <BrandCTA />

    </main>
  );
}