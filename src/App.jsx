import React, { useEffect, startTransition, useState } from "react";

import { Routes, Route } from "react-router-dom";
import RequiredAuth from "./auth/RequiredAuth";
import useAuth from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { lazyLoad } from "./utils/lazyLoad";
import MenuAppBar from "./components/menu/MenuAppBar";
import { useSelector } from "react-redux";
import { selectMenuState } from "./redux/menuSlice";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import { handlePeeking } from "./redux/menuSlice";
import PrivateLayout from "./components/layout/privateLayout";
import { registerLicense } from "@syncfusion/ej2-base";

const DefaultLayoutPublic = lazyLoad(
  import("./components/layout/DefaultLayout/DefaultLayoutPublic")
);
const Homepage = lazyLoad(import("./pages/Homepage/Homepage"));
const Login = lazyLoad(import("./pages/Login-SignUp/Login"));
const FamilyPage = lazyLoad(import("./pages/Family/FamilyPage"));
const NotFoundPage = lazyLoad(import("./pages/NotFound/NotFoundPage"));
const CreateFamily = lazyLoad(import("./pages/CreateFamily/CreateFamily"));
const LoadingScreen = lazyLoad(import("./pages/loading/LoadingScreen"));
const ContactPage = lazyLoad(import("./pages/Contacts/Contacts"));
const TaskPage = lazyLoad(import("./pages/task"));
const SettingPage = lazyLoad(import("./pages/setting"));
const NotePage = lazyLoad(import("./pages/Note/Note"));
const SchedulePage = lazyLoad(import("./pages/Schedule/Schedule"));
const MealPage = lazyLoad(import("./pages/meal"));

function App() {
  registerLicense(
    "Mgo+DSMBaFt+QHJqVk1mQ1lbdF9AXnNAdFZxT2Naby8Nf1dGYl9RQXZWQlRmQXxSck1nXg==;Mgo+DSMBPh8sVXJ1S0R+X1pCaVddX2NLfUN/T2ZedV5zZCQ7a15RRnVfR11qSXdWfkdiXXZZdw==;ORg4AjUWIQA/Gnt2VFhiQlJPcEBKQmFJfFBmTGlceFRwd0U3HVdTRHRcQlhjQH5ac01hWHpeeHM=;MTk4MTUyOEAzMjMxMmUzMjJlMzNBNGpZSitDVUQrWVRDb214dU44L3o1T25POHcxQnZaUlAydmhHTWxFOTJnPQ==;MTk4MTUyOUAzMjMxMmUzMjJlMzNDUEM2ODU4dGl4ZFEzUDZBcno2VXRFSlFmNHZHdzBNL1FmeE82K2wxNm1VPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldVXxLflF1VWpTell6dFZWESFaRnZdQV1mSXdTf0BrW35bdnZS;MTk4MTUzMUAzMjMxMmUzMjJlMzNEeGxWNjBmUHc4cFMwSGZsTFc5WGFtYmpVcUR4TG42WmQ1bXZPM1c3NEZZPQ==;MTk4MTUzMkAzMjMxMmUzMjJlMzNKam1tM1V6bWFtekUrUk5iU0p4dkwyWUlwcCtIcFN6UVdYRlZUZ0E2L3ZZPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcEBKQmFJfFBmTGlceFRwd0U3HVdTRHRcQlhjQH5ac01hWHlfdHM=;MTk4MTUzNEAzMjMxMmUzMjJlMzNFSFlHc0FmTXNRTEpyT3FYU2R0VTk4VG1aTGdWWFhUMXVOdjNDeHk0Y3NjPQ==;MTk4MTUzNUAzMjMxMmUzMjJlMzNnNVhQOW0zYWNZTXRnZTV3NzJLZ2ZVdWJ6bDBFVmdFNEFxQ0pqb2xKZ1JZPQ==;MTk4MTUzNkAzMjMxMmUzMjJlMzNEeGxWNjBmUHc4cFMwSGZsTFc5WGFtYmpVcUR4TG42WmQ1bXZPM1c3NEZZPQ=="
  );
  const data = useSelector(selectMenuState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const auth = useAuth();

  useEffect(() => {
    auth.autoLogin(() => {
      setLoading(false);
      navigate("/");
    });
  }, []);

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const menuContainer = document.getElementById("menu-container");
    const isCursorOverMenu =
      menuContainer && menuContainer.contains(event.target);
    dispatch(handlePeeking({ mouseX, isCursorOverMenu }));
  };

  if (loading) return <LoadingScreen />;
  return (
    <div
      // style={
      //   auth.user === undefined || auth.user.role === "HOMELESS"
      //     ? {}
      //     : { display: "flex", flexDirection: "row" }
      // }

      onMouseMove={handleMouseMove}
    >
      {auth.user === undefined || auth.user.role === "HOMELESS" ? (
        <></>
      ) : (
        <MenuAppBar />
      )}
      <div
        className={style.pageContainer}
        style={
          auth.user === undefined ||
          auth.user.role === "HOMELESS" ||
          data === false
            ? { marginLeft: 0 }
            : { marginLeft: "200px" }
        }
      >
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                auth.user ? (
                  <RequiredAuth>
                    <PrivateLayout>
                      <FamilyPage />
                    </PrivateLayout>
                  </RequiredAuth>
                ) : (
                  <DefaultLayoutPublic>
                    <Homepage />
                  </DefaultLayoutPublic>
                  // <PrivateLayout>
                  //   <TaskPage />
                  // </PrivateLayout>
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
                <PrivateLayout>
                  <ContactPage />
                </PrivateLayout>
              </RequiredAuth>
            }
          />
          <Route
            path="task"
            element={
              <RequiredAuth>
                <PrivateLayout>
                  <TaskPage />
                </PrivateLayout>
              </RequiredAuth>
            }
          />
          <Route
            path="note"
            element={
              <RequiredAuth>
                <PrivateLayout>
                  <NotePage />
                </PrivateLayout>
              </RequiredAuth>
            }
          />
          <Route
            path="setting"
            element={
              <RequiredAuth>
                <PrivateLayout>
                  <SettingPage />
                </PrivateLayout>
              </RequiredAuth>
            }
          />
          <Route
            path="schedule"
            element={
              <RequiredAuth>
                <PrivateLayout>
                  <SchedulePage />
                </PrivateLayout>
              </RequiredAuth>
            }
          />
          <Route
            path="meal"
            element={
              <RequiredAuth>
                <PrivateLayout>
                  <MealPage />
                </PrivateLayout>
              </RequiredAuth>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
