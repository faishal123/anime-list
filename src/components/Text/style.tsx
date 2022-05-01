import styled from "@emotion/styled";
import React from "react";

const fontSizeMap = new Map([
  ["xxlarge", "36px"],
  ["large", "24px"],
  ["medium", "15px"],
]);

interface TextBaseProps {
  variant: "regular" | "bold";
  size: "small" | "medium" | "large" | "xxlarge";
  lineHeight?: number;
  block: boolean;
  children: string;
  color: string;
}

export const TextBase: React.FC<TextBaseProps> = styled.span((props) => ({
  fontFamily: '"Jaldi", sans-serif',
  color: props?.color,
  fontWeight: props?.variant,
  fontSize: fontSizeMap.get(props?.size || "medium"),
  lineHeight: props?.lineHeight,
  display: props?.block ? "block" : "inline",
}));
