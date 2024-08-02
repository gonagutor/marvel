import { serverAxios } from "@/utils/axios";

const YEAR_MATCHER = /\(\d{4}\)/g;
const NOT_AVAILABLE =
  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

export default class Comic {
  resourceURI: string;
  image?: string;
  name: string;
  year: string;

  constructor(data: any) {
    this.resourceURI = data.resourceURI;
    this.name = data.name.replace(YEAR_MATCHER, "").replace(/\s+/g, " ");

    const yearMatches = data.name.match(YEAR_MATCHER);
    this.year = yearMatches?.length
      ? yearMatches[0].replace("(", "").replace(")", "")
      : "Unknown";
  }

  async expand() {
    if (this.image && this.image != NOT_AVAILABLE) return;

    try {
      const response = await serverAxios.get(this.resourceURI);
      const responseData = JSON.parse(response.data);
      const imageObject = responseData.data.results[0].images[0];

      this.image = imageObject.path + "." + imageObject.extension;
    } catch (e) {
      this.image = NOT_AVAILABLE;
    }
  }
}
