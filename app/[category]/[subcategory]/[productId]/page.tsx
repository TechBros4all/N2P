"use client";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/types/types";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProductById } from "../data";
import Image from "next/image";

const ProductPage = ({ params }: { params: { category: string; subcategory: string } }) => {
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
                                <div key={i} className="h-full w-full bg-red-500 rounded-[10px]"></div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-full bg-slate-500"></div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default ProductPage;
