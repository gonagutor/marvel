import { clientAxios } from "@/app/utils/axios";
import useSWR from "swr";
import Character from "../model/character";

const INTERNAL_CHARACTER_ROUTE = "/api/character";
const fetcher = (url: string) =>
  clientAxios.get(url).then((res) => JSON.parse(res.data));

type UseCharacter = {
  waiting: boolean;
  error?: any;
  characters?: Array<Character>;
  fetch: (filter?: string) => void;
};

export default function useCharacters(): UseCharacter {
  const {
    data,
    error,
    isLoading: waiting,
    mutate,
  } = useSWR(INTERNAL_CHARACTER_ROUTE, fetcher);

  const fetch = async (filter?: string) => {
    mutate(`${INTERNAL_CHARACTER_ROUTE}?filter=${filter}`);
  };

  return { waiting, error, characters: data, fetch };
}
