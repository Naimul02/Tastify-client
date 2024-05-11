import "./Food.css";
const Food = ({ food }) => {
  const { img, food_name, food_category, price } = food;

  return (
    <div className="card h-[280px] rounded-lg relative card-food">
      <figure className="h-full rounded-lg">
        <img
          src={img}
          alt=""
          className="w-full rounded-lg h-full object-cover"
        />
      </figure>
      <div className="card-body absolute card-content hidden text-white  bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 , 0)] h-full space-y-3 rounded-lg">
        <h2 className="card-title text-2xl font-bold">{food_name}</h2>
        <p className="text-xl">Category : {food_category}</p>
        <p className="text-xl">${price}</p>
        <div className="card-actions">
          <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white px-12 text-lg font-semibold rounded-lg border-none">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
