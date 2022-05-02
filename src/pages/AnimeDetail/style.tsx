import styled from "@emotion/styled";

export const BannerContainer = styled.div(() => {
  return {
    width: "calc(100vw - 40px)",
    height: "500px",
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
  };
});

export const StarRatingContainer = styled.div`
  display: flex;
  gap: 23px;
`;

export const GenresContainer = styled.div`
  display: inline-flex;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
