/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { SingleAnime } from "src/graphql/query";
import { useRouter } from "next/router";

export const useGetSingleAnime = () => {
  const router = useRouter();
  const isRouterReady = router?.isReady;
  const animeId = router?.query?.id;
  const [getSingleAnime, { loading, data }] = useLazyQuery(SingleAnime);

  useEffect(() => {
    if (isRouterReady && animeId) {
      getSingleAnime({ variables: { id: animeId } });
    }
  }, [isRouterReady, animeId]);

  return { loading, data };
};
