import CharacterListItem from "./components/CharacterListItem";
import "./index.scss";

export default function CharacterList({
  characters,
}: Readonly<{ characters: any[] }>) {
  return (
    <ul className="character-list">
      {characters.map((character) => (
        <CharacterListItem
          key={character.name}
          name={character.name}
          image={character.image}
          isFavorite={false}
        />
      ))}
    </ul>
  );
}
