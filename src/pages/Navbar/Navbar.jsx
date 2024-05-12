import { useContext } from "react";
import { FaFacebookF, FaLinkedin, FaRegStar, FaTwitter } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  const navLinks = (
    <>
      <li className="text-lg font-semibold border-r px-1">
        {" "}
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-semibold border-r px-1">
        {" "}
        <NavLink to="/allFoods">All Foods</NavLink>
      </li>
      <li className="text-lg font-semibold border-r px-1">
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      {user ? (
        <li
          className="text-lg font-semibold border-r px-1"
          onClick={handleLogOut}
        >
          {" "}
          <NavLink>Logout</NavLink>
        </li>
      ) : (
        <li className="text-lg font-semibold border-r px-1">
          {" "}
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      <li className="text-lg font-semibold  px-1">
        <details className="dropdown">
          <summary className="">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-10 bg-base-100 rounded-none border w-52">
            <li className="border-b">
              <a>My added food items</a>
            </li>
            <li className="border-b">
              <Link to="/addFood">Add a food item</Link>
            </li>
            <li>
              <a>My ordered food items</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div>
      <div className="flex justify-between bg-[#444444] bg-[url('http://www.nicdarkthemes.com/themes/restaurant/wp/demo/italian-food/wp-content/uploads/sites/4/2019/02/bg-topheader.jpg')] px-20 py-2 text-white">
        <div>
          <div className="flex items-center gap-10">
            <div className="flex gap-3 items-center">
              {" "}
              <IoShareSocial className="text-xl" />
              <h2 className="text-xl font-semibold">Our Social</h2>
            </div>

            <div className="flex gap-2">
              <FaFacebookF className="text-xl" />
              <FaTwitter className="text-xl" />
              <FaLinkedin className="text-xl" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-10">
            <div className="flex gap-2 items-center">
              {" "}
              <FaRegStar className="text-xl" />
              <h2 className="text-xl font-semibold">Promotions</h2>
            </div>

            <div className="flex gap-2 items-center">
              <LuContact className="text-xl" />
              <h2 className="text-xl font-semibold">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto py-6 border-b">
        <div className="flex justify-center">
          <IoMdStar className="text-[#7e7e7e] text-lg text-center" />
          <IoMdStar className="text-[#7e7e7e] text-lg text-center" />
          <IoMdStar className="text-[#7e7e7e] text-lg text-center" />
          <IoMdStar className="text-[#7e7e7e] text-lg text-center" />
          <IoMdStar className="text-[#7e7e7e] text-lg text-center" />
        </div>
        <h1 className="text-4xl text-[#7e7e7e] text-center">Tastify</h1>
      </div>

      <div className="navbar px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYj69S1iP31BzkIRJVV8osw3TD_UQWQnsJQ-akiRfSiQ&s"
                alt="img nai"
                className="w-24 h-24 mx-auto"
              />
              {navLinks}
            </ul>
          </div>

          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYj69S1iP31BzkIRJVV8osw3TD_UQWQnsJQ-akiRfSiQ&s"
              alt="img nai"
              className="w-16 h-16 mx-auto"
            />
            <span className="text-2xl">Tastify</span>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-s- items-center">
            {navLinks}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
