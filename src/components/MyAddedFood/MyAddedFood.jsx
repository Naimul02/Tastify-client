import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import TableBody from "./TableBody";

const MyAddedFood = () => {
  const { user, loading } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myAddedFood?email=${user?.email}`)
      .then((res) => {
        // console.log(res.data);
        setMyFoods(res.data);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <span className="loading loading-bars loading-lg text-center my-36"></span>
      </div>
    );
  }

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
              <TableBody key={food._id} food={food}></TableBody>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedFood;
