"use client";

import Image from "next/image";
import { ChangeEvent, useContext } from "react";
import { SearchContext } from "@/app/providers/SearchProvider";
import "./index.scss";

export default function SearchBar() {
  const { term, setTerm } = useContext(SearchContext);

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!setTerm) return;
    setTerm(e.currentTarget.value);
  };

  return (
    <search className="searchbar">
      <section>
        <Image src="/icons/search.svg" width={12} height={12} alt="Search" />
        <input
          type="search"
          placeholder="Search a character..."
          value={term}
          onChange={onSearchTermChange}
        />
      </section>
      <p>50 Results</p>
    </search>
  );
}
