import React from "react";
import { ButtonBase } from "./style";
import Image from "next/image";
import { MouseEvent } from "react";

interface ButtonBaseProps {
  variant?: "primary" | "grey" | "white" | "dark" | "red";
  size?: "small" | "medium" | "large" | "xlarge";
  text?: string;
  onClick?: (() => void) | ((e: MouseEvent<HTMLElement>) => void);
  id: string;
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
  id,
}) => {
  const renderIcon = !!iconOnly?.src;
  return (
    <ButtonBase
      id={id}
      data-testid={id}
      size={size}
      variant={variant}
      onClick={onClick}
    >
      <>
        {!!text ? <div data-testid={`${id}-text`}>{text}</div> : null}
        {!!renderIcon ? (
          <Image
            data-testid={`${id}-icon`}
            src={iconOnly.src}
            alt={iconOnly.alt}
          />
        ) : null}
      </>
    </ButtonBase>
  );
};

export default Button;
