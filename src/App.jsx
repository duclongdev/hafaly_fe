import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index";
import { useContext, useEffect } from "react";
//Import Layout

import DefaultLayoutPublic from "./components/layout/DefaultLayout/DefaultLayoutPublic";
import DefaultLayoutPrivate from "./components/layout/DefaultLayout/DefaultLayoutPrivate";
import AuthLayout from "./components/layout/AuthLayout";

import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login-SignUp/Login";
import CreateFamily from "./pages/CreateFamily/CreateFamily";
import UserContext from "./utils/UserProvider";

function App() {
  const { setUser, setLoading } = useContext(UserContext);

  useEffect(() => {}, []);
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} /> */}
      </Route>

      <Route
        path="/"
        element={<DefaultLayoutPublic>{<Homepage />}</DefaultLayoutPublic>}
      />
      <Route
        path="/home"
        element={<DefaultLayoutPublic>{<Homepage />}</DefaultLayoutPublic>}
      />
      {/* <Route
            path="/login"
            element={<DefaultLayoutPublic>{<Login />}</DefaultLayoutPublic>}
          /> */}
      <Route
        path="/dashboard"
        element={<DefaultLayoutPrivate></DefaultLayoutPrivate>}
      />
      <Route
        path="/createfamily"
        element={
          <DefaultLayoutPrivate>{<CreateFamily />}</DefaultLayoutPrivate>
        }
      />
    </Routes>
  );
}

export default App;
