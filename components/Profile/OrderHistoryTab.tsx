import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Picture from "../Picture/picture";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const OrderHistoryTab = () => {
  return (
    <div className="h-full">
      <Tabs
        defaultValue="Completed"
        className="w-full h-full flex flex-col relative"
      >
        <TabsList className="grid w-full grid-cols-2 h-fit gap-4 bg-white sticky top-0 z-10">
          <TabsTrigger
            className="w-full items-start justify-start data-[state=active]:bg-red-100 bg-red-50 transition-all duration-500 ease-in-out border-b-2"
            style={{
              borderRight: "0",
            }}
            value="Completed"
          >
            Completed (10)
          </TabsTrigger>
          <TabsTrigger
            className="w-full items-start justify-start data-[state=active]:bg-red-100 bg-red-50 transition-all duration-500 ease-in-out border-b-2"
            style={{
              borderRight: "0",
            }}
            value="Cancelled"
          >
            Cancelled / Returned (10)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Completed" className="flex-1">
          <div className="w-full h-full flex flex-col gap-8">
            <div className="flex flex-col gap-4 p-4 h-full overflow-y-auto">
              {Array.from({ length: 10 }).map((_, index) => (
                <OrderSummaryItem key={index} />
              ))}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </TabsContent>
        <TabsContent value="Cancelled">
          <div className="w-full h-full flex flex-col gap-8">
            <div className="flex flex-col gap-4 p-4 h-full overflow-y-auto">
              {Array.from({ length: 10 }).map((_, index) => (
                <OrderSummaryItem
                  key={index}
                  status={index % 2 === 0 ? "Cancelled" : "Returned"}
                />
              ))}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrderHistoryTab;

function OrderSummaryItem({ status = "Delivered" }: { status?: string }) {
  // Example data; replace with actual props or data as necessary
  const deliveryDate = "November 10, 2024";

  // Set badge style based on the status
  const badgeStyles = {
    Delivered: "bg-green-100 text-green-700", // Success style
    Cancelled: "bg-red-100 text-red-700", // Cancelled style
    Returned: "bg-yellow-100 text-yellow-700", // Returned style
  };

  return (
    <div className="flex flex-col sm:flex-row items-start justify-between py-6 gap-4">
      {/* Product Image and Details Container */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <Picture
          src="/images/hero-image.png"
          alt="Product"
          width={150}
          height={150}
          className="rounded-lg w-full sm:w-[150px] h-auto object-cover"
        />

        {/* Product Details */}
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-lg font-semibold">
            Nike Blazer Low 77 Vintage X 1
          </h3>
          <p className="text-gray-600 text-sm">Color: Black</p>
          <p className="text-gray-600 text-sm">Size: 42</p>

          {/* Status Badge */}
          <div
            className={`text-xs font-medium px-2 py-1 rounded-full w-fit ${
              badgeStyles[status as keyof typeof badgeStyles]
            }`}
          >
            {status}
          </div>

          {/* Delivery Date */}
          <p className="text-gray-500 text-xs">
            {status === "Delivered"
              ? "Delivered on"
              : status === "Cancelled"
              ? "Cancelled on"
              : "Returned on"}
            : {deliveryDate}
          </p>
        </div>
      </div>

      {/* Leave Feedback Link */}
      <div className="w-full sm:w-auto">
        <Link
          href="#feedback"
          className="text-red-400 hover:underline transition-all duration-1000 ease-in-out text-sm font-medium block text-center sm:text-right"
        >
          Feedback
        </Link>
      </div>
    </div>
  );
}
