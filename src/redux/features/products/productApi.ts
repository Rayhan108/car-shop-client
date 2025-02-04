import { baseApi } from "@/redux/api/baseApi";
import { Tcar, TResponseRedux } from "@/types/global.type";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        // if (args) {
        //   args.forEach((item: TQueryParam) => {
        //     params.append(item.name, item.value as string);
        //   });
        // }
        if (args && typeof args === "object") {
          Object.entries(args).forEach(([key, value]) => {
            if (value) params.append(key, value.toString()); // Convert value to string
          });
        }
        return {
          url: "/car/cars",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["products"],
      transformResponse: (response: TResponseRedux<Tcar[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    
// single car 
 
    getSingleProduct: builder.query({
      query: (args) => {
        return {
          url: `/car/${args.id}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
      transformResponse: (response: TResponseRedux<Tcar>) => {
        return {
          data: response.data,
        };
      },
    }),
  // update product

  updateProduct: builder.mutation({
    query: (args) => ({

      url: `/car/${args.id}`,
      method: 'PUT',
      body: args.data,
    }),
    invalidatesTags: ['products'],
  }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery ,useUpdateProductMutation} = productApi;
