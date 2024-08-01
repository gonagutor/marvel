import Character from "@/model/character";
import type { NextApiRequest, NextApiResponse } from "next";

const API_IS_BEING_DUMB = true;
const dummyResponse = [
  {
    id: 1011334,
    name: "3-D Man",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21366",
        name: "Avengers: The Initiative #14",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24571",
        name: "Avengers: The Initiative #14 (SPOTLIGHT VARIANT)",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21546",
        name: "Avengers: The Initiative #15",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21741",
        name: "Avengers: The Initiative #16",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
        name: "Avengers: The Initiative #17",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/22299",
        name: "Avengers: The Initiative #18",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/22300",
        name: "Avengers: The Initiative #18 (ZOMBIE VARIANT)",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/22506",
        name: "Avengers: The Initiative #19",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8500",
        name: "Deadpool #44",
        year: "1997",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10223",
        name: "Marvel Premiere #35",
        year: "1972",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10224",
        name: "Marvel Premiere #36",
        year: "1972",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10225",
        name: "Marvel Premiere #37",
        year: "1972",
      },
    ],
  },
  {
    id: 1017100,
    name: "A-Bomb (HAS)",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/47176",
        name: "FREE COMIC BOOK DAY 2013 1 #1",
        year: "2013",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40632",
        name: "Hulk #53",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40630",
        name: "Hulk #54",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40628",
        name: "Hulk #55",
        year: "2008",
      },
    ],
  },
  {
    id: 1009144,
    name: "A.I.M.",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg",
    description:
      "AIM is a terrorist organization bent on destroying the world.",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/36763",
        name: "Ant-Man & the Wasp #3",
        year: "2010",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17553",
        name: "Avengers #67",
        year: "1998",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/7340",
        name: "Avengers #87",
        year: "1963",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4214",
        name: "Avengers and Power Pack Assemble! #2",
        year: "2006",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/63217",
        name: "Avengers and Power Pack #3",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/63218",
        name: "Avengers and Power Pack #4",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/63219",
        name: "Avengers and Power Pack #5",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/63220",
        name: "Avengers and Power Pack #6",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/64790",
        name: "AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/103371",
        name: "Avengers Unlimited Infinity Comic #17",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1170",
        name: "Avengers Vol. 2: Red Zone (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1214",
        name: "Avengers Vol. II: Red Zone (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12787",
        name: "Captain America #28",
        year: "1998",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/7513",
        name: "Captain America #132",
        year: "1968",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/7514",
        name: "Captain America #133",
        year: "1968",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/65466",
        name: "Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20367",
        name: "Defenders #57",
        year: "1972",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/31068",
        name: "Incredible Hulks #606 (VARIANT)",
        year: "2010",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/46168",
        name: "Indestructible Hulk #3",
        year: "2012",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/43944",
        name: "Iron Man #1",
        year: "2012",
      },
    ],
  },
  {
    id: 1010699,
    name: "Aaron Stack",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40776",
        name: "Dark Avengers #177",
        year: "2012",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40773",
        name: "Dark Avengers #179",
        year: "2012",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40774",
        name: "Dark Avengers #180",
        year: "2012",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40778",
        name: "Dark Avengers #181",
        year: "2012",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40787",
        name: "Dark Avengers #182",
        year: "2012",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40786",
        name: "Dark Avengers #183",
        year: "2012",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/38073",
        name: "Hulk #43",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/11910",
        name: "Universe X #6",
        year: "2000",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/11911",
        name: "Universe X #7",
        year: "2000",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/11912",
        name: "Universe X #8",
        year: "2000",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/11913",
        name: "Universe X #9",
        year: "2000",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/11903",
        name: "Universe X #10",
        year: "2000",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/11904",
        name: "Universe X #11",
        year: "2000",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/11905",
        name: "Universe X #12",
        year: "2000",
      },
    ],
  },
  {
    id: 1009146,
    name: "Abomination (Emil Blonsky)",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg",
    description:
      "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/88869",
        name: "Abominations #1",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/88870",
        name: "Abominations #2",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/88871",
        name: "Abominations #3",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17547",
        name: "Avengers #61",
        year: "1998",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17548",
        name: "Avengers #62",
        year: "1998",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1098",
        name: "AVENGERS: WORLD TRUST (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8557",
        name: "Earth X #7",
        year: "1999",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4241",
        name: "EARTH X TPB [NEW PRINTING] (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20863",
        name: "Hulk #3",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2499",
        name: "Hulk: Destruction #4",
        year: "2005",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14424",
        name: "Hulk #24",
        year: "1999",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14425",
        name: "Hulk #25",
        year: "1999",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14428",
        name: "Hulk #28",
        year: "1999",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14450",
        name: "Hulk #50",
        year: "1999",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14451",
        name: "Hulk #51",
        year: "1999",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14453",
        name: "Hulk #53",
        year: "1999",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14454",
        name: "Hulk #54",
        year: "1999",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8948",
        name: "Incredible Hulk #137",
        year: "1962",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8982",
        name: "Incredible Hulk #171",
        year: "1962",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/9005",
        name: "Incredible Hulk #194",
        year: "1962",
      },
    ],
  },
  {
    id: 1016823,
    name: "Abomination (Ultimate)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40638",
        name: "Hulk #50",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15717",
        name: "Ultimate X-Men #26",
        year: "2001",
      },
    ],
  },
  {
    id: 1009148,
    name: "Absorbing Man",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/43507",
        name: "A+X #8",
        year: "2012",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/7045",
        name: "Avengers #183",
        year: "1963",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/7046",
        name: "Avengers #184",
        year: "1963",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/7142",
        name: "Avengers #270",
        year: "1963",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/36481",
        name: "Avengers Academy #16",
        year: "2010",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/36480",
        name: "Avengers Academy #17",
        year: "2010",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/36479",
        name: "Avengers Academy #18",
        year: "2010",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/36484",
        name: "Avengers Academy #19",
        year: "2010",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17776",
        name: "Avengers Annual #20",
        year: "1967",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/63662",
        name: "Black Bolt #3",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/64278",
        name: "Black Bolt #4",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/66533",
        name: "Black Bolt #11",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/65327",
        name: "Black Bolt Vol. 1: Hard Time (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12783",
        name: "Captain America #24",
        year: "1998",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20427",
        name: "Dazzler #18",
        year: "1981",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20428",
        name: "Dazzler #19",
        year: "1981",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8499",
        name: "Deadpool #43",
        year: "1997",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15541",
        name: "Fantastic Four #22",
        year: "1998",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13151",
        name: "Fantastic Four #330",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/41433",
        name: "Fear Itself #2 (3rd Printing Variant)",
        year: "2010",
      },
    ],
  },
  {
    id: 1009149,
    name: "Abyss",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13943",
        name: "Uncanny X-Men #402",
        year: "1981",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13945",
        name: "Uncanny X-Men #404",
        year: "1981",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13946",
        name: "Uncanny X-Men #405",
        year: "1981",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13947",
        name: "Uncanny X-Men #406",
        year: "1981",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13970",
        name: "Uncanny X-Men #429",
        year: "1981",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13972",
        name: "Uncanny X-Men #431",
        year: "1981",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12386",
        name: "X-Men: Alpha #1",
        year: "1995",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2539",
        name: "X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)",
        year: "Unknown",
      },
    ],
  },
  {
    id: 1010903,
    name: "Abyss (Age of Apocalypse)",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/18099",
        name: "Weapon X #1",
        year: "1995",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12386",
        name: "X-Men: Alpha #1",
        year: "1995",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2539",
        name: "X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)",
        year: "Unknown",
      },
    ],
  },
  {
    id: 1011266,
    name: "Adam Destine",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [],
  },
  {
    id: 1010354,
    name: "Adam Warlock",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg",
    description:
      "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/105140",
        name: "Adam Warlock Omnibus (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/105920",
        name: "Adam Warlock: Strange Tales Facsimile Edition #178",
        year: "2023",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/62151",
        name: "All-New Guardians of the Galaxy Vol. 3: Infinity Quest (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17271",
        name: "Annihilation: Conquest #1",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17405",
        name: "Annihilation: Conquest #2",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17645",
        name: "Annihilation: Conquest #3",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20686",
        name: "Annihilation: Conquest #4",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20885",
        name: "Annihilation: Conquest #5",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21016",
        name: "Annihilation: Conquest #6",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12412",
        name: "Avengers Forever #9",
        year: "1998",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1033",
        name: "AVENGERS LEGENDS: AVENGERS FOREVER (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20731",
        name: "CLANDESTINE CLASSIC PREMIERE HC (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20187",
        name: "Doctor Strange, Sorcerer Supreme #27",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20193",
        name: "Doctor Strange, Sorcerer Supreme #32",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20197",
        name: "Doctor Strange, Sorcerer Supreme #36",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8552",
        name: "Earth X #2",
        year: "1999",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8550",
        name: "Earth X #11",
        year: "1999",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4241",
        name: "EARTH X TPB [NEW PRINTING] (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12975",
        name: "Fantastic Four #172",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13195",
        name: "Fantastic Four #370",
        year: "1961",
      },
    ],
  },
  {
    id: 1010846,
    name: "Aegis (Trey Rollins)",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d.gif",
    description: "",
    comics: [],
  },
  {
    id: 1017851,
    name: "Aero (Aero)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76349",
        name: "Aero #1",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76350",
        name: "Aero #2",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76351",
        name: "Aero #3",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76352",
        name: "Aero #4",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76353",
        name: "Aero #5",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76354",
        name: "Aero #6",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76355",
        name: "Aero #7",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76356",
        name: "Aero #8",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76357",
        name: "Aero #9",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76358",
        name: "Aero #10",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76359",
        name: "Aero #11",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/76360",
        name: "Aero #12",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/77001",
        name: "Agents of Atlas #1",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/77003",
        name: "Agents of Atlas #3",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/77005",
        name: "Agents of Atlas #5",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/83989",
        name: "Atlantis Attacks #1",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/83993",
        name: "Atlantis Attacks #2",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/83994",
        name: "Atlantis Attacks #3",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/83995",
        name: "Atlantis Attacks #4",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/83996",
        name: "Atlantis Attacks #5",
        year: "2020",
      },
    ],
  },
  {
    id: 1012717,
    name: "Agatha Harkness",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4ce5a9bf70e19.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17751",
        name: "Avengers #1",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17756",
        name: "Avengers #2",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17757",
        name: "Avengers #3",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17758",
        name: "Avengers #4",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17762",
        name: "Avengers #8",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/110269",
        name: "Avengers Annual #1",
        year: "2023",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21358",
        name: "Avengers Fairy Tales #4",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/77235",
        name: "Captain America #19",
        year: "2018",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/95785",
        name: "Captain Marvel #39",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/95788",
        name: "Captain Marvel #42",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13304",
        name: "Fantastic Four #94",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/101173",
        name: "Midnight Suns #5",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/54974",
        name: "Scarlet Witch #1",
        year: "1994",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/57094",
        name: "Scarlet Witch #1",
        year: "2015",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/54977",
        name: "Scarlet Witch #3",
        year: "1994",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/54978",
        name: "Scarlet Witch #4",
        year: "1994",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/60028",
        name: "Scarlet Witch #13",
        year: "2015",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/110287",
        name: "Spider-Man Annual #1",
        year: "2023",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/114846",
        name: "Strange Academy: Blood Hunt #3",
        year: "2024",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21182",
        name: "Ultimate Fantastic Four #54",
        year: "2003",
      },
    ],
  },
  {
    id: 1011297,
    name: "Agent Brand",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/6120",
        name: "Astonishing X-Men #21",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/6309",
        name: "Astonishing X-Men #22",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/16119",
        name: "Astonishing X-Men #23",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17353",
        name: "Astonishing X-Men #24",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24503",
        name: "Astonishing X-Men #32",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24504",
        name: "Astonishing X-Men #33",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/38318",
        name: "Astonishing X-Men #38",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/38319",
        name: "Astonishing X-Men #40",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40024",
        name: "Astonishing X-Men #40 (I Am Captain America Variant)",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/45950",
        name: "Cable and X-Force #8",
        year: "2012",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/112856",
        name: "Dead X-Men #1",
        year: "2024",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/39890",
        name: "Heralds (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/90340",
        name: "S.W.O.R.D. #1",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/90341",
        name: "S.W.O.R.D. #2",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/26232",
        name: "S.W.O.R.D. #2",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/90342",
        name: "S.W.O.R.D. #3",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/26233",
        name: "S.W.O.R.D. #3",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/90343",
        name: "S.W.O.R.D. #4",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/26234",
        name: "S.W.O.R.D. #4",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/30518",
        name: "S.W.O.R.D. #5",
        year: "2009",
      },
    ],
  },
  {
    id: 1011031,
    name: "Agent X (Nijo)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description:
      "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17702",
        name: "Agent X #1",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17709",
        name: "Agent X #2",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17710",
        name: "Agent X #3",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17711",
        name: "Agent X #4",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17712",
        name: "Agent X #5",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17713",
        name: "Agent X #6",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17714",
        name: "Agent X #7",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17715",
        name: "Agent X #8",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17716",
        name: "Agent X #9",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17703",
        name: "Agent X #10",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17704",
        name: "Agent X #11",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17705",
        name: "Agent X #12",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17706",
        name: "Agent X #13",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17707",
        name: "Agent X #14",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/394",
        name: "Agent X #15",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1649",
        name: "Cable & Deadpool #12",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21845",
        name: "Cable & Deadpool #46 (Zombie Variant)",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5761",
        name: "Cable & Deadpool Vol. 2: The Burnt Offering (Trade Paperback)",
        year: "Unknown",
      },
    ],
  },
  {
    id: 1009150,
    name: "Agent Zero",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/100853",
        name: "Life of Wolverine Infinity Comic #6",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/18082",
        name: "Weapon X #2",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/18092",
        name: "Weapon X #3",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/18074",
        name: "Weapon X #12",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/246",
        name: "Weapon X #13",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2204",
        name: "Weapon X: Days of Future Now #1",
        year: "2005",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2324",
        name: "Weapon X: Days of Future Now #2",
        year: "2005",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2438",
        name: "Weapon X: Days of Future Now #3",
        year: "2005",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2439",
        name: "Weapon X: Days of Future Now #4",
        year: "2005",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/3016",
        name: "Weapon X: Days of Future Now #5",
        year: "2005",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/3357",
        name: "Weapon X: Days of Future Now (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/18408",
        name: "Weapon X: The Draft – Agent Zero #1",
        year: "2002",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14182",
        name: "Wolverine #60",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14183",
        name: "Wolverine #61",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14184",
        name: "Wolverine #62",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14185",
        name: "Wolverine #63",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14186",
        name: "Wolverine #64",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14189",
        name: "Wolverine #67",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14190",
        name: "Wolverine #68",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14211",
        name: "Wolverine #87",
        year: "1988",
      },
    ],
  },
  {
    id: 1011198,
    name: "Agents of Atlas",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/23659",
        name: "Agents of Atlas #1",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4801",
        name: "Agents of Atlas #1",
        year: "2006",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/77001",
        name: "Agents of Atlas #1",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/23660",
        name: "Agents of Atlas #1 (50/50 COVER)",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5089",
        name: "Agents of Atlas #2",
        year: "2006",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/23825",
        name: "Agents of Atlas #2",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/27402",
        name: "Agents of Atlas #2 (BACHALO 2ND PRINTING VARIANT)",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/23824",
        name: "Agents of Atlas #2 (MCGUINNESS VARIANT)",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5241",
        name: "Agents of Atlas #3",
        year: "2006",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24015",
        name: "Agents of Atlas #3",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24016",
        name: "Agents of Atlas #3 (MCGUINNESS VARIANT)",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24017",
        name: "Agents of Atlas #3 (Wolverine Art Appreciation Variant)",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5404",
        name: "Agents of Atlas #4",
        year: "2006",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24219",
        name: "Agents of Atlas #4",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24221",
        name: "Agents of Atlas #5",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5665",
        name: "Agents of Atlas #5",
        year: "2006",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24222",
        name: "Agents of Atlas #5 (MCGUINNESS VARIANT)",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24360",
        name: "Agents of Atlas #6",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5842",
        name: "Agents of Atlas #6",
        year: "2006",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/24361",
        name: "Agents of Atlas #7",
        year: "2009",
      },
    ],
  },
  {
    id: 1011175,
    name: "Aginar",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [],
  },
  {
    id: 1011136,
    name: "Air-Walker (Gabriel Lan)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4108",
        name: "Annihilation: Silver Surfer #1",
        year: "2006",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5589",
        name: "Heroes Reborn: Iron Man (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/16330",
        name: "Iron Man #11",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/16331",
        name: "Iron Man #12",
        year: "1996",
      },
    ],
  },
  {
    id: 1011176,
    name: "Ajak",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21175",
        name: "Incredible Hercules #117",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21324",
        name: "Incredible Hercules #118",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21505",
        name: "Incredible Hercules #119",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21707",
        name: "Incredible Hercules #120",
        year: "2008",
      },
    ],
  },
  {
    id: 1010870,
    name: "Ajaxis",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0035adc7d3a.jpg",
    description: "",
    comics: [],
  },
  {
    id: 1011194,
    name: "Akemi",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [],
  },
  {
    id: 1011170,
    name: "Alain",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [],
  },
  {
    id: 1009240,
    name: "Albert Cleary",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [],
  },
  {
    id: 1011120,
    name: "Albion",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/16489",
        name: "New Excalibur #23",
        year: "2005",
      },
    ],
  },
  {
    id: 1010836,
    name: "Alex Power",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce5a385a2e82.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/78439",
        name: "Future Foundation #1",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/79184",
        name: "Future Foundation #3",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/79185",
        name: "Future Foundation #4",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/79186",
        name: "Future Foundation #5",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17285",
        name: "Iron Man and Power Pack #1",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17417",
        name: "Iron Man and Power Pack #2",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17652",
        name: "Iron Man and Power Pack #3",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20697",
        name: "Iron Man and Power Pack #4",
        year: "2007",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/69184",
        name: "New Warriors #55",
        year: "1990",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/69185",
        name: "New Warriors #56",
        year: "1990",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/69197",
        name: "New Warriors #75",
        year: "1990",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/65092",
        name: "Power Pack #63",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/31366",
        name: "Thor and the Warriors Four #1",
        year: "2010",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/31368",
        name: "Thor and the Warriors Four #2",
        year: "2010",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/31370",
        name: "Thor and the Warriors Four #3",
        year: "2010",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/31372",
        name: "Thor and the Warriors Four #4",
        year: "2010",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2565",
        name: "X-Men and Power Pack #1",
        year: "2005",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/3093",
        name: "X-Men and Power Pack #2",
        year: "2005",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/3207",
        name: "X-Men and Power Pack #3",
        year: "2005",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/3416",
        name: "X-Men and Power Pack #4",
        year: "2005",
      },
    ],
  },
  {
    id: 1010755,
    name: "Alex Wilder",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/2/c0/4c00377144d5a.jpg",
    description:
      "Despite being the only one of the Runaways without any superhuman abilities or tech, Alex Wilder became the de facto leader of the group due to his natural leadership skills and intellect, as well as prodigy-level logic and strategy.",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/60754",
        name: "Power Man and Iron Fist #14",
        year: "2016",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15061",
        name: "Runaways #1",
        year: "2003",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15071",
        name: "Runaways #2",
        year: "2003",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15072",
        name: "Runaways #3",
        year: "2003",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15073",
        name: "Runaways #4",
        year: "2003",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15074",
        name: "Runaways #5",
        year: "2003",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15075",
        name: "Runaways #6",
        year: "2003",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/70566",
        name: "Runaways #17",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/1273",
        name: "RUNAWAYS: PRIDE & JOY (Digest)",
        year: "Unknown",
      },
    ],
  },
  {
    id: 1011214,
    name: "Alexa Mendez",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [],
  },
  {
    id: 1009497,
    name: "Alexander Pierce",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/26285",
        name: "Secret Warriors #12",
        year: "2009",
      },
    ],
  },
  {
    id: 1014990,
    name: "Alice",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/6/70/4cd061e6d6573.jpg",
    description: "",
    comics: [],
  },
  {
    id: 1009435,
    name: "Alicia Masters",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4c003d40ac7ae.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2055",
        name: "Essential Fantastic Four Vol. 4 (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/98731",
        name: "Fantastic Four #8",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/98732",
        name: "Fantastic Four #9",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/110798",
        name: "Fantastic Four #14",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/110799",
        name: "Fantastic Four #15",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/110801",
        name: "Fantastic Four #17",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/110802",
        name: "Fantastic Four #18",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/110803",
        name: "Fantastic Four #19",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/110805",
        name: "Fantastic Four #21",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/110806",
        name: "Fantastic Four #22",
        year: "2022",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15546",
        name: "Fantastic Four #27",
        year: "1998",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12965",
        name: "Fantastic Four #163",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12966",
        name: "Fantastic Four #164",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12970",
        name: "Fantastic Four #168",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12971",
        name: "Fantastic Four #169",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12973",
        name: "Fantastic Four #170",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13056",
        name: "Fantastic Four #245",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13062",
        name: "Fantastic Four #250",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13063",
        name: "Fantastic Four #251",
        year: "1961",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13064",
        name: "Fantastic Four #252",
        year: "1961",
      },
    ],
  },
  {
    id: 1010370,
    name: "Alpha Flight",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/39654",
        name: "Alpha Flight #0.1",
        year: "2011",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12637",
        name: "Alpha Flight #1",
        year: "1983",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/106868",
        name: "Alpha Flight #1",
        year: "2023",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/393",
        name: "Alpha Flight #1",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/39819",
        name: "Alpha Flight #1 (Eaglesham Variant)",
        year: "2011",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/38569",
        name: "Alpha Flight #2",
        year: "2011",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12679",
        name: "Alpha Flight #2",
        year: "1983",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/106870",
        name: "Alpha Flight #2",
        year: "2023",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/456",
        name: "Alpha Flight #2",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/39818",
        name: "Alpha Flight #2 (Eaglesham Variant)",
        year: "2011",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/106871",
        name: "Alpha Flight #3",
        year: "2023",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12690",
        name: "Alpha Flight #3",
        year: "1983",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/616",
        name: "Alpha Flight #3",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/39820",
        name: "Alpha Flight #3 (Eaglesham Variant)",
        year: "2011",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12701",
        name: "Alpha Flight #4",
        year: "1983",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/38567",
        name: "Alpha Flight #4",
        year: "2011",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/106872",
        name: "Alpha Flight #4",
        year: "2023",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/677",
        name: "Alpha Flight #4",
        year: "2004",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12712",
        name: "Alpha Flight #5",
        year: "1983",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/38568",
        name: "Alpha Flight #5",
        year: "2011",
      },
    ],
  },
  {
    id: 1011324,
    name: "Alpha Flight (Ultimate)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21177",
        name: "Ultimate X-Men #94",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21326",
        name: "Ultimate X-Men #95",
        year: "2001",
      },
    ],
  },
  {
    id: 1011164,
    name: "Alvin Maker",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [],
  },
  {
    id: 1011227,
    name: "Amadeus Cho",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/3/80/520288b9cb581.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/77001",
        name: "Agents of Atlas #1",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/77002",
        name: "Agents of Atlas #2",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/77004",
        name: "Agents of Atlas #4",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/77005",
        name: "Agents of Atlas #5",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/83994",
        name: "Atlantis Attacks #3",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/83995",
        name: "Atlantis Attacks #4",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/83996",
        name: "Atlantis Attacks #5",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/65264",
        name: "Avengers #674",
        year: "2016",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/61442",
        name: "Champions #1",
        year: "2016",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/61443",
        name: "Champions #2",
        year: "2016",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/73805",
        name: "Champions #2",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/61444",
        name: "Champions #3",
        year: "2016",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/73806",
        name: "Champions #3",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/61445",
        name: "Champions #4",
        year: "2016",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/73807",
        name: "Champions #4",
        year: "2019",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/61446",
        name: "Champions #5",
        year: "2016",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/81193",
        name: "Champions #5",
        year: "2020",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/61447",
        name: "Champions #6",
        year: "2016",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/61448",
        name: "Champions #7",
        year: "2016",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/61449",
        name: "Champions #8",
        year: "2016",
      },
    ],
  },
  {
    id: 1009567,
    name: "Amanda Sefton",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/50497",
        name: "Nightcrawler #1",
        year: "2014",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/50498",
        name: "Nightcrawler #2",
        year: "2014",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/50499",
        name: "Nightcrawler #3",
        year: "2014",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/50500",
        name: "Nightcrawler #4",
        year: "2014",
      },
    ],
  },
  {
    id: 1011382,
    name: "Amazoness",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [],
  },
  {
    id: 1011361,
    name: "American Eagle (Jason Strongbow)",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/f/80/4ce5a6d8b8f2a.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10105",
        name: "Marvel Comics Presents #27",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10042",
        name: "Marvel Comics Presents #128",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10045",
        name: "Marvel Comics Presents #130",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10063",
        name: "Marvel Comics Presents #147",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/10064",
        name: "Marvel Comics Presents #148",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/99072",
        name: "Marvel's Voices: Heritage #1",
        year: "2022",
      },
    ],
  },
  {
    id: 1009151,
    name: "Amiko",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/62744",
        name: "Elektra #15",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/13722",
        name: "Uncanny X-Men #181",
        year: "1981",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14206",
        name: "Wolverine #82",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14045",
        name: "Wolverine #107",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14046",
        name: "Wolverine #108",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14047",
        name: "Wolverine #109",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14093",
        name: "Wolverine #150",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14094",
        name: "Wolverine #151",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14095",
        name: "Wolverine #152",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14096",
        name: "Wolverine #153",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14118",
        name: "Wolverine #173",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14119",
        name: "Wolverine #174",
        year: "1988",
      },
    ],
  },
  {
    id: 1010672,
    name: "Amora",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/17763",
        name: "Avengers #9",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/48369",
        name: "Journey Into Mystery #503",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/48344",
        name: "Journey Into Mystery #503",
        year: "1952",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/48370",
        name: "Journey Into Mystery #504",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/48345",
        name: "Journey Into Mystery #504",
        year: "1952",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/48373",
        name: "Journey Into Mystery #507",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/48348",
        name: "Journey Into Mystery #507",
        year: "1952",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/48374",
        name: "Journey Into Mystery #508",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/48349",
        name: "Journey Into Mystery #508",
        year: "1952",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/48375",
        name: "Journey Into Mystery #510",
        year: "1996",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/48351",
        name: "Journey Into Mystery #510",
        year: "1952",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/18681",
        name: "Thor #55",
        year: "1998",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/18684",
        name: "Thor #58",
        year: "1998",
      },
    ],
  },
  {
    id: 1010673,
    name: "Amphibian (Earth-712)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/3908",
        name: "Squadron Supreme #1",
        year: "2006",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4038",
        name: "Squadron Supreme #2",
        year: "2006",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5425",
        name: "SQUADRON SUPREME : THE PRE-WAR YEARS (Hardcover)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/18820",
        name: "Squadron Supreme: New World Order #1",
        year: "1999",
      },
    ],
  },
  {
    id: 1010905,
    name: "Amun",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description:
      "Amun is a ruthless teenage assassin, employed by the Sisterhood of the Wasp to serve under the mage Vincent after Araña interrupted the ritual to initiate the Wasp's new chosen one.",
    comics: [],
  },
  {
    id: 1009152,
    name: "Ancient One",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/62140",
        name: "DOCTOR STRANGE AND THE SORCERERS SUPREME VOL. 1: OUT OF TIME TPB (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20234",
        name: "Doctor Strange, Sorcerer Supreme #7",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20245",
        name: "Doctor Strange, Sorcerer Supreme #8",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20172",
        name: "Doctor Strange, Sorcerer Supreme #13",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20182",
        name: "Doctor Strange, Sorcerer Supreme #22",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20183",
        name: "Doctor Strange, Sorcerer Supreme #23",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20194",
        name: "Doctor Strange, Sorcerer Supreme #33",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20195",
        name: "Doctor Strange, Sorcerer Supreme #34",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20207",
        name: "Doctor Strange, Sorcerer Supreme #45",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20209",
        name: "Doctor Strange, Sorcerer Supreme #47",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20217",
        name: "Doctor Strange, Sorcerer Supreme #54",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20218",
        name: "Doctor Strange, Sorcerer Supreme #55",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20250",
        name: "Doctor Strange, Sorcerer Supreme #84",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20251",
        name: "Doctor Strange, Sorcerer Supreme #85",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20253",
        name: "Doctor Strange, Sorcerer Supreme #87",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20254",
        name: "Doctor Strange, Sorcerer Supreme #88",
        year: "1988",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20090",
        name: "Doctor Strange #12",
        year: "1974",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20091",
        name: "Doctor Strange #13",
        year: "1974",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20097",
        name: "Doctor Strange #19",
        year: "1974",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/50874",
        name: "Guardians of the Galaxy #19",
        year: "1990",
      },
    ],
  },
  {
    id: 1016824,
    name: "Ancient One (Ultimate)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15771",
        name: "Ultimate Marvel Team-Up #12",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5132",
        name: "Ultimate Marvel Team-Up Ultimate Collection (Trade Paperback)",
        year: "Unknown",
      },
    ],
  },
  {
    id: 1011684,
    name: "Angel (Angel Salvadore)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description:
      "Driven out of home by her abusive step-father, fourteen-year old Angel Salvadore slept in the woods, where her mutant nature manifested itself in the form of a protective cocoon.",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5451",
        name: "New X-Men (Hardcover)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14937",
        name: "New X-Men #118",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/14960",
        name: "New X-Men #141",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/38300",
        name: "New X-Men Vol. 2: Germ-Free Generation GN-TPB (Graphic Novel)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2592",
        name: "NEW X-MEN: IMPERIAL (Trade Paperback)",
        year: "Unknown",
      },
    ],
  },
  {
    id: 1011396,
    name: "Angel (Thomas Halloway)",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20636",
        name: "Incredible Hercules #114",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/3973",
        name: "MARVEL MASTERWORKS: GOLDEN AGE MARVEL COMICS (Hardcover)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/16736",
        name: "Marvel Mystery Comics #3",
        year: "1939",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/16758",
        name: "Marvel Mystery Comics #5",
        year: "1939",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/16733",
        name: "Marvel Mystery Comics #27",
        year: "1939",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/26595",
        name: "The Marvels Project #1",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/28927",
        name: "The Marvels Project (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/26599",
        name: "The Marvels Project #4",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/26600",
        name: "The Marvels Project #5",
        year: "2009",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/30554",
        name: "The Marvels Project #7",
        year: "2009",
      },
    ],
  },
  {
    id: 1011338,
    name: "Angel (Ultimate)",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/4/50/531769ae4399f.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15715",
        name: "Ultimate X-Men #24",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15716",
        name: "Ultimate X-Men #25",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/211",
        name: "Ultimate X-Men #40",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2227",
        name: "Ultimate X-Men #61",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2475",
        name: "Ultimate X-Men #63",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/2476",
        name: "Ultimate X-Men #64",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/3037",
        name: "Ultimate X-Men #65",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4041",
        name: "Ultimate X-Men #69",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/4153",
        name: "Ultimate X-Men #70",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/16453",
        name: "Ultimate X-Men #86",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20638",
        name: "Ultimate X-Men #91",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/20967",
        name: "Ultimate X-Men #93",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21177",
        name: "Ultimate X-Men #94",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21326",
        name: "Ultimate X-Men #95",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21507",
        name: "Ultimate X-Men #96",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21709",
        name: "Ultimate X-Men #97",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/23572",
        name: "Ultimate X-Men #100",
        year: "2001",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/15918",
        name: "Ultimate X-Men Annual #1",
        year: "2005",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/5057",
        name: "ULTIMATE X-MEN VOL. 14: PHOENIX TPB (Trade Paperback)",
        year: "Unknown",
      },
    ],
  },
  {
    id: 1009153,
    name: "Angel (Warren Worthington III)",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/60507",
        name: "All-New Wolverine #17",
        year: "2015",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21197",
        name: "Angel: Revelations #1",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21345",
        name: "Angel: Revelations #2",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21525",
        name: "Angel: Revelations #3",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21725",
        name: "Angel: Revelations #4",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/21953",
        name: "Angel: Revelations #5",
        year: "2008",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/65055",
        name: "Astonishing X-Men #5",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/65405",
        name: "Astonishing X-Men #7",
        year: "2017",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/66299",
        name: "Astonishing X-Men by Charles Soule Vol. 1: Life of X (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8055",
        name: "Champions #1",
        year: "1975",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8066",
        name: "Champions #4",
        year: "1975",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8067",
        name: "Champions #5",
        year: "1975",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8068",
        name: "Champions #6",
        year: "1975",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8069",
        name: "Champions #7",
        year: "1975",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8070",
        name: "Champions #8",
        year: "1975",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8056",
        name: "Champions #10",
        year: "1975",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8058",
        name: "Champions #12",
        year: "1975",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8059",
        name: "Champions #13",
        year: "1975",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8061",
        name: "Champions #15",
        year: "1975",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/8063",
        name: "Champions #17",
        year: "1975",
      },
    ],
  },
  {
    id: 1017574,
    name: "Angela (Aldrif Odinsdottir)",
    thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/7/00/545a82f59dd73.jpg",
    description: "",
    comics: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/51201",
        name: "1602 Witch Hunter Angela #4",
        year: "2015",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/56505",
        name: "Angela: Queen of Hel #5",
        year: "2015",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/71308",
        name: "Asgardians of the Galaxy #1",
        year: "2018",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/71310",
        name: "Asgardians of the Galaxy #2",
        year: "2018",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/71311",
        name: "Asgardians of the Galaxy #3",
        year: "2018",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/71312",
        name: "Asgardians of the Galaxy #4",
        year: "2018",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/71313",
        name: "Asgardians of the Galaxy #5",
        year: "2018",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/73994",
        name: "Asgardians of the Galaxy #6",
        year: "2018",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/73995",
        name: "Asgardians of the Galaxy #7",
        year: "2018",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/73996",
        name: "Asgardians of the Galaxy #8",
        year: "2018",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/73998",
        name: "Asgardians of the Galaxy #10",
        year: "2018",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/71309",
        name: "Asgardians Of The Galaxy Vol. 1: The Infinity Armada (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/43301",
        name: "Guardians of the Galaxy #5",
        year: "2013",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/43300",
        name: "Guardians of the Galaxy #6",
        year: "2013",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/43296",
        name: "Guardians of the Galaxy #10",
        year: "2013",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/43295",
        name: "Guardians of the Galaxy #11",
        year: "2013",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/60980",
        name: "Guardians of the Galaxy #18",
        year: "2015",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/60676",
        name: "GUARDIANS OF THE GALAXY VOL. 4 HC (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/60168",
        name: "Guardians of The Galaxy: New Guard Vol. 3 - Civil War II (Trade Paperback)",
        year: "Unknown",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/60169",
        name: "GUARDIANS OF THE GALAXY: NEW GUARD VOL. 3 - CIVIL WAR II TPB (Trade Paperback)",
        year: "Unknown",
      },
    ],
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Character>>
) {
  let search = req.query.search;
  if (typeof search != "string") search = undefined;

  let response: any = dummyResponse;
  if (!API_IS_BEING_DUMB) response = await Character.getCharacters(search);
  else if (search)
    response = response.filter((char: any) =>
      char.name.toLowerCase().startsWith(search.toLowerCase())
    );

  res.status(200).json(response);
}
