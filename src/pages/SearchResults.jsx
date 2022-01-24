import React from "react";
import { useGetSpecificFactQuery } from "../services";
import { useParams } from "react-router-dom";
import { Fact, Loader, Error } from "../components";
import { Link } from "react-router-dom";

const nameRevert = (name) => {
  return name
    .split(" ")
    .map((ele) => ele.toLowerCase())
    .join("_");
};

const SearchResults = () => {
  const { animeName, factId } = useParams();
  const { data, isFetching, error } = useGetSpecificFactQuery({
    animeName: nameRevert(animeName),
    factId: factId,
  });
  if (isFetching) return <Loader />;
  if (error) return <Error error={error.data.data} />;
  return (
    <div className="w-screen h-screen text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-8 bg-cover overflow-x-hidden">
      <div className="w-screen flex flex-col items-center justify-center h-screen">
        <h1 className="font-merriweather text-5xl font-semibold text-center text-transparent bg-clip-text bg-amber-500 mb-2 lg:mb-4 overflow-hidden">
          {animeName}
        </h1>
        <Fact fact={data.data.fact} />
        <Link
          to="/"
          className="font-merriweather flex items-center px-4 py-2 mt-4 font-bold text-white bg-blue-400 rounded-lg hover:bg-blue-600"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default SearchResults;
