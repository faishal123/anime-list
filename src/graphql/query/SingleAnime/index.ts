import gql from "graphql-tag";

const SingleAnime = gql`
  query (
    $sort: [MediaSort]
    $countryOfOrigin: CountryCode
    $search: String
    $type: MediaType
    $id: Int
    $characterSort: [CharacterSort]
    $characterRole: CharacterRole
  ) {
    Media(
      sort: $sort
      countryOfOrigin: $countryOfOrigin
      search: $search
      type: $type
      id: $id
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
      description
      episodes
      status
      format
      chapters
      type
      meanScore
      averageScore
      characters(sort: $characterSort, role: $characterRole, perPage: 100) {
        nodes {
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          image {
            large
            medium
          }
          description
        }
      }
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
`;

export default SingleAnime;
