import axios from "axios";
import Cookies from "js-cookie";
const appApi = axios.create({
  //baseURL: "http://localhost:8080/api/v1", // localhost
  baseURL: "https://hafalybe-production.up.railway.app/api/v1",
});
appApi.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token && !config.url.includes("/auth")) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Set up request interceptor to add authorization header
appApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      error.response.data === "Token has expired"
    ) {
      const token = Cookies.get("token");
      const email = Cookies.get("email");
      const refreshTokenId = Cookies.get("refresh_token_id");
      const response = await appApi.post(
        "auth/new-access-token",
        {
          token,
          email,
          refreshTokenId,
        },
        {
          headers: { Authorization: "Bearer " },
        }
      );
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        Cookies.set("token", accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      }
      return appApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default appApi;
