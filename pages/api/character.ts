import Character from "@/app/model/character";
import type { NextApiRequest, NextApiResponse } from "next";

let defaultResponse: Array<Character> = [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Character>>
) {
  let search = req.query.search;
  if (typeof search != "string") search = undefined;

  if (!defaultResponse.length)
    defaultResponse = await Character.getCharacters(search);
  if (search)
    defaultResponse = defaultResponse.filter((char) =>
      char.name.startsWith(search)
    );
  res.status(200).json(defaultResponse);
}
