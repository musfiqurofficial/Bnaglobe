import React from "react";
import logo from "../../../assets/BNGLOBAL Company Logo 1.14.2023.jpg";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Globe3 from "./globe3.json";
import "../../../App.css";

const Logo = () => {
  
  return (
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl h-screen flex flex-col justify-center items-center ">
        <img className="fade-in" src={logo} alt="" />
        <div className="absolute lg:left-[42.5%] md:left-[33%] left-[31%] flex justify-center items-center fade-in">
          <h1 className="lg:text-8xl md:text-7xl text-4xl font-bold logo-font text-[#666181] lg:-mr-12 -mr-5 md:-mr-10">
            BNGL
          </h1>
          <Link to="/home">
          <Lottie className="lg:w-56 md:w-44 w-24" animationData={Globe3} loop={true} />
          </Link>
          <h1 className="lg:text-8xl md:text-7xl text-4xl font-bold logo-font text-[#666181] lg:-ml-12 -ml-5 md:-ml-10">
            BAL
          </h1>
        </div>
      </div>
  );
};

export default Logo;
