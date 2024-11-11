import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6">
        <Image
          src="/images/logo.png"
          alt="logo"
          priority
          width={200}
          height={200}
          className="object-cover"
        />
        <span className="bg-red-100 rounded-lg text-red-600 px-4 py-2">
          404 Error
        </span>
        <p className="text-center text-3xl font-semibold">
          We&apos;ve lost this page
        </p>
        <p className="text-center">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          className="bg-red-600 hover:bg-red-600/90 w-full max-w-[200px] rounded-lg text-white text-center p-5 md:p-3"
          href="/"
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </>
  );
}
