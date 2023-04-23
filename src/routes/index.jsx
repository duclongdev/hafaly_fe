import Homepage from "../pages/Homepage/Homepage";
import CreateFamily from "../pages/CreateFamily/CreateFamily";
import LoginPage from "../pages/Login-SignUp/Login";
import FamilyPage from "../pages/Family/FamilyPage";

const publicRoutes = [
  { path: "/", component: Homepage },
  { path: "/login", component: LoginPage },
];

const privateRoutes = [
  { path: "/createFamily", component: CreateFamily },
  {
    path: "/family",
    component: FamilyPage,
  },
];

export { publicRoutes, privateRoutes };
