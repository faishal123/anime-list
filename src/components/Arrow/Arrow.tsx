import React from "react";
import { ArrowElement } from "./style";

interface ArrowProps {
  rotate?: number;
  id: string;
}

const Arrow: React.FC<ArrowProps> = ({ rotate = 45, id }) => {
  return <ArrowElement data-testid={id} id={id} rotate={rotate}></ArrowElement>;
};

export default Arrow;
