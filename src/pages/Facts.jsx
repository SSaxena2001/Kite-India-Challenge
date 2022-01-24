import React from "react";
import { useParams } from "react-router-dom";
import { useGetAnimeFactsQuery } from "../services";
import { Loader, Fact, Error } from "../components";

const nameCorrection = (name) => {
  return name
    .split("_")
    .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
    .join(" ");
};

const Facts = () => {
  const { animeName } = useParams();
  const { data: facts, isFetching, error } = useGetAnimeFactsQuery(animeName);
  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <Error error={error.data.data} />;
  } else
    return (
      <div className="w-screen h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-8 bg-cover overflow-x-hidden">
        <div className="text-center align-middle flex flex-col items-center justify-center mb-6">
          <h1 className="font-merriweather text-5xl font-semibold text-center text-transparent bg-clip-text bg-amber-500 mb-2 lg:mb-4 overflow-hidden">
            {nameCorrection(animeName)}
          </h1>
          <img
            src={facts.img}
            alt={animeName}
            className="w-[300px] h-[400px] shadow-lg rounded-lg lg:w-[400px] lg:h-[500px] text-center"
          />
        </div>
        <div className="w-full text-center flex flex-col items-center justify-center gap-3">
          {facts.data.map((fact) => (
            <Fact key={fact.fact_id} fact={fact.fact} />
          ))}
        </div>
      </div>
    );
};

export default Facts;
