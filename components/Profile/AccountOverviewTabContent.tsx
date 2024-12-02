"use client";
import React, { useState } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Pencil, Save, X } from "lucide-react";

// Type definitions
interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface Address {
  shippingAddress: string;
  addressPhoneNumber: string;
}

const AccountOverviewTabContent: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+234 8012345678",
  });
  const [address, setAddress] = useState<Address>({
    shippingAddress:
      "Address with street Information up to town info, city, state",
    addressPhoneNumber: "+234 8012345678",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Here you would typically also call an API to save the changes
    setIsEditing(false);
  };

  const handleInputChange =
    <T extends PersonalInfo | Address>(
      setter: React.Dispatch<React.SetStateAction<T>>
    ) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

  const renderPersonalInfoContent = () => {
    if (!isEditing) {
      return (
        <>
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-sm text-gray-500 w-1/2">First Name:</p>
            <p className="text-sm text-gray-800 w-1/2 text-right">
              {personalInfo.firstName}
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-sm text-gray-500 w-1/2">Last Name:</p>
            <p className="text-sm text-gray-800 w-1/2 text-right">
              {personalInfo.lastName}
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-sm text-gray-500 w-1/2">Email:</p>
            <p className="text-sm text-gray-800 w-1/2 text-right">
              {personalInfo.email}
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-sm text-gray-500 w-1/2">Phone Number:</p>
            <p className="text-sm text-gray-800 w-1/2 text-right">
              {personalInfo.phoneNumber}
            </p>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
          <label className="text-sm text-gray-500 w-full sm:w-1/3 mb-1 sm:mb-0">
            First Name:
          </label>
          <input
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleInputChange(setPersonalInfo)}
            className="text-sm text-gray-800 border rounded px-2 py-1 w-full sm:w-2/3"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
          <label className="text-sm text-gray-500 w-full sm:w-1/3 mb-1 sm:mb-0">
            Last Name:
          </label>
          <input
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleInputChange(setPersonalInfo)}
            className="text-sm text-gray-800 border rounded px-2 py-1 w-full sm:w-2/3"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
          <label className="text-sm text-gray-500 w-full sm:w-1/3 mb-1 sm:mb-0">
            Email:
          </label>
          <input
            name="email"
            value={personalInfo.email}
            onChange={handleInputChange(setPersonalInfo)}
            className="text-sm text-gray-800 border rounded px-2 py-1 w-full sm:w-2/3"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
          <label className="text-sm text-gray-500 w-full sm:w-1/3 mb-1 sm:mb-0">
            Phone Number:
          </label>
          <input
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            onChange={handleInputChange(setPersonalInfo)}
            className="text-sm text-gray-800 border rounded px-2 py-1 w-full sm:w-2/3"
          />
        </div>
      </>
    );
  };

  const renderAddressContent = () => {
    if (!isEditing) {
      return (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-sm text-gray-500 w-1/2">
              Your shipping address:
            </p>
            <p className="text-sm text-gray-800 w-1/2 text-right">
              {address.shippingAddress}
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-sm text-gray-500 w-1/2">Phone Number:</p>
            <p className="text-sm text-gray-800 w-1/2 text-right">
              {address.addressPhoneNumber}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-2">
          <label className="text-sm text-gray-500 w-full sm:w-1/3 mb-1 sm:mb-0">
            Shipping Address:
          </label>
          <textarea
            name="shippingAddress"
            value={address.shippingAddress}
            onChange={handleInputChange(setAddress)}
            className="text-sm text-gray-800 border rounded px-2 py-1 w-full sm:w-2/3 max-h-[100px]"
            rows={3}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
          <label className="text-sm text-gray-500 w-full sm:w-1/3 mb-1 sm:mb-0">
            Phone Number:
          </label>
          <input
            name="addressPhoneNumber"
            value={address.addressPhoneNumber}
            onChange={handleInputChange(setAddress)}
            className="text-sm text-gray-800 border rounded px-2 py-1 w-full sm:w-2/3"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto h-full border-2 p-4 sm:p-6 flex flex-col gap-4 rounded-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold w-full text-center sm:text-left">
          Account Overview
        </h1>
        <div className="flex items-center justify-center sm:justify-end w-full">
          {!isEditing ? (
            <Button
              variant="outline"
              size="icon"
              onClick={handleEditToggle}
              className="h-8 w-8"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleSave}
                className="h-8 w-8 text-green-600 border-green-600 hover:bg-green-50"
              >
                <Save className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleEditToggle}
                className="h-8 w-8 text-red-600 border-red-600 hover:bg-red-50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Personal Information Card */}
        <div className="w-full flex flex-col gap-4 border-2 p-4 rounded-lg h-full">
          <h2 className="text-lg font-bold">Personal Information</h2>
          <Separator />
          {renderPersonalInfoContent()}
        </div>

        {/* Address Card */}
        <div className="w-full flex flex-col gap-4 border-2 p-4 rounded-lg h-full">
          <div className="flex items-center justify-between flex-wrap">
            <h2 className="text-lg font-bold">Address</h2>
          </div>
          <Separator />
          {renderAddressContent()}
        </div>
      </div>
    </div>
  );
};

export default AccountOverviewTabContent;
