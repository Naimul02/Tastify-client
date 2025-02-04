import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const Gallery = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [galleries, setGalleries] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/gallery?email=${user?.email}`;
  useEffect(() => {
    axiosSecure(url).then((res) => {
      console.log(res.data);
      setGalleries(res.data);
    });
  }, [axiosSecure]);

  const handleGallery = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const feedback = form.feedback.value;
    const img = form.img.value;
    const gallery = {
      userName,
      feedback,
      img,
    };
    fetch("https://assignment-11-server-steel-pi.vercel.app/gallery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(gallery),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Your feedback has been added sucessfull");
          window.location.reload();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tastify || Gallery</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="h-[400px] bg-[url('https://www.desktopbackground.org/p/2015/10/11/1024693_1-restaurant-hd-wallpapers_1920x1200_h.jpg')] bg-no-repeat bg-cover text-white mb-20">
        <div className="flex items-center h-full justify-center bg-gradient-to-b from-[#151515] to-[rgba(21 , 21, 21 , 0)] ">
          <div>
            <h1 className="text-5xl font-bold text-center">Gallery</h1>
            <p className="text-xl  text-center">
              Home || <span className="text-orange-600"></span>Gallery
            </p>
          </div>
        </div>
      </div>

      <div className="bg-base-200 py-10">
        <h1 className="text-2xl font-bold text-orange-700 text-center">
          Home || User Feedback
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <div>
          <button
            className="btn bg-teal-800 text-white hover:bg-teal-700"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Add Your Feedback
          </button>

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form className="card-body" onSubmit={handleGallery}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    readOnly
                    className="input input-bordered"
                    required
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Feedback</span>
                  </label>
                  <input
                    type="text"
                    placeholder="feedback"
                    className="input input-bordered"
                    required
                    name="feedback"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="image url"
                    className="input input-bordered"
                    required
                    name="img"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-6xl mx-auto my-10">
        {galleries?.map((gallery) => (
          <div
            key={gallery._id}
            className="card h-[280px] rounded-lg relative card-food"
          >
            <figure className="h-full rounded-lg">
              <img
                src={gallery.img}
                alt=""
                className="w-full rounded-lg h-full object-cover"
              />
            </figure>
            <div className="card-body absolute card-content hidden text-white  bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 , 0)] h-full space-y-3 rounded-lg">
              <h1 className="text-xl font-bold">{gallery.userName}</h1>
              <h1 className="text-lg ">
                <span className="text-xl font-bold text-orange-600">
                  Feedback
                </span>{" "}
                : {gallery.feedback}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Gallery;
