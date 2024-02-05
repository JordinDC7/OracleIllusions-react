import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 mt-5 pt-4">
            Welcome to the Rock Show Website
          </h1>
          <p className="lead">
            Large component for calling extra attention to featured content or
            information.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
