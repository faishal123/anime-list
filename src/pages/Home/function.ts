import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { PopularAnimeList } from "../../graphql/query";

export const useGetPopularAnimeList = () => {
  const [page, setPage] = useState(1);
  console.log(page);
  const [getPopularAnimeList, { loading, data }] =
    useLazyQuery(PopularAnimeList);
  useEffect(() => {
    getPopularAnimeList({
      variables: {
        type: "ANIME",
        page: page,
        perPage: 10,
        sort: ["POPULARITY_DESC"],
        countryOfOrigin: "JP",
      },
    });
  }, [page]);
  return { loading, data, setPage, page };
};
