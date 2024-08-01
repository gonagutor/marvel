import { useContext } from "react";
import Image from "next/image";
import { FavoritesContext } from "@/providers/FavoritesProvider";
import Character from "@/model/character";
import Favorites from "@/model/favorites";
import "./index.scss";

export default function CharacterListItem({
  character,
}: Readonly<{ character: Character }>) {
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);

  const isFavorite = Favorites.isFavorite(character);
  return (
    <li className="character-list-item">
      <a href={`/details/${character.id}`}>
        <img src={character.thumbnail} alt={character.name} />
      </a>
      <button
        onClick={
          isFavorite
            ? () => {
                console.log(character);
                addFavorite(character);
              }
            : () => {
                console.log(character);
                removeFavorite(character);
              }
        }
      >
        <span>{character.name}</span>
        <Image
          width={12}
          height={12}
          src={isFavorite ? "/icons/heart.svg" : "/icons/heart-empty.svg"}
          alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
        />
      </button>
    </li>
  );
}
