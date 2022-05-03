import React from "react";
import {
  AnimeContainer,
  AnimeBannerContainer,
  AnimeInfoContainer,
  RatingContainer,
  GenresContainer,
} from "../style";
import Image from "next/image";
import Link from "next/link";
import { showAnimeFormatAndEpisode } from "src/functions/string";
import { Text, Genre } from "src/components";
import { SingleMedia } from "src/graphql/query/PopularAnimeList/interface";
import placeholderImage from "src/assets/svg/placeholder.svg";
import starIconBlue from "src/assets/svg/starIconBlue.svg";

interface AnimeProps {
  anime: SingleMedia;
}

const Anime: React.FC<AnimeProps> = ({ anime }) => {
  return (
    <AnimeContainer key={anime?.id}>
      <Link passHref href={`/anime/${anime?.id}`}>
        <a>
          <AnimeBannerContainer>
            <Image
              alt={`${anime?.title?.english}-banner`}
              height={138}
              width={100}
              src={anime?.coverImage?.medium || placeholderImage}
            />
          </AnimeBannerContainer>
        </a>
      </Link>
      <AnimeInfoContainer>
        <Link passHref href={`/anime/${anime?.id}`}>
          <a>
            <div className="margin--medium-b">
              <Text
                block
                color="white"
                text={
                  anime?.title?.english ||
                  anime?.title?.romaji ||
                  anime?.title?.native ||
                  ""
                }
                variant="bold"
                size="large"
              />
            </div>
          </a>
        </Link>
        <div className="margin--medium-b">
          <Text
            block
            color="white"
            text={showAnimeFormatAndEpisode(anime)}
            size="medium"
          />
        </div>
        <RatingContainer className="margin--medium-b">
          <Image alt="rating" height={16} width={16} src={starIconBlue} />
          <Text
            color="white"
            size="medium"
            text={`${(anime?.averageScore || 1) / 10}`}
          />
        </RatingContainer>
        <GenresContainer>
          {anime?.genres?.map((genre) => {
            return <Genre key={genre} genre={genre}></Genre>;
          })}
        </GenresContainer>
      </AnimeInfoContainer>
    </AnimeContainer>
  );
};

export default Anime;
