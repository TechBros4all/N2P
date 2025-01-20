import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "N2P | Nothing To Prove",
  description:
    "The official website of the 'Nothing To Prove' streetwear brand.",
  openGraph: {
    title: "N2P | Nothing To Prove",
    description:
      "A streetwear brand that conveys the idea that true style and personal worth do not need validation from others.",
    url: "https://www.nth2prove.shop",
    images: [
      {
        url: "https://instagram.flos2-2.fna.fbcdn.net/v/t51.29350-15/437589249_798363092341272_989318966013956397_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flos2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=NzDrchhfjyIQ7kNvgHTLD8G&_nc_gid=3ce1c4d82bf44e04b97b17e3531aa169&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM0NDc0NjM2NTY4Njc2NzU1Mg%3D%3D.3-ccb7-5&oh=00_AYAWPn4-89jrk16ew_bCRkZT-S9yLE8r8mWdG8mTdwEGxA&oe=67943EFA&_nc_sid=7a9f4b",
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
    description:
      "A streetwear brand that conveys the idea that true style and personal worth do not need validation from others.",
    images:
      "https://instagram.flos2-2.fna.fbcdn.net/v/t51.29350-15/437589249_798363092341272_989318966013956397_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flos2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=NzDrchhfjyIQ7kNvgHTLD8G&_nc_gid=3ce1c4d82bf44e04b97b17e3531aa169&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM0NDc0NjM2NTY4Njc2NzU1Mg%3D%3D.3-ccb7-5&oh=00_AYAWPn4-89jrk16ew_bCRkZT-S9yLE8r8mWdG8mTdwEGxA&oe=67943EFA&_nc_sid=7a9f4b",
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
    logo: "https://instagram.flos2-2.fna.fbcdn.net/v/t51.29350-15/437589249_798363092341272_989318966013956397_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flos2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=NzDrchhfjyIQ7kNvgHTLD8G&_nc_gid=3ce1c4d82bf44e04b97b17e3531aa169&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM0NDc0NjM2NTY4Njc2NzU1Mg%3D%3D.3-ccb7-5&oh=00_AYAWPn4-89jrk16ew_bCRkZT-S9yLE8r8mWdG8mTdwEGxA&oe=67943EFA&_nc_sid=7a9f4b",
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
      <body
        suppressHydrationWarning
        className={`antialiased ${inter.className}`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
