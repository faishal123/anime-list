import { PopularAnimeList } from "../../graphql/query";
import { GraphQLError } from "graphql";

export const animeListMock = ({ responseType = "success" }) => {
  const request = {
    query: PopularAnimeList,
    variables: {
      type: "ANIME",
      page: 1,
      perPage: 10,
      sort: ["POPULARITY_DESC"],
      countryOfOrigin: "JP",
    },
  };
  if (responseType === "error") {
    return { request, result: { errors: [new GraphQLError("Error")] } };
  }
  if (responseType === "empty") {
    return { request, result: {} };
  }
  return {
    request,
    result: {
      data: {
        Page: {
          pageInfo: {
            total: 5000,
            perPage: 10,
            currentPage: 1,
            lastPage: 500,
            hasNextPage: true,
            __typename: "PageInfo",
          },
          media: [
            {
              id: 16498,
              title: {
                english: "Attack on Titan",
                romaji: "Shingeki no Kyojin",
                native: "進撃の巨人",
                __typename: "MediaTitle",
              },
              isAdult: false,
              genres: ["Action", "Drama", "Fantasy", "Mystery"],
              popularity: 571772,
              episodes: 25,
              status: "FINISHED",
              format: "TV",
              chapters: null,
              type: "ANIME",
              meanScore: 85,
              averageScore: 85,
              coverImage: {
                extraLarge:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg",
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16498-C6FPmWm59CyP.jpg",
                color: "#e4a15d",
                __typename: "MediaCoverImage",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
              trailer: {
                id: "KKzmOh4SuBc",
                site: "youtube",
                thumbnail: "https://i.ytimg.com/vi/KKzmOh4SuBc/hqdefault.jpg",
                __typename: "MediaTrailer",
              },
              __typename: "Media",
            },
            {
              id: 101922,
              title: {
                english: "Demon Slayer: Kimetsu no Yaiba",
                romaji: "Kimetsu no Yaiba",
                native: "鬼滅の刃",
                __typename: "MediaTitle",
              },
              isAdult: false,
              genres: [
                "Action",
                "Adventure",
                "Drama",
                "Fantasy",
                "Supernatural",
              ],
              popularity: 521917,
              episodes: 26,
              status: "FINISHED",
              format: "TV",
              chapters: null,
              type: "ANIME",
              meanScore: 85,
              averageScore: 85,
              coverImage: {
                extraLarge:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg",
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101922-PEn1CTc93blC.jpg",
                color: "#4B4A95",
                __typename: "MediaCoverImage",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
              trailer: {
                id: "6vMuWuWlW4I",
                site: "youtube",
                thumbnail: "https://i.ytimg.com/vi/6vMuWuWlW4I/hqdefault.jpg",
                __typename: "MediaTrailer",
              },
              __typename: "Media",
            },
            {
              id: 1535,
              title: {
                english: "Death Note",
                romaji: "DEATH NOTE",
                native: "DEATH NOTE",
                __typename: "MediaTitle",
              },
              isAdult: false,
              genres: ["Mystery", "Psychological", "Supernatural", "Thriller"],
              popularity: 518959,
              episodes: 37,
              status: "FINISHED",
              format: "TV",
              chapters: null,
              type: "ANIME",
              meanScore: 84,
              averageScore: 84,
              coverImage: {
                extraLarge:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-lawCwhzhi96X.jpg",
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-lawCwhzhi96X.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1535-lawCwhzhi96X.jpg",
                color: null,
                __typename: "MediaCoverImage",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",
              trailer: null,
              __typename: "Media",
            },
            {
              id: 21459,
              title: {
                english: "My Hero Academia",
                romaji: "Boku no Hero Academia",
                native: "僕のヒーローアカデミア",
                __typename: "MediaTitle",
              },
              isAdult: false,
              genres: ["Action", "Adventure", "Comedy"],
              popularity: 511140,
              episodes: 13,
              status: "FINISHED",
              format: "TV",
              chapters: null,
              type: "ANIME",
              meanScore: 78,
              averageScore: 78,
              coverImage: {
                extraLarge:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21459-oZMZ7JwS5Sxq.jpg",
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21459-oZMZ7JwS5Sxq.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21459-oZMZ7JwS5Sxq.jpg",
                color: "#e4c935",
                __typename: "MediaCoverImage",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg",
              trailer: {
                id: "AhqVltWDqFA",
                site: "youtube",
                thumbnail: "https://i.ytimg.com/vi/AhqVltWDqFA/hqdefault.jpg",
                __typename: "MediaTrailer",
              },
              __typename: "Media",
            },
            {
              id: 11061,
              title: {
                english: "Hunter x Hunter (2011)",
                romaji: "HUNTER×HUNTER (2011)",
                native: "HUNTER×HUNTER (2011)",
                __typename: "MediaTitle",
              },
              isAdult: false,
              genres: ["Action", "Adventure", "Fantasy"],
              popularity: 471395,
              episodes: 148,
              status: "FINISHED",
              format: "TV",
              chapters: null,
              type: "ANIME",
              meanScore: 89,
              averageScore: 89,
              coverImage: {
                extraLarge:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png",
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-sIpBprNRfzCe.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx11061-sIpBprNRfzCe.png",
                color: "#f1d65d",
                __typename: "MediaCoverImage",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
              trailer: {
                id: "d6kBeJjTGnY",
                site: "youtube",
                thumbnail: "https://i.ytimg.com/vi/d6kBeJjTGnY/hqdefault.jpg",
                __typename: "MediaTrailer",
              },
              __typename: "Media",
            },
            {
              id: 113415,
              title: {
                english: "JUJUTSU KAISEN",
                romaji: "Jujutsu Kaisen",
                native: "呪術廻戦",
                __typename: "MediaTitle",
              },
              isAdult: false,
              genres: ["Action", "Drama", "Supernatural"],
              popularity: 441030,
              episodes: 24,
              status: "FINISHED",
              format: "TV",
              chapters: null,
              type: "ANIME",
              meanScore: 87,
              averageScore: 87,
              coverImage: {
                extraLarge:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg",
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-bbBWj4pEFseh.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx113415-bbBWj4pEFseh.jpg",
                color: "#e45d5d",
                __typename: "MediaCoverImage",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
              trailer: {
                id: "VpO6APNqY1c",
                site: "youtube",
                thumbnail: "https://i.ytimg.com/vi/VpO6APNqY1c/hqdefault.jpg",
                __typename: "MediaTrailer",
              },
              __typename: "Media",
            },
            {
              id: 21087,
              title: {
                english: "One-Punch Man",
                romaji: "One Punch Man",
                native: "ワンパンマン",
                __typename: "MediaTitle",
              },
              isAdult: false,
              genres: ["Action", "Comedy", "Sci-Fi", "Supernatural"],
              popularity: 433250,
              episodes: 12,
              status: "FINISHED",
              format: "TV",
              chapters: null,
              type: "ANIME",
              meanScore: 83,
              averageScore: 83,
              coverImage: {
                extraLarge:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-UV2tu6exrfXz.jpg",
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21087-UV2tu6exrfXz.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21087-UV2tu6exrfXz.jpg",
                color: "#e4ae5d",
                __typename: "MediaCoverImage",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-sHb9zUZFsHe1.jpg",
              trailer: {
                id: "RzmFKUDOUgw",
                site: "youtube",
                thumbnail: "https://i.ytimg.com/vi/RzmFKUDOUgw/hqdefault.jpg",
                __typename: "MediaTrailer",
              },
              __typename: "Media",
            },
            {
              id: 20605,
              title: {
                english: "Tokyo Ghoul",
                romaji: "Tokyo Ghoul",
                native: "東京喰種 トーキョーグール",
                __typename: "MediaTitle",
              },
              isAdult: false,
              genres: [
                "Action",
                "Drama",
                "Horror",
                "Mystery",
                "Psychological",
                "Supernatural",
              ],
              popularity: 421023,
              episodes: 12,
              status: "FINISHED",
              format: "TV",
              chapters: null,
              type: "ANIME",
              meanScore: 76,
              averageScore: 76,
              coverImage: {
                extraLarge:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg",
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20605-fmnHdfurM7m6.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx20605-fmnHdfurM7m6.jpg",
                color: "#35DDFF",
                __typename: "MediaCoverImage",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",
              trailer: {
                id: "XfQUjYsVBrE",
                site: "youtube",
                thumbnail: "https://i.ytimg.com/vi/XfQUjYsVBrE/hqdefault.jpg",
                __typename: "MediaTrailer",
              },
              __typename: "Media",
            },
            {
              id: 11757,
              title: {
                english: "Sword Art Online",
                romaji: "Sword Art Online",
                native: "ソードアート・オンライン",
                __typename: "MediaTitle",
              },
              isAdult: false,
              genres: ["Action", "Adventure", "Fantasy", "Romance"],
              popularity: 418031,
              episodes: 25,
              status: "FINISHED",
              format: "TV",
              chapters: null,
              type: "ANIME",
              meanScore: 69,
              averageScore: 68,
              coverImage: {
                extraLarge:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx11757-Q9P2zjCPICq5.jpg",
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx11757-Q9P2zjCPICq5.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx11757-Q9P2zjCPICq5.jpg",
                color: "#5DC0E4",
                __typename: "MediaCoverImage",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",
              trailer: {
                id: "C8Jl_-b7ju0",
                site: "youtube",
                thumbnail: "https://i.ytimg.com/vi/C8Jl_-b7ju0/hqdefault.jpg",
                __typename: "MediaTrailer",
              },
              __typename: "Media",
            },
            {
              id: 20958,
              title: {
                english: "Attack on Titan Season 2",
                romaji: "Shingeki no Kyojin 2",
                native: "進撃の巨人２",
                __typename: "MediaTitle",
              },
              isAdult: false,
              genres: ["Action", "Drama", "Fantasy", "Mystery"],
              popularity: 407859,
              episodes: 12,
              status: "FINISHED",
              format: "TV",
              chapters: null,
              type: "ANIME",
              meanScore: 85,
              averageScore: 85,
              coverImage: {
                extraLarge:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20958-HuFJyr54Mmir.jpg",
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20958-HuFJyr54Mmir.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20958-HuFJyr54Mmir.jpg",
                color: "#6AA66F",
                __typename: "MediaCoverImage",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20958-Y7eQdz9VENBD.jpg",
              trailer: {
                id: "zLaVP8IhIuc",
                site: "youtube",
                thumbnail: "https://i.ytimg.com/vi/zLaVP8IhIuc/hqdefault.jpg",
                __typename: "MediaTrailer",
              },
              __typename: "Media",
            },
          ],
          __typename: "Page",
        },
      },
    },
  };
};

export const beforeEachFunction = () => {
  const localStorageMock = (() => {
    const store: { [key: string]: string } = {
      collection:
        '{"c2":[16498,101922,1535,21459,11061],"c3":[101922,1535,21459,11061],"c4":[1535,21459,11061],"c5":[21459,11061],"c1":[16498,1535,21459,11061]}',
    };

    return {
      getItem(key: string) {
        return store[key] || null;
      },
      setItem(key: string, data: string) {
        store[key] = data;
      },
    };
  })();
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
    writable: true,
  });
};
