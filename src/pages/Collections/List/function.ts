/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { PopularAnimeList } from "src/graphql/query";
import { PagesType } from "src/graphql/query/PopularAnimeList/interface";

interface UseGetAnimeInCollectionParam {
  animeIds: number[];
}

interface UseGetAnimeInCollectionReturn {
  loading: boolean;
  data: PagesType;
}

export const useGetAnimeInCollection = ({
  animeIds = [],
}: UseGetAnimeInCollectionParam): UseGetAnimeInCollectionReturn => {
  const [getAnime, { loading, data }] = useLazyQuery(PopularAnimeList);
  useEffect(() => {
    if (animeIds?.length > 0) {
      getAnime({ variables: { idIn: animeIds, sort: ["ID"] } });
    }
  }, [animeIds]);
  return { loading, data };
};
