import { React, useEffect, useState } from "react";
import MapRocks from "./MapRocks";
import rockShowService from "../../service/shop";
import { toast } from "react-toastify";
import "../../css/RockShowHome.css";

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
      <MapRocks rockState={rockState} />
    </div>
  );
}

export default FlexLayout;
