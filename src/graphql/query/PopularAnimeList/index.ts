import gql from "graphql-tag";

const PopularAnimeList = gql`
  query (
    $page: Int
    $perPage: Int
    $sort: [MediaSort]
    $countryOfOrigin: CountryCode
    $search: String
    $type: MediaType
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(
        sort: $sort
        countryOfOrigin: $countryOfOrigin
        search: $search
        type: $type
      ) {
        id
        title {
          english
          romaji
          native
        }
        isAdult
        genres
        popularity
        episodes
        status
        format
        chapters
        type
        meanScore
        averageScore
        coverImage {
          extraLarge
          large
          medium
          color
        }
        bannerImage
        trailer {
          id
          site
          thumbnail
        }
      }
    }
  }
`;

export default PopularAnimeList;
