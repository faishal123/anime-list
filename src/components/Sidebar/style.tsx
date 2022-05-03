import styled from "@emotion/styled";
import React from "react";

interface SidebarMainProps {
  show: boolean;
  children: JSX.Element | JSX.Element[];
}

export const SidebarContainer: React.FC<SidebarMainProps> = styled.div(
  ({ show }) => {
    return {
      display: "flex",
      position: "fixed",
      right: "0",
      top: "0",
      width: show ? "100vw" : "0px",
      zIndex: "100",
      overflow: "hidden",
      transition: "0.3s",
    };
  }
);

export const CloseArea = styled.div(() => {
  return { flexGrow: "1", background: "transparent" };
});

export const SidebarMain: React.FC<SidebarMainProps> = styled.div(
  ({ show }) => {
    const screenWidth = window.innerWidth;
    const defineWidth = () => {
      if (show && screenWidth > 500) {
        return "300px";
      }
      if (show) {
        return "60vw";
      }
      return "0px";
    };
    return {
      width: defineWidth(),
      maxWidth: "300px",
      height: "100vh",
      transition: "0.3s",
      background: "#202020",
      boxShadow: "-10px 0px 10px #000000",
      padding: show ? "20px" : "20px 0",
      whiteSpace: "nowrap",
      overflow: "hidden",
    };
  }
);
