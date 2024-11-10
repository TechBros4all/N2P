import { Separator } from "@/components/ui/separator";
import OrderSummaryItem from "./OrderSummaryItem";
import React from "react";

export default function OrderSummary() {
  return (
    <div className="flex flex-col gap-6 p-8 border border-1 border-gray-200 rounded-[10px]">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="rounded-[30px] w-[36px] h-[38px] bg-red-600 flex items-center justify-center">
          <span className="text-white text-lg font-bold">2</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 5 }).map((_, index, array) => (
          <React.Fragment key={index}>
            <OrderSummaryItem />
            {index !== array.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
