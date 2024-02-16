import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import InnerApp from "./InnerApp";

import "./App.css";
import "./css/tailwind.css";

const App = () => {
  return (
    <Router>
      <InnerApp />
    </Router>
  );
};

export default App;
