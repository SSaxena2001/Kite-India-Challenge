import React from "react";

const Fact = ({ fact }) => {
  return (
    <div className="md:w-5/6 p-4 text-gray-800 bg-white rounded-lg shadow-lg mx-2">
      <div className="mb-2">
        <div className="h-3 text-4xl text-left text-green-500">“</div>
        <p className="font-pacifico px-4 lg:text-xl text-center text-orange-500 md:text-2xl text-3xl">
          {fact}
        </p>
        <div className="h-3 text-4xl text-right text-blue-500">”</div>
      </div>
    </div>
  );
};

export default Fact;
