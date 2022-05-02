/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useGetPopularAnimeList } from "./function";
import BackgroundWrapper from "../../components/BackgroundWrapper";
// import { useMobile } from "../../functions/handleScreen";
import {
  Text,
  Header,
  Line,
  Button,
  LoaderCircle,
  PageWrapper,
  Genre,
} from "../../components";
import {
  TitleContainer,
  AnimeContainer,
  AnimeBannerContainer,
  AnimeInfoContainer,
  RatingContainer,
  GenresContainer,
  LoadingContainer,
  PageButtonContainer,
} from "./style";
import Image from "next/image";
import { showAnimeFormatAndEpisode } from "src/functions/string";
import starIconBlue from "src/assets/svg/starIconBlue.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {
  // const isMobile = useMobile();
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

  // if (isMobile) {
  return (
    <BackgroundWrapper>
      <Header />
      {loading ? (
        <LoadingContainer>
          <LoaderCircle />
        </LoadingContainer>
      ) : (
        <PageWrapper>
          <TitleContainer className="margin--xxlarge-b">
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
                <Link passHref href={`/anime/${anime?.id}`}>
                  <a>
                    <AnimeBannerContainer>
                      <Image
                        alt={`${anime?.title?.english}-banner`}
                        height={138}
                        width={100}
                        src={anime?.coverImage?.medium}
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
                            anime?.title?.native
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
                      return <Genre key={genre} genre={genre}></Genre>;
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
        </PageWrapper>
      )}
    </BackgroundWrapper>
  );
  // }
  // return <div>home</div>;
};

export default Home;
