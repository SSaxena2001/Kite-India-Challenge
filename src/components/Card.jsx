import React from "react";
import { Link } from "react-router-dom";

const nameCorrection = (name) => {
  return name
    .split("_")
    .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
    .join(" ");
};

const Card = ({ name, imgUrl }) => {
  return (
    <div className="text-center align-middle cursor-pointer">
      <Link to={`/${name}`}>
        <img
          src={imgUrl}
          alt={name}
          className="w-[300px] h-[350px] shadow-lg rounded-lg lg:w-[400px] lg:h-[450px] hover:brightness-75"
        />
        <h1 className="font-merriweather text-4xl break-words font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 mt-2 lg:text-2xl lg:w-full lg:h-8 w-[300px] h-[75px]">
          {nameCorrection(name)}
        </h1>
      </Link>
    </div>
  );
};

export default Card;
