import Image from "next/image";
import "./index.scss";

export default function Header() {
  return (
    <header className="header">
      <Image width={130} height={52} src="/marvel-logo.svg" alt="Marvel logo" />

      <button aria-label="View favorites">
        <Image width={24} height={24} src="/heart-icon.svg" alt="Favorites" />
        <span>8</span>
      </button>
    </header>
  );
}
