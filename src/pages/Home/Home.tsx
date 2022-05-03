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
} from "../../components";
import { TitleContainer, LoadingContainer, PageButtonContainer } from "./style";
import { useRouter } from "next/router";
import Anime from "./Anime";

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
          <>
            {animeList?.map((anime) => {
              return <Anime key={anime?.id} anime={anime} />;
            })}
          </>
          <PageButtonContainer>
            {currentPage > 1 ? (
              <div>
                <Button
                  onClick={() => {
                    router.push(`/?page=${Number(currentPage) - 1}`);
                  }}
                  text="Prev"
                />
              </div>
            ) : (
              <div></div>
            )}
            <div>
              <Button
                onClick={() => {
                  router.push(`/?page=${Number(currentPage) + 1}`);
                }}
                text="Next"
              />
            </div>
          </PageButtonContainer>
        </PageWrapper>
      )}
    </BackgroundWrapper>
  );
  // }
  // return <div>home</div>;
};

export default Home;
