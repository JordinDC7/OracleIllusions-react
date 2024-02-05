import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top background-image">
        <div></div>
        <a className="navbar-brand navbar-text " href="/">
          Rock Show
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
