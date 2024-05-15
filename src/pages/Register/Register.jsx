import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, auth } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch(() => {});

        console.log(result.user);
        const user = {
          name,
          email,
          password,
          photo,
        };
        if (result.user) {
          fetch("https://assignment-11-server-steel-pi.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast.success("User created successful");
              }
            });
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tastify || Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="bg-[url('https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715212800&semt=ais')] h-screen bg-no-repeat bg-cover">
        {/* form */}
        <div className="w-full lg:w-1/2 p-6 lg:p-0 mx-auto h-full">
          <div className="h-full w-full  flex  items-center">
            <form
              className="card-body border rounded-xl w-full space-y-5"
              onSubmit={handleRegister}
            >
              <h1 className="text-center text-4xl text-white">Register</h1>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
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
                  type="text"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                  name="photo"
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-900 text-white hover:bg-cyan-800 border-none">
                  Register
                </button>
              </div>
              <p className="text-xl text-center text-white">
                Already have an account ?{" "}
                <Link className=" underline" to="/login">
                  Login
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

export default Register;
