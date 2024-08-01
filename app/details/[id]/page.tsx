"use server";

import Attribution from "@/components/Attribution";
import CharacterHeader from "@/components/CharacterHeader";
import ComicList from "@/components/ComicList";
import Character from "@/model/character";
import "./page.scss";

export default async function Details({
  params: { id },
}: Readonly<{
  params: { id: string };
}>) {
  const character = await Character.getCharacterById(parseInt(id));
  if (!character) return <p>character not found</p>;

  const expandComicPromises: Array<Promise<any>> = [];
  character.comics.forEach((comic) => expandComicPromises.push(comic.expand()));
  await Promise.all(expandComicPromises);

  return (
    <main>
      <CharacterHeader character={character} />
      <section className="character-info-container">
        <h3>Comics</h3>
        <ComicList character={character} />
      </section>
      <Attribution />
    </main>
  );
}
