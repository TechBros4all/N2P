import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const DiscountApplyer = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <p className="text-[16px] text-gray-900 font-semibold">Apply Discount</p>
      <div className="w-full flex items-center gap-4">
        <Input
          className="h-[48px] rounded-[30px] border-none outline-none ring-0 bg-gray-50 placeholder:text-gray-400 px-5"
          placeholder="Enter Coupon Code"
        />
        <Button className="h-[48px] rounded-[30px] bg-red-600 text-white hover:bg-red-600/90 font-semibold text-[16px]">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default DiscountApplyer;
