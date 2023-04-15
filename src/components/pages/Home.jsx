import React, { useEffect, useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl h-screen flex flex-col justify-center items-center px-10">
        <h1 className="text-3xl sm:text-5xl font-bold fade-in text-center uppercase">
          THE PREMIER CLUB FOR INNOVATORS
        </h1>
        {show && (
          <h1 className="text-2xl text-center uppercase fade-in mt-10">
            Website Coming Soon...
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
