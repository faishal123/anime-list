import styled from "@emotion/styled";
import { MouseEvent } from "react";

const backgroundMap = new Map([
  ["primary", "#00C2FF"],
  ["grey", "#efefef"],
  ["white", "#efefef"],
  ["dark", "#3d3d3d"],
  ["red", "#DD4F4F"],
]);

const heightSizeMap = new Map([
  ["small", 40],
  ["medium", 50],
  ["large", 60],
  ["xlarge", 70],
]);

const fontSizeMap = new Map([
  ["small", 18],
  ["medium", 23],
  ["large", 28],
  ["xlarge", 33],
]);

const paddingMap = new Map([
  ["small", 15],
  ["medium", 20],
  ["large", 25],
  ["xlarge", 30],
]);

interface ButtonBaseProps {
  variant: "primary" | "grey" | "white" | "dark" | "red";
  size: "small" | "medium" | "large" | "xlarge";
  onClick: (() => void) | ((e: MouseEvent<HTMLElement>) => void);
  children: string | JSX.Element | JSX.Element[];
}

export const ButtonBase: React.FC<ButtonBaseProps> = styled.button(
  ({ variant, size }) => {
    return {
      cursor: "pointer",
      fontSize: `${fontSizeMap.get(size)}px`,
      fontFamily: '"Jaldi", sans-serif',
      fontWeight: "bold",
      color: "white",
      outline: "none",
      border: "none",
      padding: `0 ${paddingMap.get(size)}px`,
      borderRadius: "5px",
      height: `${heightSizeMap.get(size)}px`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: backgroundMap.get(variant),
      letterSpacing: "1px",
      width: "100%",
      overflow: "hidden",
    };
  }
);
