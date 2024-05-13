import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <img
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
          alt="koi gelo"
          className="max-w-[500px] rounded-xl"
        />
        <div className=" w-full flex justify-center mt-1">
          <Link to="/" className="text-2xl mt-3   text-blue-600 underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
