import React from "react";
import { useGetFactsQuery } from "../services";
import { Loader, Card, SearchBox } from "../components";

const Home = () => {
  const { data, isFetching } = useGetFactsQuery();
  if (isFetching) return <Loader />;
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-8 bg-cover overflow-x-hidden">
      <h1 className="font-merriweather text-5xl font-semibold text-center text-transparent bg-clip-text bg-amber-500 mb-2 lg:mb-4 overflow-hidden">
        Anime Facts
      </h1>
      <div className="lg:w-1/3 mx-auto my-3 w-5/6">
        <SearchBox />
      </div>
      <div className="items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-8 bg-cover lg:flex overflow-x-hidden">
        <div className="flex gap-6 justify-center items-center flex-wrap">
          {data.data.map((item) => (
            <Card
              key={item.anime_id}
              name={item.anime_name}
              imgUrl={item.anime_img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
