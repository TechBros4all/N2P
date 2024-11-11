"use client";

import SheetCartItem from "@/components/cart/SheetCartItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// Array for the left section
const leftSection = [
  { label: "Men", href: "/clothing/men" },
  { label: "Women", href: "/clothing/women" },
  { label: "Kids", href: "/clothing/kids" },
  { label: "On Sale", href: "/clothing/on-sale" },
];

// Array for the right section
const rightSection = [
  { label: "Profile", href: "/profile", icon: "/icons/user.svg" },
];

export const PcNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="w-full flex items-center justify-between py-6 xl:px-20">
      {/* Left Section */}
      <div className="flex items-center space-x-28">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={50}
            priority
            style={{
              width: "80px",
              height: "50px",
            }}
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          {leftSection.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-gray-900 font-semibold text-[16px] ${
                pathname === item.href ? "text-red-600" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Right Section */}
      <div className="flex items-center space-x-8">
        <div className="relative min-w-[200px] xl:w-[420px] mx-auto">
          <form>
            <input
              type="text"
              placeholder="Search here..."
              className="p-2 border rounded-md w-full pl-8"
              id="search"
            />
          </form>
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4">
            <Image
              src="/icons/search-icon.svg"
              alt="search-icon"
              fill
              className="o"
            />
          </div>
        </div>
        {rightSection.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-gray-900 space-y-1 text-[16px] tracking-wide"
          >
            <div className="flex justify-center items-center">
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
            <p
              className={`text-lg font-semibold ${
                pathname === item.href ? "text-red-600" : ""
              }`}
            >
              {item.label}
            </p>
          </Link>
        ))}
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex flex-col gap-1 justify-center items-center cursor-pointer">
              <Image
                src={"/icons/cart.svg"}
                alt={"cart"}
                width={20}
                height={20}
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <p className={`text-lg font-semibold`}>Cart</p>
            </div>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-[570px] p-10 flex flex-col gap-14">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-semibold">My Cart</h2>
                  <div className="rounded-[30px] w-[36px] h-[38px] bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                </div>
              </SheetTitle>
              <SheetDescription className="sr-only">Cart Page</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-6 overflow-y-scroll">
              {Array.from({ length: 5 }).map((_, index) => (
                <SheetCartItem key={index} />
              ))}
            </div>
            <SheetFooter className="w-full mt-auto">
              <div className="w-full flex flex-col gap-6">
                <Separator />
                <p className="text-sm font-medium text-gray-600 flex justify-between">
                  <span className="font-normal">Subtotal :</span> $100
                </p>
                <Separator />
                <SheetClose asChild>
                  <Button
                    className="bg-red-600 hover:bg-red-600/90 w-full rounded-[30px]"
                    size="lg"
                    onClick={() => router.push("/cart/checkout")}
                  >
                    Checkout
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
