"use server";

import Character from "@/model/character";

export default async function Details({
  params: { id },
}: Readonly<{
  params: { id: string };
}>) {
  const character = await Character.getCharacterById(parseInt(id));
  if (!character) return <p>character not found</p>;

  return (
    <main>
      <section>
        <img src={character.thumbnail} alt={character.name} />
        <section>
          <div>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
          </div>
          <img src="/public/favorite.svg" alt="add or remove from favorites" />
        </section>
      </section>
      <section>
        <ul>
          {character.comics.map((comic) => (
            <li key={comic.name}>
              <img src={comic.image} alt={comic.name} />
              <p>{comic.name}</p>
              <span>{comic.year}</span>
            </li>
          ))}
        </ul>
      </section>
      <p>{character.id}</p>
    </main>
  );
}
