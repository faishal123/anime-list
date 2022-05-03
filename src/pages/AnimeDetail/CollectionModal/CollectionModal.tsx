import React, { useState } from "react";
import NewCollectionForm from "./NewCollectionForm";
import CollectionList from "./CollectionList";
import { Modal } from "src/components";
import { NotificationStateType } from "src/constant/interface";

interface CollectionModalProps {
  show: boolean;
  onLeave: () => void;
  animeId: string | number;
  setRenderNotification: React.Dispatch<
    React.SetStateAction<NotificationStateType>
  >;
}

const CollectionModal: React.FC<CollectionModalProps> = ({
  show,
  onLeave,
  animeId,
  setRenderNotification,
}) => {
  const [content, setContent] = useState("list");
  return (
    <Modal onLeave={onLeave} show={show}>
      {content === "list" ? (
        <CollectionList
          animeId={animeId}
          onLeave={onLeave}
          setContent={setContent}
          setRenderNotification={setRenderNotification}
        />
      ) : (
        <NewCollectionForm
          onCompleted={() => {
            setContent("list");
          }}
          onCancel={() => {
            setContent("list");
          }}
        />
      )}
    </Modal>
  );
};

export default CollectionModal;
