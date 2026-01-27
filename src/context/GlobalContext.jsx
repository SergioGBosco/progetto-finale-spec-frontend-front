import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [compareList, setCompareList] = useState([]);

  const toggleFavorite = (fruit) => {
    setFavorites((prev) =>
      prev.find((f) => f.id === fruit.id)
        ? prev.filter((f) => f.id !== fruit.id)
        : [...prev, fruit]
    );
  };
  console.log(favorites)

  const addToCompare = (fruit) => {
    if (compareList.length < 2 && !compareList.find((f) => f.id === fruit.id)) {
      setCompareList([...compareList, fruit]);
    } else if (compareList.find((f) => f.id === fruit.id)) {
      setCompareList(compareList.filter(f => f.id !== fruit.id));
    }
  };
  console.log(compareList)

  return (
    <GlobalContext.Provider value={{ favorites, compareList, toggleFavorite, addToCompare }}>
      {children}
    </GlobalContext.Provider>
  );
};