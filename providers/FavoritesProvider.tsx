"use client";

import { createContext, useEffect, useState } from "react";
import Character from "@/model/character";
import Favorites from "@/model/favorites";

export const FavoritesContext = createContext<{
  favorites: Array<Character>;
  addFavorite: (character: Character) => void;
  removeFavorite: (character: Character) => void;
}>({
  favorites: [],
  addFavorite: (character: Character) => {},
  removeFavorite: (character: Character) => {},
});

export function FavoritesProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [favorites, setFavorites] = useState<Array<Character>>([]);

  const updateFavorites = () => setFavorites(Favorites.getFavorites());

  const addFavorite = (character: Character) => {
    Favorites.addFavorite(character);
    updateFavorites();
  };

  const removeFavorite = (character: Character) => {
    Favorites.removeFavorite(character);
    updateFavorites();
  };

  useEffect(() => updateFavorites(), []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
