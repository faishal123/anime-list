import styled from "@emotion/styled";

export const Background = styled.div`
  background: #202020;
  border: 1px solid black;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 10vh;
  @media (max-width: 1023px) and (min-width: 480px) {
    padding: 0 calc((100vw - 480px) / 2) 10vh calc((100vw - 480px) / 2);
  }
  @media (min-width: 1024px) {
    display: flex;
    padding-bottom: 0;
  }
`;

export const LeftContent = styled.div`
  min-width: 250px;
  max-width: 250px;
  box-sizing: border-box;
  height: 100%;
  position: relative;
`;
export const RightContent = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  max-width: calc(100vw - 260px);
`;
