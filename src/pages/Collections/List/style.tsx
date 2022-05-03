import styled from "@emotion/styled";

export const NoCollectionContainer = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%",
    textAlign: "center",
    ">div": {
      textAlign: "center",
    },
  };
});

export const DesktopCollectionListContainer = styled.div`
  display: inline-flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  > div {
    width: calc(50% - 10px);
  }
`;

export const AddCollectionButtonContainer = styled.div`
  max-width: 300px;
`;
