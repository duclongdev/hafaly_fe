import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import UserContext from "../../utils/UserProvider";

const AuthLayout = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    if (user) {
      navigate("/");
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
