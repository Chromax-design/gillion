import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../url";

export const PostSlice = createApi({
  reducerPath: "Post",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/` }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (payload) => ({
        url: `${payload}`,
        method: "get",
      }),
    }),
    getPost: builder.query({
      query: (payload) => ({
        url: `posts/${payload}`,
        method: "get",
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = PostSlice;
