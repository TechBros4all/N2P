// app/[category]/[subcategory]/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/app/_components/common/header";
import { Footer } from "@/app/_components/common/footer";
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

const ITEMS_PER_PAGE = 15;

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

  return (
    <main>
      <Header />
      <section className="container xl:px-28 py-4 min-h-screen">
        <Breadcrumb className="py-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${category}/${subcategory}`}>
                {subcategory}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Clothing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <div key={product.id} className="group">
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
              <h2>{product.name}</h2>
              <p>{product.subcategory}</p>
              <p>{product.price}</p>
              <button className="py-2 px-4 flex gap-2 outline-none border border-gray-200 rounded-full text-sm">
                <ShoppingCart size={20} />
                buy now
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination my-8">
          <ul className="flex gap-2">
            {Array.from({
              length: Math.ceil(totalResults / ITEMS_PER_PAGE),
            }).map((_, i) => (
              <li key={i}>
                <Link
                  href={`/${category}/${subcategory}?page=${i + 1}`}
                  passHref
                >
                  <p
                    className={`p-2 ${
                      page === i + 1 ? "bg-gray-800 text-white" : ""
                    }`}
                  >
                    {i + 1}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
