"use client";

import Image from "next/image";
import "./index.scss";
import { useContext } from "react";
import { FavoritesContext } from "@/app/providers/FavoritesProvider";

export default function Header() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <header className="header">
      <Image width={130} height={52} src="/marvel-logo.svg" alt="Marvel logo" />

      <button aria-label="View favorites">
        <Image width={24} height={24} src="/icons/heart.svg" alt="Favorites" />
        <span>{favorites.length}</span>
      </button>
    </header>
  );
}
