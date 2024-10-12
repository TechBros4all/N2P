import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "N2P | Nothing To Prove",
  description: "The official website of the 'Nothing To Prove' streetwear brand.",
  openGraph: {
    title: "N2P | Nothing To Prove",
    description: "A streetwear brand that conveys the idea that true style and personal worth do not need validation from others.",
    url: "https://www.nth2prove.shop",
    images: [
      {
        url: "https://www.nth2prove.shop/images/logo.png",
        width: 800,
        height: 600,
        alt: "N2P Brand Logo",
      },
    ],
    siteName: "N2P",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "N2P | Nothing To Prove",
    description: "A streetwear brand that conveys the idea that true style and personal worth do not need validation from others.",
    images: "https://www.nth2prove.shop/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "N2P",
    url: "https://www.nth2prove.shop",
    logo: "https://www.nth2prove.shop/images/logo.png",
    sameAs: [
      "https://twitter.com/yourTwitterHandle",
      "https://www.instagram.com/yourInstagramHandle",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.nth2prove.shop" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
