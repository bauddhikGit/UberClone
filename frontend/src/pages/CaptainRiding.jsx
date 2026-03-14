import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
  const [finishRidePannel, setFinishRidePannel] = useState(false);
  const finishRidePannelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePannel) {
        gsap.to(finishRidePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap?.to(finishRidePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePannel]
  );

  return (
    <div className="h-screen relative">
      <div className="flex items-center justify-between w-screen fixed p-6 top-0">
        <img
          className=" w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        />
        <Link
          to={"/captain-home"}
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber-map"
        />
      </div>

      <div
        className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400"
        onClick={() => {
          setFinishRidePannel(true);
        }}
      >
        <h5
          className=" p-1 absolute text-center w-[95%] top-0 right-0"
          onClick={() => {}}
        >
          <i className="text-3xl ri-arrow-left-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg text-center">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePannelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <FinishRide setFinishRidePannel={setFinishRidePannel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
