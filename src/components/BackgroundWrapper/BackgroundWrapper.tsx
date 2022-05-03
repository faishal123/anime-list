import React from "react";
import { Background } from "./style";

interface BackgroundWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return <Background id="backgroundWrapper">{children}</Background>;
};

export default BackgroundWrapper;
