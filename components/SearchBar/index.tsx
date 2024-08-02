"use client";

import { ChangeEvent, useContext } from "react";
import Image from "next/image";
import { SearchContext } from "@/providers/SearchProvider";
import "./index.scss";
import { FavoritesContext } from "@/providers/FavoritesProvider";

export default function SearchBar() {
  const { term, search, characters } = useContext(SearchContext);
  const { isFavoriteSearch } = useContext(FavoritesContext);

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) =>
    search(e.currentTarget.value);

  return (
    <search className="searchbar">
      {isFavoriteSearch && <h2 data-testid="search-favorite">Favorites</h2>}
      <section>
        <Image src="/icons/search.svg" width={12} height={12} alt="Search" />
        <input
          data-testid="search-input"
          type="search"
          placeholder="Search a character..."
          value={term}
          onChange={onSearchTermChange}
        />
      </section>
      <p data-testid="search-count">
        {characters ? characters.length : 0} Results
      </p>
    </search>
  );
}
