import {createContext, useState} from 'react';

export const FavoriteContext = createContext({
  ids: [],
  addToFav: id => {},
  removeFromFav: id => {},
});

const FavoriteContextProvider = ({children}) => {
  const [favMealIds, setFavMealIds] = useState([]);

  const addToFav = id => {
    setFavMealIds(currrentIds => [...currrentIds, id]);
  };
  const removeFromFav = id => {
    setFavMealIds(currrentIds =>
      currrentIds.filter(currrentId => currrentId !== id),
    );
  };
  const value = {
    ids: favMealIds,
    addToFav: addToFav,
    removeFromFav: removeFromFav,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
