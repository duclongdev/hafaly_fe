import base from "./base";
const getCode = () => {
  return new Promise((resolve, reject) => {
    base
      .get("family/get-code")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const create = (familyInfo) => {
  return new Promise((resolve, reject) => {
    base
      .post("family/create", {
        name: familyInfo.name,
        address: familyInfo.address,
        code: familyInfo.code,
        phoneNumber: familyInfo.phoneNumber,
        hostEmail: familyInfo.hostEmail,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const familyApi = { getCode, create };
export default familyApi;
