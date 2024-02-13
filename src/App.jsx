import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allRoutes from "./routes/publicRoutes";
import "./App.css";
import "./css/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer></ToastContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {allRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.element />}
              exact={route.exact}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
