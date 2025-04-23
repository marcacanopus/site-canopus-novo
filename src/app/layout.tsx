import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import footerData from "@/data/footer.json";
import { CityProvider } from "@/context/cityContext";
import "./globals.css";

const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
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
    <html lang="en" className={`${fontPoppins.variable} antialiased`}>
      <body>
        <CityProvider>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer sections={footerData} />
        </CityProvider>
      </body>
    </html>
  );
}
