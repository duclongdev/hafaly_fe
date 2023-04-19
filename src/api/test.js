import base from "./base";
const test = (token) => {
  return new Promise((resolve, reject) => {
    base
      .get("test", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

export { test };
