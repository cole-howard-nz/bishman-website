import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Bishman Electrical",
  description: "",
};

const geistSans = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased py-2 overflow-x-hidden m-auto text-[#1c1d1f] bg-[#bdcdf4] flex flex-col min-h-screen`}>
        <section className="w-[98dvw] m-auto">
          <HeroSection />
          <section className='flex-grow my-4'>
            {children}
          </section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
