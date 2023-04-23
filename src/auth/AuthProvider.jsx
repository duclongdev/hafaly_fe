import React, { createContext, useState } from "react";
import { cookiesIsEmpty } from "../utils/cookiesHandle";
import { setCookies } from "../utils/cookiesHandle";
import authApi from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const signUp = (credentials, callback) => {
    authApi
      .signUp(credentials)
      .then((res) => {
        setCookies(res.data);
        setUser({
          email: res.data.userInfo.email,
          firstName: res.data.userInfo.firstName,
          lastName: res.data.userInfo.lastName,
          role: res.data.userInfo.role,
        });

        callback();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const login = (credentials, callback) => {
    authApi
      .login(credentials.email, credentials.password)
      .then((res) => {
        setCookies(res.data);
        setUser({
          email: res.data.userInfo.email,
          firstName: res.data.userInfo.firstName,
          lastName: res.data.userInfo.lastName,
          role: res.data.userInfo.role,
        });
        callback();
      })
      .catch((error) => {
        // if (error.response.status === 404) {
        //   //handle error when email not exists
        //   console.error(error.response);
        // }
        // if (error.response.status === 400) {
        //   //handle error when email or password wrong
        //   console.error(error.response);
        // }
        console.log(error);
      });
  };

  const logout = (callback) => {
    authApi.logout().then(() => {
      console.log("logout successfully");
      removeCookies();
      setUser(null);
      callback();
    });
  };

  const autoLogin = async (callback) => {
    if (!cookiesIsEmpty()) {
      await authApi
        .verify()
        .then((res) => {
          setCookies(res.data);
          setUser({
            email: res.data.userInfo.email,
            firstName: res.data.userInfo.firstName,
            lastName: res.data.userInfo.lastName,
            role: res.data.userInfo.role,
          });
          callback();
        })
        .catch((err) => {
          setUser(null);
        });
    }
    callback();
  };

  const value = { user, signUp, logout, login, autoLogin };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
