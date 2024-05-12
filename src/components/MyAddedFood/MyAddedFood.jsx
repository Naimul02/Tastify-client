import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const MyAddedFood = () => {
  const { user, loading } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <span className="loading loading-bars loading-lg text-center my-36"></span>
      </div>
    );
  }
  axios
    .get(`http://localhost:5000/myAddedFood?email=${user?.email}`)
    .then((res) => {
      console.log(res.data);
      setMyFoods(res.data);
    });

  const handleUpdate = (_id ,e) => {
    e.preventDefault();
    const form = e.target
    
    const food_name = form.food_name.value;
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
    };
    fetch(`http://localhost:5000/myAddedPut/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="bg-base-200 py-10">
        <h1 className="text-2xl font-bold text-orange-700 text-center">
          Home || My Added Food
        </h1>
      </div>

      {/* table */}
      <div className="overflow-x-auto max-w-5xl bg-base-100 mx-auto mt-6">
        <table className="table max-w-5xl mx-auto bg-base-100">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myFoods?.map((food) => (
              <tr key={food._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={food.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="text-2xl">{food.food_name}</div>
                  </div>
                </td>
                <td className="text-xl">${food.price}</td>
                <td className="text-xl">${food.quantity}</td>
                <td className="text-xl">${food.quantity * food.price}</td>
                <th>
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn bg-green-500 hover:bg-green-600 text-white  btn-sm"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Update
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <h1 className="text-2xl font-semibold text-green-600">
                          Update Food
                        </h1>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>

                      <form className="card-body"onSubmit={() => handleUpdate(food._id)}>
                        <div className=" ">
                          <div className="form-control  w-full">
                            <label className="label">
                              <span className="label-text text-xl">
                                Food Name
                              </span>
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
                            defaultValue={food.quantity}
                            name="quantity"
                          />
                        </div>
                        <div className="form-control">
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
                        <div className="form-control">
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-xl">
                              Food Category
                            </span>
                          </label>
                          <input
                            type="text"
                            className="input input-bordered w-full"
                            name="food_category"
                            required
                            defaultValue={food.food_category}
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-xl">
                              Food Origin
                            </span>
                          </label>
                          <input
                            type="text"
                            className="input input-bordered w-full"
                            name="food_origin"
                            required
                            defaultValue={food.food_origin}
                          />
                        </div>
                        <div className="form-control w-full">
                          <label className="label">
                            <span className="label-text text-xl">
                              Description
                            </span>
                          </label>

                          <textarea
                            name="description"
                            id=""
                            defaultValue={food.description}
                            className="border rounded-lg h-[150px] p-3"
                          ></textarea>
                        </div>
                        <div className="form-control mt-6">
                          <button
                            
                            className="btn bg-teal-900 text-white text-lg hover:bg-teal-800"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </dialog>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedFood;
