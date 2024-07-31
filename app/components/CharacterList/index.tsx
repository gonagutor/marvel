"use client";

import useCharacters from "@/app/hooks/useCharacters";
import Character from "@/app/model/character";
import CharacterListItem from "./components/CharacterListItem";
import "./index.scss";

export default function CharacterList() {
  const { waiting, error, characters } = useCharacters();

  if (waiting) return <p>Fetching characters...</p>;
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
        <CharacterListItem
          key={character.name}
          name={character.name}
          image={character.thumbnail}
          isFavorite={false}
        />
      ))}
    </ul>
  );
}
