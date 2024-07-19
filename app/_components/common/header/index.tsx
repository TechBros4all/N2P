"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { MobileNav } from "./MobileNav";
import { PcNav } from "./PcNav";

export const Header = () => {
  const isMobile = useIsMobile();
  return (
    <header className="container">
      {isMobile ? <MobileNav /> : <PcNav />}
    </header>
  );
};
