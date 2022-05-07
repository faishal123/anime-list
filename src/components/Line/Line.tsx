import React from "react";
import { LineBase } from "./style";

interface LineProps {
  height?: string;
  width?: string;
  color?: string;
  id: string;
}

const Line: React.FC<LineProps> = ({
  height = "24px",
  width = "6px",
  color = "#00C2FF",
  id,
}) => {
  return (
    <LineBase
      id={id}
      data-testid={id}
      height={height}
      width={width}
      color={color}
    ></LineBase>
  );
};

export default Line;
