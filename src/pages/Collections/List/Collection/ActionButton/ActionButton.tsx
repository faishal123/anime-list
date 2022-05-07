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
      <Collapse id={`collapse-threedots-${collectionName}`} isOpen={!expand}>
        <Button
          id={`btn-action-${collectionName}`}
          onClick={() => {
            setExpand(true);
          }}
          iconOnly={{ src: threeDots, alt: "action" }}
          variant="dark"
          size="small"
        />
      </Collapse>
      <Collapse id={`collapse-actionButton-${collectionName}`} isOpen={expand}>
        <Link passHref href={`/collection/${collectionName}`}>
          <a>
            <Button
              id={`btn-viewCollection-${collectionName}`}
              text="View Collection"
              size="small"
            />
          </a>
        </Link>
        <div className="margin--medium-t">
          <Button
            id={`btn-delete-${collectionName}`}
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
