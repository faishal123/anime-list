import React, { useEffect, useState } from "react";
import {
  BackgroundWrapper,
  PageWrapper,
  Header,
  Text,
  Line,
  Notification,
} from "src/components";
import { getCollectionList } from "src/functions/localStorage";
import { useGetAnimeInCollection } from "./function";
import Collection from "./Collection";
import { NotificationStateType } from "src/constant/interface";
import { TitleContainer, LoadingContainer } from "src/pages/Home/style";
import { CollectionsType } from "src/constant/interface";

const List = () => {
  const [renderNotification, setRenderNotification] =
    useState<NotificationStateType>({ type: "success", message: "" });
  const [collections, setCollections] = useState<CollectionsType>({});
  const [animesInCollection, setAnimesInCollection] = useState<number[]>([]);
  const collectionsKeys = Object.keys(collections);

  const getCollectionFromLocalStorage = () => {
    const collectionsFromStorage = getCollectionList();
    setCollections(collectionsFromStorage);
    setAnimesInCollection(
      Array.from(
        new Set(
          Object.values(collectionsFromStorage)?.reduce<number[]>(
            (a, c: number[]) => {
              return [...a, ...c];
            },
            []
          )
        )
      )
    );
  };

  useEffect(() => {
    getCollectionFromLocalStorage();
  }, []);

  const { loading, data } = useGetAnimeInCollection({
    animeIds: animesInCollection,
  });

  return (
    <>
      <Notification
        onClose={() => {
          setRenderNotification((prev) => ({ ...prev, message: "" }));
        }}
        type={renderNotification?.type}
        message={renderNotification?.message}
      />
      <BackgroundWrapper>
        <Header />
        <PageWrapper>
          <TitleContainer className="margin--xxlarge-b">
            <Line />
            <Text text="Your Collections" size="large" variant="bold" />
          </TitleContainer>
          {collectionsKeys?.length > 0 ? (
            <div>
              {collectionsKeys.map((c, i) => {
                return (
                  <Collection
                    getCollectionFromLocalStorage={
                      getCollectionFromLocalStorage
                    }
                    setRenderNotification={setRenderNotification}
                    fullCollection={collections}
                    animes={data?.Page?.media}
                    loading={loading}
                    key={c}
                    index={i}
                    length={collectionsKeys?.length}
                    name={c}
                  ></Collection>
                );
              })}
            </div>
          ) : (
            <LoadingContainer>
              <Text
                text={"You Have no Collection"}
                size="xmedium"
                color="#909090"
              />
            </LoadingContainer>
          )}
        </PageWrapper>
      </BackgroundWrapper>
    </>
  );
};

export default List;
