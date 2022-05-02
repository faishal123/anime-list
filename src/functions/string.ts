export const removeExtraWhiteSpace = (string: string): string => {
  return string.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ");
};

export const removeSpecialCharacter = (string: string): string => {
  return removeExtraWhiteSpace(string.replace(/[^a-zA-Z\d\s]/gm, " "));
};

export const showAnimeFormatAndEpisode = (anime) => {
  return `${removeSpecialCharacter(anime?.format)}${
    anime?.episodes ? ` (${anime?.episodes} Eps)` : ""
  }`;
};
