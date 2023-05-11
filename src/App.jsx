import React, { useEffect, startTransition, useState } from "react";

import { Routes, Route } from "react-router-dom";
import RequiredAuth from "./auth/RequiredAuth";
import useAuth from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { lazyLoad } from "./utils/lazyLoad";
import MenuAppBar from "./components/menu/MenuAppBar";

const DefaultLayoutPublic = lazyLoad(
  import("./components/layout/DefaultLayout/DefaultLayoutPublic")
);
const Homepage = lazyLoad(import("./pages/Homepage/Homepage"));
const Login = lazyLoad(import("./pages/Login-SignUp/Login"));
const FamilyPage = lazyLoad(import("./pages/Family/FamilyPage"));
const NotFoundPage = lazyLoad(import("./pages/NotFound/NotFoundPage"));
const CreateFamily = lazyLoad(import("./pages/CreateFamily/CreateFamily"));
const LoadingScreen = lazyLoad(import("./pages/loading/LoadingScreen"));
const ContactPage = lazyLoad(import("./pages/contact/ContactPage.jsx"));

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  console.log(auth.user);
  useEffect(() => {
    auth.autoLogin(() => {
      setLoading(false);
      navigate("/");
    });
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <div
      style={
        auth.user === undefined || auth.user.role === "HOMELESS"
          ? {}
          : { display: "flex", flexDirection: "row" }
      }
    >
      {auth.user === undefined || auth.user.role === "HOMELESS" ? (
        <></>
      ) : (
        <MenuAppBar />
      )}

      <Routes>
        <Route path="/">
          <Route
            index
            element={
              auth.user ? (
                <RequiredAuth>
                  <FamilyPage />
                </RequiredAuth>
              ) : (
                <DefaultLayoutPublic>
                  <Homepage />
                </DefaultLayoutPublic>
              )
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="create-family" element={<CreateFamily />} />
        <Route
          path="contact"
          element={
            <RequiredAuth>
              <ContactPage />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
