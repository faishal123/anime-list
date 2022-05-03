/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useGetPopularAnimeList } from "./function";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import { useDesktop } from "src/functions/handleScreen";
import {
  Text,
  Header,
  Line,
  Button,
  LoaderCircle,
  PageWrapper,
} from "../../components";
import {
  TitleContainer,
  LoadingContainer,
  PageButtonContainer,
  DesktopAnimeListContainer,
  DesktopPageButtonContainer,
} from "./style";
import { useRouter } from "next/router";
import Anime from "./Anime";

const Home = () => {
  const isDesktop = useDesktop();
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

  const renderAnimeList = () => {
    return animeList?.map((anime) => {
      return <Anime key={anime?.id} anime={anime} />;
    });
  };

  const renderTitle = () => {
    return (
      <TitleContainer className="margin--xxlarge-b">
        <Line />
        <Text
          size="large"
          variant="bold"
          text="Most Popular of All Time"
          color="white"
        />
      </TitleContainer>
    );
  };

  const renderPageButton = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <BackgroundWrapper>
      <Header />
      {loading ? (
        <LoadingContainer>
          <LoaderCircle />
        </LoadingContainer>
      ) : (
        <>
          {animeList?.length > 0 && (
            <PageWrapper>
              {renderTitle()}
              <>
                {isDesktop ? (
                  <DesktopAnimeListContainer>
                    {renderAnimeList()}
                  </DesktopAnimeListContainer>
                ) : (
                  renderAnimeList()
                )}
              </>
              {isDesktop ? (
                <DesktopPageButtonContainer>
                  {renderPageButton()}
                </DesktopPageButtonContainer>
              ) : (
                <PageButtonContainer>{renderPageButton()}</PageButtonContainer>
              )}
            </PageWrapper>
          )}
        </>
      )}
    </BackgroundWrapper>
  );
};

export default Home;
