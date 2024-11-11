import Picture from "@/components/Picture/picture";
import React from "react";
const empty = "/images/Marketing-image1.png";

const OrderSummaryItem = () => {
  return (
    <div className="w-full flex items-center gap-5">
      <Picture
        alt="product"
        src={empty}
        size={120}
        className="rounded-[10px]"
      />
      <div className="w-full flex justify-between py-5">
        <div>
          <p className="text-base md:text-lg font-semibold">
            Nike Blazer Low 77 Vintage X 1
          </p>
          <p className="text-xs md:text-sm font-medium text-gray-600">
            <span className="font-normal">color :</span> black
          </p>
          <p className="text-xs md:text-sm font-medium text-gray-600">
            <span className="font-normal">Size :</span> 42
          </p>
        </div>
        <p className="text-gray-900 font-semibold text-base md:text-[20px]">
          $100
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryItem;
