import styled from "@emotion/styled";

export const TitleContainer = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
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

export const LoadingContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
`;
