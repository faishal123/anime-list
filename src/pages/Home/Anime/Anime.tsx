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
import { Text, Genre, Button } from "src/components";
import { SingleMedia } from "src/graphql/query/PopularAnimeList/interface";
import placeholderImage from "src/assets/svg/placeholder.svg";
import starIconBlue from "src/assets/svg/starIconBlue.svg";
import { DeleteButtonContainer } from "./style";
import { useDesktop } from "src/functions/handleScreen";
import trashIcon from "src/assets/svg/trashWhite.svg";

interface AnimeProps {
  anime: SingleMedia;
  showDeleteButton?: boolean;
  onDelete?: ((anime: SingleMedia) => void) | (() => void);
}

const Anime: React.FC<AnimeProps> = ({
  anime,
  showDeleteButton = false,
  onDelete = () => null,
}) => {
  const isDesktop = useDesktop();
  return (
    <div className="margin--xxlarge-b">
      <AnimeContainer key={anime?.id}>
        <div>
          <Link passHref href={`/anime/${anime?.id}`}>
            <a>
              <AnimeBannerContainer>
                <Image
                  alt={`${anime?.title?.english}-banner`}
                  height={138}
                  width={100}
                  src={
                    isDesktop
                      ? anime?.coverImage?.extraLarge
                      : anime?.coverImage?.medium || placeholderImage
                  }
                />
              </AnimeBannerContainer>
            </a>
          </Link>

          {showDeleteButton ? (
            <DeleteButtonContainer>
              <Button
                id={`btn-delete-${anime?.id}`}
                onClick={() => {
                  onDelete(anime);
                }}
                variant="red"
                iconOnly={{
                  src: trashIcon,
                  alt: "delete",
                }}
                size="small"
              />
            </DeleteButtonContainer>
          ) : null}
        </div>
        <AnimeInfoContainer>
          <Link passHref href={`/anime/${anime?.id}`}>
            <a>
              <div className="margin--medium-b">
                <Text
                  id={`txt-title-${anime?.id}`}
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
              id={`txt-anime-format-${anime?.id}`}
              block
              color="white"
              text={showAnimeFormatAndEpisode(anime)}
              size="medium"
            />
          </div>
          <RatingContainer className="margin--medium-b">
            <Image alt="rating" height={16} width={16} src={starIconBlue} />
            <Text
              id={`txt-score-${anime?.id}`}
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
    </div>
  );
};

export default Anime;
