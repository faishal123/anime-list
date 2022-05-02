import styled from "@emotion/styled";
import React from "react";

interface LineBaseProps {
  height: string;
  width: string;
}

export const LineBase: React.FC<LineBaseProps> = styled.div(
  ({ height, width }) => ({
    minHeight: height,
    maxHeight: height,
    minWidth: width,
    maxWidth: width,
    background: "#00C2FF",
    borderRadius: "3px",
  })
);
