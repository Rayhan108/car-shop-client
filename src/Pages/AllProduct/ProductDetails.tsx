import { Button } from "@/components/ui/button";
import { useGetSingleProductQuery } from "@/redux/features/products/productApi";
import { Tcar } from "@/types/global.type";
import { Helmet } from "react-helmet-async";


import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: product, isFetching, error } = useGetSingleProductQuery({ id });
  console.log(product?.data);
  if (isFetching) return <div>Loading...</div>;
  if (error) return toast.error("Something went wrong");
  const { brand, price, quantity, description, category, image, model, year } = 
  (product?.data || {}) as Tcar;
  return (
    <div className="min-h-screen py-12 px-6 sm:px-12 lg:px-24">
               <Helmet> <title>NextGen Cars | Product-Details</title></Helmet>
        
    <div className="mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="w-full h-[500px] relative">
        <img
          src={image}
          alt={model}
          className="w-full h-full object-cover rounded-t-xl transform scale-105 hover:scale-110 transition-all duration-500"
        />
        {/* Add overlay to enhance the image on hover */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40 rounded-t-xl"></div>
      </div>
  
      <div className="p-8 sm:p-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-b-xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold font-title mb-8 text-center text-gray-800">
          {brand} ({model}) - ({year})
        </h2>
  
        <p className="text-lg font-body leading-relaxed text-center mb-12 max-w-3xl mx-auto text-gray-600">
          {description}
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-title font-bold text-gray-800">Price</h3>
            <p className="font-body text-green-600 font-semibold mt-2">₺ {price}</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-title font-bold text-gray-800">Quantity</h3>
            <p className="font-body text-gray-800 font-semibold mt-2">{quantity}</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-title font-bold text-gray-800">Category</h3>
            <p className="font-body text-gray-800 font-semibold mt-2">{category}</p>
          </div>
        </div>
  
        <div className="sm:col-span-4 font-body text-center mt-8 flex justify-center gap-6">
          <Button className="hover:bg-[#003d1f] bg-[#003d1f] text-white font-bold py-4 px-12 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl transform hover:scale-105">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ProductDetails;
