import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);

    const img = form.photo.value;
    const food_name = form.food_name.value;
    const food_category = form.food_category.value;
    const price = form.price.value;
    const food_origin = form.food_origin.value;
    const description = form.description.value;
    const userName = form.name.value;
    const email = form.email.value;
    const quantity = form.quantity.value;
    const addFood = {
      img,
      food_name,
      food_category,
      price,
      food_origin,
      description,
      userName,
      email,
      quantity,
    };
    fetch("http://localhost:5000/addFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Food has been added successful");
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="bg-base-200 py-10">
        <h1 className="text-2xl font-bold text-orange-700 text-center">
          Home || Add Food
        </h1>
      </div>

      <div className="">
        <div className="w-[60%] mx-auto my-10  bg-slate-100">
          <div className="card shrink-0 rounded-lg border">
            <form className="card-body" onSubmit={handleAddFood}>
              <div className="flex gap-4 ">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text text-xl">Food Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    required
                    placeholder="Food Name"
                    name="food_name"
                  />
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text text-xl">Price</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    name="price"
                    placeholder="price"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text text-xl">Food Image</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Food Image URL"
                    className="input input-bordered"
                    required
                    name="photo"
                  />
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
              </div>
              <div className="flex gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl">User Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    readOnly
                    required
                    name="name"
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    readOnly
                    className="input input-bordered w-full"
                    required
                    name="email"
                    defaultValue={user?.email}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl">Food Category</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    name="food_category"
                    required
                    placeholder="Food Category"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl">
                      Food Origin (Country)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    name="food_origin"
                    required
                    placeholder="Food Origin"
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
                  placeholder="Description"
                  className="border rounded-lg h-[150px] p-3"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-teal-900 text-white text-lg hover:bg-teal-800">
                  Add Food
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

export default AddFood;
