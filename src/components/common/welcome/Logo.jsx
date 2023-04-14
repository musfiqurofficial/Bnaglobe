import React, { useState, useEffect } from "react";
import logo from "../../../assets/BNGLOBAL Company Logo 1.14.2023.jpg";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Globe3 from "./globe3.json";
import "../../../App.css";

const Logo = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRedirect(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (redirect) {
    navigate("/home");
    return null;
  }
  return (
    <Link to="/home">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl h-screen flex flex-col justify-center items-center ">
        <img className="fade-in" src={logo} alt="" />
        <div className="absolute left-[43%] flex justify-center items-center fade-in">
          <h1 className="text-8xl font-bold logo-font text-[#666181] -mr-12">
            BNGL
          </h1>
          <Lottie className="w-56" animationData={Globe3} loop={true} />
          <h1 className="text-8xl font-bold logo-font text-[#666181] -ml-12">
            BAL
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
