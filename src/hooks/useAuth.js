import React from "react";
import { AuthContext } from "../auth/AuthProvider";

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;
