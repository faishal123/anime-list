export const getCollectionList = () => {
  const string = localStorage.getItem("collection");
  return JSON.parse(string || "{}");
};

export const setCollectionList = (data) => {
  const string = JSON.stringify(data);
  localStorage.setItem("collection", string);
};

export const addNewCollectionKey = (newKey) => {
  const prevData = getCollectionList();
  const newData = { ...prevData, [newKey]: [] };
  setCollectionList(newData);
};

export const collectionKeyAlreadyExist = (key) => {
  const prevData = getCollectionList();
  const collectionKeys = Object.keys(prevData);
  const collectionKeysLowerCase = collectionKeys.map((c) => c?.toLowerCase());
  return collectionKeysLowerCase?.includes(key?.toLowerCase());
};

export const addAnimeToCollections = (animeId, collections) => {
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
