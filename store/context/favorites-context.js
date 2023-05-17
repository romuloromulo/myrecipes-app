import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [mealId, setMealId] = useState([]);

  function addFavorite(id) {
    setMealId((currentFavsId) => [...currentFavsId, id]);
  }

  function removeFavorite(id) {
    setMealId((currentFavsId) => {
      return currentFavsId.filter((mealId) => mealId !== id);
    });
  }

  const value = {
    ids: mealId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
