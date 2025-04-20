import type { Metadata } from "next";
import { Anuphan, Plus_Jakarta_Sans, Young_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/utils/Navbar";
import Footer from "./_components/utils/Footer";
import AOSInit from "@/lib/AOSInit";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const anuphanSans = Anuphan({
  variable: "--font-anuphan-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bebek Pintar",
  description: "Rumah Pintar Bersama Bebek Pintar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XKXE36EJMP" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XKXE36EJMP');
          `}
        </Script>
      </head>
      <body className={`${anuphanSans.variable} ${plusJakartaSans.variable} ${youngSerif.variable} antialiased overflow-x-hidden bg-white`}>
        <AOSInit />
        <Navbar />
        <div>
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
