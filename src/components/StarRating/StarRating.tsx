import React from "react";
import { RatingContainer } from "./style";
import Image from "next/image";
import Text from "../Text";
import starIconBlue from "src/assets/svg/starIconBlue.svg";
import { SingleMedia } from "src/graphql/query/PopularAnimeList/interface";
import { SingleMediaType } from "src/graphql/query/SingleAnime/interface";

interface StarRatingProps {
  anime: SingleMediaType | SingleMedia;
  id: string;
}

const StarRating: React.FC<StarRatingProps> = ({ anime, id }) => {
  return (
    <RatingContainer id={id} data-testid={id} className="margin--medium-b">
      <Image alt="rating" height={16} width={16} src={starIconBlue} />
      <Text
        id={`averageScore-${anime.id}`}
        color="white"
        text={`${(anime.averageScore || 10) / 10}`}
      />
    </RatingContainer>
  );
};

export default StarRating;
