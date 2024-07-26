import Image from "next/image";
import "./index.scss";

export type CharacterListItemProps = Readonly<{
  image: string;
  isFavorite: boolean;
  name: string;
}>;

export default function CharacterListItem({
  image,
  isFavorite,
  name,
}: CharacterListItemProps) {
  return (
    <li className="character-list-item">
      <img src={image} alt={name} />
      <section>
        <span>{name}</span>
        <Image
          width={12}
          height={12}
          src={isFavorite ? "/icons/heart.svg" : "/icons/heart-empty.svg"}
          alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
        />
      </section>
    </li>
  );
}
