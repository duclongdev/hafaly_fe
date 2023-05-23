import base from "./base";
import Cookies from "js-cookie";
import { getCookies } from "../utils/cookiesHandle";

const signUp = (user) => {
  return new Promise((resolve, reject) => {
    base
      .post("auth/register", {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        password: user.password,
        gender: user.gender,
        address: user.address,
        dateOfBirth: user.dateOfBirth,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    base
      .post("auth/login", {
        email: email,
        password: password,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const logout = () => {
  return new Promise((resolve, reject) => {
    base
      .post(
        "auth/logout",
        {},
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const verify = () => {
  const cookies = getCookies();
  return new Promise((resolve, reject) => {
    base
      .post(
        "auth/verify",
        {
          email: cookies.email,
          token: cookies.token,
          refreshTokenId: cookies.refreshTokenId,
        },
        {
          headers: {
            Authorization: "Bearer " + cookies.token,
          },
        }
      )
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const authApi = { login, logout, verify, signUp };
export default authApi;
