"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { MobileNav } from "./MobileNav";
import { PcNav } from "./PcNav";
import { MdPhone } from "react-icons/md";
import { PiLineVertical } from "react-icons/pi";
import Image from "next/image";

export const Header = () => {
  const isMobile = useIsMobile();
  return (
    <section>
      <section className="w-full bg-zinc-800">
        <div className="w-full flex items-center align-middle justify-between py-4 px-10 xl:px-28 text-white text-xs md:text-sm font-normal">
          <div className="flex items-center gap-2">
            <MdPhone />
            <span>+234098756283</span>
          </div>
          <div className="flex items-center space-x-3">
            <p>Get 2% off on Selected Items</p>
            <PiLineVertical />
            <p className="text-red-300">Shop Now</p>
          </div>
          <div className="flex items-center gap-3">
            <p>EN</p>
            <div className="flex items-center align-middle gap-2">
              <Image
                src="/icons/Nigeria-01-1.svg"
                width={20}
                height={20}
                alt="Nigeria"
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
              Nigeria
            </div>
          </div>
        </div>
      </section>
      <header className="container">
        {isMobile ? <MobileNav /> : <PcNav />}
      </header>
    </section>
  );
};
