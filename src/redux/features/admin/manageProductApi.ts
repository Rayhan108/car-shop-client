import { baseApi } from "../../api/baseApi";

const manageProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (info) => ({
        url: "/car",
        method: "POST",
        body: info,
      }),
    }),
    deleteProduct: builder.mutation({
      query: ({id}) => ({
        url: `/car/${id}`,
        method: "DELETE",
       
      }),
      invalidatesTags: ["products"],
    }),
 

  }),
});

export const { useCreateProductMutation,useDeleteProductMutation } = manageProduct;
