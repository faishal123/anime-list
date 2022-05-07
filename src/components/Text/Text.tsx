import React from "react";
import { TextBase } from "./style";

interface TextProps {
  text: string;
  color?: string;
  variant?: "regular" | "bold";
  size?: "small" | "medium" | "large" | "xxlarge" | "xmedium";
  block?: boolean;
  align?: "left" | "center" | "justify";
  lineHeight?: number | "omitLineHeight";
  id: string;
}

const Text: React.FC<TextProps> = ({
  text,
  color = "#efefef",
  variant = "regular",
  size = "medium",
  block = false,
  lineHeight = 1,
  align = "left",
  id,
}) => {
  return (
    <TextBase
      id={id}
      data-testid={id}
      align={align}
      color={color}
      lineHeight={lineHeight === "omitLineHeight" ? undefined : lineHeight}
      block={block}
      size={size}
      variant={variant}
    >
      {text}
    </TextBase>
  );
};

export default Text;
