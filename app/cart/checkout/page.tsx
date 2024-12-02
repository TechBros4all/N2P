"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import OrderSummary from "@/components/cart/checkout/OrderSummary";
import DeliveryInformationForm from "@/components/cart/checkout/DeliveryInformationForm";
import PaymentInformationForm from "@/components/cart/checkout/PaymentInformationForm";

const CheckoutPage = () => {
  const pathname = usePathname();

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
              <BreadcrumbPage>{pathname.split("/")[1]}</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{pathname.split("/")[2]}</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:max-w-[600px] xl:max-w-[740px] flex flex-col gap-8">
            <OrderSummary />
            <DeliveryInformationForm />
          </div>
          <div className="flex-1">
            <PaymentInformationForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CheckoutPage;
