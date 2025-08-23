import React from "react";
// 5:45
const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        className="text-center w-full top-0 right-0"
        onClick={() => {
          props.setConfirmRidePannel(false);
        }}
      >
        <i className="text-3xl ri-arrow-left-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5"> Confirm your ride</h3>
      <div className="flex gap-2 flex-col justify-between  items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
        />
      </div>
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

      <button
        onClick={() => {
          props?.setVehicleFound(true);
          props?.setConfirmRidePannel(false);
        }}
        className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg text-center"
      >
        Confirm
      </button>
    </div>
  );
};

export default ConfirmRide;
