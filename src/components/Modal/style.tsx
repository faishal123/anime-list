import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
});

export const ModalContainer = styled.div(() => {
  return {
    animation: `${fadeIn} 0.2s`,
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(50, 50, 50, 0.9)",
    zIndex: "10",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
});

export const ModalMain = styled.div(() => {
  return {
    position: "relative",
    overflow: "auto",
    background: "#202020",
    height: "auto",
    borderRadius: "10px",
    maxHeight: "80vh",
    padding: "20px",
    width: "95vw",
  };
});
