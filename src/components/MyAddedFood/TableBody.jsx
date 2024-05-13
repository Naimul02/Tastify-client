import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const TableBody = ({ food }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    img,
    food_name,
    price,
    quantity,
    food_category,
    food_origin,
    description,
  } = food;

  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="text-2xl">{food_name}</div>
          </div>
        </td>
        <td className="text-xl">${price}</td>
        <td className="text-xl">${quantity}</td>
        <td className="text-xl">${quantity * price}</td>
        <th>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <Link to={`/myModal/${_id}`}>
            {" "}
            <button className="btn bg-green-500 hover:bg-green-600 text-white  btn-sm">
              Update
            </button>
          </Link>
        </th>
        <ToastContainer />
      </tr>
    </>
  );
};

export default TableBody;
