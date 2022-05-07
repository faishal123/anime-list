import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import React from "react";

const dimentionMap = {
  xxxlarge: 120,
  xxlarge: 100,
  xlarge: 80,
  large: 60,
  medium: 40,
  small: 20,
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface LoaderProps {
  id: string;
  "data-testid": string;
  size: "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge";
}

export const Loader: React.FC<LoaderProps> = styled.div(({ size }) => {
  const sizeToUse = dimentionMap[size];
  return {
    border: `${sizeToUse / 7.5 + 1}px solid #f3f3f3`,
    borderTop: `${sizeToUse / 7.5 + 1}px solid #00c2ff`,
    borderRadius: "50%",
    width: `${sizeToUse}px`,
    height: `${sizeToUse}px`,
    animation: `${spin} 0.5s linear infinite`,
  };
});
