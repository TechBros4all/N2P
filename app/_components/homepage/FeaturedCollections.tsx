import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FeaturedCollections = () => {
  return (
    <section className="w-full space-y-5">
      <div className="w-full py-2 flex items-center justify-between">
        <h4 className="text-gray-900 font-medium text-xl md:text-3xl">
          Featured Collections
        </h4>
        <Link
          href="/collections"
          className="text-red-600 flex items-center gap-2 text-sm"
        >
          View All
          <Plus size={20} />
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full h-[60vh] md:h-screen rounded-xl overflow-hidden">
          <Image
            src="/images/Marketing-image3.png"
            alt="marketing image 3"
            fill
            priority
            sizes="auto"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-10 z-10" />
          <span className="absolute top-5 left-5 bg-red-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium z-20">
            WORLD N2P LADIES DAY
          </span>
          <div className="absolute bottom-10 left-5 md:left-10 z-20 text-white">
            <h1 className="text-xl md:text-4xl font-normal leading-tight">
              Free Delivery on all dresses <br />
              ordered until <span className="font-bold">November 30</span>
            </h1>
            <p>All the sleekest dress for you to twin with your girlfriends.</p>
            <button className="bg-red-600 text-white px-6 py-3 mt-4 rounded-lg font-medium flex items-center transition duration-500 group">
              Shop now
              <ChevronRight className="transform group-hover:translate-x-2 transition-transform duration-700 ml-2" />
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4 h-[40vh] md:h-screen">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/Marketing-image2.png"
              alt="marketing image 1"
              fill
              priority
              sizes="auto"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/Marketing-image1.png"
              alt="marketing image 2"
              fill
              priority
              sizes="auto"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
