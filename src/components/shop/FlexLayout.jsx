import { React, useEffect, useState } from "react";
import MapRocks from "./MapRocks";
import rockShowService from "../../service/shop";
import { toast } from "react-toastify";

function FlexLayout() {
  const [rockState, setRockState] = useState([]);
  const [hasShownToast, setHasShownToast] = useState(false);

  useEffect(() => {
    rockShowService.getAll().then(onGetRocksSuccess).catch(onGetRocksError);
  }, []);

  const onGetRocksSuccess = (response) => {
    const data = response.data.items;
    if (!hasShownToast) {
      toast.success("Successfully retrieved rocks list!");
      setHasShownToast(true);
    }
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
