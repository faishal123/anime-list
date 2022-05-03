import React from "react";
import { RatingContainer } from "./style";
import Image from "next/image";
import Text from "../Text";
import starIconBlue from "src/assets/svg/starIconBlue.svg";
import { SingleMediaType } from "src/graphql/query/SingleAnime/interface";

interface StarRatingProps {
  anime: SingleMediaType;
}

const StarRating: React.FC<StarRatingProps> = ({ anime }) => {
  return (
    <RatingContainer className="margin--medium-b">
      <Image alt="rating" height={16} width={16} src={starIconBlue} />
      <Text
        color="white"
        size="medium"
        text={`${(anime?.averageScore || 10) / 10}`}
      />
    </RatingContainer>
  );
};

export default StarRating;
