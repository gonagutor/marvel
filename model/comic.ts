const YEAR_MATCHER = /\(\d{4}\)/g;

export default class Comic {
  image: string;
  name: string;
  year: number;

  constructor(data: any) {
    this.image = data.resourceURI;
    this.name = data.name.replace(YEAR_MATCHER, "").replace(/\s+/g, " ");

    const yearMatches = data.name.match(YEAR_MATCHER);
    this.year = yearMatches?.length
      ? yearMatches[0].replace("(", "").replace(")", "")
      : "Unknown";
  }
}
