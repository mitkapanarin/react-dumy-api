import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Users"],
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
      method: "GET",
      providesTags: ["Users"]
    }),

    getOneUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET"
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),

    createUser: builder.mutation({
      query: (body) => ({
        url: `/user/create`,
        method: "POST",
        body: body
      }),
      invalidatesTags: ["Users"],
    })

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery, useDeleteUserMutation, useGetOneUserQuery, useCreateUserMutation } = userApi;
