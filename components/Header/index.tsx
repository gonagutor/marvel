"use client";

import { useContext } from "react";
import Image from "next/image";
import { FavoritesContext } from "@/providers/FavoritesProvider";
import "./index.scss";

export default function Header() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <header className="header">
      <a href="/">
        <Image
          width={130}
          height={52}
          src="/marvel-logo.svg"
          alt="Marvel logo"
        />
      </a>

      <button aria-label="View favorites">
        <Image width={24} height={24} src="/icons/heart.svg" alt="Favorites" />
        <span>{favorites.length}</span>
      </button>
    </header>
  );
}
