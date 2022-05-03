import React from "react";
import { ArrowElement } from "./style";

interface ArrowProps {
  rotate?: number;
}

const Arrow: React.FC<ArrowProps> = ({ rotate = 45 }) => {
  return <ArrowElement rotate={rotate}></ArrowElement>;
};

export default Arrow;
