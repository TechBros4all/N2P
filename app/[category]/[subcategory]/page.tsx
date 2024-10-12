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
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import AutoResizingGrid from "@/components/AutoResizingGrid/AutoResizingGrid";
import Link from "next/link";
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProductsByCategory } from "./data";

const ITEMS_PER_PAGE = 9;

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
      const data = await fetchProductsByCategory(category, subcategory, page);
      setProducts(data.products);
      setTotalResults(data.total);
    }
    loadProducts();
  }, [category, subcategory, page]);

  const handleAddToCart = () => {
    // action to add product to cart
    toast.success("Added to cart Succeefully !",
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

  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);

  const pageItems = () => {
    const items = [];

    if (totalPages <= 4) {
      // If total pages are 4 or less, show all pages
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={`/${category}/${subcategory}?page=${i}`}
              isActive={page === i}
              className="text-xs md:text-sm"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            href={`/${category}/${subcategory}?page=1`}
            isActive={page === 1}
            className="text-xs md:text-sm"
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      // Show ellipsis or second page
      if (page > 3) {
        items.push(<PaginationEllipsis key="ellipsis-start" className="text-xs md:text-sm" />);
      } else {
        items.push(
          <PaginationItem key={2}>
            <PaginationLink
              href={`/${category}/${subcategory}?page=2`}
              isActive={page === 2}
              className="text-xs md:text-sm"
            >
              2
            </PaginationLink>
          </PaginationItem>
        );
      }

      // Show current page if it's not first, second, or last
      if (page > 2 && page < totalPages - 1) {
        items.push(
          <PaginationItem key={page}>
            <PaginationLink
              href={`/${category}/${subcategory}?page=${page}`}
              isActive={true}
              className="text-xs md:text-sm"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // Show ellipsis or second-to-last page
      if (page < totalPages - 2) {
        items.push(<PaginationEllipsis key="ellipsis-end" className="text-xs md:text-sm" />);
      } else {
        items.push(
          <PaginationItem key={totalPages - 1}>
            <PaginationLink
              href={`/${category}/${subcategory}?page=${totalPages - 1}`}
              isActive={page === totalPages - 1}
              className="text-xs md:text-sm"
            >
              {totalPages - 1}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // Always show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href={`/${category}/${subcategory}?page=${totalPages}`}
            isActive={page === totalPages}
            className="text-xs md:text-sm"
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <main>
      <Header />
      <section className="container xl:px-28 py-4 min-h-screen">
        <div className="py-4 flex items-center justify-between flex-wrap">
          <Breadcrumb>
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
                <BreadcrumbPage>
                  {subcategory}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <p className="text-xs md:text-[16px] font-normal text-[#101928]">
            {totalResults > 0
              ? `Showing ${(page - 1) * ITEMS_PER_PAGE + 1} - ${Math.min(page * ITEMS_PER_PAGE, totalResults)} of ${totalResults} results`
              : "No results found"}
          </p>
        </div>
        <AutoResizingGrid gap={24} minWidth={300}>
          {products.map((product: any) => (
            <div key={product.id} className="group">
              <Link href={`/${category}/${product.subcategory}/${product.id}`}>
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
                {pageItems()}
              </div>
              <PaginationItem className="mt-2 md:mb-0">
                <PaginationNext
                  href={`/${category}/${subcategory}?page=${page < totalPages ? page + 1 : page}`}
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
