import React from "react";
import { useGetPopularAnimeList } from "./function";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import { useMobile } from "../../functions/handleScreen";
import { Text, Header, Line, Button } from "../../components";
import {
  ContentContainer,
  TitleContainer,
  AnimeContainer,
  AnimeBannerContainer,
  AnimeInfoContainer,
  RatingContainer,
  GenresContainer,
  SingleGenre,
} from "./style";
import Image from "next/image";
import { removeSpecialCharacter } from "src/functions/string";
import starIconBlue from "src/assets/svg/starIconBlue.svg";

const Home = () => {
  const isMobile = useMobile();
  const { data, setPage, page } = useGetPopularAnimeList();
  console.log(data);
  const animeList = data?.Page?.media || [];
  if (isMobile) {
    return (
      <BackgroundWrapper>
        <Header />
        <ContentContainer>
          <TitleContainer>
            <Line />
            <Text
              size="large"
              variant="bold"
              text="Most Popular of All Time"
              color="white"
            />
          </TitleContainer>
          {animeList?.map((anime) => {
            console.log(anime?.title);
            return (
              <AnimeContainer key={anime?.id}>
                <AnimeBannerContainer>
                  <Image
                    alt={`${anime?.title?.english}-banner`}
                    height={138}
                    width={100}
                    src={anime?.coverImage?.medium}
                  />
                </AnimeBannerContainer>
                <AnimeInfoContainer>
                  <div className="margin--medium-b">
                    <Text
                      block
                      color="white"
                      text={
                        anime?.title?.english ||
                        anime?.title?.romaji ||
                        anime?.title?.native
                      }
                      variant="bold"
                      size="large"
                    />
                  </div>
                  <div className="margin--medium-b">
                    <Text
                      block
                      color="white"
                      text={`${removeSpecialCharacter(anime?.format)}${
                        anime?.episodes ? ` (${anime?.episodes} Eps)` : ""
                      }`}
                      size="medium"
                    />
                  </div>
                  <RatingContainer className="margin--medium-b">
                    <Image
                      alt="rating"
                      height={16}
                      width={16}
                      src={starIconBlue}
                    />
                    <Text
                      color="white"
                      size="medium"
                      text={`${anime?.averageScore / 10}`}
                    />
                  </RatingContainer>
                  <GenresContainer>
                    {anime?.genres?.map((genre) => {
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
                    })}
                  </GenresContainer>
                </AnimeInfoContainer>
              </AnimeContainer>
            );
          })}
          {page > 1 && (
            <Button
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
              text="Prev"
            />
          )}
          <Button
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
            text="Next"
          />
        </ContentContainer>
      </BackgroundWrapper>
    );
  }
  return <div>home</div>;
};

export default Home;
