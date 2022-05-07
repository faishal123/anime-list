import React from "react";
import { CheckmarkElement } from "./style";

const Checkmark: React.FC<{ id: string }> = ({ id }) => {
  return <CheckmarkElement id={id} data-testid={id}></CheckmarkElement>;
};

export default Checkmark;
