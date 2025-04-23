import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/orders/create-order",
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["order"],
    }),
    getOrders: builder.query({
      query: () => ({
        url: "/orders",
      }),
      providesTags: ["order", "deleteOrder"],
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verification",
        params: { order_id },
        method: "GET",
      }),
    }),
    deleteOrder: builder.mutation({
      query: (id: string) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteOrder"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useVerifyOrderQuery,
  useDeleteOrderMutation,
} = orderApi;
