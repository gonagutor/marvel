import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Header from "@/components/Header";
import { FavoritesProvider } from "@/providers/FavoritesProvider";
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
        <FavoritesProvider>
          <Header />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
