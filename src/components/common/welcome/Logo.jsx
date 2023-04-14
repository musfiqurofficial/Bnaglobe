import React from "react";
import logo from "../../../assets/BNGLOBAL Company Logo 1.14.2023.jpg";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Globe from "./Erth.json";
import Globe2 from "./Globe.json";
import Globe3 from "./globe3.json";
import "../../../App.css";

const Logo = () => {
  return (
    <Link to="/home">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl h-screen flex flex-col justify-center items-center ">
        <img className="fade-in" src={logo} alt="" />
        <div className="absolute left-[43%] flex justify-center items-center fade-in">
          <h1 className="text-8xl font-bold logo-font text-[#666181] -mr-9">BNGL</h1>
          <Lottie className="w-52" animationData={Globe3} loop={true} />
          <h1 className="text-8xl font-bold logo-font text-[#666181] -ml-9">BAL</h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
