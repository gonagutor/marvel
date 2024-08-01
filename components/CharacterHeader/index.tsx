import Image from "next/image";
import Character from "@/model/character";
import "./index.scss";

export default function CharacterHeader({
  character,
}: Readonly<{ character: Character }>) {
  const isFavorite = true;
  return (
    <section className="character-header">
      <div>
        <img src={character.thumbnail} alt={character.name} />
        <section>
          <div>
            <h2>{character.name}</h2>
            <Image
              width={24}
              height={24}
              src={isFavorite ? "/icons/heart.svg" : "/icons/heart-empty.svg"}
              alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
            />
          </div>
          <p>{character.description}</p>
        </section>
      </div>
    </section>
  );
}
