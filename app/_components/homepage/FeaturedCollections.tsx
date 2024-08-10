import { Plus } from "lucide-react";
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
      <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-full rounded-xl relative overflow-hidden">
          <Image
            src="/images/Marketing-image3.png"
            alt="marketing image 3"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="w-full h-full grid grid-rows-2 gap-4 ">
          <div className="w-full rounded-xl relative overflow-hidden">
            <Image
              src="/images/Marketing-image2.png"
              alt="marketing image 1"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="w-full rounded-xl relative overflow-hidden">
            <Image
              src="/images/Marketing-image1.png"
              alt="marketing image 2"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
