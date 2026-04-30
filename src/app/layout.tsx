import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AckSites | Nantucket Web Design Studio",
  description: "Hand-built websites for Nantucket businesses. Custom design from a local studio.",
  keywords: "Nantucket web design, Nantucket website, island web designer, ACK web studio",
  openGraph: {
    title: "AckSites | Nantucket Web Design Studio",
    description: "Web design and hosting for Nantucket businesses.",
    url: "https://acksites.com",
    siteName: "AckSites",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
