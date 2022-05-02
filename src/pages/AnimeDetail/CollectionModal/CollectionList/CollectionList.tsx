import React, { useState } from "react";
import { Text, Line, Button } from "src/components";
import {
  getCollectionList,
  addAnimeToCollections,
} from "src/functions/localStorage";
import SingleCollection from "./SingleCollection";

const CollectionList = ({
  setContent,
  animeId,
  onLeave,
  setRenderNotification,
}) => {
  const [selectedCollections, setSelectedCollections] = useState([]);
  const alreadySelectCollection = selectedCollections?.length > 0;
  const collectionLists = getCollectionList();
  const collectionKeys = Object.keys(collectionLists);
  const shownCollections = collectionKeys?.reduce((a, c) => {
    if (collectionLists?.[c]?.includes(Number(animeId))) {
      return [...a, { name: c, alreadyIn: true }];
    }
    return [...a, { name: c, alreadyIn: false }];
  }, []);
  const haveCollection = collectionKeys?.length > 0;

  const onSubmit = () => {
    addAnimeToCollections(animeId, selectedCollections);
    setRenderNotification({
      type: "success",
      message: "Anime Added to Collection!",
    });
    onLeave();
  };

  return (
    <div>
      <Text block text="Add to Collection" variant="bold" size="large" />
      <div className="margin--medium-b margin--medium-t">
        <Line width="100%" height="1px" color="#505050" />
      </div>
      {haveCollection ? (
        shownCollections?.map((c) => {
          const isSelected = selectedCollections?.includes(c?.name);
          return (
            <SingleCollection
              onClick={() => {
                setSelectedCollections((prev) => {
                  if (prev?.includes(c?.name)) {
                    return prev?.filter((p) => p !== c?.name);
                  }
                  return [...prev, c?.name];
                });
              }}
              key={c?.name}
              name={c?.name}
              alreadyIn={c?.alreadyIn}
              isSelected={isSelected}
            />
          );
        })
      ) : (
        <Text block text="No Collection Found" size="xmedium" />
      )}
      <div className="margin--xlarge-t">
        <Button
          onClick={() => {
            if (alreadySelectCollection) {
              onSubmit();
            } else {
              setContent("form");
            }
          }}
          size="small"
          text={alreadySelectCollection ? "Save" : "Add New Collection"}
        />
      </div>
    </div>
  );
};

export default CollectionList;
