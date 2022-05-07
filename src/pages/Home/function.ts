/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { PopularAnimeList } from "../../graphql/query";
import { PagesType } from "src/graphql/query/PopularAnimeList/interface";

export const useGetPopularAnimeList = (): {
  loading: boolean;
  data: PagesType;
} => {
  const router = useRouter();
  const isRouterReady = router?.isReady;
  const currentPage = Number(router?.query?.page);
  const [getPopularAnimeList, { loading, data }] = useLazyQuery(
    PopularAnimeList,
    {
      onCompleted: () => {
        const backgroundWrapper = document.getElementById("backgroundWrapper");
        if (backgroundWrapper) {
          backgroundWrapper.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );
  useEffect(() => {
    if (isRouterReady && currentPage) {
      getPopularAnimeList({
        variables: {
          type: "ANIME",
          page: currentPage,
          perPage: 10,
          sort: ["POPULARITY_DESC"],
          countryOfOrigin: "JP",
        },
      });
    }
  }, [isRouterReady, currentPage]);
  return { loading, data };
};
