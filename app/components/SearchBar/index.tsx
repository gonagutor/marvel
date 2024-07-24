import Image from "next/image";
import "./index.scss";

export default function SearchBar() {
  return (
    <search className="searchbar">
      <section>
        <Image src="/icons/search.svg" width={12} height={12} alt="Search" />
        <input type="search" placeholder="Search a character..." value="" />
      </section>
      <p>50 Results</p>
    </search>
  );
}
