import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Emajon - ADHD-Informed Organization Tools",
    template: "%s | Emajon",
  },
  description:
    "ADHD-informed tools and community for managing your relationships, health, and finances.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.emajon.com",
    siteName: "Emajon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
