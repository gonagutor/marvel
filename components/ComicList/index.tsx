import Character from "@/model/character";
import ComicListItem from "./components/ComicListItem";
import "./index.scss";

export default function ComicList({
  character,
}: Readonly<{ character: Character }>) {
  if (!character.comics.length) {
    return (
      <p style={{ fontSize: "1rem", paddingBlock: "1rem" }}>No comics found</p>
    );
  }

  return (
    <ul className="comic-list">
      {character.comics.map((comic) => (
        <ComicListItem key={comic.name} comic={comic} />
      ))}
    </ul>
  );
}
