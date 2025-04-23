import { TBicycleData, TQueryParam, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const useBicycleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBicycle: builder.mutation({
      query: (data) => ({
        url: "/bicycles/create-bicycle",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bicycle"],
    }),
    getAllBicycles: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, String(item.value));
          });
        }

        return {
          url: "/bicycles",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["bicycle", "deleteBicycle"],
      transformResponse: (response: TResponseRedux<TBicycleData[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    getBicycle: builder.query({
      query: (bicycleId: string) => {
        return {
          url: `/bicycles/${bicycleId}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TBicycleData>) => {
        return {
          data: response.data,
        };
      },
    }),
    updateBicycle: builder.mutation({
      query: ({ id, data }: { id: string; data: Partial<TBicycleData> }) => ({
        url: `/bicycles/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteBicycle: builder.mutation({
      query: (id: string) => ({
        url: `/bicycles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBicycle"],
    }),
  }),
});

export const {
  useAddBicycleMutation,
  useGetAllBicyclesQuery,
  useGetBicycleQuery,
  useUpdateBicycleMutation,
  useDeleteBicycleMutation,
} = useBicycleApi;
