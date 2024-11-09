import React from "react";
import DiscountApplyer from "./DiscountApplyer";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CardInformationForm from "./CardInformationForm";
import { Button } from "@/components/ui/button";

const PaymentInformationForm = () => {
  return (
    <div className="w-full border border-gray-200 rounded-[10px] p-8 flex flex-col gap-8">
      <h2 className="text-2xl font-semibold">Payment Information</h2>
      <div className="flex flex-col gap-4">
        <DiscountApplyer />
        <Separator />
        <div className="flex flex-col gap-5">
          <p className="text-[16px] text-gray-900 font-semibold">Pay With</p>
          <div className="flex flex-col gap-4">
            <RadioGroup defaultValue="card">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="r1" />
                <Label htmlFor="r1" className="cursor-pointer">
                  Debit or Credit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="delivery" id="r2" />
                <Label htmlFor="r2" className="cursor-pointer">
                  Pay on Delivery
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <Separator />
        <CardInformationForm />
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="font-normal text-gray-600 text-sm">Sub Total</p>
            <p className="font-medium text-gray-600 text-sm">$100</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-normal text-gray-600 text-sm">Tax (10%)</p>
            <p className="font-medium text-gray-600 text-sm">$10</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-normal text-gray-600 text-sm">Shipping</p>
            <p className="font-medium text-gray-600 text-sm">$0</p>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <p className="font-normal text-gray-600 text-sm">Total</p>
            <p className="font-medium text-gray-800 text-[16px]">$110</p>
          </div>
          <Button
            className="bg-red-600 hover:bg-red-600/90 max-w-[360px] rounded-[30px]"
            size="lg"
          >
            Pay $110
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformationForm;
