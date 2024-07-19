import Image from "next/image";
import Link from "next/link";

// Array for the left section
const leftSection = [
  { label: "Men", href: "" },
  { label: "Women", href: "" },
  { label: "Kids", href: "" },
  { label: "On Sale", href: "" },
];

// Array for the right section
const rightSection = [
  { label: "Profile", href: "/profile", icon: "/images/icons/user.svg" },
  {
    label: "All Categories",
    href: "all_categories",
    icon: "/images/icons/heart.svg",
  },
  { label: "Cart", href: "/cart", icon: "/images/icons/cart.svg" },
];
export const PcNav = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6 xl:px-20">
      {/* Left Section */}
      <div className="flex items-center space-x-28">
        <div className="text-gray-800 text-2xl font-bold">N2P</div>
        <div className="hidden md:flex space-x-6">
          {leftSection.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-900 font-semibold text-[16px]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-8">
        <input
          type="text"
          placeholder="Search here..."
          className="p-2 border rounded-md min-w-[200px] xl:w-[400px]"
        />
        {rightSection.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-gray-900 space-y-1 text-[16px] tracking-wide"
          >
            <div className="flex justify-center items-center">
              <Image src={item.icon} alt={item.label} width={20} height={20} />
            </div>
            <p className="font-semibold ">{item.label}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};
