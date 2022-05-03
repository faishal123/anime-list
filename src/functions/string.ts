import { SingleMediaType } from "src/graphql/query/SingleAnime/interface";
import { SingleMedia } from "src/graphql/query/PopularAnimeList/interface";

export const removeExtraWhiteSpace = (string: string): string => {
  return string.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
};

export const removeSpecialCharacter = (string: string): string => {
  return removeExtraWhiteSpace(string.replace(/[^a-zA-Z\d\s]/gm, " "));
};

export const showAnimeFormatAndEpisode = (
  anime: SingleMediaType | SingleMedia
) => {
  return `${removeSpecialCharacter(anime?.format || "TV")}${
    anime?.episodes ? ` (${anime?.episodes} Eps)` : ""
  }`;
};

export const parseHTML = (description: string | null, document: Document) => {
  const descriptionContainer = document.createElement("html");
  descriptionContainer.innerHTML = description || "";
  return descriptionContainer.innerText;
};

export const showAnimeTitle = (anime?: SingleMedia | SingleMediaType) => {
  if (!!anime) {
    return (
      anime?.title?.english || anime?.title?.romaji || anime?.title?.native
    );
  }
  return "";
};
