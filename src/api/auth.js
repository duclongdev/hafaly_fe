import base from "./base";

const signUp = (user) => {
  return new Promise((resolve, reject) => {
    base
      .post("auth/register", {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        phone: user.phone,
        address: user.address,
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

const authenticate = (token, email, firstName, lastName) => {
  return new Promise((resolve, reject) => {
    base
      .post(
        "auth/verify",
        {
          email,
          firstName,
          lastName,
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export { login, authenticate, signUp };
