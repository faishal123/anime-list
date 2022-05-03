/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCollectionList } from "src/functions/localStorage";
import { useGetAnimeInCollection } from "../List/function";
import {
  BackgroundWrapper,
  PageWrapper,
  Header,
  Text,
  Line,
  LoaderCircle,
} from "src/components";
import { LoadingContainer } from "src/pages/Home/style";
import Anime from "src/pages/Home/Anime";
import { TitleContainer } from "src/pages/Home/style";

const CollectionDetail = () => {
  const [animeIds, setAnimeIds] = useState<number[]>([]);
  const router = useRouter();
  const collectionName = `${router?.query?.name}`;
  const isRouterReady = router?.isReady;

  useEffect(() => {
    if (isRouterReady) {
      if (!!collectionName) {
        const collectionsList = getCollectionList();
        const collectionExist = !!collectionsList?.[collectionName];
        if (collectionExist) {
          setAnimeIds(collectionsList?.[collectionName]);
        } else {
          router.push("/collections");
        }
      }
    }
  }, [isRouterReady]);

  const { loading, data } = useGetAnimeInCollection({ animeIds });
  const animeList = data?.Page?.media;

  return (
    <BackgroundWrapper>
      <Header />
      {loading ? (
        <LoadingContainer>
          <LoaderCircle />
        </LoadingContainer>
      ) : (
        <>
          <PageWrapper>
            <TitleContainer className="margin--xxlarge-b">
              <Line />
              <div>
                <Text
                  size="large"
                  variant="bold"
                  text={`${collectionName} `}
                  color="white"
                />
                <Text size="large" text={`Collection`} color="white" />
              </div>
            </TitleContainer>
            {animeIds?.length > 0 ? (
              <>
                {animeList?.map((anime) => {
                  return <Anime key={anime?.id} anime={anime} />;
                })}
              </>
            ) : (
              <LoadingContainer>
                <Text text="Collection is empty" size="large" color="#909090" />
              </LoadingContainer>
            )}
          </PageWrapper>
        </>
      )}
    </BackgroundWrapper>
  );
};

export default CollectionDetail;
