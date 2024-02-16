import { lazy } from "react"
import Error404Page from "../components/response/Error404Page.jsx"

// const Landing = lazy(() => import("../components/landing/RockShowHome.jsx"))
const RockShop = lazy(() => import("../components/shop/RockShop.jsx"))

const securedRoutes = [
   {
    path: "/RockShop",
    name: "RockShop",
    exact: true,
    element: RockShop,
    roles: ["User"],
    isAnonymous: false,
  },
];


const errorRoutes = [
    {
      path: "*",
      element: Error404Page
    }
  ];
    var allRoutes = [...securedRoutes, ...errorRoutes]

    export default allRoutes;