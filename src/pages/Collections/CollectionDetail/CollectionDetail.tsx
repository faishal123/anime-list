/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  getCollectionList,
  deleteAnimeFromCollection,
} from "src/functions/localStorage";
import { useGetAnimeInCollection } from "../List/function";
import {
  BackgroundWrapper,
  PageWrapper,
  Header,
  Text,
  Line,
  LoaderCircle,
  ConfirmationModal,
  Notification,
} from "src/components";
import { useDesktop } from "src/functions/handleScreen";
import { LoadingContainer } from "src/pages/Home/style";
import { SingleMedia } from "src/graphql/query/PopularAnimeList/interface";
import Anime from "src/pages/Home/Anime";
import { TitleContainer } from "src/pages/Home/style";
import { NotificationStateType } from "src/constant/interface";
import { DesktopAnimeListContainer } from "src/pages/Home/style";
import { showAnimeTitle } from "src/functions/string";

const CollectionDetail = () => {
  const isDesktop = useDesktop();
  const [renderNotification, setRenderNotification] =
    useState<NotificationStateType>({ type: "success", message: "" });
  const [renderDeleteModal, setRenderDeleteModal] = useState<SingleMedia>({});
  const [animeIds, setAnimeIds] = useState<number[]>([]);
  const router = useRouter();
  const collectionName = `${router?.query?.name}`;
  const isRouterReady = router?.isReady;

  const getAnimeIdsInCollection = () => {
    const collectionsList = getCollectionList();
    const collectionExist = !!collectionsList?.[collectionName];
    if (collectionExist) {
      setAnimeIds(collectionsList?.[collectionName]);
    } else {
      router.push("/collections");
    }
  };

  useEffect(() => {
    if (isRouterReady) {
      if (!!collectionName) {
        getAnimeIdsInCollection();
      }
    }
  }, [isRouterReady]);

  const { loading, data } = useGetAnimeInCollection({ animeIds });
  const animeList = data?.Page?.media;

  const onDeleteAnimeFromCollection = (anime: SingleMedia) => {
    setRenderDeleteModal(anime);
  };

  const renderAnimeList = () => {
    return animeList?.map((anime) => {
      return (
        <Anime
          key={anime?.id}
          anime={anime}
          showDeleteButton
          onDelete={onDeleteAnimeFromCollection}
        />
      );
    });
  };

  return (
    <>
      <Notification
        id={`notification-${collectionName}`}
        onClose={() => {
          setRenderNotification((prev) => ({ ...prev, message: "" }));
        }}
        message={renderNotification?.message}
        type={renderNotification?.type}
      />
      <ConfirmationModal
        id={`confirmationModal-${collectionName}`}
        show={!!renderDeleteModal?.id}
        onLeave={() => {
          setRenderDeleteModal({});
        }}
        onNo={() => {
          setRenderDeleteModal({});
        }}
        onYes={() => {
          deleteAnimeFromCollection(renderDeleteModal?.id, collectionName);
          setRenderNotification({
            type: "success",
            message: `"${showAnimeTitle(
              renderDeleteModal
            )}" successfully deleted from collection "${collectionName}"`,
          });
          setRenderDeleteModal({});
          getAnimeIdsInCollection();
        }}
        title={`Are you sure you want to remove "${showAnimeTitle(
          renderDeleteModal
        )}" from collection "${collectionName}"`}
      />
      <BackgroundWrapper>
        <Header />
        {loading ? (
          <LoadingContainer>
            <LoaderCircle id={`loaderCircle-${collectionName}`} />
          </LoadingContainer>
        ) : (
          <>
            <PageWrapper id="pageWrapper">
              <TitleContainer className="margin--xxlarge-b">
                <Line id={`txt-title-line-${collectionName}`} />
                <div>
                  <Text
                    id={`txt-title-${collectionName}`}
                    size="large"
                    variant="bold"
                    text={`${collectionName} `}
                    color="white"
                  />
                  <Text
                    id={`txt-collection-text-${collectionName}`}
                    size="large"
                    text={`Collection`}
                    color="white"
                  />
                </div>
              </TitleContainer>
              {animeIds?.length > 0 ? (
                <>
                  {isDesktop ? (
                    <DesktopAnimeListContainer>
                      {renderAnimeList()}
                    </DesktopAnimeListContainer>
                  ) : (
                    renderAnimeList()
                  )}
                </>
              ) : (
                <LoadingContainer>
                  <Text
                    id={`txt-collectionEmpty-${collectionName}`}
                    text="Collection is empty"
                    size="large"
                    color="#909090"
                  />
                </LoadingContainer>
              )}
            </PageWrapper>
          </>
        )}
      </BackgroundWrapper>
    </>
  );
};

export default CollectionDetail;
