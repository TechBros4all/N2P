import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/common/header";
import { Footer } from "./_components/common/footer";

export const metadata: Metadata = {
  title: "N2P | Nothing To Prove",
  description:
    'The official website of the "Nothing To Prove" streetwear brand.',
  openGraph: {
    title: " N2P (Nothing2prove) ",
    description:
      "a streetwear brand, that conveys the idea that true style and personal worth do not need validation from others.",
    tags: [
      "n2p",
      "N2P",
      "nth2prove",
      "Nth2prove",
      "nothing2prove",
      "nothing 2 prove",
      "Nothing to prove",
      "streetwear",
      "street",
      "fashion",
      "clothing",
      "apparel",
      "brand",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
