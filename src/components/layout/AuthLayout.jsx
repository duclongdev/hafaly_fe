import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/UserProvider";

const AuthLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      // navigate(user.role === "HOMELESS" ? "/createfamily" : "/family");
    }
  }, [user]);

  return (
    <div>
      <Outlet />
      <div>auth</div>
    </div>
  );
};

export default AuthLayout;
