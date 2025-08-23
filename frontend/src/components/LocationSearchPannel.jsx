import React from "react";

const LocationSearchPannel = (props) => {
  const locations = [
    "123 Main St, New York, NY 10001",
    "456 Park Ave, Los Angeles, CA 90012",
    "789 Market St, San Francisco, CA 94103",
    "321 Michigan Ave, Chicago, IL 60601",
    "555 Peachtree St, Atlanta, GA 30308",
  ];
  return (
    <div>
      {locations.map((location, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              props?.setVehiclePannel(true);
              props?.setPanelOpen(false);
            }}
            className="flex border-2 p-3 border-gray-50 active:border-black rounded-xl  items-center gap-4 justify-start my-2"
          >
            <h2 className=" bg-[#eee] px-2 py-1 rounded-full ">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className=" font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPannel;
