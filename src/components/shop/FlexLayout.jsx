import { React, useEffect, useState } from "react";
import MapRocks from "./MapRocks";
import rockShowService from "../../service/shop";

function FlexLayout() {
  const [rockState, setRockState] = useState([]);

  useEffect(() => {
    rockShowService.getAll().then(onGetRocksSuccess).catch(onGetRocksError);
  }, []);

  const onGetRocksSuccess = (response) => {
    console.log(response.data.items);
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
      {/* <h3 className="display-4 font-weight-bold landing-text fw-light">
        Welcome to the{" "}
        <span className="fw-bold typewriter-text">
          <Typewriter
            words={["Rock Shop", "Market", "Rock Show"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h3> */}
      <MapRocks rockState={rockState} />
    </div>
  );
}

export default FlexLayout;
