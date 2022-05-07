/* eslint-disable react-hooks/exhaustive-deps */
import { ApolloError, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { SingleAnime } from "src/graphql/query";
import { SingleAnimeType } from "src/graphql/query/SingleAnime/interface";
import { useRouter } from "next/router";

interface UseGetSingleAnimeParam {
  onCompleted: (() => void) | ((data: SingleAnimeType) => void);
  onError: (() => void) | ((e: ApolloError) => void);
}

export const useGetSingleAnime = ({
  onCompleted = () => null,
  onError = () => null,
}: UseGetSingleAnimeParam) => {
  const router = useRouter();
  const isRouterReady = router?.isReady;
  const animeId = router?.query?.id;
  const [getSingleAnime, { loading, data }] = useLazyQuery(SingleAnime, {
    fetchPolicy: "no-cache",
    onCompleted,
    onError,
  });

  useEffect(() => {
    if (isRouterReady && animeId) {
      getSingleAnime({
        variables: { id: animeId },
      });
    }
  }, [isRouterReady, animeId]);

  return { loading, data };
};
