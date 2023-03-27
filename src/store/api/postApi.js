import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyapi.io/data/v1/',
  prepareHeaders: (headers) => {
    headers.set("app-id", "6419af82fdcaee83938f8c4d");
    return headers;
  },
}),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (page) => `/post?page=${page}&limit=10`,
      method: "GET"
    }),
    getOnePost: builder.query({
      query: (id) => `/post/${id}`,
      method: "GET"
    }),
    deleteOnePost: builder.mutation({
      query: (id) => `/user/${id}`,
      method: "DELETE",
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostsQuery, useDeleteOnePostMutation, useGetOnePostQuery } = postApi