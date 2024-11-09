import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DeliveryInformationForm = () => {
  return (
    <div className="w-full p-8 flex flex-col gap-6 border border-1 border-gray-200 rounded-[10px]">
      <h1 className=" text-gray-900 font-semibold text-2xl">
        Delivery Information
      </h1>
      <div className="flex flex-col gap-5">
        <div className="w-full flex items-center gap-5">
          <div className="w-full">
            <Label htmlFor="firstName">First Name</Label>
            <Input type="text" id="firstName" placeholder="Placeholder" />
          </div>
          <div className="w-full">
            <Label htmlFor="lastName">Last Name</Label>
            <Input type="text" id="lastName" placeholder="Placeholder" />
          </div>
        </div>
        <div className="w-full">
          <Label htmlFor="address">Address </Label>
          <Input type="text" id="address" placeholder="Placeholder" />
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="w-full">
            <Label htmlFor="city">City/Town</Label>
            <Input type="text" id="city" placeholder="Placeholder" />
          </div>
          <div className="w-full">
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input type="number" id="zipCode" placeholder="Placeholder" />
          </div>
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="w-full">
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input type="number" id="mobileNumber" placeholder="Placeholder" />
          </div>
          <div className="w-full">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Placeholder" />
          </div>
        </div>
        <Button
          className="bg-red-600 hover:bg-red-600/90 max-w-[330px] rounded-[30px]"
          size="lg"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default DeliveryInformationForm;
