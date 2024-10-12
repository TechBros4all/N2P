"use client";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation"

const ProductPage = ({ params }
    : { params: { category: string, subcategory: string } }
) => {
    const product = usePathname().split('/').pop()
    const { category, subcategory } = params;
    console.log(product)
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
                            <BreadcrumbPage>
                                {subcategory}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{product} is my id</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="w-full bg-black h-[845px] lg:flex gap-10">
                    <div className="w-full h-full bg-slate-500 space-y-5">
                        <div className="w-full h-5/6 bg-blue-500 relative overflow-hidden rounded-[10px]"></div>
                        <div className="w-full h-1/6 bg-blue-500"></div>
                    </div>
                    <div className="w-full h-full bg-slate-500"></div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default ProductPage