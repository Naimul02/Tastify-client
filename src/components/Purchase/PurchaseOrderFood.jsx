import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Swal from "sweetalert2";
import Loading from "../../Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

// or via CommonJS
// const Swal = require('sweetalert2')

const PurchaseOrderFood = () => {
  const { user, loading } = useContext(AuthContext);
  const [purchaseOrderFoods, setPurchaseOrderFood] = useState([]);
  const axiosSecure = useAxiosSecure();

  console.log(user?.email);

  const url = `/purchaseOrderFood?email=${user?.email}`;
  useEffect(
    () => {
      axiosSecure.get(url).then((res) => {
        console.log(res.data);
        setPurchaseOrderFood(res.data);
      });
    },
    [user?.email],
    axiosSecure
  );
  if (loading) {
    return <Loading></Loading>;
  }

  const handleDelete = (_id) => {
    fetch(
      `https://assignment-11-server-steel-pi.vercel.app/purchaseOrderFood/${_id}`,
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
              const remaining = purchaseOrderFoods.filter(
                (food) => food._id !== _id
              );
              setPurchaseOrderFood(remaining);

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
        <title>Tastify || My ordered Food Items</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="overflow-x-auto max-w-5xl bg-base-100 mx-auto mt-6">
        <table className="table max-w-5xl mx-auto bg-base-100">
          {/* head */}
          <thead>
            <tr>
              <th></th>
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
                  <button
                    className="btn btn-circle btn-outline btn-sm"
                    onClick={() => handleDelete(food._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
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
