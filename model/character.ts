import { AxiosResponse } from "axios";
import { serverAxios } from "@/utils/axios";
import ENDPOINTS from "@/utils/endpoints";
import CouldNotRetrieveCharacters from "@/utils/errors/CouldNotRetrieveCharacters";
import Comic from "./comic";

export default class Character {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  comics: Array<Comic>;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.thumbnail =
      typeof data.thumbnail === "string"
        ? data.thumbnail
        : `${data.thumbnail.path}.${data.thumbnail.extension}`;
    this.description = data.description;
    this.comics = (data.comics.items ?? data.comics).map(
      (comic: any) => new Comic(comic)
    );
  }

  static async getCharacters(filter?: string): Promise<Array<Character>> {
    try {
      const response: AxiosResponse = await serverAxios.get(
        ENDPOINTS.CHARACTERS,
        {
          params: { nameStartsWith: filter },
        }
      );

      const responseData = JSON.parse(response.data);
      return responseData.data.results.map(
        (character: any) => new Character(character)
      );
    } catch (error: any) {
      if (!error?.request)
        throw new Error("An error occurred when processing the request");

      throw new CouldNotRetrieveCharacters(
        error.request.message,
        error.request.code,
        error.request.url
      );
    }
  }

  static async getCharacterById(id: number): Promise<Character> {
    try {
      const response = await serverAxios.get(`${ENDPOINTS.CHARACTERS}/${id}`);

      const responseData = JSON.parse(response.data);
      return responseData.data.results.map(
        (character: any) => new Character(character)
      )[0];
    } catch (error: any) {
      if (!error.request)
        throw new Error("An error occurred when sending the request");
      throw new CouldNotRetrieveCharacters(
        error.request.message,
        error.request.code,
        error.request.params.ts
      );
    }
  }
}
