import React from "react";
import { Wrapper } from "./style";

const PageWrapper: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
