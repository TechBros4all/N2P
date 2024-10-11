"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { Hero } from "../components/homepage/Hero";

import { Header } from "../components/common/header";
import { Footer } from "../components/common/footer";
import MobileHeroSlider from "../components/homepage/Hero-slider-mobile";
import HeroSlider from "../components/homepage/Hero-slider";
import { FeaturedCollections } from "../components/homepage/FeaturedCollections";
import { Assurances } from "../components/homepage/Assurances";
import { FreeDelivery } from "../components/homepage/FreeDelivery";

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
