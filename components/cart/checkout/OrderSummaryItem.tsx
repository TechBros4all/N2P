import Picture from "@/components/Picture/picture";
import { Minus } from "lucide-react";
import { BasketIcon } from "@/public/icons";
import { Plus } from "lucide-react";
import React from "react";
const empty = "/images/Marketing-image1.png";

const OrderSummaryItem = () => {
  const [basketColor, setBasketColor] = React.useState("#98A2B3");

  return (
    <div className="w-full flex flex-col sm:flex-row md:items-center gap-5 md:gap-3">
      <Picture
        alt="product"
        src={empty}
        size={120}
        className="rounded-[10px] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-cover"
      />
      <div className="w-full flex flex-col sm:flex-row justify-between py-2 sm:py-5">
        <div className="flex flex-col gap-2 sm:gap-3 w-full">
          <div>
            <p className="text-sm sm:text-base md:text-lg font-semibold">
              Nike Blazer Low 77 Vintage X 1
            </p>
            <p className="text-xs md:text-sm font-medium text-gray-600">
              <span className="font-normal">color :</span> black
            </p>
            <p className="text-xs md:text-sm font-medium text-gray-600">
              <span className="font-normal">Size :</span> 42
            </p>
          </div>
          <div className="w-full flex items-center md:justify-between gap-2">
            <div className="bg-gray-100 rounded-[40px] w-full max-w-[110px] sm:max-w-[128px] p-1.5 sm:p-2 flex items-center justify-between font-semibold">
              <Minus size={18} className="text-gray-500 cursor-pointer" />
              <span className="text-[14px] sm:text-[16px] text-[#F56630]">
                1
              </span>
              <Plus size={18} className="text-[#F56630] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex md:flex-col items-start md:items-end justify-between">
          <p className="text-gray-900 font-semibold text-sm sm:text-base md:text-[20px] mt-2 sm:mt-0">
            $100
          </p>
          <div
            className="cursor-pointer"
            onMouseEnter={() => setBasketColor("#dc2626")}
            onMouseLeave={() => setBasketColor("#98A2B3")}
          >
            <BasketIcon width={20} height={20} color={basketColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryItem;
