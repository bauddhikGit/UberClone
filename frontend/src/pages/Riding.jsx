import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className=" fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full"
      >
        <i className="ri-home-4-line text-lg font-medium"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber-map"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between ">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Ramesh </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP00 AB 2171</h4>
            <p className=" text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="w-full mt-5">
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
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg text-center">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
