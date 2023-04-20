import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Globe3 from "./globe3.json";

const FaithFirst = () => {
  const [showB, setShowB] = useState(false);
  const [showGlobal, setShowGlobal] = useState(false);
  const [showN, setShowN] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRedirect(true);
    }, 5300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (redirect) {
    navigate("/bnglobal");
    return null;
  }

  useEffect(() => {
    const timeoutB = setTimeout(() => {
      setShowB(true);
    }, 0);

    const timeoutGlobal = setTimeout(() => {
      setShowGlobal(true);
    }, 3200);

    const timeoutN = setTimeout(() => {
      setShowN(true);
    }, 1200);

    return () => {
      clearTimeout(timeoutB);
      clearTimeout(timeoutGlobal);
      clearTimeout(timeoutN);
    };
  }, []);

  return (
    <Link to="/bnglobal">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl h-screen flex flex-col justify-center items-center relative">
        {showB && (
          <h5 className="absolute bottom-[50%] text-8xl font-serif sm:text-[120px] drop-shadow-lg font-bold mb-14 sm:mb-16 text-center uppercase fade-in text-[#6b6b6b]">
            B
          </h5>
        )}
        {showGlobal && (
          <div className="flex justify-center items-center">
            <h1 className="text-6xl sm:text-7xl font-semibold text-center uppercase fade-in text-[#6b6b6b] -mr-6 sm:-mr-7">
              Gl
            </h1>
            <Lottie
              className="lg:w-32 fade-in md:w-44 w-28"
              animationData={Globe3}
              loop={true}
            />
            <h1 className="text-6xl sm:text-7xl font-semibold text-center uppercase fade-in text-[#6b6b6b] -ml-6 sm:-ml-7">
              bal
            </h1>
          </div>
        )}
        {showN && (
          <h5 className="absolute top-[50%] text-8xl font-serif sm:text-[120px] drop-shadow-lg font-bold mt-14 sm:mt-16 text-center uppercase fade-in text-[#6b6b6b]">
            N
          </h5>
        )}
      </div>
    </Link>
  );
};

export default FaithFirst;
