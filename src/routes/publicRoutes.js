import { lazy } from "react"
import Error404Page from "../components/response/Error404Page.jsx"

const Landing = lazy(() => import("../components/landing/RockShowHome.jsx"))
const RockShop = lazy(() => import("../components/shop/RockShop.jsx"))

const routes = [
    {
      path: "/",
      name: "Landing",
      exact: true,
      element: Landing,
      roles: ["Admin"],
      isAnonymous: false,
    }, {
      path: "/rockshop",
      name: "RockShop",
      exact: true,
      element: RockShop,
      roles: ["Admin"],
      isAnonymous: false,
    },
];


const errorRoutes = [
    {
      path: "*",
      element: Error404Page
    }
  ];
    var allRoutes = [...routes, ...errorRoutes]

    export default allRoutes;