import React from "react";
import { Link } from "react-router-dom";

const Error = ({ error }) => {
  return (
    <div class="flex flex-col items-center justify-center w-screen h-screen bg-indigo-500">
      <div className="flex items-center justify-center">
        <p class="text-4xl text-white md:text-5xl lg:text-6xl mx-2">404</p>
        <p class="font-merriweather text-1xl text-white md:text-2xl lg:text-3xl">
          Error: {error}
        </p>
      </div>
      <Link
        to="/"
        className="font-merriweather flex items-center px-4 py-2 mt-4 font-bold text-white bg-blue-400 rounded-lg hover:bg-blue-600"
      >
        Go Back
      </Link>
    </div>
  );
};

export default Error;
