import React from "react";
import Text from "../Text";
import styled from "@emotion/styled";

const LogoContainer = styled.div`
  cursor: pointer;
`;

const Logo = ({ onClick }) => {
  return (
    <LogoContainer onClick={onClick}>
      <Text text="ANIM" variant="bold" size="xxlarge" color="#efefef" />
      <Text text="U" variant="bold" size="xxlarge" color="#00C2FF" />
    </LogoContainer>
  );
};

export default Logo;
