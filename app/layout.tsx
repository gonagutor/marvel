import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.scss";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel - Zara Web Challenge",
  description:
    "Pequeña aplicación para obtener información sobre personajes de Marvel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={robotoCondensed.className}>{children}</body>
    </html>
  );
}
