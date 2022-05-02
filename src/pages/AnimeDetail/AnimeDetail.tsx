import React, { useState } from "react";
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
import { Text, Notification } from "src/components";
import { BannerContainer, StarRatingContainer, GenresContainer } from "./style";
import { showAnimeFormatAndEpisode } from "src/functions/string";
import Image from "next/image";
import { useRouter } from "next/router";
import { parseHTML } from "src/functions/string";
import { TitleContainer, LoadingContainer } from "../Home/style";
import Link from "next/link";

interface NotificationStateType {
  type: "success" | "error";
  message?: string;
}

const AnimeDetail = () => {
  const router = useRouter();
  const animeId = router?.query?.id;
  const isRouterReady = router?.isReady;
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

  const animeObject = data?.Media;
  const animeTitle = animeObject?.title;
  const largeCover = animeObject?.coverImage?.extraLarge;
  const trailerObject = animeObject?.trailer;
  const shouldShowTrailerButton = trailerObject?.site === "youtube";

  const shownAnimeTitle =
    animeTitle?.english || animeTitle?.romaji || animeTitle?.native;
  const genres = animeObject?.genres;
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
        ) : (
          !!data && (
            <PageWrapper>
              <div className="margin--large-b">
                <TitleContainer className="margin--small-b">
                  <Line height="34px" />
                  <Text variant="bold" text={shownAnimeTitle} size="xxlarge" />
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
              <BannerContainer className="margin--xlarge-b">
                <Image
                  priority
                  src={largeCover}
                  layout="fill"
                  alt={`${shownAnimeTitle}-cover`}
                  objectFit="cover"
                />
              </BannerContainer>
              <GenresContainer className="margin--large-b">
                {genres.map((genre) => {
                  return <Genre key={genre} genre={genre} />;
                })}
              </GenresContainer>
              <div>
                <Text
                  block
                  align="justify"
                  lineHeight={1.5}
                  text={description}
                  size="medium"
                />
              </div>
              {shouldShowTrailerButton && (
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
              )}
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
            </PageWrapper>
          )
        )}
      </>
    </BackgroundWrapper>
  );
};

export default AnimeDetail;
