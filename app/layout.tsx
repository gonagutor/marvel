import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
