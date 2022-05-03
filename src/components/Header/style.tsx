import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  position: relative;
  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const HamburgerContainer = styled.div`
  cursor: pointer;
`;
