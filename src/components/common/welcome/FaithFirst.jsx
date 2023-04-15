import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FaithFirst = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRedirect(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (redirect) {
    navigate("/bnglobal");
    return null;
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <Link to="/bnglobal">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl sm:text-7xl font-semibold text-center uppercase fade-in text-[#6b6b6b]">
          Faith First
        </h1>
        {show && (
          <h5 className="text-3xl mt-4 sm:mt-8 text-center uppercase fade-in text-[#6b6b6b]">
            Financials Follow
          </h5>
        )}
      </div>
    </Link>
  );
};

export default FaithFirst;
