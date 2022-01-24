import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [animeName, setAnimeName] = useState("");
  const [factId, setFactId] = useState("");
  return (
    <div className="relative text-slate-400">
      <input
        className="w-full lg:h-10 h-12 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline font-pacifico"
        type="text"
        placeholder="Search Anime for facts..."
        value={animeName}
        onChange={(e) => setAnimeName(e.target.value)}
      />
      <input
        className="w-full lg:h-10 h-12 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline font-pacifico"
        type="text"
        placeholder="Enter the fact id..."
        value={factId}
        onChange={(e) => setFactId(e.target.value)}
      />
      <Link
        to={`/${animeName}/${factId ? factId : 0}`}
        className="font-merriweather absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-blue-400 rounded-r-lg hover:bg-blue-600"
      >
        Click
      </Link>
    </div>
  );
};

export default SearchBox;
