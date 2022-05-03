/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useGetSingleAnime } from "./function";
import { Header } from "src/components";
import { LoaderCircle } from "src/components";
import {
  PageWrapper,
  BackgroundWrapper,
  Line,
  Genre,
  StarRating,
  Button,
} from "src/components";
import CollectionModal from "./CollectionModal";
import { useDesktop } from "src/functions/handleScreen";
import { Text, Notification } from "src/components";
import {
  BannerContainer,
  StarRatingContainer,
  GenresContainer,
  SingleCollectionContainer,
  DesktopContainer,
  DesktopLeftContainer,
  DesktopRightContainer,
  DesktopButtonContainer,
} from "./style";
import { showAnimeTitle } from "src/functions/string";
import { showAnimeFormatAndEpisode } from "src/functions/string";
import Image from "next/image";
import { useRouter } from "next/router";
import { getCollectionList } from "src/functions/localStorage";
import { parseHTML } from "src/functions/string";
import { TitleContainer, LoadingContainer } from "../Home/style";
import Link from "next/link";
import placeholderImage from "src/assets/svg/placeholder.svg";
import CollapsableContent from "./CollapsableContent";
import { NotificationStateType } from "src/constant/interface";

const AnimeDetail = () => {
  const router = useRouter();
  const animeId = router?.query?.id as string;
  const isRouterReady = router?.isReady;
  const isDesktop = useDesktop();

  if (!animeId && isRouterReady) {
    router.push("/?page=1");
  }

  const [collectionWithCurrentAnime, setCollectionWithCurrentAnime] = useState<
    string[]
  >([]);
  const [renderNotification, setRenderNotification] =
    useState<NotificationStateType>({
      type: "success",
      message: "",
    });
  const [renderCollectionModal, setRenderCollectionModal] = useState(false);
  const [description, setDescription] = useState("");
  const { loading, data } = useGetSingleAnime({
    onCompleted: (d) => {
      const descriptionParsed = parseHTML(d?.Media?.description, document);
      setDescription(descriptionParsed);
    },
  });

  const getCollectionWithCurrentAnime = () => {
    const collectionsFromStorage = getCollectionList();
    const collectionsArrayForm = Object.keys(collectionsFromStorage)?.reduce<
      { name: string; animes: number[] }[]
    >((a, c) => {
      return [...a, { name: c, animes: collectionsFromStorage?.[c] }];
    }, []);
    const collectionsWithThisAnime = collectionsArrayForm?.reduce<string[]>(
      (a, c) => {
        if (c?.animes?.includes(Number(animeId))) {
          return [...a, c?.name];
        }
        return a;
      },
      []
    );
    setCollectionWithCurrentAnime(collectionsWithThisAnime);
  };

  useEffect(() => {
    if (isRouterReady) {
      getCollectionWithCurrentAnime();
    }
  }, [isRouterReady]);

  const animeObject = data?.Media;
  const largeCover = animeObject?.coverImage?.extraLarge;
  const trailerObject = animeObject?.trailer;
  const shouldShowTrailerButton = trailerObject?.site === "youtube";

  const shownAnimeTitle = showAnimeTitle(animeObject);
  const genres = animeObject?.genres;

  const isNotInAnyCollection = collectionWithCurrentAnime?.length <= 0;

  const renderTitle = () => {
    if (!!data && !!animeObject) {
      return (
        <div className="margin--large-b">
          <TitleContainer className="margin--small-b">
            <Line height="34px" />
            <Text variant="bold" text={shownAnimeTitle || ""} size="xxlarge" />
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
      );
    }
    return null;
  };

  const renderGenres = () => {
    return (
      <GenresContainer className="margin--large-b">
        {(genres || []).map((genre) => {
          return <Genre key={genre} genre={genre} />;
        })}
      </GenresContainer>
    );
  };

  const renderInfos = () => {
    return (
      <>
        <div className="margin--medium-b">
          <CollapsableContent defaultState={isDesktop} title="Summary">
            <Text
              block
              align="justify"
              lineHeight={1.5}
              text={description}
              size="medium"
            />
          </CollapsableContent>
        </div>
        <div>
          <CollapsableContent
            subtitle={
              isNotInAnyCollection
                ? undefined
                : "This anime is in these collections"
            }
            title="Collections"
          >
            <>
              {isNotInAnyCollection ? (
                <Text
                  text="This anime is not in any collection"
                  color="#00c2ff"
                />
              ) : (
                collectionWithCurrentAnime?.map((c, index) => {
                  const isLast =
                    index + 1 === collectionWithCurrentAnime?.length;
                  return (
                    <Link key={c} passHref href={`/collection/${c}`}>
                      <a>
                        <SingleCollectionContainer
                          className={isLast ? "" : "margin--medium-b"}
                        >
                          <Text size="xmedium" text={`${c}`} />
                        </SingleCollectionContainer>
                      </a>
                    </Link>
                  );
                })
              )}
            </>
          </CollapsableContent>
        </div>
      </>
    );
  };

  const renderTrailerButton = () => {
    return (
      <>
        {shouldShowTrailerButton ? (
          <div className="margin--large-t">
            <Link
              passHref
              href={`https://www.youtube.com/watch?v=${trailerObject?.id}`}
            >
              <a target="_blank">
                <Button variant="dark" text="Watch Trailer" />
              </a>
            </Link>
          </div>
        ) : null}
      </>
    );
  };

  const renderAddToCollectionButton = () => {
    return (
      <div className="margin--large-t">
        <Button
          text="Add to Collection"
          onClick={() => {
            if (isRouterReady) {
              setRenderCollectionModal(true);
            }
          }}
        />
      </div>
    );
  };

  const renderBanner = () => {
    return (
      <BannerContainer className="margin--xlarge-b">
        <Image
          priority
          src={largeCover || placeholderImage}
          layout="fill"
          alt={`${shownAnimeTitle}-cover`}
          objectFit="cover"
        />
      </BannerContainer>
    );
  };

  return (
    <BackgroundWrapper>
      <>
        <Notification
          onClose={() => {
            setRenderNotification((prev) => ({ ...prev, message: "" }));
          }}
          type={renderNotification?.type}
          message={renderNotification?.message}
        />
        <CollectionModal
          getCollectionWithCurrentAnime={getCollectionWithCurrentAnime}
          setRenderNotification={setRenderNotification}
          animeId={animeId}
          show={renderCollectionModal}
          onLeave={() => {
            setRenderCollectionModal(false);
          }}
        />
        <Header />
        {loading ? (
          <LoadingContainer>
            <LoaderCircle />
          </LoadingContainer>
        ) : !!data && !!animeObject ? (
          <PageWrapper>
            <>{renderTitle()}</>
            {isDesktop ? (
              <>
                <DesktopContainer>
                  <DesktopLeftContainer>{renderBanner()}</DesktopLeftContainer>
                  <DesktopRightContainer>
                    {renderInfos()}
                    <div className="margin--medium-t">{renderGenres()}</div>
                  </DesktopRightContainer>
                </DesktopContainer>
                <DesktopButtonContainer>
                  {renderTrailerButton()}
                  {renderAddToCollectionButton()}
                </DesktopButtonContainer>
              </>
            ) : (
              <>
                {renderBanner()}
                {renderGenres()}
                {renderInfos()}
                {renderTrailerButton()}
                {renderAddToCollectionButton()}
              </>
            )}
          </PageWrapper>
        ) : (
          <div></div>
        )}
      </>
    </BackgroundWrapper>
  );
};

export default AnimeDetail;
