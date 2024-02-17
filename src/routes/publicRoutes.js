import { lazy } from "react";
import Error404Page from "../components/response/Error404Page.jsx";

const Landing = lazy(() => import("../components/landing/RockShowHome.jsx"));
const Login = lazy(() => import("../components/users/Login.jsx"));
// const LogIn = lazy(() => import("../components/users/LogIn.jsx"))
// const RockShop = lazy(() => import("../components/shop/RockShop.jsx"))

const routes = [
  {
    path: "/",
    name: "Landing",
    exact: true,
    element: Landing,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    element: Login,
    roles: [],
    isAnonymous: true,
  },

  // {
  //   path: "/login",
  //   name: "Log-In",
  //   exact: true,
  //   element: LogIn,
  //   roles: [],
  //   isAnonymous: true,
  // },
];

const errorRoutes = [
  {
    path: "*",
    element: Error404Page,
  },
];
var allRoutes = [...routes, ...errorRoutes];

export default allRoutes;
