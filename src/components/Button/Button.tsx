import React from "react";
import { ButtonBase } from "./style";
import Image from "next/image";
import { MouseEvent } from "react";

interface ButtonBaseProps {
  variant?: "primary" | "grey" | "white" | "dark";
  size?: "small" | "medium" | "large" | "xlarge";
  text?: string;
  onClick?: (() => void) | ((e: MouseEvent<HTMLElement>) => void);
  iconOnly?: {
    src: string;
    width?: string;
    height?: string;
    layout?: "fixed" | "fill" | "intrinsic" | "responsive" | "raw";
    alt: string;
  };
}

const Button: React.FC<ButtonBaseProps> = ({
  text,
  onClick = () => null,
  variant = "primary",
  size = "medium",
  iconOnly,
}) => {
  return (
    <ButtonBase size={size} variant={variant} onClick={onClick}>
      {!!text ? <div>{text}</div> : <div></div>}
      {!!iconOnly?.src ? (
        <Image
          src={iconOnly?.src}
          alt={iconOnly?.alt}
          width={iconOnly?.width}
          height={iconOnly?.height}
          layout={iconOnly?.layout}
        />
      ) : (
        <div></div>
      )}
    </ButtonBase>
  );
};

export default Button;
