import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("location : ", location);
  if (loading) {
    return (
      <span className="loading loading-bars loading-lg text-center my-36"></span>
    );
  }
  if (user) {
    return children;
  }
  <Navigate to="/login"></Navigate>;

  // return <div></div>;
};

export default PrivateRoute;
