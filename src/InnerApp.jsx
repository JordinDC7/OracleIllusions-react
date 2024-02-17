import React, { Suspense, useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Navigate } from "react-router-dom";

import publicRoutes from "./routes/publicRoutes";
import securedRoutes from "./routes/securedRoutes";
import "./App.css";
import "./css/tailwind.css";
import { getCurrentUser, login } from "./service/usersService";
import {
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
} from "./routes/index";

const InnerApp = ({ setCurrentUser, currentUser }) => {
  const DEFAULT_USER = {
    email: "",
    role: "",
    id: 0,
    firstName: "",
    lastName: "",
    mi: "",
    avatarUrl: "",
    isLoggedIn: false,
  };

  // let [currentUser, setCurrentUser] = useState(() => {
  //   return DEFAULT_USER;
  // });
  let isLoggedIn = currentUser.isLoggedIn;
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    // if (currentUser.isLoggedIn === false) {
    //   login(payload).then(onLoginSuccess).catch(onLoginError);
    // }
    getCurrentUser().then(onGetUserSuccess).catch(onGetUserFailed);
  }, [pathname]);

  const onGetUserSuccess = (response) => {
    const gotUser = response.data.item;
    console.log("CurrentUser Logged In:", gotUser);

    if (currentUser === gotUser) {
      return;
    } else {
      setCurrentUser((prevState) => ({
        ...prevState,
        ...gotUser,
        isLoggedIn: true,
      }));

      if (!gotUser.avatarUrl && gotUser.firstName) {
        navigate("/user/profilewizard");
      }
    }
  };

  const onGetUserFailed = () => {
    setCurrentUser((prevState) => {
      let resetUser = { ...prevState };
      resetUser = DEFAULT_USER;
      return resetUser;
    });
  };

  const [currentPath, setCurrentPath] = useState({
    isPublic: false,
    isSecured: false,
    isUnknown: false,
  });

  const currentPathCheck = (pp) => {
    let ppPath = pp?.path?.split("/").filter((el) => el !== "");
    let pathNameCheck = pathname.split("/").filter((el) => el !== "");
    let result = false;
    if (ppPath?.length === pathNameCheck.length) {
      if (pathNameCheck.length === 0) {
        result = true;
      } else {
        for (let a = 0; a < pathNameCheck.length; a++) {
          if (pathNameCheck[a] !== ppPath[a]) {
            if (
              ppPath[a].startsWith(":") &&
              pathNameCheck[a].match(/^[0-9]+$/)
            ) {
              result = true;
            } else {
              return false;
            }
          } else {
            result = true;
          }
        }
      }
    }
    return result;
  };

  useEffect(() => {
    if (publicProtectedFlattenRoutes.some((pp) => currentPathCheck(pp))) {
      if (!currentPath.isPublic) {
        setCurrentPath(() => {
          return { isSecured: false, isPublic: true };
        });
      }
    } else if (authProtectedFlattenRoutes.some((pp) => currentPathCheck(pp))) {
      if (!currentPath.isSecured) {
        setCurrentPath(() => {
          return { isPublic: false, isSecured: true };
        });
      }
    } else if (!currentPath.isUnknown) {
      setCurrentPath(() => {
        return { isUnknown: true };
      });
    }
  }, [pathname, currentPath]);

  const hasAuthorization = (route, isLoggedIn) => {
    if (!route.roles) {
      return false;
    } else {
      return route.roles.some((role) => currentUser.role.includes(role));
    }
  };

  const renderRoutes = (routes, isLoggedIn) => {
    return routes.map((route, index) => {
      return hasAuthorization(route, isLoggedIn) ? (
        <Route key={index} path={route.path} element={<route.element />} />
      ) : route.isAnonymous ? (
        <Route key={index} path={route.path} element={<route.element />} />
      ) : (
        <Route key={index} path="*" element={<Navigate to="/login" />} />
      );
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {renderRoutes(publicRoutes, isLoggedIn)}
        {renderRoutes(securedRoutes, isLoggedIn)}
      </Routes>
    </Suspense>
  );
};

export default InnerApp;
