import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
    });
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="uber-logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-base placeholder:text-sm"
              type="text"
              placeholder="First Name"
            />{" "}
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full
        text-lg placeholder:text-base"
          >
            Login
          </button>
        </form>
        <p className=" text-center">
          Already have a Account?{" "}
          <Link to={"/login"} className=" text-blue-600">
            Login here
          </Link>{" "}
        </p>
      </div>
      <div>
        <p className="text-[12px] text-center leading-tight">
          By proceeding, you consent to get calls, whatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.{" "}
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
