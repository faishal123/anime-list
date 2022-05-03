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

export const DesktopSidebarContainer = styled.div`
  height: 100%;
  position: fixed;
  min-width: 250px;
  max-width: 250px;
`;

export const DesktopLogoContainer = styled.div`
  padding: 0 40px;
  height: 102px;
  display: flex;
  align-items: center;
`;

export const DesktopSidebarContentContainer = styled.div`
  padding: 0 40px;
`;

interface SingleMenuProps {
  active: boolean;
  children: JSX.Element | JSX.Element[];
}

export const SingleMenu: React.FC<SingleMenuProps> = styled.div(
  ({ active }) => {
    return {
      padding: "15px 20px",
      border: `1px solid ${active ? "#909090" : "#505050"}`,
      borderRadius: "10px",
      boxSizing: "border-box",
      cursor: "pointer",
      display: "flex",
      gap: "10px",
      alignItems: "center",
      marginBottom: "10px",
      transition: "0.1s",
      background: active ? "#303030" : "#202020",
      "&:hover": {
        transition: "0.1s",
        border: `1px solid #00c2ff`,
      },
    };
  }
);
