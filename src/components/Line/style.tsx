import styled from "@emotion/styled";
import React from "react";

interface LineBaseProps {
  height: string;
  width: string;
  color: string;
  id: string;
  "data-testid": string;
}

export const LineBase: React.FC<LineBaseProps> = styled.div(
  ({ height, width, color }) => ({
    minHeight: height,
    maxHeight: height,
    minWidth: width,
    maxWidth: width,
    background: color,
    borderRadius: "3px",
  })
);
