import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from './api/userApi'
import { postApi } from './api/postApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,

  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat([
    userApi.middleware,
    postApi.middleware
  ])

})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)