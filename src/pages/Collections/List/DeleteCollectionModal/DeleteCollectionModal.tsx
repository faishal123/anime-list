import React from "react";
import { ConfirmationModal } from "src/components";

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
    <ConfirmationModal
      id={`confirmationModal-deleteCollection-${collectionToDelete}`}
      onLeave={onLeave}
      show={show}
      onNo={onLeave}
      onYes={() => {
        confirmDeleteCollection(collectionToDelete);
      }}
      title={`Are you sure you want to delete collection "${collectionToDelete}" ?`}
    />
  );
};

export default DeleteCollectionModal;
