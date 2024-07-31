import { AxiosResponse } from "axios";
import { serverAxios } from "@/app/utils/axios";
import ENDPOINTS from "@/app/utils/endpoints";
import Comic from "./comic";
import CouldNotRetrieveCharacters from "../utils/errors/CouldNotRetrieveCharacters";

export default class Character {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  comics: Array<Comic>;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.thumbnail = `${data.thumbnail.path}.${data.thumbnail.extension}`;
    this.description = data.description;
    this.comics = data.comics.items.map((comic: any) => new Comic(comic));
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

  static async getCharacterById(id: string): Promise<Character> {
    try {
      const response = await serverAxios.get(`${ENDPOINTS.CHARACTERS}/${id}`);

      return response.data.data.results.map(
        (character: any) => new Character(character)
      );
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
