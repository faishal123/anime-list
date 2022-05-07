import styled from "@emotion/styled";
import React from "react";
import { keyframes } from "@emotion/react";

const fadeInDown = keyframes({
  "0%": { opacity: "0", transform: "translateY(-20px)" },
  "100%": { opacity: "1", transform: "translateY(0)" },
});

interface ContainerNotificationProps {
  type: "success" | "error";
  children: JSX.Element | JSX.Element[];
  id: string;
  "data-testid": string;
}

export const ContainerNotification: React.FC<ContainerNotificationProps> =
  styled.div(({ type }) => {
    return {
      display: "flex",
      width: "400px",
      position: "fixed",
      top: "24px",
      zIndex: "100",
      padding: "20px",
      borderRadius: "10px",
      fontSize: "$large",
      letterSpacing: "1px",
      color: "$white",
      boxShadow: "0px 5px 10px #000",
      wordBreak: "break-word",
      animation: `${fadeInDown} 0.5s`,
      right: "50%",
      marginRight: "-200px",
      background: type === "success" ? "#00c2ff" : "red",
      "@media (max-width: 600px)": {
        width: "90vw",
        marginRight: "-45vw",
      },
    };
  });

export const WrapperContent = styled.div(() => {
  return {
    display: "flex",
    gap: "15px",
    flex: "1",
  };
});

export const CloseButton = styled.div(() => {
  return {
    marginLeft: `5px`,
    cursor: "pointer",
    fontFamily: "$bold",
  };
});

export const Wrapmessage = styled.div(() => {
  return {
    flex: "1",
    fontSize: "16px",
  };
});

export const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;
  height: 20px;
  :before {
    position: absolute;
    left: 15px;
    content: " ";
    height: 20px;
    width: 3px;
    background-color: #efefef;
    transform: rotate(45deg);
  }
  :after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 20px;
    width: 3px;
    background-color: #efefef;
    transform: rotate(-45deg);
  }
`;
