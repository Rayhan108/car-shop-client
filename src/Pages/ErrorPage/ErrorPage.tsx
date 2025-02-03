import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-row items-center justify-center h-screen ">
        <img 
          src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=996&t=st=1686230811~exp=1686231411~hmac=151039b937c217184d45f1eb254803da16654a3f2c9823d09cf56f800b47668a"
          alt="404 Not Found"
          className="mb-8 w-1/2 mr-3"
        />
        <div>
        <h1 className="text-4xl font-title font-bold mb-4">Oops! Page Not Found</h1>
        <p className="font-body mb-8">
          It seems you have reached a page that does not exist.
        </p>
        <Link
          to="/"
          className="py-2 px-4 bg-[#003d1f] text-white rounded-lg "
        >
          Back to Home
        </Link>
        </div>
      </div>
    );
};

export default ErrorPage;