import Attribution from "./components/Attribution";
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";

const DUMMY_CHARACTERS = [
  {
    name: "Placeholder",
    image: "https://picsum.photos/400/400",
    isFavorite: false,
  },
  {
    name: "Really long placeholder",
    image: "https://picsum.photos/400/400",
    isFavorite: false,
  },
  {
    name: "Really really long placeholder",
    image: "https://picsum.photos/400/400",
    isFavorite: false,
  },
  {
    name: "Really really really long placeholder",
    image: "https://picsum.photos/400/400",
    isFavorite: false,
  },

  {
    name: "UPPERCASE PLACEHOLDER",
    image: "https://picsum.photos/400/400",
    isFavorite: false,
  },
  {
    name: "lowercase placeholder",
    image: "https://picsum.photos/400/400",
    isFavorite: false,
  },
  {
    name: "placeholder",
    image: "https://picsum.photos/400/400",
    isFavorite: false,
  },
  {
    name: "placeholder",
    image: "https://picsum.photos/400/400",
    isFavorite: false,
  },
];

export default function Home() {
  return (
    <main>
      <SearchBar />
      <CharacterList />
      <Attribution />
    </main>
  );
}
