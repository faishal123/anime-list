import { CollectionsType } from "src/constant/interface";

export const getCollectionList = (): { [key: string]: number[] } => {
  const string = localStorage.getItem("collection");
  return JSON.parse(string || "{}");
};

export const setCollectionList = (data: CollectionsType) => {
  const string = JSON.stringify(data);
  localStorage.setItem("collection", string);
};

export const addNewCollectionKey = (newKey: string) => {
  const prevData = getCollectionList();
  const newData = { ...prevData, [newKey]: [] };
  setCollectionList(newData);
};

export const collectionKeyAlreadyExist = (key: string): boolean => {
  const prevData = getCollectionList();
  const collectionKeys = Object.keys(prevData);
  const collectionKeysLowerCase = collectionKeys.map((c) => c?.toLowerCase());
  return collectionKeysLowerCase?.includes(key?.toLowerCase());
};

export const addAnimeToCollections = (
  animeId: string | number,
  collections: string[]
) => {
  const numberAnimeId = Number(animeId);
  const prevData = getCollectionList();
  const prevCollectionKeys = Object.keys(prevData);
  const newData = prevCollectionKeys?.reduce((a, c) => {
    if (collections?.includes(c) && !prevData?.[c]?.includes(numberAnimeId)) {
      return { ...a, [c]: [...prevData?.[c], numberAnimeId] };
    }
    return { ...a, [c]: [...prevData?.[c]] };
  }, {});
  setCollectionList(newData);
};

export const deleteCollection = (key: string) => {
  const prevData = getCollectionList();
  const newKeys = Object.keys(prevData)?.filter((k) => k !== key);
  const newData = newKeys.reduce((a, c) => {
    return { ...a, [c]: prevData?.[c] };
  }, {});
  setCollectionList(newData);
};
