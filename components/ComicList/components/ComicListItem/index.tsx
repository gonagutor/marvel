import Comic from "@/model/comic";
import "./index.scss";

export default function ComicListItem({ comic }: { comic: Comic }) {
  return (
    <li>
      <img src={comic.image} alt={comic.name} />
      <p>
        <a href={comic.resourceURI}>{comic.name}</a>
      </p>
      <span>{comic.year}</span>
    </li>
  );
}
