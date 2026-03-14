import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h5
        className="text-center w-full top-0 right-0"
        onClick={() => {
          props.setRidePopUpPannel(false);
        }}
      >
        <i className="text-3xl ri-arrow-left-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        {" "}
        Confirm this Ride to Start
      </h3>
      <div className=" flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
          />
          <h2 className=" text-lg font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 flex-col justify-between  items-center"></div>
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-400">
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya Talab , Ahemadabad
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-400">
          <i className="text-lg ri-map-pin-user-line"></i>
          <div className="">
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya Talab , Ahemadabad
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 ">
          <i className="text-lg ri-money-rupee-circle-line"></i>
          <div>
            <h3 className="text-lg font-medium">₹198.20</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash</p>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            onChange={(e) => setOtp(e.target.value)}
            value={otp}
            type="text"
            placeholder="Enter OTP"
            className="bg-[#eee] px-6 py-2 font-mono text-base rounded-lg w-full mt-3"
          />
          <Link
            to={"/captain-riding"}
            onClick={() => {}}
            className="w-full text-lg mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg text-center"
          >
            Confirm
          </Link>
          <button
            onClick={() => {
              props.setConfirmRidePopUpPannel(false);
              props.setRidePopUpPannel(false);
            }}
            className="w-full mt-1 text-lg bg-red-500 text-white font-semibold p-3 rounded-lg text-center"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
