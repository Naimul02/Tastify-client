import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Purchase = () => {
  const food = useLoaderData();
  const { user } = useContext(AuthContext);
  const date = new Date();

  const newDate = date.toString().split(" ").slice(0, 5);

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.food.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const date = form.date.value;
    console.log(foodName, price, quantity, buyerName, buyerEmail, date);
    const purchase = {
      foodName,
      price,
      quantity,
      buyerName,
      buyerEmail,
      date,
      img: food.img,
      made_by: food.made_by,
    };

    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Your purchase has been successful");
        }
      });
  };

  return (
    <div>
      <div className="bg-base-200 py-10">
        <h1 className="text-2xl font-bold text-orange-700 text-center">
          Home || Purchase
        </h1>
      </div>
      <div className="">
        <div className="w-[60%] mx-auto my-10">
          <div className="card shrink-0 rounded-lg border">
            <form className="card-body" onSubmit={handlePurchase}>
              <div className="flex gap-4 ">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text text-xl">Food Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={food?.food_name}
                    className="input input-bordered"
                    required
                    name="food"
                  />
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text text-xl">Price</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={("$", food?.price)}
                    className="input input-bordered"
                    name="price"
                    required
                  />
                </div>
              </div>

              <div className="form-control  w-full">
                <label className="label">
                  <span className="label-text text-xl">Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="quantity"
                  className="input input-bordered"
                  required
                  name="quantity"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Buyer Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                  readOnly
                  required
                  name="buyerName"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Buyer Email</span>
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered"
                  required
                  name="buyerEmail"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Buying Date</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="date"
                  required
                  defaultValue={newDate}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-teal-900 text-white text-lg hover:bg-teal-800">
                  Purchase
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
