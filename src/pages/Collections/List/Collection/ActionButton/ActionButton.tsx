import React, { useState } from "react";
import { Button, Collapse } from "src/components";
import threeDots from "src/assets/svg/threeDotsWhite.svg";
import Link from "next/link";

interface ActionButtonProps {
  collectionName: string;
  onDeleteCollection: (name: string) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  collectionName,
  onDeleteCollection,
}) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <Collapse isOpen={!expand}>
        <Button
          onClick={() => {
            setExpand(true);
          }}
          iconOnly={{ src: threeDots, alt: "action" }}
          variant="dark"
          size="small"
        />
      </Collapse>
      <Collapse isOpen={expand}>
        <Link passHref href={`/collection/${collectionName}`}>
          <a>
            <Button text="View Collection" size="small" />
          </a>
        </Link>
        <div className="margin--medium-t">
          <Button
            variant="dark"
            text="Delete"
            size="small"
            onClick={() => {
              onDeleteCollection(collectionName);
            }}
          />
        </div>
      </Collapse>
    </>
  );
};

export default ActionButton;
