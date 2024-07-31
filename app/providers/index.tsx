"use client";

import React from "react";
import { FavoritesProvider } from "./FavoritesProvider";
import { SearchProvider } from "./SearchProvider";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FavoritesProvider>
      <SearchProvider>{children}</SearchProvider>
    </FavoritesProvider>
  );
}
