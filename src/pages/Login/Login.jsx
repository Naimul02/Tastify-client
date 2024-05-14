import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          toast.success("User login has been successful");
          navigate(location.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };
  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (result.user) {
          toast.success("User login has been successful");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tastify || Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="bg-[url('https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715212800&semt=ais')] h-screen bg-no-repeat bg-cover">
        {/* form */}
        <div className="w-full p-6 lg:p-0 lg:w-1/2  mx-auto h-full">
          <div className="h-full w-full  flex  items-center">
            <form
              className="card-body border rounded-xl w-full space-y-5"
              onSubmit={handleLogin}
            >
              <h1 className="text-center text-4xl text-white">Login</h1>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-900 text-white hover:bg-cyan-800 border-none">
                  Login
                </button>
              </div>
              <div className="flex gap-3 mx-auto">
                <button className="btn" onClick={handleGoogle}>
                  <FcGoogle className="text-2xl" />
                  <p>Google</p>
                </button>
              </div>

              <p className="text-xl text-center text-white">
                Are you new here ?{" "}
                <Link className=" underline" to="/register">
                  Register
                </Link>
              </p>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
