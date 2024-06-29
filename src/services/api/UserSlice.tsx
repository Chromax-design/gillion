import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../url";

export const UserSlice = createApi({
  reducerPath: "User",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/`  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (payload) => ({
        url: `auth/${payload}`,
      }),
    }),
  }),
});

export const { useGetUserQuery } = UserSlice;
