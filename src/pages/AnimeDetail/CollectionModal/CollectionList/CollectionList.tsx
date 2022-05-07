import React, { useState } from "react";
import { Text, Line, Button } from "src/components";
import { getCollectionList } from "src/functions/localStorage";
import SingleCollection from "./SingleCollection";

interface CollectionListProps {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  animeId: string | number;
  onAddToCollection: (collections: string[]) => void;
}

const CollectionList: React.FC<CollectionListProps> = ({
  setContent,
  animeId,
  onAddToCollection,
}) => {
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const alreadySelectCollection = selectedCollections?.length > 0;
  const collectionLists = getCollectionList();
  const collectionKeys = Object.keys(collectionLists);
  const shownCollections = collectionKeys?.reduce<
    { name: string; alreadyIn: boolean }[]
  >((a, c) => {
    if (collectionLists?.[c]?.includes(Number(animeId))) {
      return [...a, { name: c, alreadyIn: true }];
    }
    return [...a, { name: c, alreadyIn: false }];
  }, []);
  const haveCollection = collectionKeys?.length > 0;

  const onSubmit = () => {
    onAddToCollection(selectedCollections);
  };

  return (
    <div>
      <Text
        id={`txt-addToCollection-title-${animeId}`}
        block
        text="Add to Collection"
        variant="bold"
        size="large"
      />
      <div className="margin--medium-b margin--medium-t">
        <Line
          id={`line-addToCollection-${animeId}`}
          width="100%"
          height="1px"
          color="#505050"
        />
      </div>
      {haveCollection ? (
        <>
          <div className="margin--medium-b">
            <Text
              id={`txt-title-addToCollection-${animeId}`}
              text="Choose Collection to Add Anime into"
              size="xmedium"
            />
          </div>
          {shownCollections?.map((c) => {
            const isSelected: boolean = selectedCollections?.includes(c?.name);
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
          })}
        </>
      ) : (
        <Text
          id={`txt-noCollectionFound-${animeId}`}
          block
          text="No Collection Found"
          size="xmedium"
          color="#909090"
        />
      )}
      <div className="margin--xlarge-t">
        <Button
          id={`btn-submit-${animeId}`}
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
