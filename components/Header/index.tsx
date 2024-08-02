"use client";

import { useContext } from "react";
import Image from "next/image";
import { FavoritesContext } from "@/providers/FavoritesProvider";
import "./index.scss";
import { useRouter } from "next/navigation";

export default function Header() {
  const { favorites, setIsFavoriteSearch } = useContext(FavoritesContext);
  const { push } = useRouter();
  return (
    <header className="header">
      <a href="/">
        <Image
          width={130}
          height={52}
          src="/marvel-logo.svg"
          alt="Marvel logo"
          priority={true}
        />
      </a>

      <button
        aria-label="View favorites"
        onClick={() => {
          push("/");
          setIsFavoriteSearch(true);
        }}
      >
        <Image width={24} height={24} src="/icons/heart.svg" alt="Favorites" />
        <span>{favorites.length}</span>
      </button>
    </header>
  );
}
