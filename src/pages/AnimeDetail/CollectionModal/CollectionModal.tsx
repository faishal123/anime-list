import React, { useState } from "react";
import NewCollectionForm from "./NewCollectionForm";
import CollectionList from "./CollectionList";
import { addAnimeToCollections } from "src/functions/localStorage";
import { Modal } from "src/components";
import { NotificationStateType } from "src/constant/interface";

interface CollectionModalProps {
  show: boolean;
  onLeave: () => void;
  animeId: string | number;
  setRenderNotification: React.Dispatch<
    React.SetStateAction<NotificationStateType>
  >;
  getCollectionWithCurrentAnime: () => void;
}

const CollectionModal: React.FC<CollectionModalProps> = ({
  show,
  onLeave,
  animeId,
  setRenderNotification,
  getCollectionWithCurrentAnime,
}) => {
  const [content, setContent] = useState("list");

  const onAddToCollection = (selectedCollections: string[]) => {
    addAnimeToCollections(animeId, selectedCollections);
    setRenderNotification({
      type: "success",
      message: "Anime Added to Collection!",
    });
    getCollectionWithCurrentAnime();
    onLeave();
  };

  return (
    <Modal
      id={`modal-addToCollection-${animeId}`}
      onLeave={onLeave}
      show={show}
    >
      {content === "list" ? (
        <CollectionList
          onAddToCollection={onAddToCollection}
          animeId={animeId}
          setContent={setContent}
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
