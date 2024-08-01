"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Character from "@/model/character";
import { FavoritesContext } from "@/providers/FavoritesProvider";
import Favorites from "@/model/favorites";
import "./index.scss";

export default function CharacterHeader({
  character,
}: Readonly<{ character: Character }>) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    setIsFavorite(Favorites.isFavorite(character));
  }, []);

  const onHeartClick = () => {
    if (isFavorite) {
      setIsFavorite(false);
      removeFavorite(character);
      return;
    }

    setIsFavorite(true);
    addFavorite(character);
  };

  return (
    <section className="character-header">
      <div>
        <img src={character.thumbnail} alt={character.name} />
        <section>
          <div>
            <h2>{character.name}</h2>
            <button style={{ display: "contents" }} onClick={onHeartClick}>
              <Image
                width={24}
                height={24}
                src={isFavorite ? "/icons/heart.svg" : "/icons/heart-empty.svg"}
                alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
              />
            </button>
          </div>
          <p>
            {character.description.length
              ? character.description
              : "No description found"}
          </p>
        </section>
      </div>
    </section>
  );
}
