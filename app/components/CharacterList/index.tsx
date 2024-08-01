"use client";

import Character from "@/app/model/character";
import CharacterListItem from "./components/CharacterListItem";
import "./index.scss";
import { SearchContext } from "@/app/providers/SearchProvider";
import { useContext } from "react";

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
