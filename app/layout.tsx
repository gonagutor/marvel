import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Header from "@/components/Header";
import Providers from "@/providers";
import "./globals.scss";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel - Zara Web Challenge",
  description: "Small aplication to retrieve information of Marvel characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
