const OurRestaurant = () => {
  return (
    <div className="my-20 bg-base-200 py-16 p-4 lg:p-0">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold mb-3">
          Visit{" "}
          <span className="text-5xl font-semibold text-orange-600">
            Restaurant
          </span>
        </h1>
        <div className="flex flex-col  lg:flex-row lg:gap-10  lg:p-0 items-center  max-w-6xl mx-auto">
          <div className="grid grid-cols-3 lg:w-[60%] gap-6">
            <div className="h-[150px] rounded-lg">
              <img
                src="https://www.therivergroup.co.uk/wp-content/uploads/2019/02/future-dining-our-restaurant.jpg"
                alt=""
                className="h-[150px] rounded-lg"
              />
            </div>
            <div className="h-[150px] rounded-lg">
              <img
                src="https://brasserieblanc.com/wp-content/uploads/2018/08/Brasserie-Blanc-Manchester-Marriott-19-750x500.jpg"
                className="h-[150px] rounded-lg"
                alt=""
              />
            </div>
            <div className="h-[150px] rounded-lg">
              <img
                src="https://lowlandsgroup.com/wp-content/uploads/2022/03/OurRestaurants_Centraal_Interior-1024x683.jpg"
                className="h-[150px] rounded-lg"
                alt=""
              />
            </div>

            <div className="col-span-2 h-[300px] rounded-lg">
              <img
                src="https://pbs.twimg.com/media/EsRsxNqW4AADxZi.jpg"
                alt=""
                className="h-full rounded-lg"
              />
            </div>
            <div className="col-span-1 h-[300px] rounded-lg">
              <img
                src="https://screendoorrestaurant.com/wp-content/uploads/2023/04/ScreenDoorPearl_Interior-3-2-e1681758146529-768x512.jpg"
                className="rounded-lg h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="w-full lg:w-[40%] mt-3 lg:mt-0">
            <h1 className="text-4xl font-bold mb-4">About Our Restaurant</h1>
            <p className="text-lg">
              Restaurants know the importance of a strong first impression. It
              is why they invest in exterior design, decorate their entranceways
              and train hosts to welcome guests with a warm smile. entranceways
              and train hosts to welcome guests with a warm smile.
            </p>
            <p className="text-lg mt-8">
              Nowadays, however, more than 70% of diners visit a restaurant is
              website before deciding where to dine, which means the first
              impression happens long before they set foot on-premises. It
              happens online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRestaurant;
