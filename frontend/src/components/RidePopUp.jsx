import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="text-center w-full top-0 right-0 p-1 absolute"
        onClick={() => {
          props.setRidePopUpPannel(false);
        }}
      >
        <i className="text-3xl ri-arrow-left-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5"> New Ride Available !</h3>
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

      <div className="w-full flex mt-5 justify-center items-center gap-4">
        <button
          onClick={() => {
            props.setRidePopUpPannel(false);
          }}
          className="bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg text-center"
        >
          Ignore
        </button>
        <button
          onClick={() => {
            props.setConfirmRidePopUpPannel(true);
          }}
          className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg text-center"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
