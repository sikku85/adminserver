import React, { createContext, useState } from 'react';

// Step 1: Define centralized data
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {



    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoggedout,setIsLoggedout]=useState(true);
    const [login,setLogin]=useState("Login");



  // Provide the centralized data and methods to the components
  return (
    <AppContext.Provider value={{isLoggedIn ,  setIsLoggedIn,isLoggedout,setIsLoggedout,login,setLogin}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
