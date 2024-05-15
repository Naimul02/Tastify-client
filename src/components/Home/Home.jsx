import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Contact from "./Contact";
import Foods from "./Foods";
import OurRestaurant from "./OurRestaurant";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tastify || Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* /banner */}
      <Banner></Banner>
      <Foods></Foods>
      <OurRestaurant></OurRestaurant>
      <Contact></Contact>
    </div>
  );
};

export default Home;
