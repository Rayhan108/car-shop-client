import Loader from "@/components/Loader/Loader";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/products/productApi";
import { Link } from "react-router-dom";

const FeatureProducts = () => {
  const { data: products, isFetching } = useGetAllProductsQuery(undefined);
  console.log(products?.data?.result);
  // console.log(isFetching);

  // Loader
  if (isFetching) return <Loader />;
  return (
    <div>
      <SectionTitle header={"Featured Products"} />

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.data?.result
          ?.map((product) => (
            <div
              key={product._id}
              className=" border border-black p-4   rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="">
                <img
                  src={product.image}
                  alt={product.model}
                  className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105 duration-300"
                />
              </div>

              <h3 className="mt-4 text-lg font-title font-semibold text-center">
                Brand :
                <span className="font-body font-bold"> {product.brand}</span>
              </h3>
              <p className="font-body text-center">
                Category : {product.category}
              </p>
              <p className="font-body font-bold text-center">
                Price : ${product.price}
              </p>

              <div className="flex justify-center gap-4 mt-4">
                <Button className=" font-body  text-white hover:bg-[#002a14]">
                  View Details
                </Button>
              </div>
            </div>
          ))
          .slice(0, 6)}
      </div>
      <div className="flex mt-8 justify-center">
        <Link to="/allProducts">
          {" "}
          <Button className="bg-[#002a14]">View All</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureProducts;
