import Attribution from "@/components/Attribution";
import CharacterList from "@/components/CharacterList";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <CharacterList />
      <Attribution />
    </main>
  );
}
