import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPannel, setRidePopUpPannel] = useState(true);
  const [confirmRidePopUpPannel, setConfirmRidePopUpPannel] = useState(false);

  const ridePopUpPannelRef = useRef(null);
  const confirmRidePopUpPannelRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopUpPannel) {
        gsap.to(ridePopUpPannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap?.to(ridePopUpPannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPannel]
  );

  useGSAP(
    function () {
      if (confirmRidePopUpPannel) {
        gsap.to(confirmRidePopUpPannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap?.to(confirmRidePopUpPannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUpPannel]
  );

  return (
    <div className="h-screen">
      <div className="flex items-center justify-between w-screen fixed p-6 top-0">
        <img
          className=" w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        />
        <Link
          to={"/home"}
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber-map"
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopUpPannelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <RidePopUp
          setRidePopUpPannel={setRidePopUpPannel}
          setConfirmRidePopUpPannel={setConfirmRidePopUpPannel}
        />
      </div>
      <div
        ref={confirmRidePopUpPannelRef}
        className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp
          setConfirmRidePopUpPannel={setConfirmRidePopUpPannel}
          setRidePopUpPannel={setRidePopUpPannel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
