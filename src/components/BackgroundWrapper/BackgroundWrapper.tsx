import React from "react";
import { Background } from "./style";

const BackgroundWrapper = ({ children }) => {
  return <Background>{children}</Background>;
};

export default BackgroundWrapper;
