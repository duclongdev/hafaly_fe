import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="login" state={{ from: location }} replace />;
  }
  if (auth.user.role === "HOMELESS") {
    return <Navigate to="create-family" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
