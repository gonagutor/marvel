import Comic from "@/model/comic";
import "./index.scss";

export default function ComicListItem({ comic }: Readonly<{ comic: Comic }>) {
  return (
    <li data-testid="comic">
      <img src={comic.image} alt={comic.name} />
      <p>
        <a href={comic.resourceURI}>{comic.name}</a>
      </p>
      <span data-testid="comic-year">{comic.year}</span>
    </li>
  );
}
