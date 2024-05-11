import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
  };
  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715212800&semt=ais')] h-screen bg-no-repeat bg-cover">
      {/* form */}
      <div className="w-1/2 mx-auto h-full">
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
              />
            </div>

            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-cyan-900 text-white hover:bg-cyan-800 border-none">
                Login
              </button>
            </div>

            <p className="text-xl text-center text-white">
              Are you new here ?{" "}
              <Link className=" underline" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
