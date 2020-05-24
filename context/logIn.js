import React,{useState, createContext} from "react";
import {AsyncStorage} from 'react-native'

export const Login = createContext({});
export const LoginProvider = ({children})=> {
  const [user, setUser] = useState({})

  return(
    <Login.Provider value={{
      user,
      login: () => {
        const fakeUser = { username: "mohitnegi724" };
        setUser(fakeUser);
        AsyncStorage.setItem("user", JSON.stringify(fakeUser));
      },
      logout: () => {
        setUser({});
        AsyncStorage.removeItem("user");
      }
    }}
    >
      {children}
    </Login.Provider>
  )
}