import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    registerUser:builder.mutation({
    query:(userInfo)=>({
        url:"/auth/register",
        method:"POST",
        body:userInfo,
    })
    }),
    getSingleUser:builder.query({
        query:(userId)=>({
            url:`/user/${userId}`,
            method:"GET",
        
        })
        // query:(userId)=>`/user/${userId}`,
    })
  }),
});

export const { useLoginMutation,useRegisterUserMutation,useGetSingleUserQuery } = authApi;
