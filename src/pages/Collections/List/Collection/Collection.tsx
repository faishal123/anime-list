import React from "react";
import { Text } from "src/components";
import {
  CollectionContainer,
  AnimesContainer,
  OverflowContainer,
  SingleAnimeItem,
  AnimeBannerContainer,
} from "./style";
import { CollectionsType } from "src/constant/interface";
import { LoaderCircle } from "src/components";
import Image from "next/image";
import placeholderImage from "src/assets/svg/placeholder.svg";
import Link from "next/link";
import ActionButton from "./ActionButton";
import { showAnimeTitle } from "src/functions/string";
import { SingleMedia } from "src/graphql/query/PopularAnimeList/interface";

interface CollectionProps {
  name: string;
  index: number;
  length: number;
  fullCollection: CollectionsType;
  loading: boolean;
  animes: SingleMedia[];
  onDeleteCollection: (name: string) => void;
}

const Collection: React.FC<CollectionProps> = ({
  name,
  index,
  length,
  fullCollection,
  animes = [],
  loading,
  onDeleteCollection,
}) => {
  const animeIdsInCollection = fullCollection?.[name];
  const isEmptyCollection = animeIdsInCollection?.length <= 0;
  const animeDatasInThisCollection = animes?.filter((a) =>
    animeIdsInCollection?.includes(a?.id || 0)
  );
  return (
    <CollectionContainer
      className={index + 1 === length ? "" : "margin--large-b"}
    >
      <div>
        <div className="margin--small-b">
          <Link passHref href={`/collection/${name}`}>
            <a>
              <Text
                id={`txt-title-${name}`}
                text={name}
                size="xmedium"
                variant="bold"
              />
            </a>
          </Link>
        </div>
        {isEmptyCollection ? (
          <Text
            id={`txt-collectionEmpty-${name}`}
            text={"Collection is empty"}
            color="#00c2FF"
            size="medium"
          />
        ) : loading ? (
          <LoaderCircle id={`loaderCircle-${name}`} size="small" />
        ) : (
          <OverflowContainer>
            <AnimesContainer>
              {animeDatasInThisCollection?.map((a) => {
                return (
                  <Link key={a?.id} passHref href={`/anime/${a?.id}`}>
                    <a>
                      <SingleAnimeItem>
                        <AnimeBannerContainer>
                          <Image
                            alt={`${a?.title?.english}-banner`}
                            height={138}
                            width={100}
                            src={a?.coverImage?.medium || placeholderImage}
                          />
                        </AnimeBannerContainer>
                        <Text
                          id={`txt-anime-title-${name}-${showAnimeTitle(a)}`}
                          text={`${showAnimeTitle(a)}`}
                        />
                      </SingleAnimeItem>
                    </a>
                  </Link>
                );
              })}
            </AnimesContainer>
          </OverflowContainer>
        )}
      </div>
      <div className="margin--medium-t">
        <ActionButton
          onDeleteCollection={onDeleteCollection}
          collectionName={name}
        />
      </div>
    </CollectionContainer>
  );
};

export default Collection;
