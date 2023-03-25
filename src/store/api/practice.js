import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyapi.io/data/v1/',
  prepareHeaders: (headers, { getState }) => {
    headers.set('app-id', '6419af82fdcaee83938f8c4d')
    return headers
}
}),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery } = userApi