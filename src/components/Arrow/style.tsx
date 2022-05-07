import styled from "@emotion/styled";
import React from "react";

interface ArrowElementProps {
  rotate: number;
  id: string;
}

export const ArrowElement: React.FC<ArrowElementProps> = styled.div(
  ({ rotate }) => {
    return {
      display: "inline-block",
      transform: `rotate(${rotate}deg)`,
      minHeight: "10px",
      maxHeight: "10px",
      minWidth: "10px",
      maxWidth: "10px",
      borderBottom: "3px solid #efefef",
      borderRight: "3px solid #efefef",
      transition: "0.2s",
    };
  }
);
