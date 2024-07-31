"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

export const SearchContext = createContext<{
  term: string;
  setTerm?: Dispatch<SetStateAction<string>>;
}>({ term: "", setTerm: undefined });

export function SearchProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [term, setTerm] = useState("");

  return (
    <SearchContext.Provider value={{ term, setTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
