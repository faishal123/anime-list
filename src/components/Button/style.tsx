import styled from "@emotion/styled";
import { MouseEvent } from "react";

const backgroundMap = new Map([
  ["primary", "#00C2FF"],
  ["grey", "#efefef"],
  ["white", "white"],
  ["dark", "#3d3d3d"],
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
  variant: "primary" | "grey" | "white" | "dark";
  size: "small" | "medium" | "large" | "xlarge";
  onClick: (() => void) | ((e: MouseEvent<HTMLElement>) => void);
  children: string;
}

export const ButtonBase: React.FC<ButtonBaseProps> = styled.button(
  ({ variant, size }) => {
    console.log(size);
    return {
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
    };
  }
);
