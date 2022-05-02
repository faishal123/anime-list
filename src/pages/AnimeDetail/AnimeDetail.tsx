import React from "react";
import { useGetSingleAnime } from "./function";
import { Header } from "src/components";
import { LoaderCircle } from "src/components";
import { PageWrapper, BackgroundWrapper, Line } from "src/components";
import { Text } from "src/components";
import { BannerContainer, StarRatingContainer } from "./style";
import { showAnimeFormatAndEpisode } from "src/functions/string";
import Image from "next/image";
import { TitleContainer } from "../Home/style";
import { StarRating } from "src/components";

const AnimeDetail = () => {
  const { loading, data } = useGetSingleAnime();
  const animeObject = data?.Media;
  const animeTitle = animeObject?.title;
  const largeCover = animeObject?.coverImage?.extraLarge;

  const shownAnimeTitle =
    animeTitle?.english || animeTitle?.romaji || animeTitle?.native;
  console.log(data);
  return (
    <BackgroundWrapper>
      {loading ? (
        <LoaderCircle />
      ) : (
        !!data && (
          <>
            <Header />
            <PageWrapper>
              <div className="margin--xxlarge-b">
                <TitleContainer className="margin--small-b">
                  <Line height="34px" />
                  <Text variant="bold" text={shownAnimeTitle} size="xxlarge" />
                </TitleContainer>
                <div className="margin--large-l">
                  <StarRatingContainer>
                    <Text
                      size="medium"
                      text={showAnimeFormatAndEpisode(animeObject)}
                    />
                    <StarRating anime={animeObject} />
                  </StarRatingContainer>
                </div>
              </div>
              <BannerContainer>
                <Image
                  src={largeCover}
                  layout="fill"
                  alt={`${shownAnimeTitle}-cover`}
                  objectFit="cover"
                />
              </BannerContainer>
            </PageWrapper>
          </>
        )
      )}
    </BackgroundWrapper>
  );
};

export default AnimeDetail;
