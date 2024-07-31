import { Axios } from "axios";
import crypto from "crypto";

export const serverAxios = new Axios({
  baseURL: process.env.MARVEL_API_URL,
});

serverAxios.interceptors.request.use((config) => {
  config.params.limit = config.params.limit || 50;
  config.params.ts = Date.now();
  config.params.apikey = process.env.MARVEL_PUBLIC_API_KEY;
  config.params.hash = crypto
    .createHash("md5")
    .update(
      config.params.ts +
        process.env.MARVEL_PRIVATE_API_KEY +
        process.env.MARVEL_PUBLIC_API_KEY
    )
    .digest("hex");

  return config;
});

export const clientAxios = new Axios({
  baseURL: "/",
});

export const fetcher = (url: string) =>
  clientAxios.get(url).then((res) => res.data);
