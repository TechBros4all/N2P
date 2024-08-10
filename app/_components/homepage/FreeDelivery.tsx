import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const FreeDelivery = () => {
  return (
    <section className="w-full h-48 md:h-56 relative">
      <Image
        alt="free-delivery-image"
        src="/images/packaged.png"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-white font-medium px-4 md:px-0">
        <h4 className="font-semibold text-xl md:text-2xl lg:text-4xl max-w-xs">
          Free delivery on all Babcock Orders
        </h4>
        <button className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-4 rounded-lg font-medium flex items-center transition duration-500 group">
          Shop now
          <ChevronRight className="transform group-hover:translate-x-2 transition-transform duration-700" />
        </button>
      </div>
    </section>
  );
};
