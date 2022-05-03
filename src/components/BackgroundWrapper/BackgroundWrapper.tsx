import React from "react";
import { useDesktop } from "src/functions/handleScreen";
import Sidebar from "../Sidebar";
import { Background, RightContent, LeftContent } from "./style";

interface BackgroundWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  const isDesktop = useDesktop();
  if (isDesktop) {
    return (
      <Background id="backgroundWrapper">
        <LeftContent>
          <Sidebar show onClose={() => null} />
        </LeftContent>
        <RightContent>{children}</RightContent>
      </Background>
    );
  }
  return <Background id="backgroundWrapper">{children}</Background>;
};

export default BackgroundWrapper;
