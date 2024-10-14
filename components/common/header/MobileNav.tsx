import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Menu, ShoppingCart, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

// Array for the left section
const leftSection = [
  { label: "Men", href: "/clothing/men" },
  { label: "Women", href: "/clothing/women" },
  { label: "Kids", href: "/clothing/kids" },
  { label: "On Sale", href: "/clothing/on-sale" },
];

// Array for the right section
const rightSection = [
  { label: "Profile", href: "/profile", icon: <UserRound size={24} /> },
  { label: "Cart", href: "/cart", icon: <ShoppingCart size={24} /> },
];

export const MobileNav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Allow scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the body style when component unmounts or menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 bg-white">
      <Link href={"/"}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={60}
          height={40}
          style={{
            width: "60px",
            height: "40px",
          }}
        />
      </Link>

      <button
        className="flex items-center justify-center focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white text-4xl focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-16 text-white">
          {leftSection.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-lg font-semibold ${pathname === item.href ? "text-red-600" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex space-x-8 mt-8">
            {rightSection.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-lg font-semibold ${pathname === item.href ? "text-red-600" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex flex-col items-center">
                  {item.icon}
                  <p>{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
