import React from "react";
import Text from "../Text";
import { SingleGenre } from "./style";

interface Genreprops {
  genre: string;
}

const Genre: React.FC<Genreprops> = ({ genre }) => {
  return (
    <SingleGenre key={genre}>
      <Text
        lineHeight={"omitLineHeight"}
        text={genre}
        size="medium"
        color="white"
      />
    </SingleGenre>
  );
};

export default Genre;
