import React, { useState, createContext, useContext } from 'react';

interface AppContextInterface {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolling: boolean;
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

const AppProvider = ({ children }:Children) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);


  const state = { showMenu, setShowMenu, isScrolling, setIsScrolling };


  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;