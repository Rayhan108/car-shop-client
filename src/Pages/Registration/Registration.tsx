import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useRegisterUserMutation } from "@/redux/features/auth/authApi";


import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const Registration = () => {
  const form = useForm();
  const navigate = useNavigate();


  const [registerUser] = useRegisterUserMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("form data",data);
 try{
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
 }catch(err :any){
    toast.error(err?.data?.message) 
    // console.log(err);
 }
  };
  return (
    <div className="flex min-h-screen items-center justify-center  p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-center font-title text-2xl font-bold text-gray-800 dark:text-white">
            Sign Up to Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <Input
                {...form.register("name", { required: "Name is required" })}
                type="text"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm "
              />
                    {form.formState.errors.name && (
                <p className="text-red-500 text-xs mt-1">  {String(form.formState.errors.name.message)}</p>
              )}
            </div>
            {/* Email Field */}
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <Input
                {...form.register("email", { required: "Email is required" })}
                type="email"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
              />
                    {form.formState.errors.email && (
                <p className="text-red-500 text-xs mt-1">  {String(form.formState.errors.email.message)}</p>
              )}
            </div>
            {/* Image Field */}
            {/* <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Photo URL
              </label>
              <Input
                {...form.register("image")}
                type="url"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm  dark:text-white"
              />
            </div> */}

            {/* Password Field */}
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <Input
                {...form.register("password", { required: "Password is required" })}
                type="password"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#003d1f] focus:ring-[#003d1f] dark:text-white"
              />
                    {form.formState.errors.password && (
                <p className="text-red-500 text-xs mt-1">  {String(form.formState.errors.password.message)}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button className="w-full font-body  hover:bg-[#003d1f] text-white py-2 rounded-lg">
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;
