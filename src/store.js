import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { OneblogApi, ReviewApi, blogsApi, oneproductsApi, productApi } from './services/productApi'
import CartSlice from './services/CartSlice'
import favSlice  from './services/FavSlice'
import SignApi from './services/SignApi'

export const store = configureStore({
  reducer: {
    Cart : CartSlice,
    Fav : favSlice,
    // Add the generated reducer as a specific top-level slice
    [productApi.reducerPath]: productApi.reducer,
    [oneproductsApi.reducerPath]: oneproductsApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [OneblogApi.reducerPath] : OneblogApi.reducer,
    [SignApi.reducerPath] : SignApi.reducer,
    [ReviewApi.reducerPath] : ReviewApi.reducer ,


  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
    .concat(oneproductsApi.middleware).concat(blogsApi.middleware)
    .concat(OneblogApi.middleware).concat(SignApi.middleware).concat(ReviewApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)