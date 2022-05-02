/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useGetPopularAnimeList } from "./function";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import { useMobile } from "../../functions/handleScreen";
import { Text, Header, Line, Button, LoaderCircle } from "../../components";
import {
  ContentContainer,
  TitleContainer,
  AnimeContainer,
  AnimeBannerContainer,
  AnimeInfoContainer,
  RatingContainer,
  GenresContainer,
  SingleGenre,
  LoadingContainer,
  PageButtonContainer,
} from "./style";
import Image from "next/image";
import { removeSpecialCharacter } from "src/functions/string";
import starIconBlue from "src/assets/svg/starIconBlue.svg";
import { useRouter } from "next/router";

const Home = () => {
  const isMobile = useMobile();
  const { data, loading } = useGetPopularAnimeList();
  const animeList = data?.Page?.media || [];
  const router = useRouter();
  const currentPage = Number(router?.query?.page);
  const isRouterReady = router?.isReady;
  useEffect(() => {
    if (isRouterReady && !currentPage) {
      router.replace("/?page=1");
    }
  }, [isRouterReady]);

  const onAnimeClick = (anime) => {
    router.push(`/anime/${anime?.id}`);
  };

  if (isMobile) {
    return (
      <BackgroundWrapper>
        <Header />
        {loading ? (
          <LoadingContainer>
            <LoaderCircle />
          </LoadingContainer>
        ) : (
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
              return (
                <AnimeContainer key={anime?.id}>
                  <AnimeBannerContainer
                    onClick={() => {
                      onAnimeClick(anime);
                    }}
                  >
                    <Image
                      alt={`${anime?.title?.english}-banner`}
                      height={138}
                      width={100}
                      src={anime?.coverImage?.medium}
                    />
                  </AnimeBannerContainer>
                  <AnimeInfoContainer>
                    <div
                      className="margin--medium-b"
                      onClick={() => {
                        onAnimeClick(anime);
                      }}
                    >
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
            <PageButtonContainer>
              {currentPage > 1 ? (
                <Button
                  onClick={() => {
                    router.push(`/?page=${Number(currentPage) - 1}`);
                  }}
                  text="Prev"
                />
              ) : (
                <div></div>
              )}
              <Button
                onClick={() => {
                  router.push(`/?page=${Number(currentPage) + 1}`);
                }}
                text="Next"
              />
            </PageButtonContainer>
          </ContentContainer>
        )}
      </BackgroundWrapper>
    );
  }
  return <div>home</div>;
};

export default Home;
