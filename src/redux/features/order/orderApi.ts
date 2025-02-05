import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo) => ({
        url: "/order",
        method: "POST",
        body: userInfo,
      }),
    }),
    getOrders: builder.query({
      query: () => "/order/orders",
    }),
   
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/order/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
    singleOrder: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        params: { id},
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useVerifyOrderQuery,
  useSingleOrderQuery
} = orderApi;
