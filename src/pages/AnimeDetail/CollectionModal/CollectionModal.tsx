import React, { useState } from "react";
import NewCollectionForm from "./NewCollectionForm";
import CollectionList from "./CollectionList";
import { Modal } from "src/components";

const contentMap = new Map([
  ["list", CollectionList],
  ["form", NewCollectionForm],
]);

const CollectionModal = ({ show, onLeave, animeId, setRenderNotification }) => {
  const [content, setContent] = useState("list");
  const ContentToRender = contentMap.get(content);
  return (
    <Modal onLeave={onLeave} show={show}>
      <ContentToRender
        animeId={animeId}
        onLeave={onLeave}
        setContent={setContent}
        setRenderNotification={setRenderNotification}
      />
    </Modal>
  );
};

export default CollectionModal;
