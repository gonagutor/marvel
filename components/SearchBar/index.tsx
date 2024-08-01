"use client";

import { ChangeEvent, useContext } from "react";
import Image from "next/image";
import { SearchContext } from "@/providers/SearchProvider";
import "./index.scss";

export default function SearchBar() {
  const { term, search, characters } = useContext(SearchContext);

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) =>
    search(e.currentTarget.value);

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
      <p>{characters ? characters.length : 0} Results</p>
    </search>
  );
}
