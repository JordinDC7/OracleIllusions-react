import { React } from "react";
import NavBar from "../landing/NavBar";
import "../../css/rockshop.css";
import Footer from "../landing/Footer";
import FlexLayout from "./FlexLayout";

function RockShop() {
  return (
    <div>
      <title>Rock Show Shop</title>
      <NavBar></NavBar> {/* Assume NavBar has a fixed height */}
      {/* Top Section */}
      <div className="min-vh-100 align-items-center justify-content-center text-center top-section">
        <div className="flexLayout">
          <FlexLayout></FlexLayout>
        </div>
      </div>
      {/* Footer should be at the bottom without absolute positioning */}
      <Footer></Footer>
    </div>
  );
}

export default RockShop;
