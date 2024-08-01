"use client";

import { useContext } from "react";
import { SearchContext } from "@/providers/SearchProvider";
import Character from "@/model/character";
import CharacterListItem from "./components/CharacterListItem";
import "./index.scss";

export default function CharacterList() {
  const { loading, error, characters } = useContext(SearchContext);

  if (loading) return <p>Fetching characters...</p>;
  if (error)
    return (
      <p>
        An error ocurred while loading the page.{" "}
        <a href="/">Click here to try again</a>
      </p>
    );
  if (!characters?.length) return <p>No characters found</p>;

  return (
    <ul className="character-list">
      {characters?.map((character: Character) => (
        <CharacterListItem key={character.name} character={character} />
      ))}
    </ul>
  );
}
