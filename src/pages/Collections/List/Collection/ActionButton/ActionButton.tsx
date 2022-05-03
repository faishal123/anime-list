import React, { useState } from "react";
import { Button, Collapse } from "src/components";
import threeDots from "src/assets/svg/threeDotsWhite.svg";
import { deleteCollection } from "src/functions/localStorage";
import { NotificationStateType } from "src/constant/interface";
import Link from "next/link";

interface ActionButtonProps {
  collectionName: string;
  setRenderNotification: React.Dispatch<
    React.SetStateAction<NotificationStateType>
  >;
  getCollectionFromLocalStorage: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  collectionName,
  setRenderNotification,
  getCollectionFromLocalStorage,
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
            <Button text="Edit" size="small" />
          </a>
        </Link>
        <div className="margin--medium-t">
          <Button
            variant="dark"
            text="Delete"
            size="small"
            onClick={() => {
              deleteCollection(collectionName);
              setRenderNotification({
                type: "success",
                message: "Collection Deleted!",
              });
              getCollectionFromLocalStorage();
            }}
          />
        </div>
      </Collapse>
    </>
  );
};

export default ActionButton;
