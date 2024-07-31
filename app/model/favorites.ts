"use client";

import { LOCALSTORAGE_KEYS } from "../utils/constants";
import Character from "./character";

export default class Favorites {
  static getFavorites(): Array<Character> {
    const favorites = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEYS.FAVORITES) ?? "[]"
    );
    return favorites.map((character: any) => new Character(character));
  }

  private static saveFavorites(characters: Array<Character>) {
    localStorage.removeItem(LOCALSTORAGE_KEYS.FAVORITES);
    localStorage.setItem(
      LOCALSTORAGE_KEYS.FAVORITES,
      JSON.stringify(characters)
    );
  }

  static addFavorite(character: Character) {
    const favorites = this.getFavorites();

    const alreadyExists = !!favorites.find((char) => character.id === char.id);
    if (alreadyExists)
      throw new Error(
        "Repeated character added to favorites. This should not be possible"
      );

    favorites.push(character);
    this.saveFavorites(favorites);
  }

  static removeFavorite(character: Character) {
    this.removeFavoriteById(character.id);
  }

  static removeFavoriteById(characterId: number) {
    let favorites = this.getFavorites();

    favorites = favorites.filter((char) => characterId !== char.id);
    this.saveFavorites(favorites);
  }

  static isFavorite(character: Character): boolean {
    return this.isFavoriteById(character.id);
  }

  static isFavoriteById(characterId: number): boolean {
    return !!this.getFavorites().find(
      (character) => character.id === characterId
    );
  }
}
