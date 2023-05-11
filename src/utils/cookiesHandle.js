import Cookies from "js-cookie";

export const removeCookies = () => {
  Cookies.remove("token");
  Cookies.remove("refresh_token_id");
  Cookies.remove("email");
  Cookies.remove("role");
  Cookies.remove("family_id");
};
export const setCookies = (data) => {
  Cookies.set("token", data.accessToken);
  Cookies.set("refresh_token_id", data.refreshTokenId);
  Cookies.set("email", data.userInfo.email);
  Cookies.set("role", data.userInfo.role);
  Cookies.set("family_id", data.userInfo.familyId);
};
export const getCookies = () => {
  const cookies = {
    token: Cookies.get("token"),
    email: Cookies.get("email"),
    refreshTokenId: Cookies.get("refresh_token_id"),
    role: Cookies.get("role"),
    familyId: Cookies.get("family_id"),
  };
  return cookies;
};

const invalid = (attribute) => {
  if (attribute == null || attribute === "undefined") return true;
};

export const cookiesIsEmpty = () => {
  const cookies = getCookies();
  if (
    invalid(cookies.email) ||
    invalid(cookies.token) ||
    invalid(cookies.refreshTokenId) ||
    invalid(cookies.role)
  ) {
    removeCookies();
    return true;
  }
  return false;
};
