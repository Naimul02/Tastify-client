import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PurchaseOrderFood = () => {
  const { user } = useContext(AuthContext);
  const [purchaseOrderFoods, setPurchaseOrderFood] = useState([]);
  console.log(user?.email);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/purchaseOrderFood?email=${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setPurchaseOrderFood(res.data);
      });
  }, [user?.email]);
  return (
    <div>
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
              <th>Added Time</th>
              <th>Food Owner</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {purchaseOrderFoods?.map((food) => (
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
                    <div className="text-xl">{food.foodName}</div>
                  </div>
                </td>
                <td className="text-lg">${food.price}</td>
                <td className="text-lg">{food.date}</td>
                <td className="text-lg">{food.made_by}</td>

                <ToastContainer />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseOrderFood;
