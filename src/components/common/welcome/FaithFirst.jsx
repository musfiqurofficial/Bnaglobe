import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FaithFirst = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <Link to="/bnglobal">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold uppercase fade-in ">
          Faith First
        </h1>
        {show && <h5 className="text-2xl mt-8 uppercase fade-in ">Financials Follow</h5>}
      </div>
    </Link>
  );
};

export default FaithFirst;
