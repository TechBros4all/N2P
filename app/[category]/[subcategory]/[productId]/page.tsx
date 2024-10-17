"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { PiStarFill } from "react-icons/pi";

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
import { fetchProductById } from "../data";

interface ProductPageProps {
  params: { category: string; subcategory: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const productId = Number(usePathname().split("/").pop()) || 0;
  const { category, subcategory } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await fetchProductById(productId);
        console.log(data);
        setProduct(data);
      } catch (err) {
        setError("Product not found.");
      }
    }
    fetchProduct();
  }, [productId]);

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

  if (!product) {
    return (
      <main>
        <Header />
        <section className="container xl:px-28 pt-4 pb-12 min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-700">Loading...</p>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <section className="container xl:px-28 pt-4 pb-12 min-h-screen text-gray-900">
        <Breadcrumb className="py-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Home</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{category}</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{subcategory}</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full h-[800px] lg:flex gap-10">
          <div className="w-full h-full flex flex-col gap-y-5">
            <div className="w-full h-[calc(100%-120px)] relative overflow-hidden rounded-[10px]">
              <Image
                src={product.imageUrl || "/default-image.png"}
                alt={product.name}
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
                    src={product.imageUrl || "/default-image.png"}
                    alt={`${product.name} - Image ${i + 1}`}
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
              <h1 className="font-semibold text-[32px]">{product.name}</h1>
              <p className="text-gray-500 text-[14px] font-normal">
                {product.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <PiStarFill
                      key={i}
                      color={i < product.rating ? "#F56630" : "#C6DDF7"}
                      className="cursor-pointer"
                    />
                  ))}
                </div>
                <span className="text-gray-700 text-[14px]">
                  ({product.reviewCount})
                </span>
              </div>
            </div>
            <div className="w-full">
              <p className="font-bold text-2xl">
                $ {product.price.toFixed(2)} or $
                {(product.price / 12).toFixed(2)}/month
              </p>
            </div>
            <div className="border-b border-b-gray-100 w-full h-[2px]" />
            <div className="w-full space-y-4">
              <p className="font-medium text-[16px]">Choose a Color</p>
              <div className="flex items-center gap-5">
                {product.colors?.map((color, i) => (
                  <div
                    key={i}
                    className="w-[44px] h-[44px] rounded-[40px]"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="border-b border-b-gray-100 w-full h-[2px]" />
            <div className="w-full">
              <p className="font-medium text-[16px] mb-2">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes?.map((size, i) => (
                  <button
                    key={i}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="border-b border-b-gray-100 w-full h-[2px]" />
            <div className="w-full">
              <p className="font-medium text-[16px] mb-2">Quantity</p>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 px-2 py-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="w-full">
              <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProductPage;
