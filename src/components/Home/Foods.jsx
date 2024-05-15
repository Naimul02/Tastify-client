import { useEffect, useState } from "react";
import Food from "./Food/Food";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
const Foods = () => {
  const [foods, setFoods] = useState([]);

  console.log(foods);
  useEffect(() => {
    fetch("https://assignment-11-server-steel-pi.vercel.app/foodsAll")
      .then((res) => res.json())
      .then((data) => {
        const sorts = data?.sort((a, b) => b.count - a.count);
        setFoods(sorts);
      });
  }, []);
  return (
    <div className="mt-20 max-w-6xl  mx-auto">
      <div className="max-w-[700px] mx-auto text-center mb-6">
        <h1 className="text-4xl font-bold">Top Foods</h1>
        <p className="text-lg mt-3">
          Food for a Healthy Lifestyle — Here Are Five Reasons Why Eating More
          Plants Can Be Beneficial for Your Health.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods?.slice(0, 6).map((food) => (
          <Food food={food} key={food._id}></Food>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/allFoods">
          <button className="btn bg-teal-950 rounded-2xl hover:bg-teal-800 text-lg font-semibold px-10 text-white text-center">
            See All <MdArrowForwardIos className="text-2xl ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Foods;
