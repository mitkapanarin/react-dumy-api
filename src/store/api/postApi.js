import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyapi.io/data/v1/",
    prepareHeaders: (headers) => {
      headers.set("app-id", "6419af82fdcaee83938f8c4d");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: `/post`,
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
    getOnePost: builder.query({
      query: (id) => ({
        url: `/post/${id}`,
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
    deleteOnePost: builder.mutation({
      query: (id) => ({
        url: `/post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useDeleteOnePostMutation,
  useGetOnePostQuery,
  useGetAllPostsQuery,
} = postApi;
