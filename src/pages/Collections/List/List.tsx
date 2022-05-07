import React, { useEffect, useState } from "react";
import {
  BackgroundWrapper,
  PageWrapper,
  Header,
  Text,
  Line,
  Notification,
  Button,
} from "src/components";
import { getCollectionList } from "src/functions/localStorage";
import { useGetAnimeInCollection } from "./function";
import Collection from "./Collection";
import { NotificationStateType } from "src/constant/interface";
import { TitleContainer } from "src/pages/Home/style";
import { CollectionsType } from "src/constant/interface";
import {
  NoCollectionContainer,
  AddCollectionButtonContainer,
  DesktopCollectionListContainer,
} from "./style";
import DeleteCollectionModal from "./DeleteCollectionModal";
import { useDesktop } from "src/functions/handleScreen";
import CreateCollectionModal from "./CreateCollectionModal";
import { deleteCollection } from "src/functions/localStorage";

const List = () => {
  const isDesktop = useDesktop();
  const [renderDeleteCollectionModal, setRenderDeleteCollectionModal] =
    useState<string>("");
  const [renderCreateCollectionModal, setRenderCreateCollectionModal] =
    useState<boolean>(false);
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

  const onAddNewCollection = () => {
    setRenderCreateCollectionModal(true);
  };

  const confirmDeleteCollection = (name: string) => {
    deleteCollection(name);
    setRenderNotification({
      type: "success",
      message: "Collection Deleted!",
    });
    setRenderDeleteCollectionModal("");
    getCollectionFromLocalStorage();
  };

  const onDeleteCollection = (name: string) => {
    setRenderDeleteCollectionModal(name);
  };

  const renderCollectionList = () => {
    return collectionsKeys.map((c, i) => {
      return (
        <Collection
          fullCollection={collections}
          animes={data?.Page?.media}
          loading={loading}
          key={c}
          index={i}
          length={collectionsKeys?.length}
          name={c}
          onDeleteCollection={onDeleteCollection}
        ></Collection>
      );
    });
  };

  const renderAddCollectionButton = () => {
    return (
      <Button
        id={`btn-addNewCollection`}
        onClick={onAddNewCollection}
        text="Add New Collection"
        size="small"
      />
    );
  };

  return (
    <>
      <DeleteCollectionModal
        collectionToDelete={renderDeleteCollectionModal}
        show={!!renderDeleteCollectionModal}
        onLeave={() => {
          setRenderDeleteCollectionModal("");
        }}
        confirmDeleteCollection={confirmDeleteCollection}
      />
      <CreateCollectionModal
        onCompleted={() => {
          setRenderNotification({
            type: "success",
            message: "Collection Added!",
          });
          setRenderCreateCollectionModal(false);
          getCollectionFromLocalStorage();
        }}
        show={renderCreateCollectionModal}
        onLeave={() => {
          setRenderCreateCollectionModal(false);
        }}
      />
      <Notification
        id="notification-collection-list"
        onClose={() => {
          setRenderNotification((prev) => ({ ...prev, message: "" }));
        }}
        type={renderNotification?.type}
        message={renderNotification?.message}
      />
      <BackgroundWrapper>
        <Header />
        <PageWrapper id="pageWrapper">
          <TitleContainer className="margin--xxlarge-b">
            <Line id="line-collection-list" />
            <Text
              id="txt-title"
              text="Your Collections"
              size="large"
              variant="bold"
            />
          </TitleContainer>
          {collectionsKeys?.length > 0 ? (
            <>
              {isDesktop ? (
                <AddCollectionButtonContainer>
                  {renderAddCollectionButton()}
                </AddCollectionButtonContainer>
              ) : (
                renderAddCollectionButton()
              )}
              {isDesktop ? (
                <DesktopCollectionListContainer className="margin--large-t">
                  {renderCollectionList()}
                </DesktopCollectionListContainer>
              ) : (
                <div className="margin--large-t">{renderCollectionList()}</div>
              )}
            </>
          ) : (
            <>
              <NoCollectionContainer className="margin--xxxxlarge-t">
                <div>
                  <Text
                    id="txt-collection-empty"
                    align="center"
                    text={"You Have no Collection"}
                    size="xmedium"
                    color="#909090"
                    block
                  />
                  <div onClick={onAddNewCollection} className="margin--small-t">
                    <Text
                      id="txt-addNewCollection"
                      align="center"
                      text={"Click to add a new collection"}
                      size="xmedium"
                      color="#00c2ff"
                    />
                  </div>
                </div>
              </NoCollectionContainer>
            </>
          )}
        </PageWrapper>
      </BackgroundWrapper>
    </>
  );
};

export default List;
