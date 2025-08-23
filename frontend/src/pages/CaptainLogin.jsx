import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const { updateCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };
    const reponse = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );

    if (reponse.status === 200) {
      const data = reponse.data;
      updateCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <div className="flex items-center w-full gap-2">
          <img
            className="w-16 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
            alt="uber-logo"
          />
          <img
            className="w-8 mb-10 h-8"
            alt="uber-logo"
            src="data:image/png;base64,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"
          />
        </div>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full
        text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full
        text-lg placeholder:text-base"
            required
            type="password"
            placeholder="password "
          />
          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full
        text-lg placeholder:text-base"
          >
            Login
          </button>
        </form>
        <p className=" text-center">
          New here?{" "}
          <Link to={"/captain-signup"} className=" text-blue-600">
            Register as a Captain{" "}
          </Link>{" "}
        </p>
      </div>
      <div>
        <Link
          to={"/login"}
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full
        text-lg placeholder:text-base"
        >
          Sign as User{" "}
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
