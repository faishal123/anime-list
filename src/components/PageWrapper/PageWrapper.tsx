import React from "react";
import { Wrapper } from "./style";

const PageWrapper: React.FC<{
  children: JSX.Element | JSX.Element[];
  id: string;
}> = ({ children, id }) => {
  return (
    <Wrapper id={id} data-testid={id}>
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
