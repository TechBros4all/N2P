"use client";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/types/types";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProductById } from "../data";
import Image from "next/image";
import { PiStarFill } from "react-icons/pi";

const ProductPage = ({
  params,
}: {
  params: { category: string; subcategory: string };
}) => {
  const productId = usePathname().split("/").pop() || "";
  const { category, subcategory } = params;
  const [fetchedProduct, setFetchedProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await fetchProductById(productId);
        setFetchedProduct(data);
      } catch (err) {
        setError("Product not found.");
      }
    }
    fetchProduct();
  }, [productId]);

  // Handle the "not found" case.
  if (error) {
    return (
      <main>
        <Header />
        <section className="container xl:px-28 pt-4 pb-12 min-h-screen flex flex-col items-center justify-center">
          <p className="text-xl text-gray-700 mb-4">{error}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </section>
        <Footer />
      </main>
    );
  }

  // Return the product details if found.
  return (
    <main>
      <Header />
      <section className="container xl:px-28 pt-4 pb-12 min-h-screen">
        <Breadcrumb className="py-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Home</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Clothing</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{subcategory}</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{fetchedProduct?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full h-[800px] lg:flex gap-10">
          <div className="w-full h-full flex flex-col gap-y-5">
            <div className="w-full h-[calc(100%-120px)] relative overflow-hidden rounded-[10px]">
              <Image
                src={fetchedProduct?.imageUrl || "/default-image.png"}
                alt={fetchedProduct?.name || "Product image"}
                fill
                sizes="auto"
                priority
              />
            </div>
            <div className="w-full h-[120px] flex items-center gap-5 justify-between">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-full w-full rounded-[10px] relative overflow-hidden"
                >
                  <Image
                    src={fetchedProduct?.imageUrl || "/default-image.png"}
                    alt={fetchedProduct?.name || "Product image"}
                    fill
                    sizes="auto"
                    priority
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full space-y-6">
            <div className="w-full space-y-3">
              <h1 className="text-gray-900 font-semibold text-[32px]">
                Nike Blazer Low 77 Vintage
              </h1>
              <p className="text-gray-500 text-[14px] font-normal">
                Praised by the streets for its classic simplicity and comfort,
                the Nike Blazer Low 77 Vintage returns with its low-profile
                style and heritage b-ball looks.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <PiStarFill color="#F56630" className="cursor-pointer" />
                  <PiStarFill color="#F56630" className="cursor-pointer" />
                  <PiStarFill color="#F56630" className="cursor-pointer" />
                  <PiStarFill color="#F56630" className="cursor-pointer" />
                  <PiStarFill color="#C6DDF7" className="cursor-pointer" />
                </div>
                <span className="text-gray-700 text-[14px]">(121)</span>
              </div>
            </div>
            <div className="w-full">
              <p className="text-gray-900 font-bold text-2xl">
                $ 190.20 or $129.99/month
              </p>
            </div>
            <div className="border-b border-b-gray-100 w-full h-[2px]" />
            <div className="w-full">color</div>
            <div className="border-b border-b-gray-100 w-full h-[2px]" />
            <div className="w-full">size</div>
            <div className="border-b border-b-gray-100 w-full h-[2px]" />
            <div className="w-full">quantity</div>
            <div className="w-full"></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProductPage;
