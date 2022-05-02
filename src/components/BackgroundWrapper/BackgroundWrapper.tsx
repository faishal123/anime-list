import React from "react";
import { Background } from "./style";

const BackgroundWrapper = ({ children }) => {
  return <Background id="backgroundWrapper">{children}</Background>;
};

export default BackgroundWrapper;
