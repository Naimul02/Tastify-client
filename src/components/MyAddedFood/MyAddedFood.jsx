import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const MyAddedFood = () => {
  const { user, loading } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);


  axios
    .get(`http://localhost:5000/myAddedFood?email=${user?.email}`)
    .then((res) => {
      console.log(res.data);
      setMyFoods(res.data);
    });

  console.log(user);
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
      


    </div>
  );
};

export default MyAddedFood;
