import React from "react";
import { useState } from "react";
import { MdCelebration } from "react-icons/md";
import API from "../api/index";

const Homepage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState();

  const handleClick = () => {
    setShowMessage(true);
    API.getName().then((response) => setName(response.data));
  };

  return (
    <div className="h-screen bg-primary flex flex-col justify-center items-center">
      {showMessage ? (
        <div className="h-screen bg-primary flex justify-center items-center">
          <div className="py-7 px-7 sm:px-20 rounded-xl bg-white shadow-xl">
            <div className="flex justify-center items-center gap-4">
              <MdCelebration
                size={29}
                className="text-green-600"
              />
              <h3 className="text-xl leading-6 font-bold text-gray-900 bg-gradient-to-r from-teal-600 via-indigo-600 to-cyan-600 inline-block text-transparent bg-clip-text">
                Congratulations !
              </h3>
            </div>
            <p className="flex justify-center items-center font-bold text-2xl py-3 bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 text-transparent bg-clip-text">
              {name?.name}
            </p>
            <p className="fomt-semibold text-md text-gray-500 pb-5">
              Thanks for completing the Course.
            </p>
          </div>
        </div>
      ) : (
        <div
          className="h-28 sm:px-20 flex justify-center items-center text-2xl cursor-pointer tracking-wide text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => handleClick()}>
          Complete Course
        </div>
      )}
    </div>
  );
};

export default Homepage;
