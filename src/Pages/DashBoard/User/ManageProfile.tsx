import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useChangePasswordMutation } from "@/redux/features/auth/authApi";

import { toast } from "sonner";

import Loader from "@/components/Loader/Loader";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";

const ManageProfile = () => {
    const [changePassword,{isLoading}] = useChangePasswordMutation();

  const form = useForm();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

 try{
    const userInfo = {
        oldPassword: data.password,
        newPassword: data.newPassword,
      };

      const res = await changePassword(userInfo).unwrap();
  dispatch(logout());
     navigate('/login');
      toast.success(res?.message);

      if (isLoading) return <Loader />;
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
            Change Your Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4"  onSubmit={form.handleSubmit(onSubmit)}>
            {/* old pass Field */}
            <div>
              <label className="block font-body text-sm font-medium ">
               Old  Password
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

            {/*New  Password Field */}
            <div>
              <label className="block font-body text-sm font-medium ">
               New Password
              </label>
              <Input
                {...form.register("newPassword", { required: "Password is required" })}
                type="password"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#003d1f] focus:ring-[#003d1f] dark:text-white"
              />
                    {form.formState.errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">  {String(form.formState.errors.newPassword.message)}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button className="w-full font-body  hover:bg-[#003d1f] text-white py-2 rounded-lg">
             Confirm
            </Button>
          </form>

        </CardContent>
      </Card>
    </div>
  );
};

export default ManageProfile;
