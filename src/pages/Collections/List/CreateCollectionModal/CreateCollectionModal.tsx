import React from "react";
import NewCollectionForm from "src/pages/AnimeDetail/CollectionModal/NewCollectionForm";
import { Modal } from "src/components";

interface CreateCollectionModalProps {
  show: boolean;
  onLeave: () => void;
  onCompleted: () => void;
}

const CreateCollectionModal: React.FC<CreateCollectionModalProps> = ({
  show,
  onLeave,
  onCompleted,
}) => {
  return (
    <Modal id="modal-createNewCollection" show={show} onLeave={onLeave}>
      <NewCollectionForm onCompleted={onCompleted} onCancel={onLeave} />
    </Modal>
  );
};

export default CreateCollectionModal;
