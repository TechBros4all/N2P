"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { Hero } from "./_components/homepage/Hero";

import { Header } from "./_components/common/header";
import { Footer } from "./_components/common/footer";
import MobileHeroSlider from "./_components/homepage/Hero-slider-mobile";
import HeroSlider from "./_components/homepage/Hero-slider";
import { FeaturedCollections } from "./_components/homepage/FeaturedCollections";
import { Assurances } from "./_components/homepage/Assurances";
import { FreeDelivery } from "./_components/homepage/FreeDelivery";

export default function LandingPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main className="container xl:px-28">
        <Hero />
        <section className="py-10">
          {isMobile ? <MobileHeroSlider /> : <HeroSlider />}
        </section>
        <FeaturedCollections />
        <Assurances />
        <FreeDelivery />
      </main>
      <Footer />
    </>
  );
}
