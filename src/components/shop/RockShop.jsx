import { React } from "react";
import NavBar from "../landing/NavBar";
import "../../css/rockshop.css";
import Footer from "../landing/Footer";
import FlexLayout from "./FlexLayout";

function RockShop() {
  return (
    <div>
      <title>Rock Show Shop</title>
      <NavBar></NavBar>

      {/* Top Section */}
      <div className="vh-100 align-items-center justify-content-center text-center top-section">
        <div className="flexLayout">
          <FlexLayout></FlexLayout>
        </div>
      </div>

      {/* Center Section */}
      <div className="vh-100 d-flex align-items-center justify-content-center text-center middle-section">
        {/* Optional content for the center section */}
      </div>

      {/* Bottom Section */}
      <div className="vh-100 d-flex align-items-center justify-content-center text-center bottom-section main-wrapper">
        <div>{/* Optional content for the bottom section */}</div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default RockShop;
