import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import footerData from "@/data/footer.json";
import { CityProvider } from "@/context/cityContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Construtora Canopus",
  description: "Construtora Canopus | Imóveis em BH. SP e RJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CityProvider>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer sections={footerData} />
        </CityProvider>
      </body>
    </html>
  );
}
