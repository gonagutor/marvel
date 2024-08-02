"use client";

import { useContext } from "react";
import { SearchContext } from "@/providers/SearchProvider";
import Character from "@/model/character";
import CharacterListItem from "./components/CharacterListItem";
import "./index.scss";
import { FavoritesContext } from "@/providers/FavoritesProvider";

export default function CharacterList() {
  const { loading, error, characters } = useContext(SearchContext);
  const { isFavoriteSearch } = useContext(FavoritesContext);

  if (loading && !isFavoriteSearch)
    return <p data-testid="character-list-loading">Fetching characters...</p>;
  if (error && !isFavoriteSearch)
    return (
      <p data-testid="character-list-error">
        An error ocurred while loading the page.{" "}
        <a href="/">Click here to try again</a>
      </p>
    );

  if (!characters?.length)
    return <p data-testid="character-list-empty">No characters found</p>;

  return (
    <ul className="character-list">
      {characters?.map((character: Character) => (
        <CharacterListItem key={character.name} character={character} />
      ))}
    </ul>
  );
}
