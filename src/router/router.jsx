import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllFoods from "../components/AllFoods/AllFoods";
import SingleFood from "../components/SingleFood/SingleFood";
import Purchase from "../components/Purchase/Purchase";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../components/AddFood/AddFood";
import MyAddedFood from "../components/MyAddedFood/MyAddedFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
        loader: () => fetch("http://localhost:5000/foodsAll"),
      },
      {
        path: "/singleFood/:id",
        element: <SingleFood></SingleFood>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleFood/${params.id}`),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleFood/${params.id}`),
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/myAddedFood",
        element: <MyAddedFood></MyAddedFood>,
      
      },
    ],
  },
]);

export default router;
