import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
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
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715212800&semt=ais')] h-screen bg-no-repeat bg-cover">
      {/* form */}
      <div className="w-1/2 mx-auto h-full">
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
        </div>
      </div>
    </div>
  );
};

export default Register;
