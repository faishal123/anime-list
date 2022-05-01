import React from "react";
import { TextBase } from "./style";

const Text = ({ text, color, variant, size, block, lineHeight = 1 }) => {
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
