import styled from "@emotion/styled";
import React from "react";

const fontSizeMap = new Map([
  ["xxlarge", "36px"],
  ["large", "24px"],
  ["xmedium", "20px"],
  ["medium", "16px"],
]);

interface TextBaseProps {
  variant: "regular" | "bold";
  size: "small" | "medium" | "large" | "xxlarge" | "xmedium";
  lineHeight?: number;
  block: boolean;
  children: string;
  color: string;
  id: string;
  "data-testid": string;
  align: "left" | "center" | "justify";
}

export const TextBase: React.FC<TextBaseProps> = styled.span((props) => ({
  fontFamily: '"Jaldi", sans-serif',
  color: props.color,
  fontWeight: props.variant,
  fontSize: fontSizeMap.get(props.size),
  lineHeight: props.lineHeight,
  display: props.block ? "block" : "inline",
  textAlign: props.align,
}));
