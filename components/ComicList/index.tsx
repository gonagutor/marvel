import Character from "@/model/character";
import ComicListItem from "./components/ComicListItem";
import "./index.scss";

export default function ComicList({ character }: { character: Character }) {
  return (
    <ul className="comic-list">
      {character.comics.map((comic) => (
        <ComicListItem key={comic.name} comic={comic} />
      ))}
    </ul>
  );
}
