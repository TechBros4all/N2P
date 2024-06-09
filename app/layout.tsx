import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N2P",
  description: "Nothing to prove",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
