import React from "react";
import Picture from "../Picture/picture";
import { BasketIcon } from "@/pudlic/icons";
import { Plus, Minus } from "lucide-react";

const SheetCartItem = () => {
  return (
    <div className="flex w-full gap-4">
      <Picture
        src="/images/Marketing-image1.png"
        alt="product"
        width={200}
        height={180}
        className="rounded-[10px]"
      />
      <div className="py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <p className="max-w-[160px]">Luka 2 Basketball Shoes</p>
            <p>$100</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
              <span className="font-normal">color :</span> black
            </p>
            <p className="text-sm font-medium text-gray-600">
              <span className="font-normal">Size :</span> 42
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="bg-gray-100 rounded-[40px] w-full max-w-[128px] p-2 flex items-center justify-between font-semibold">
            <Minus size={20} className="text-gray-500" />
            <span className="text-[16px]  text-[#F56630]">1</span>
            <Plus size={20} className="text-[#F56630]" />
          </div>
          <BasketIcon width={24} height={24} color="#98A2B3" />
        </div>
      </div>
    </div>
  );
};

export default SheetCartItem;
