"use client";

import { createContext, useEffect, useState } from "react";
import Character from "@/model/character";
import useCharacters from "@/hooks/useCharacters";

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

  useEffect(() => {
    const searchOnTypingEnd = setTimeout(() => {
      if (term != lastTerm) {
        fetch(term);
        setLastTerm(term);
      }
    }, DEBOUNCE_TIME);
    return () => clearTimeout(searchOnTypingEnd);
  }, [term]);

  return (
    <SearchContext.Provider
      value={{ term, search: setTerm, characters, error, loading }}
    >
      {children}
    </SearchContext.Provider>
  );
}
