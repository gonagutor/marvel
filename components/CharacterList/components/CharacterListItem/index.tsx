import { useContext } from "react";
import Image from "next/image";
import { FavoritesContext } from "@/providers/FavoritesProvider";
import Character from "@/model/character";
import Favorites from "@/model/favorites";
import "./index.scss";
import { useRouter } from "next/navigation";

export default function CharacterListItem({
  character,
}: Readonly<{ character: Character }>) {
  const { push } = useRouter();
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);

  const isFavorite = Favorites.isFavorite(character);
  return (
    <li className="character-list-item">
      <a data-testid="character-link" href={`/details/${character.id}`}>
        <img
          data-testid="character-image"
          src={character.thumbnail}
          alt={character.name}
        />
      </a>
      <button
        data-testid="character-favorite-button"
        onClick={
          isFavorite
            ? () => removeFavorite(character)
            : () => addFavorite(character)
        }
      >
        <span data-testid="character-name">{character.name}</span>
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
