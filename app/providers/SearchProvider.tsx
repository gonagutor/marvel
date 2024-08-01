"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import Character from "../model/character";
import useCharacters from "../hooks/useCharacters";

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
  const [term, setTerm] = useState("");
  const { error, fetch, loading, characters } = useCharacters();

  const search = (term: string) => {
    setTerm(term);
    fetch(term);
  };

  return (
    <SearchContext.Provider
      value={{ term, search, characters, error, loading }}
    >
      {children}
    </SearchContext.Provider>
  );
}
