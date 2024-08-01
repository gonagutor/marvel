import { clientAxios } from "@/app/utils/axios";
import useSWR from "swr";
import Character from "../model/character";
import useSWRMutation from "swr/mutation";
import { useEffect } from "react";

const INTERNAL_CHARACTER_ROUTE = "/api/character";
const fetcher = (url: string, { arg }: { arg: string }) =>
  clientAxios
    .get(url + (arg.length ? `?search=${arg}` : ""))
    .then((res) => JSON.parse(res.data));

type UseCharacter = {
  loading: boolean;
  error?: any;
  characters?: Array<Character>;
  fetch: (filter?: string) => void;
};

export default function useCharacters(): UseCharacter {
  const {
    data,
    error,
    isMutating: loading,
    trigger,
  } = useSWRMutation(INTERNAL_CHARACTER_ROUTE, fetcher);

  const fetch = (filter?: string) => {
    trigger(filter ?? "");
  };

  useEffect(fetch, []);

  return { loading, error, characters: data, fetch };
}
