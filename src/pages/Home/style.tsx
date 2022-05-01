import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  padding: 0 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 9px;
  margin-bottom: 26px;
`;

export const AnimeContainer = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  gap: 15px;
`;

export const AnimeBannerContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100px;
  max-height: 138px;
  min-height: 138px;
`;

export const AnimeInfoContainer = styled.div`
  max-width: calc(100% - 10px - 140px);
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const GenresContainer = styled.div`
  display: inline-flex;
  gap: 5px;
  flex-wrap: wrap;
`;

export const SingleGenre = styled.div`
  padding: 0px 10px;
  background: #3d3d3d;
  border-radius: 5px;
`;
