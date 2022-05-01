import React from "react";
import { TextBase } from "./style";

interface TextProps {
  text: string;
  color?: string;
  variant?: "regular" | "bold";
  size?: "small" | "medium" | "large" | "xxlarge";
  block?: boolean;
  lineHeight?: 1 | "omitLineHeight";
}

const Text: React.FC<TextProps> = ({
  text,
  color = "white",
  variant = "regular",
  size = "medium",
  block = false,
  lineHeight = 1,
}) => {
  return (
    <TextBase
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
