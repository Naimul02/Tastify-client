import { Link, useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const food = useLoaderData();
  console.log("foodi : ", food);
  return (
    <div>
      <div className="bg-base-200 py-10">
        <h1 className="text-2xl font-bold text-orange-700 text-center">
          Single Food Page || Food Details
        </h1>
      </div>
      <div className="hero  py-10 max-w-6xl mx-auto">
        <div className="hero-content flex-col gap-12 lg:flex-row">
          <div className="lg:w-[45%]">
            <img
              src={food.img}
              className="rounded-lg shadow-2xl w-full h-[450px]"
            />
          </div>
          <div className="lg:w-[55%]  spacey-y-2">
            <h1 className="text-4xl font-bold">{food.food_name}</h1>
            <p className="text-xl mt-4 font-semibold">
              Category : {food.food_category}
            </p>
            <p className="py-3">
              {food?.description} A refreshing salad made with ripe tomatoes,
              fresh mozzarella cheese, basil leaves, olive oil, and balsamic
              glaze.A refreshing <br /> <br /> salad made with ripe tomatoes,
              fresh mozzarella cheese, basil leaves, olive oil, and balsamic
              glaze.A refreshing salad made with ripe tomatoes, fresh mozzarella
              cheese, basil leaves, olive oil, and balsamic glaze.
            </p>
            <p className="text-xl font-bold">
              Price : <span className="text-orange-600">${food?.price}</span>
            </p>
            <p className="text-lg font-semibold">Made By : {food?.made_by}</p>
            <p className="text-lg font-semibold">
              Country : {food?.food_origin}
            </p>

            <Link to={`/purchase/${food._id}`}>
              <button className="mt-2 btn bg-green-500 hover:bg-green-600 text-white  rounded-xl px-10 text-lg">
                Purchase Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
