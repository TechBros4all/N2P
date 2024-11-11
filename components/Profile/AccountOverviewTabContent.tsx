import React from "react";
import { Separator } from "../ui/separator";

const AccountOverviewTabContent = () => {
  return (
    <div className="w-full h-full border-2 p-6 flex flex-col gap-4 rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">Account Overview</h1>
      </div>
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {/* Personal Information Card */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 border-2 p-4 rounded-lg h-full">
          <h2 className="text-lg font-bold">Personal Information</h2>
          <Separator />
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-sm text-gray-500">First Name:</p>
            <p className="text-sm text-gray-800">John Doe</p>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-sm text-gray-500">Last Name:</p>
            <p className="text-sm text-gray-800">John Doe</p>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-sm text-gray-500">Email:</p>
            <p className="text-sm text-gray-800">john.doe@example.com</p>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-sm text-gray-500">Phone Number:</p>
            <p className="text-sm text-gray-800">+234 8012345678</p>
          </div>
        </div>

        {/* Address Card */}
        <div className="w-full md:flex-1 flex flex-col gap-4 border-2 p-4 rounded-lg h-full">
          <div className="flex items-center justify-between flex-wrap">
            <h2 className="text-lg font-bold">Address</h2>
          </div>
          <Separator />
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between flex-wrap">
              <p className="text-sm text-gray-500">Your shipping address:</p>
              <p className="text-sm text-gray-800">
                Address with street Information up to town info, city, state
              </p>
            </div>
            <div className="flex items-center justify-between flex-wrap">
              <p className="text-sm text-gray-500">Phone Number:</p>
              <p className="text-sm text-gray-800">+234 8012345678</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverviewTabContent;
