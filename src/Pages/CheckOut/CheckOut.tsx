import { useCreateOrderMutation } from "@/redux/features/order/orderApi";
import { useGetSingleProductQuery } from "@/redux/features/products/productApi";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import { Tcar } from "@/types/global.type";

const CheckOut = () => {
  const { id } = useParams();

  const { data: product, error } = useGetSingleProductQuery({ id });

  const { _id,price ,brand} = (product?.data || {}) as Tcar;
  const [createOrder, { isLoading, isSuccess, data,isError  }] =
    useCreateOrderMutation();

  const handlePlaceOrder = async () => {
  try{
    const data = {
        products:[{product:{_id}, quantity:1}]
    }
    await createOrder(data);
  }catch(err){
    console.log(err);
  }
  };

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError){ 
        // console.log(error);
        toast.error(JSON.stringify(error||"Insufficient Stock"), { id: toastId });
    }
  }, [data?.data, data?.message, error,isError,  isLoading, isSuccess]);
  return (
    <div className="text-[#003d1f]  font-body">
      <div className="flex flex-col gap-6 p-8 shadow-2xl rounded-lg max-w-md mx-auto border-2 border-[#003d1f]">
        <div className="border-b-2 border-[#003d1f] pb-4">
          <h1 className="text-2xl font-title font-semibold">Your Cart</h1>
          <p className="text-sm text-gray-600 mt-1">
            Review your items and proceed to checkout.
          </p>
        </div>
        <div className="flex-1 overflow-y-auto">
        
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Brand Name:</span>
            <span className="text-xl font-bold font-title">{brand}</span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Total Price:</span>
            <span className="text-xl font-bold font-title">
              ${price?.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="border-t-2 border-[#003d1f] pt-6">
          <Button
            className="w-full bg-[#003d1f] text-white font-title font-semibold py-3 rounded-lg hover:bg-[#002615] transition-colors"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
