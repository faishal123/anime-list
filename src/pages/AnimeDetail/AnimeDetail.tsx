import React, { useState } from "react";
import { useGetSingleAnime } from "./function";
import { Header } from "src/components";
import { LoaderCircle } from "src/components";
import {
  PageWrapper,
  BackgroundWrapper,
  Line,
  Genre,
  StarRating,
} from "src/components";
import { Text } from "src/components";
import { BannerContainer, StarRatingContainer, GenresContainer } from "./style";
import { showAnimeFormatAndEpisode } from "src/functions/string";
import Image from "next/image";
import { parseHTML } from "src/functions/string";
import { TitleContainer } from "../Home/style";

const AnimeDetail = () => {
  const [description, setDescription] = useState("");
  const { loading, data } = useGetSingleAnime({
    onCompleted: (d) => {
      console.log(d);
      const descriptionParsed = parseHTML(d?.Media?.description, document);
      setDescription(descriptionParsed);
    },
  });

  const animeObject = data?.Media;
  const animeTitle = animeObject?.title;
  const largeCover = animeObject?.coverImage?.extraLarge;

  const shownAnimeTitle =
    animeTitle?.english || animeTitle?.romaji || animeTitle?.native;
  const genres = animeObject?.genres;
  return (
    <BackgroundWrapper>
      {loading ? (
        <LoaderCircle />
      ) : (
        !!data && (
          <>
            <Header />
            <PageWrapper>
              <div className="margin--large-b">
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
              <BannerContainer className="margin--xlarge-b">
                <Image
                  src={largeCover}
                  layout="fill"
                  alt={`${shownAnimeTitle}-cover`}
                  objectFit="cover"
                />
              </BannerContainer>
              <GenresContainer className="margin--large-b">
                {genres.map((genre) => {
                  return <Genre key={genre} genre={genre} />;
                })}
              </GenresContainer>
              <div>
                <Text
                  block
                  align="justify"
                  lineHeight={1.5}
                  text={description}
                  size="medium"
                />
              </div>
            </PageWrapper>
          </>
        )
      )}
    </BackgroundWrapper>
  );
};

export default AnimeDetail;
