import React from "react";
import { LineBase } from "./style";

interface LineProps {
  height?: string;
  width?: string;
  color?: string;
}

const Line: React.FC<LineProps> = ({
  height = "24px",
  width = "6px",
  color = "#00C2FF",
}) => {
  return <LineBase height={height} width={width} color={color}></LineBase>;
};

export default Line;
