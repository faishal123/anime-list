interface TitleType {
  english: string | null;
  romaji: string | null;
  native: string | null;
}

interface CharacterType {
  nodes: {
    id: number | null;
    name: {
      first: string | null;
      middle: string | null;
      last: string | null;
      full: string | null;
      native: string | null;
      userPreferred: string | null;
    } | null;
    image: {
      large: string | null;
      medium: string | null;
    } | null;
    description: string | null;
  };
}

export interface SingleAnimeType {
  Media: {
    title: TitleType | null;
    id: number | null;
    isAdult: boolean | null;
    genres: string[] | null;
    bannerImage: string | null;
    popularity: number | null;
    description: string | null;
    episodes: number | null;
    status:
      | "FINISHED"
      | "RELEASING"
      | "NOT_YET_RELEASED"
      | "CANCELLED"
      | "HIATUS"
      | null;
    format:
      | "TV"
      | "TV_SHORT"
      | "MOVIE"
      | "SPECIAL"
      | "OVA"
      | "ONA"
      | "MUSIC"
      | "MANGA"
      | "NOVEL"
      | "ONE_SHOT"
      | null;
    chapters: number | null;
    type: "ANIME" | "MANGA" | null;
    meanScore: number | null;
    averageScore: number | null;
    characters: CharacterType[] | null;
    coverImage: {
      extraLarge: string | null;
      large: string | null;
      medium: string | null;
      color: string | null;
    } | null;
    trailer: {
      id: number | null;
      site: string | null;
      thumbnail: string | null;
    } | null;
  };
}
