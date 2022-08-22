import { useEffect } from "react";
import { createContext, useState } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase.utils";

//Can provide default value here, this will be value you want to provide
//Defaulting values to null for null checking.
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    /*
      Authentication related items are centralised here using this
      listener. Less calls to context manager improving performance.
    */
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  //Context provider is a special component which provides that global context value.
  //Value is passed to it which is the value which context handles.
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
