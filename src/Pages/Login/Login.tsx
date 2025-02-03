import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import Loader from "@/components/Loader/Loader";

const Login = () => {
  const [loading,setLoading]=useState(false)
  const form = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

 try{
    const userInfo = {
        email: data.email,
        password: data.password,
      };
   
      const res = await login(userInfo).unwrap();
      setLoading(true)
      const user = verifyToken(res.data.accessToken) as TUser;
    //   console.log("dispatchUser", user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      setLoading(false)
      toast.success(res?.message);
      navigate("/");
      if (loading) return <Loader />;
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 }catch(err:any){
    toast.error(err?.data?.message)
 }
  };
  return (
    <div className="flex min-h-screen items-center justify-center  p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-center font-title text-2xl font-bold text-gray-800 dark:text-white">
            Login to Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4"  onSubmit={form.handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <Input
                {...form.register("email", { required: "Email is required" })}
                type="email"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm "
              />
                    {form.formState.errors.email && (
                <p className="text-red-500 text-xs mt-1">  {String(form.formState.errors.email.message)}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block font-body text-sm font-medium ">
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
              Login
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-4 font-body text-center text-sm text-black ">
            New here?{" "}
            <Link to="/signUp" className="text-[#003d1f] hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
