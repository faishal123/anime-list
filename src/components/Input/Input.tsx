import React, { InputHTMLAttributes } from "react";
import { InputBase } from "./style";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <InputBase {...props} />;
};

export default Input;
