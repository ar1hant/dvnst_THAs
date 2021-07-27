import React, { useState } from "react";
const Context = React.createContext();

export default Context;

const wait =(time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export function AuthContext({children}){
  const[logged, setLogged] = useState(false);
  const[loading, setLoading] = useState(false);

  const logger = {
    logged: logged,
    loading: loading,
    login: () => {
      setLoading(true);
      wait(1000).then(() => {
        setLogged(true);
        setLoading(false);
      });
    },
    logout: () => {
      setLoading(true);
      wait(1000).then(() => {
        setLogged(false);
        setLoading(false);
      })
    }
  }
  
  return  <Context.Provider value={logger}>{children}</Context.Provider>;
}