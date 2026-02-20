import type { Metadata } from "next";
import { cookies } from "next/headers";
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
    default: "Emajon - Investing for Life",
    template: "%s | Emajon",
  },
  description:
    "Investing in your financial future, your health, and your community. Content and community for brains that work differently.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.emajon.com",
    siteName: "Emajon",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("stealth_access")?.value === "granted";

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header hasAccess={hasAccess} />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
