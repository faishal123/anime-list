import React from "react";
import { useDesktop } from "src/functions/handleScreen";
import Sidebar from "../Sidebar";
import { Background, RightContent, LeftContent } from "./style";

interface BackgroundWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const defaultId = "backgroundWrapper";

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  const isDesktop = useDesktop();
  if (isDesktop) {
    return (
      <Background data-testid={defaultId} id={defaultId}>
        <LeftContent>
          <Sidebar props={{ id: "sidebar-mainNav" }} isDesktop={isDesktop} />
        </LeftContent>
        <RightContent>{children}</RightContent>
      </Background>
    );
  }
  return (
    <Background data-testid={defaultId} id={defaultId}>
      {children}
    </Background>
  );
};

export default BackgroundWrapper;
