import React, { InputHTMLAttributes } from "react";
import { InputBase } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Input: React.FC<InputProps> = (props) => {
  return <InputBase {...props} data-testid={props.id} />;
};

export default Input;
