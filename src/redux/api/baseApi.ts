/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://cyclezen-backend.vercel.app/api/v2",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
  credentials: "include",
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 400) {
    if (
      result?.error?.data &&
      typeof result.error.data === "object" &&
      "message" in result.error.data
    ) {
      toast.error((result.error.data as { message: string }).message);
    }
  }

  if (result?.error?.status === 403) {
    if (
      result?.error?.data &&
      typeof result.error.data === "object" &&
      "message" in result.error.data
    ) {
      toast.error((result.error.data as { message: string }).message);
    }
  }

  if (result?.error?.status === 404) {
    if (
      result?.error?.data &&
      typeof result.error.data === "object" &&
      "message" in result.error.data
    ) {
      toast.error((result.error.data as { message: string }).message);
    }
  }

  if (result?.error?.status === 401) {
    //* Send Refresh
    console.log("Sending refresh token");

    const res = await fetch(
      "https://cyclezen-backend.vercel.app/api/v2/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    "bicycle",
    "deleteBicycle",
    "user",
    "deleteUser",
    "order",
    "deleteOrder",
  ],
  endpoints: () => ({}),
});
