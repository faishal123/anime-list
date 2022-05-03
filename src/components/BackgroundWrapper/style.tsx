import styled from "@emotion/styled";

export const Background = styled.div`
  background: #202020;
  border: 1px solid black;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  padding-bottom: 10vh;
  @media (max-width: 1024px) and (min-width: 480px) {
    padding: 0 calc((100vw - 480px) / 2) 10vh calc((100vw - 480px) / 2);
  }
`;
