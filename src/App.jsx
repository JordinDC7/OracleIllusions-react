import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import InnerApp from "./InnerApp";
import { ToastProvider } from "./components/Toast/ToastProvider.jsx";
import "./App.css";
import "./css/tailwind.css";
import NavBar from "./components/landing/NavBar.jsx";
import Footer from "./components/landing/Footer.jsx";
import "./css/RockShowHome.css";
const App = () => {
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
  const [currentUser, setCurrentUser] = useState(() => {
    return DEFAULT_USER;
  });

  return (
    <ToastProvider>
      <Router>
        <NavBar currentUser={currentUser} />
        <InnerApp currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Footer setCurrentUser={setCurrentUser} />
      </Router>
    </ToastProvider>
  );
};

export default App;
