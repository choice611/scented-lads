import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scented Lads - Premium Scented Candles Wholesale",
  description: "Professional manufacturer of scented candles, reed diffusers, and home fragrance products. MOQ 500pcs. CE/FCC/MSDS certified.",
  keywords: "scented candles wholesale, soy wax candles, home fragrance, candle manufacturer China",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
