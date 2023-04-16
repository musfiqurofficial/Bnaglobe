import React, { useEffect, useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl h-screen flex flex-col justify-center items-center px-10 relative">
        <h1 className="text-3xl sm:text-5xl font-bold fade-in text-center uppercase">
          THE PREMIER CLUB FOR INNOVATORS
        </h1>
        {show && (
          <h1 className="absolute top-[50%] text-2xl text-center fade-in mt-12">
            Website Coming Soon...
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
