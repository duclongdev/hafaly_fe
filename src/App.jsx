import React, { useEffect, startTransition, useState } from "react";

import { Routes, Route,useLocation } from "react-router-dom";
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
import 'aos/dist/aos.css';

import AOS from 'aos';
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
const SettingPage = lazyLoad(import("./pages/setting/index"));
const NotePage = lazyLoad(import("./pages/Note/Note"));
const SchedulePage = lazyLoad(import("./pages/Schedule/Schedule"));
const MealPage = lazyLoad(import("./pages/meal"));
const FamilyManagement = lazyLoad(import("./pages/FamilyManagement/FamilyManagement"));

function App() {
  registerLicense(
    "ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Vd0RjUHtacXRXR2Ve"
  );
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
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
          <Route
            path="members"
            element={
              <RequiredAuth>
                <PrivateLayout>
                  <FamilyManagement />
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
