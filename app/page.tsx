"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { Hero } from "./_components/homepage/Hero";

import MobileHeroSlider from "./_components/homepage/Hero-slider-mobile";
import HeroSlider from "./_components/homepage/Hero-slider";
import { FeaturedCollections } from "./_components/homepage/FeaturedCollections";

export default function LandingPage() {
  const isMobile = useIsMobile();

  return (
    <main className="container xl:px-28">
      <Hero />
      <section className="py-10">
        {isMobile ? <MobileHeroSlider /> : <HeroSlider />}
      </section>
      <FeaturedCollections />
    </main>
  );
}
