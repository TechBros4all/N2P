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
import { Minus, Plus } from "lucide-react";
import storeIcon from "@/public/icons/store.svg";

interface ProductPageProps {
  params: { category: string; subcategory: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const productId = Number(usePathname().split("/").pop()) || 0;
  const { category, subcategory } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
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
        <section className="container xl:px-28 pt-4 pb-12 min-h-screen flex flex-col items-center justify-center px-4">
          <p className="text-xl text-gray-700 mb-4 text-center">{error}</p>
          <button
            className="bg-red-600 hover:bg-red-600/90 w-full max-w-[200px] rounded-lg text-white text-center p-5 md:p-3"
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
        <section className="container xl:px-28 pt-4 pb-12 min-h-screen flex items-center justify-center px-4">
          <p className="text-xl text-gray-700">Loading...</p>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <section className="container xl:px-28 pt-4 pb-12 min-h-screen h-fit text-gray-900 px-4 sm:px-6">
        <Breadcrumb className="py-4 overflow-x-auto">
          <BreadcrumbList className="flex flex-wrap">
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
        <div className="w-full flex flex-col lg:flex-row gap-10">
          {/* Product Images */}
          <div className="w-full lg:w-1/2 space-y-5">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[665px] xl:h-[800px] relative overflow-hidden rounded-[10px]">
              <Image
                src={product.imageUrl || "/default-image.png"}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="w-full h-[80px] sm:h-[120px] flex items-center gap-3 sm:gap-5 justify-between">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-full w-full rounded-[10px] relative overflow-hidden"
                >
                  <Image
                    src={product.imageUrl || "/default-image.png"}
                    alt={`${product.name} - Image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12.5vw, 8.33vw"
                    priority
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5">
            <div className="w-full space-y-3">
              <h1 className="font-semibold text-2xl sm:text-[32px]">
                {product.name}
              </h1>
              <p className="text-gray-500 text-[12px] sm:text-[14px] font-normal">
                {product.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <PiStarFill
                      key={i}
                      color={i < product.rating ? "#F56630" : "#C6DDF7"}
                      className="cursor-pointer text-sm sm:text-base"
                    />
                  ))}
                </div>
                <span className="text-gray-700 text-[12px] sm:text-[14px]">
                  ({product.reviewCount})
                </span>
              </div>
            </div>
            <div className="w-full">
              <p className="font-bold text-xl sm:text-2xl">
                $ {product.price.toFixed(2)} or $
                {(product.price / 12).toFixed(2)}/month
              </p>
            </div>
            <div className="bg-gray-100 w-full h-[2px]" />

            {/* Color Selection */}
            <div className="w-full space-y-4">
              <p className="font-medium text-[14px] sm:text-[16px]">
                Choose a Color
              </p>
              <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto pb-2">
                {product.colors?.map((color, i) => (
                  <div
                    onClick={() => setSelectedColor(color)}
                    key={i}
                    className={`flex-shrink-0 w-[48px] h-[48px] sm:w-[58px] sm:h-[58px] rounded-full border cursor-pointer p-[4px] sm:p-[6px] transition overflow-hidden ${
                      selectedColor === color
                        ? "border-[2px]"
                        : "border-transparent"
                    }`}
                    style={{
                      borderColor:
                        selectedColor === color ? "#F56630" : "transparent",
                    }}
                  >
                    <div
                      style={{ backgroundColor: color }}
                      className="w-full h-full rounded-full shadow-black shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 w-full h-[2px]" />

            {/* Size Selection */}
            <div className="w-full space-y-4">
              <p className="font-medium text-[14px] sm:text-[16px]">
                Select Size
              </p>
              <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto pb-2">
                {product.sizes?.map((size, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-shrink-0 rounded-[40px] w-[60px] sm:w-[70px] h-[48px] sm:h-[56px] p-[4px] sm:p-[6px] border cursor-pointer transition ${
                      selectedSize === size
                        ? "border-[2px] border-[#F56630]"
                        : "border-transparent"
                    }`}
                  >
                    <button
                      className={`px-3 sm:px-4 py-1 sm:py-2 ${
                        selectedSize === size
                          ? "bg-[#FFECE5] text-[#F56630]"
                          : "bg-gray-100 text-gray-600"
                      } text-[12px] sm:text-[14px] rounded-[40px] w-full h-full`}
                    >
                      {size}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 w-full h-[2px]" />

            {/* Quantity */}
            <div className="w-full space-y-4 sm:space-y-6">
              <p className="font-medium text-[14px] sm:text-[16px]">Quantity</p>
              <div className="w-full flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-gray-100 rounded-[40px] w-full sm:w-[205px] flex items-center justify-between py-3 sm:py-5 px-[20px] sm:px-[30px] font-semibold">
                  <Minus size={20} className="text-gray-500" />
                  <span className="text-[16px] sm:text-[20px] text-[#F56630]">
                    1
                  </span>
                  <Plus size={20} className="text-[#F56630]" />
                </div>
                <div className="max-w-full sm:max-w-[125px] text-gray-500 font-normal text-[12px] sm:text-[14px] text-center sm:text-left">
                  <p>
                    Only <span className="text-[#F56630]">12 Items</span> Left!
                    Don&rsquo;t miss it
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full font-semibold text-[14px] sm:text-[16px] flex flex-col sm:flex-row items-center gap-4">
              <button className="rounded-[30px] w-full sm:w-[194px] h-[50px] sm:h-[55px] flex items-center justify-center bg-[#EB5017] text-white border-none outline-none mb-2 sm:mb-0">
                Buy Now
              </button>
              <button className="rounded-[30px] w-full sm:w-[194px] h-[50px] sm:h-[55px] flex items-center justify-center border-[1.5px] border-[#F56630] text-[#F56630]">
                Add to Cart
              </button>
            </div>

            {/* Free Delivery */}
            <div className="w-full bg-[#D9D9D9] py-5 sm:py-7 px-5 sm:px-8 rounded-[10px]">
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src={storeIcon}
                  alt="Store Icon"
                  width={28}
                  height={28}
                  priority
                  className="w-[28px] h-[28px] sm:w-[33.12px] sm:h-[32px]"
                />
                <div className="space-y-1">
                  <p className="text-gray-900 font-semibold text-[14px] sm:text-[16px]">
                    Free Delivery
                  </p>
                  <p className="text-gray-500 text-[12px] sm:text-[14px] font-normal underline">
                    Enter your Postal Code for Delivery Availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProductPage;
