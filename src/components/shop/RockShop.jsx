import { React } from "react";
import "../../css/rockshop.css";

import FlexLayout from "./FlexLayout";
import "../../css/RockShowHome.css";
function RockShop() {
  return (
    <div>
      <title>Rock Show Shop</title>

      <div className="min-vh-100 align-items-center justify-content-center text-center top-section">
        <div className="flexLayout">
          <FlexLayout></FlexLayout>
        </div>
      </div>
    </div>
  );
}

export default RockShop;
