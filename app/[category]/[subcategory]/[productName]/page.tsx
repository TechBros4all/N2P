"use client";

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
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{product} is my id</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                ProductPage
            </section>
        </main>
    )
}

export default ProductPage