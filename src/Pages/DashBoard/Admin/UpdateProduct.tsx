import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGetSingleProductQuery, useUpdateProductMutation } from "@/redux/features/products/productApi";
import { Tcar } from "@/types/global.type";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";



const UpdateProduct = () => {
    
const [updateProduct]=useUpdateProductMutation();
    const form = useForm();
const {id} = useParams();
const { data: product, isFetching } = useGetSingleProductQuery({ id });
  const {_id, brand, price, quantity, description, category, image, model, year } =
    (product?.data || {}) as Tcar;
  console.log(product?.data);
// Loader component
if (isFetching) return <Loader />;


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      console.log("form data",data);
      try {
        const info = {
        
          brand: data.brand ,
          model: data.model,
          year: Number(data.year),
          category: data.category,
          image: data.image,
          description: data.description,
          quantity: Number(data.quantity),
          price:Number(data.price),
          inStock: true,
        };
        const updatedData={
            id:_id,
            data:info
        }
        //   console.log(" info", updatedData);
        const res = await updateProduct(updatedData).unwrap();
        // console.log(res);
        toast.success(res?.message);
        form.reset();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        toast.error(err?.data?.message);
        // console.log(err);
      }
    };

   

    return (
        <div className="flex min-h-screen items-center justify-center  p-4">
        <Card className="w-full max-w-md shadow-2xl rounded-2xl bg-white ">
          <CardHeader>
            <CardTitle className="text-center text-[#003d1f] font-title text-2xl font-bold ">
              Update A New Product
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Brand Field */}
              <div>
                <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                  Brand
                </label>
                <Input
                defaultValue={brand}
                  {...form.register("brand", { required: "Name is required" })}
                  type="text"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm "
                />
 
              </div>
              {/* Model Field */}
              <div>
                <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                  Car Model
                </label>
                <Input
                  {...form.register("model", { required: "Email is required" })}
                  defaultValue={model}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
                />
        
              </div>
              {/* Category Field */}
              <div>
                <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category
                </label>
                <Input
                defaultValue={category}
                  {...form.register("category", {
                    required: "Category is required",
                  })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
                />
        
              </div>
              {/* Image Field */}
              <div>
                <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                  Car Image
                </label>
                <Input
                defaultValue={image}
                  {...form.register("image", { required: "image is required" })}
                  type="url"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
                />

              </div>
  
              {/*Description Field */}
              <div>
                <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <Textarea
                defaultValue={description}
                  {...form.register("description", {
                    required: "description is required",
                  })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#003d1f] focus:ring-[#003d1f] dark:text-white"
                />
       
              </div>
              {/* Year */}
              <div>
                <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                  Year
                </label>
                <Input
                defaultValue={year}
                  {...form.register("year", { required: "year is required" })}
                  type="number"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
                />
                {form.formState.errors.year && (
                  <p className="text-red-500 text-xs mt-1">
                    {" "}
                    {Number(form.formState.errors.year.message)}
                  </p>
                )}
              </div>
              {/* Price */}
              <div>
                <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                  Price
                </label>
                <Input
                defaultValue={price}
                  {...form.register("price", { required: "year is required" })}
                  type="number"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
                />

              </div>
              {/* Quantity */}
              <div>
                <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quantity
                </label>
                <Input
                defaultValue={quantity}
                  {...form.register("quantity", { required: "year is required" })}
                  type="number"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
                />
         
              </div>
              {/* Submit Button */}
              <Button className="w-full font-body  hover:bg-[#003d1f] text-white py-2 rounded-lg">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
};

export default UpdateProduct;