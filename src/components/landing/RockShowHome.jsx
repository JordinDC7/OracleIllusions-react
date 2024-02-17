import React from "react";

import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import "../../css/RockShowHome.css";

function RockShowHome() {
  const navigate = useNavigate();

  const goToShopPage = () => {
    navigate("/RockShop");
  };

  return (
    <div className="bg-background-image">
      <div className="flex justify-center items-start pt-10 md:items-center md:pt-0 min-h-screen text-center">
        <div className="w-full px-6 py-12 md:max-w-3xl md:mx-auto mt-[-175px]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Discover Oracle Illusions{" "}
            <span className="text-purple-500">
              <Typewriter
                words={["Rocks", "Gems", "& More"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-200">
            Step into the world of pristine natural beauty. Shop our collection
            and find your perfect gem today.
          </p>
          <button
            onClick={goToShopPage}
            className="mt-8 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg text-sm md:text-base lg:text-lg transition-colors duration-300"
          >
            Browse Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default RockShowHome;
