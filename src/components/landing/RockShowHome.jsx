import { React } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import "../../css/rockshowhome.css";

function RockShowHome() {
  const navigate = useNavigate();

  const goToShopPage = () => {
    navigate("/RockShop");
  };

  return (
    <div className="container top-section">
      <NavBar />

      {/* Top Section */}
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Discover OracleIllusions{" "}
            <span className="text-purple-600">
              <Typewriter
                words={["Rocks", "Gems", "& More"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={110}
                deleteSpeed={110}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mt-4 text-lg text-white-50">
            Step into the world of pristine natural beauty. Shop our collection
            and find your perfect gem today.
          </p>
          <button
            onClick={goToShopPage}
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg"
          >
            Browse Shop
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RockShowHome;
