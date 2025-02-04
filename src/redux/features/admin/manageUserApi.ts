import { baseApi } from "../../api/baseApi";

const manageUser = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    changeStatus: builder.mutation({
      query: (args) => ({
        url: `/user/change-status/${args.id}`,
        method: "POST",
        body: args.data,
        
      }),
      invalidatesTags: ["user"],
    }),

    getAllUsers: builder.query({
      query: () => {
  
        return {
          url: "/user/allUser",
          method: "GET",
  
        };
      },
    }),
  }),
});

export const { useChangeStatusMutation,useGetAllUsersQuery } = manageUser;
