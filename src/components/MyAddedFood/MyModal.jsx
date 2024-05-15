import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyModal = () => {
  const food = useLoaderData();
  console.log("update food", food);
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const food_name = form.food_name.value;
    const img = form.img.value;
    const food_category = form.food_category.value;
    const price = form.price.value;
    const food_origin = form.food_origin.value;
    const description = form.description.value;
    const userName = form.name.value;
    const email = form.email.value;
    const quantity = form.quantity.value;
    const updateFood = {
      food_name,
      food_category,
      price,
      food_origin,
      description,
      userName,
      email,
      quantity,
      img,
    };
    console.log("updateFood", updateFood);
    fetch(
      `https://assignment-11-server-steel-pi.vercel.app/myAddedPut/${food._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateFood),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Your Food has been updated successful");
        }
      });
  };
  return (
    <div>
      <div className="bg-base-200 py-10">
        <h1 className="text-2xl font-bold text-orange-700 text-center">
          Home || Update Food
        </h1>
      </div>

      <div className="max-w-6xl mx-auto">
        <form className="card-body max-w-6xl mx-auto" onSubmit={handleUpdate}>
          <div className="flex gap-4 flex-col lg:flex-row ">
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-xl">Food Name</span>
              </label>
              <input
                type="text"
                defaultValue={food.food_name}
                className="input input-bordered"
                required
                name="food_name"
              />
            </div>
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-xl">Price</span>
              </label>
              <input
                type="text"
                defaultValue={("$", food.price)}
                className="input input-bordered"
                name="price"
                required
              />
            </div>
          </div>

          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-xl">Quantity</span>
              </label>
              <input
                type="text"
                placeholder="quantity"
                className="input input-bordered"
                required
                defaultValue={food.quantity}
                name="quantity"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl">Food Category</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="food_category"
                required
                defaultValue={food.food_category}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered"
                readOnly
                required
                name="name"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
                required
                name="email"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl">Food Img</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="img"
                required
                defaultValue={food.img}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl">Food Origin</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="food_origin"
                required
                defaultValue={food.food_origin}
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl">Description</span>
            </label>

            <textarea
              name="description"
              id=""
              defaultValue={food.description}
              className="border rounded-lg h-[150px] p-3"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-teal-900 text-white text-lg hover:bg-teal-800">
              Update
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MyModal;
