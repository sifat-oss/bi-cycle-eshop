import { TQueryParam, TResponseRedux, TUser } from "@/types";
import { baseApi } from "../../api/baseApi";

const useUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, String(item.value));
          });
        }

        return {
          url: "/users",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["user", "deleteUser"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    getUser: builder.query({
      query: (userId: string) => {
        return {
          url: `/users/${userId}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TUser>) => {
        return {
          data: response.data,
        };
      },
    }),
    getUserByEmail: builder.query({
      query: (email: string) => {
        return {
          url: `/users/email/${email}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TUser>) => {
        return {
          data: response.data,
        };
      },
    }),
    updateUser: builder.mutation({
      query: ({ id, data }: { id: string; data: Partial<TUser> }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteUser"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetUserQuery,
  useGetUserByEmailQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = useUserApi;
