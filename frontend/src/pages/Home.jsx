import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmZpYyUyMHNpZ25hbHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="uber-logo"
        />
        <div className="bg-white pb-7 p-4">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
          <Link
            to={"/login"}
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-6"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
