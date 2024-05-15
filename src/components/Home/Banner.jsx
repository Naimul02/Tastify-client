// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:h-[600px] h-[350px]">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
          <div className="reative h-full">
            <img
              src="https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 , 0)] top-0 left-0">
              <div className="space-y-3 lg:space-y-6 text-white w-3/4 h-full pt-8 lg:w-1/2 lg:h-1/2 pl-8 lg:pl-20">
                <h1 className="text-2xl lg:text-4xl font-bold text-white">
                  Our Restaurant
                </h1>
                <p>
                  A restaurant is a business that prepares and serves food and
                  drinks to customers. Meals are generally served and eaten on
                  the premises, but many restaurants
                </p>
                <div>
                  <Link to="/allFoods" className="mt-2">
                    <button className="btn px-10 rounded-xl text-xl">
                      All Foods
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="https://www.mashed.com/img/gallery/the-best-fast-food-items-to-keep-as-leftovers/l-intro-1694110720.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 , 0)] top-0 left-0">
              <div className="space-y-3 lg:space-y-6 text-white w-3/4 h-full pt-8 lg:w-1/2 lg:h-1/2 pl-8 lg:pl-20">
                <h1 className="text-2xl lg:text-4xl font-bold text-white">
                  Fast Food
                </h1>
                <p>
                  A restaurant is a business that prepares and serves food and
                  drinks to customers. Meals are generally served and eaten on
                  the premises, but many restaurants
                </p>
                <div>
                  <Link to="/allFoods" className="mt-2">
                    <button className="btn px-10 rounded-xl text-xl">
                      All Foods
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 , 0)] top-0 left-0">
              <div className="space-y-3 lg:space-y-6 text-white w-3/4 h-full pt-8 lg:w-1/2 lg:h-1/2 pl-8 lg:pl-20">
                <h1 className="text-2xl lg:text-4xl font-bold text-white">
                  Burger
                </h1>
                <p>
                  A restaurant is a business that prepares and serves food and
                  drinks to customers. Meals are generally served and eaten on
                  the premises, but many restaurants
                </p>
                <div>
                  <Link to="/allFoods" className="mt-2">
                    <button className="btn px-10 rounded-xl text-xl">
                      All Foods
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
