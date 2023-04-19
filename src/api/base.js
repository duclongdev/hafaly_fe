import axios from "axios";
import Cookies from "js-cookie";
const appApi = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});
appApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      (error.response.statusCode =
        401 || error.response.data == "Token has expired")
    ) {
      console.log("Token expired. Refreshing token...");
      const accessToken = Cookies.get("accessToken");
      const email = Cookies.get("email");
      const response = await axios.post("auth/new-access-token", {
        accessToken,
        email,
      });
      if (response.statusCode === 200) {
        const { accessToken } = response.data;
        console.log("New access token:", accessToken);

        // Update the access token in the appApi instance
        appApi.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
      }
      // Retry the original request with the new access token
      return appApi(error.config);
    }
    return Promise.reject(error);
  }
);

export default appApi;
