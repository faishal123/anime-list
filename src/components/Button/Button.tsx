import React from "react";
import { ButtonBase } from "./style";
import { MouseEvent } from "react";

interface ButtonBaseProps {
  variant?: "primary" | "grey" | "white" | "dark";
  size?: "small" | "medium" | "large" | "xlarge";
  text: string;
  onClick?: (() => void) | ((e: MouseEvent<HTMLElement>) => void);
}

const Button: React.FC<ButtonBaseProps> = ({
  text,
  onClick = () => null,
  variant = "primary",
  size = "medium",
}) => {
  return (
    <ButtonBase size={size} variant={variant} onClick={onClick}>
      {text}
    </ButtonBase>
  );
};

export default Button;
