import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import TableBody from "./TableBody";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const MyAddedFood = () => {
  const { user, loading } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/myAddedFood?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
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

  const handleDelete = (_id) => {
    fetch(
      `https://assignment-11-server-steel-pi.vercel.app/myAddedFood/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              const remaining = myFoods.filter((food) => food._id !== _id);
              setMyFoods(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tastify || My Added Food Items</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

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
              <th></th>
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
              <TableBody
                key={food._id}
                food={food}
                handleDelete={handleDelete}
              ></TableBody>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedFood;
