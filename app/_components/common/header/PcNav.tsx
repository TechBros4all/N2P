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
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={50}
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
              className="text-gray-900 font-semibold text-[16px]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-8">
        <div className="relative min-w-[200px] xl:w-[420px] mx-auto">
          <input
            type="text"
            placeholder="Search here..."
            className="p-2 border rounded-md w-full pl-8"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4">
            <Image
              src="/images/icons/search-icon.svg"
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
            <p className="font-semibold">{item.label}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};
