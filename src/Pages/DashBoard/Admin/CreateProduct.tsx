import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useRegisterUserMutation } from "@/redux/features/auth/authApi";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const CreateProduct = () => {
  const form = useForm();
  const navigate = useNavigate();

  const [registerUser] = useRegisterUserMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("form data",data);
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      //   console.log("user info", userInfo);
      const res = await registerUser(userInfo).unwrap();
      // console.log(res);
      toast.success(res?.message);
      navigate("/login");
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
          <CardTitle className="text-center font-title text-2xl font-bold ">
            Create A New Product
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
                {...form.register("brand", { required: "Name is required" })}
                type="text"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm "
              />
              {form.formState.errors.brand && (
                <p className="text-red-500 text-xs mt-1">
                  {" "}
                  {String(form.formState.errors.brand.message)}
                </p>
              )}
            </div>
            {/* Model Field */}
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Car Model
              </label>
              <Input
                {...form.register("model", { required: "Email is required" })}
                type="email"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
              />
              {form.formState.errors.model && (
                <p className="text-red-500 text-xs mt-1">
                  {" "}
                  {String(form.formState.errors.model.message)}
                </p>
              )}
            </div>
            {/* Category Field */}
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Car Model
              </label>
              <Input
                {...form.register("category", {
                  required: "Category is required",
                })}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
              />
              {form.formState.errors.category && (
                <p className="text-red-500 text-xs mt-1">
                  {" "}
                  {String(form.formState.errors.category.message)}
                </p>
              )}
            </div>
            {/* Image Field */}
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Car Image
              </label>
              <Input
                {...form.register("image", { required: "image is required" })}
                type="url"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
              />
              {form.formState.errors.image && (
                <p className="text-red-500 text-xs mt-1">
                  {" "}
                  {String(form.formState.errors.image.message)}
                </p>
              )}
            </div>

            {/*Description Field */}
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <Textarea
                {...form.register("description", {
                  required: "description is required",
                })}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#003d1f] focus:ring-[#003d1f] dark:text-white"
              />
              {form.formState.errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {" "}
                  {String(form.formState.errors.description.message)}
                </p>
              )}
            </div>
            {/* Year */}
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Year
              </label>
              <Input
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
            {/* Quantity */}
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Quantity
              </label>
              <Input
                {...form.register("quantity", { required: "year is required" })}
                type="number"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
              />
              {form.formState.errors.quantity && (
                <p className="text-red-500 text-xs mt-1">
                  {" "}
                  {Number(form.formState.errors.quantity.message)}
                </p>
              )}
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

export default CreateProduct;
