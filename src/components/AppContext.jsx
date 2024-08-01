import React, { createContext, useState, useContext } from "react";

// Create the context
const AppContext = createContext();

// Create a custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};

// Create the provider component
export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <AppContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </AppContext.Provider>
  );
};
