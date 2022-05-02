import React from "react";
import { Loader } from "./style";

interface LoaderProps {
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge";
}

const LoaderCircle: React.FC<LoaderProps> = ({ size = "medium" }) => {
  return <Loader size={size} />;
};

export default LoaderCircle;
