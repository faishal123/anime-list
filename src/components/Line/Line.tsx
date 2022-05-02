import React from "react";
import { LineBase } from "./style";

const Line = ({ height = "24px", width = "6px" }) => {
  return <LineBase height={height} width={width}></LineBase>;
};

export default Line;
