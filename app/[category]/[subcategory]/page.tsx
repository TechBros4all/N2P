// app/[category]/[subcategory]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ShoppingCart } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import AutoResizingGrid from "@/components/AutoResizingGrid/AutoResizingGrid";
import Link from "next/link";
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ITEMS_PER_PAGE = 9;

// async function fetchProducts(
//   category: string,
//   subcategory: string,
//   page: number = 1
// ) {
//   const res = await fetch(
//     `/api/products?category=${category}&subcategory=${subcategory}&page=${page}&limit=${ITEMS_PER_PAGE}`
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }
//   return res.json();
// }

async function fetchProducts(
  category: string,
  subcategory: string,
  page: number = 1
) {
  const res = await fetch(`/products.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  console.log(res)

  const data = await res.json();

  // Filter products based on category and subcategory
  //   const filteredProducts = data.products.filter(
  //     (product: any) =>
  //       product.category === category && product.subcategory === subcategory
  //   );

  const filteredProducts = data.products;

  // Paginate the results
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return {
    products: paginatedProducts,
    total: filteredProducts.length,
  };
}

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string; subcategory: string };
  searchParams: { page?: string };
}) {
  const pathname = `/${params.category}/${params.subcategory}`;
  const { category, subcategory } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const [products, setProducts] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts(category, subcategory, page);
      setProducts(data.products);
      setTotalResults(data.total);
    }

    loadProducts();
  }, [category, subcategory, page]);

  const handleAddToCart = () => {
    // action to add product to cart
    toast.success("Wow so easy !",
      {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide
      });
  };

  return (
    <main>
      <Header />
      <section className="container xl:px-28 py-4 min-h-screen">
        <Breadcrumb className="py-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:text-red-600">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Clothing</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${category}/${subcategory}`} className="hover:text-red-600">
                {subcategory}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <AutoResizingGrid gap={24} minWidth={300}>
          {products.map((product: any) => (
            <div key={product.id} className="group">
              <Link href={`/${category}/${subcategory}/${product.id}`}>
                <div className="relative h-[300px]">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="auto"
                    priority
                    quality={80}
                    className="object-cover"
                  />
                </div>
                <div className="my-4">
                  <div className="flex items-center justify-between">
                    <h2>{product.name}</h2>
                    <p className="flex items-center gap-0.5"><span className="text-xs">&#8358;</span>{product.price}</p>
                  </div>
                  <p>{product.subcategory}</p>
                </div>
              </Link>
              <button className="py-2 px-4 flex gap-2 w-fit outline-none border border-gray-200 rounded-full text-sm" onClick={handleAddToCart}>
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          ))}
        </AutoResizingGrid>
        {/* Pagination */}
        <div className="pagination my-8 space-y-4">
          <Separator />
          <Pagination>
            <PaginationContent className="w-full flex flex-col md:flex-row items-center justify-between p-2 md:p-4">
              <PaginationItem className="mb-2 md:mb-0">
                <PaginationPrevious
                  href={`/${category}/${subcategory}?page=${page > 1 ? page - 1 : 1}`}
                  className="text-sm md:text-base"
                />
              </PaginationItem>
              <div className="flex items-center gap-2 overflow-x-auto md:overflow-visible">
                {Array.from({
                  length: Math.ceil(totalResults / ITEMS_PER_PAGE),
                }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href={`/${category}/${subcategory}?page=${i + 1}`}
                      isActive={page === i + 1}
                      className="text-xs md:text-sm"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </div>
              <PaginationItem className="mt-2 md:mb-0">
                <PaginationNext
                  href={`/${category}/${subcategory}?page=${page < Math.ceil(totalResults / ITEMS_PER_PAGE) ? page + 1 : page}`}
                  className="text-sm md:text-base"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

        </div>
      </section>
      <Footer />
    </main>
  );
}
