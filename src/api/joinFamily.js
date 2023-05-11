import base from "./base";
import { getCookies } from "../utils/cookiesHandle";
const cookies = getCookies();

const requestJoin = (code, message) => {
  return new Promise((resolve, reject) => {
    base
      .post("join-family", {
        email: cookies.email,
        familyCode: code,
        message: message,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const getAllRequest = () => {
  return new Promise((resolve, reject) => {
    base
      .get(`join-family/${cookies.familyId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const getCode = (code) => {
  return new Promise((resolve, reject) => {
    base
      .get("join-family", {
        params: { code: code },
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const accept = (requestId) => {
  return new Promise((resolve, reject) => {
    base
      .post(`join-family/accept/${requestId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const refuse = (requestId) => {
  return new Promise((resolve, reject) => {
    base
      .post(`join-family/refuse/${requestId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const joinFamilyApi = { getAllRequest, getCode, accept, refuse, requestJoin };
export default joinFamilyApi;
