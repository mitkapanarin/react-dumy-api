import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyapi.io/data/v1/",
    prepareHeaders: (headers) => {
      headers.set("app-id", "6419af82fdcaee83938f8c4d");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (page) => `/user?page=${page}&limit=10`,
      method: "GET"
    }),

    getOneUser: builder.query({
      query: (id) => `/user/${id}`,
      method: "GET"
    }),

    deleteOneUser: builder.mutation({
      query: (id) => `/user/${id}`,
      method: "DELETE",
      // body: we only write body when it is POST,PUT, or PATCH Method
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery, useDeleteOneUserMutation, useGetOneUserQuery } = userApi;
