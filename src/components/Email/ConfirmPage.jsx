import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { confirmUser } from "services/usersService";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Lottie from "lottie-react";
import loading from "assets/img/animated-icons/loading.json";

function ConfirmPage() {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  const tokenId = queryParameters.get("tokenId");
  let ignore = false;
  useEffect(() => {
    if (ignore === false) {
      confirmUser(tokenId).then(confirmSuccess).catch(confirmFailed);
    }

    return () => {
      ignore = true;
    };
  }, []);

  const confirmSuccess = () => {
    toastr.success("Please log in.", "Confirmation Successful!");
    navigate("/login");
  };

  const confirmFailed = () => {
    toastr.error(
      "Confirmation Failed!",
      "Please press link in inbox again, or have us send you a new link."
    );
    navigate("/login");
  };

  return (
    <div className="card container-fluid justify-content-center fixed-top vh-100 vw-100">
      <Lottie animationData={loading} loop={true} style={{ height: "220px" }} />
    </div>
  );
}

export default ConfirmPage;
