import React, { createContext, useState } from 'react';
import useFruit from '../hooks/useFruit';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const fruitOperation = useFruit()

  return (
    <GlobalContext.Provider value={{ ...fruitOperation }}>
      {children}
    </GlobalContext.Provider>
  );
};