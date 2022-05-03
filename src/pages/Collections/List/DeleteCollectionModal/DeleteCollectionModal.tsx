import React from "react";
import { Modal, Text, Button } from "src/components";
import Image from "next/image";
import { DeleteModalContainer, YesButtonContainer } from "./style";
import questionMark from "src/assets/svg/questionMarkWhite.svg";

interface DeleteCollectionModalProps {
  show: boolean;
  onLeave: () => void;
  collectionToDelete: string;
  confirmDeleteCollection: (name: string) => void;
}

const DeleteCollectionModal: React.FC<DeleteCollectionModalProps> = ({
  show,
  onLeave,
  collectionToDelete,
  confirmDeleteCollection,
}) => {
  return (
    <Modal show={show} onLeave={onLeave}>
      <DeleteModalContainer>
        <div className="margin--medium-b margin--medium-t">
          <Image
            src={questionMark}
            alt="confirmation"
            width={100}
            height={100}
          />
        </div>
        <Text
          text={`Are you sure you want to delete collection "${collectionToDelete}" ?`}
          align="center"
          size="xmedium"
        />
        <YesButtonContainer className="margin--medium-b margin--medium-t">
          <Button
            onClick={() => {
              confirmDeleteCollection(collectionToDelete);
            }}
            text="Yes"
            size="small"
          />
        </YesButtonContainer>
        <Button onClick={onLeave} variant="dark" text="No" size="small" />
      </DeleteModalContainer>
    </Modal>
  );
};

export default DeleteCollectionModal;
