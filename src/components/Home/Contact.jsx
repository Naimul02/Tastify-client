import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')] bg-no-repeate bg-cover lg:h-[500px] my-20 p-5 lg:p-0">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-36  h-full">
        <div className="flex  items-center h-full ">
          <div className="bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 , 0)] p-10 rounded-xl">
            <h1 className="text-4xl font-semibold text-white">
              Contact <span className="text-orange-600">Us</span>
            </h1>
            <p className="text-xl font-semibold text-white mt-5">
              Phone : 01817667***
            </p>
            <div className="text-white space-y-3 mt-3">
              <h2 className="text-2xl font-semibold">Our Social Service</h2>
              <div className="flex gap-4">
                <FaFacebookF className="text-2xl" />
                <FaTwitter className="text-2xl" />
                <FaLinkedin className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center">
          <div className="h-[300px] bg-[#000000]  p-20 pt-10  rounded-xl  space-y-4">
            <p className="font-playFair text-red-400 text-center text-3xl font-semibold">
              OUR
            </p>
            <h1 className="text-center text-5xl font-bold text-white">
              LOCATION
            </h1>
            <p className="text-center text-white">
              732/21 Second Street, Manchester <br /> King Street, Kingston
              DHAKA <br /> 1.800.456.6743
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
