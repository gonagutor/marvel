import Attribution from "@/components/Attribution";
import CharacterList from "@/components/CharacterList";
import SearchBar from "@/components/SearchBar";
import { SearchProvider } from "@/providers/SearchProvider";

export default function Home() {
  return (
    <SearchProvider>
      <main className="search-page">
        <SearchBar />
        <CharacterList />
        <Attribution />
      </main>
    </SearchProvider>
  );
}
