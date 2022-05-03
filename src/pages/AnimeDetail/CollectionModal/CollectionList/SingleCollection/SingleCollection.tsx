import React from "react";
import { Text, Checkmark } from "src/components";
import { SingleCollectionContainer } from "./style";

interface SingleCollectionProps {
  name: string;
  alreadyIn: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const SingleCollection: React.FC<SingleCollectionProps> = ({
  name,
  alreadyIn,
  isSelected,
  onClick,
}) => {
  return (
    <SingleCollectionContainer
      alreadyIn={alreadyIn}
      isSelected={isSelected}
      onClick={!alreadyIn ? onClick : () => null}
    >
      <div>
        <Text
          block
          text={name}
          variant={isSelected || alreadyIn ? "bold" : "regular"}
          size="xmedium"
        />
        {alreadyIn && (
          <Text
            text="Already in this collection"
            color="#00C2FF"
            size="small"
          />
        )}
      </div>
      {isSelected && !alreadyIn ? <Checkmark /> : <div></div>}
    </SingleCollectionContainer>
  );
};

export default SingleCollection;
