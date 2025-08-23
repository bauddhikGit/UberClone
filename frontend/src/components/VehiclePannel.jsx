import React from "react";

const VehiclePannel = (props) => {
  return (
    <div>
      <h5
        className="text-center flex top-0 justify-end"
        onClick={() => {
          props.setVehiclePannel(false);
        }}
      >
        <i className="text-3xl ri-arrow-left-line"></i>
      </h5>
      <h3 className=" text-2xl font-semibold mb-5"> Choose a vehicle</h3>
      {/* car */}
      <div
        className="flex border-2 active:border-black  mb-2 items-center p-3 justify-between w-full rounded-xl"
        onClick={() => {
          props.setConfirmRidePannel(true);
        }}
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-sm">
            UberGo{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordabel , compact rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">₹198.3</h2>
      </div>
      {/* bike */}
      <div
        className="flex border-2 active:border-black  mb-2 items-center p-3 justify-between w-full rounded-xl"
        onClick={() => {
          props.setConfirmRidePannel(true);
        }}
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-sm">
            Moto{" "}
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordabel , motorcycle rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">₹68.3</h2>
      </div>
      {/* auto */}
      <div
        className="flex border-2 active:border-black  mb-2 items-center p-3 justify-between w-full rounded-xl"
        onClick={() => {
          props.setConfirmRidePannel(true);
        }}
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-sm">
            Uber Auto{" "}
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordabel , auto rides
          </p>
        </div>
        <h2 className="text-2xl font-semibold">₹118.3</h2>
      </div>
    </div>
  );
};

export default VehiclePannel;
