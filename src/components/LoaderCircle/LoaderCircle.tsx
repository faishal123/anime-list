import React from "react";
import { Loader } from "./style";

interface LoaderProps {
  id: string;
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge";
}

const LoaderCircle: React.FC<LoaderProps> = ({ id, size = "medium" }) => {
  return <Loader id={id} data-testid={id} size={size} />;
};

export default LoaderCircle;
