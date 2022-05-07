import React from "react";
import Text from "../Text";
import styled from "@emotion/styled";

const LogoContainer = styled.div`
  cursor: pointer;
`;

interface LogoProps {
  onClick?: () => void;
  id: string;
}

const Logo: React.FC<LogoProps> = ({ onClick, id }) => {
  return (
    <LogoContainer id={id} data-testid={id} onClick={onClick}>
      <Text
        id="txt-logo-anim"
        text="ANIM"
        variant="bold"
        size="xxlarge"
        color="#efefef"
      />
      <Text
        id="txt-logo-u"
        text="U"
        variant="bold"
        size="xxlarge"
        color="#00C2FF"
      />
    </LogoContainer>
  );
};

export default Logo;
