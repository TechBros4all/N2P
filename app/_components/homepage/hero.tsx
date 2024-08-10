import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full h-[30vh] md:h-[70vh] rounded-xl overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src="/images/hero-image.png"
          alt="hero-image"
          fill
          sizes="auto"
          quality={60}
          priority
          className="object-cover object-right-bottom"
        />
      </div>
      <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
      <div className="hidden absolute inset-0 md:flex flex-col items-start justify-center pl-6 md:pl-20 space-y-5 text-white max-w-[480px]">
        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium">
          ENDLESS SUMMER SALE
        </span>
        <h1 className="text-2xl md:text-6xl font-normal leading-[105%]">
          Up to <span className="font-bold">60% off</span> on all items till{" "}
          <span className="font-bold">September 11</span>
        </h1>
        <button className="bg-red-700 text-white px-6 py-4 rounded-lg font-medium hover:bg-red-600 flex items-center transition duration-500 group">
          Shop now
          <ChevronRight className="transform group-hover:translate-x-2 transition-transform duration-700" />
        </button>
      </div>
    </section>
  );
};
