import { FieldValues, SubmitHandler, useForm} from "react-hook-form"

  import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
  import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Login = () => {
    const form = useForm();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [login]=useLoginMutation();
    const onSubmit: SubmitHandler<FieldValues>=async(data)=>{
        // console.log("form data",data);
        const userInfo = {
            email: data.email,
            password: data.password,
          };
        //   console.log("user info",userInfo);
          const res = await login(userInfo).unwrap();
        //   console.log(res);
          const user = verifyToken(res.data.accessToken) as TUser;
          console.log("dispatchUser",user);
          dispatch(setUser({ user: user, token: res.data.accessToken }));
          toast.success("Login Success")

          navigate('/');
    }
    return (
 <div className=" h-screen flex justify-center items-center">
           <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
           control={form.control}
           name="email"
           render={({field}) => (
             <FormItem>
                <FormLabel>Email</FormLabel>
               <FormControl>
                 <Input {...field} value={field.value||""}/>
               </FormControl>
             
             </FormItem>
           )}
         />
        <FormField
           control={form.control}
           name="password"
           render={({field}) => (
             <FormItem>
               <FormLabel>Password</FormLabel>
               <FormControl>
               <Input  {...field} value={field.value||""}/>
               </FormControl>
             
             </FormItem>
           )}
         />

 <Button type="submit">Submit</Button>
     
        </form>
            </Form>
 </div>
    );
};

export default Login;