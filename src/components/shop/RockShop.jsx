import { React, useEffect, useState } from "react";
import rockShowService from "../../service/shop";
import NavBar from "../landing/NavBar";
import "../../css/rockshop.css";
import Footer from "../landing/Footer";
import FlexLayout from "./FlexLayout";

function RockShop() {
  const [rockState, setRockState] = useState([]);
  // console.log("This is rockState:", rockState);

  useEffect(() => {
    console.log("Use Effect for XHR firing.");
    rockShowService.getAll().then(onGetRocksSuccess).catch(onGetRocksError);
  }, []);

  const onGetRocksSuccess = (response) => {
    console.log(response);
    const data = response.data.items;

    setRockState((prevState) => {
      const oldState = { ...prevState };
      let newState = oldState;
      newState = { ...data };

      return newState;
    });
  };

  const onGetRocksError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <title>Rock Show Shop</title>
      <NavBar></NavBar>

      {/* Top Section */}
      <div className="vh-100 align-items-center justify-content-center text-center top-section">
        <div className="flexLayout">
          <FlexLayout rockState={rockState}></FlexLayout>
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
