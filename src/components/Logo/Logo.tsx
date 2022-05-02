import React from "react";
import Text from "../Text";

const Logo = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <Text text="ANIM" variant="bold" size="xxlarge" color="#efefef" />
      <Text text="U" variant="bold" size="xxlarge" color="#00C2FF" />
    </div>
  );
};

export default Logo;
