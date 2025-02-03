import { PropagateLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center ">
     

        <div className="flex flex-col items-center justify-center space-y-4">
          <PropagateLoader color="#34D399" size={15} />
          <p className="text-white text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
};

export default Loader;