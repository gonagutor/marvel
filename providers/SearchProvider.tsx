"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Character from "@/model/character";
import useCharacters from "@/hooks/useCharacters";
import { FavoritesContext } from "./FavoritesProvider";

const DEBOUNCE_TIME = 1000;

export const SearchContext = createContext<{
  term: string;
  search: (term: string) => void;
  characters?: Array<Character>;
  error?: any;
  loading: boolean;
}>({ term: "", search: (term: string) => {}, loading: false });

export function SearchProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [lastTerm, setLastTerm] = useState("");
  const [term, setTerm] = useState("");
  const { error, fetch, loading, characters } = useCharacters();
  const { isFavoriteSearch, favorites } = useContext(FavoritesContext);
  const [filteredFavorites, setFilteredFavorites] =
    useState<Array<Character>>(favorites);

  const filterFavorites = (search: string) =>
    favorites?.filter((char) =>
      char.name.toLowerCase().startsWith(search.toLowerCase())
    ) || [];

  useEffect(() => {
    const searchOnTypingEnd = setTimeout(() => {
      if (term != lastTerm) {
        if (isFavoriteSearch) setFilteredFavorites(filterFavorites(term));
        else fetch(term);

        setLastTerm(term);
      }
    }, DEBOUNCE_TIME);
    return () => clearTimeout(searchOnTypingEnd);
  }, [term]);

  useEffect(() => {
    if (isFavoriteSearch) setFilteredFavorites(filterFavorites(term));
  }, [favorites, isFavoriteSearch]);

  return (
    <SearchContext.Provider
      value={{
        term,
        search: setTerm,
        characters: isFavoriteSearch ? filteredFavorites : characters,
        error,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
