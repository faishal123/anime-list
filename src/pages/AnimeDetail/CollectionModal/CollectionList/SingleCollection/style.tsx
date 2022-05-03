import styled from "@emotion/styled";
import React from "react";

const defineBorderColor = (isSelected: boolean, alreadyIn: boolean): string => {
  if (alreadyIn) {
    return "#00C2FF";
  }
  if (isSelected) {
    return "#909090";
  }
  return "#505050";
};

interface SingleCollectionContainerProps {
  isSelected: boolean;
  alreadyIn: boolean;
  onClick: () => void;
  children: JSX.Element | JSX.Element[];
}

export const SingleCollectionContainer: React.FC<SingleCollectionContainerProps> =
  styled.div(({ isSelected, alreadyIn }) => {
    return {
      padding: "15px 20px 15px 15px",
      borderRadius: "5px",
      display: "flex",
      gap: "10px",
      alignItems: "flex-start",
      justifyContent: "space-between",
      border: `1px solid ${defineBorderColor(isSelected, alreadyIn)}`,
      transition: "0.1s",
      marginBottom: "15px",
    };
  });
