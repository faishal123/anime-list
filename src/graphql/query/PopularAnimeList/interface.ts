import { TitleType } from "../SingleAnime/interface";

export interface SingleMedia {
  title?: TitleType | null;
  id?: number | null;
  isAdult?: boolean | null;
  genres?: string[] | null;
  bannerImage?: string | null;
  popularity?: number | null;
  episodes?: number | null;
  status?:
    | "FINISHED"
    | "RELEASING"
    | "NOT_YET_RELEASED"
    | "CANCELLED"
    | "HIATUS"
    | null;
  format?:
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
  chapters?: number | null;
  type?: "ANIME" | "MANGA" | null;
  meanScore?: number | null;
  averageScore?: number | null;
  coverImage?: {
    extraLarge: string | null;
    large: string | null;
    medium: string | null;
    color: string | null;
  } | null;
  trailer?: {
    id: number | null;
    site: string | null;
    thumbnail: string | null;
  } | null;
}

export interface PagesType {
  Page: {
    media: SingleMedia[];
    pageInfo: {
      total: number;
      perPage: number;
      currentPage: number;
      lastPage: number;
      hasNextPage: boolean;
    };
  };
}
