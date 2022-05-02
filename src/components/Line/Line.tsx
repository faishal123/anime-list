import React from "react";
import { LineBase } from "./style";

const Line = ({ height = "24px", width = "6px", color = "#00C2FF" }) => {
  return <LineBase height={height} width={width} color={color}></LineBase>;
};

export default Line;
