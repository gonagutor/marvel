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

  const sortedComics = character.comics.toSorted((characterA, characterB) => {
    if (characterA.year === "Unknown") return 999;
    if (characterB.year === "Unknown") return -1;

    return parseInt(characterB.year) - parseInt(characterA.year);
  });

  return (
    <ul data-testid="comic-list" className="comic-list">
      {sortedComics.slice(0, 20).map((comic) => (
        <ComicListItem key={comic.name} comic={comic} />
      ))}
    </ul>
  );
}
