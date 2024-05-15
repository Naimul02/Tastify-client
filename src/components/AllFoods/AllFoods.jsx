import { useLoaderData } from "react-router-dom";
import Food from "../Home/Food/Food";
import { useState } from "react";
import AllFood from "./AllFood";
import { Helmet } from "react-helmet";

const AllFoods = () => {
  const allFoods = useLoaderData();

  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tastify || AllFoods</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="h-[400px] bg-[url('https://www.desktopbackground.org/p/2015/10/11/1024693_1-restaurant-hd-wallpapers_1920x1200_h.jpg')] bg-no-repeat bg-cover text-white mb-20">
        <div className="flex items-center h-full justify-center bg-gradient-to-b from-[#151515] to-[rgba(21 , 21, 21 , 0)] ">
          <div>
            {/* all food */}
            <h1 className="text-5xl font-bold text-center">All Food</h1>
            <p className="text-xl  text-center">
              Home || <span className="text-orange-600"></span>All Foods
            </p>
          </div>
        </div>
      </div>

      <div className="bg-base-200  py-10  mb-6 flex justify-center">
        <div>
          <h2 className="text-3xl font-bold mb-1 text-red-600">
            Search <span className="text-orange-600">Food</span>
          </h2>
          <input
            type="text"
            placeholder="Search Foods"
            className="input input-bordered lg:w-[500px] border mx-auto"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-20">
        {allFoods
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.food_name.toLowerCase().includes(search);
          })
          .map((food) => (
            <AllFood food={food} key={food._id}></AllFood>
          ))}
      </div>
    </div>
  );
};

export default AllFoods;
