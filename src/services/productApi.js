// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://furniture-website.onrender.com/' }),
  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})



export const oneproductsApi = createApi({
  reducerPath: "oneproductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://furniture-website.onrender.com/" }),
  endpoints: (builder) => ({
    getOneProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://furniture-website.onrender.com/" }),
  endpoints: (builder) => ({
    getblogsByName: builder.query({
      query: (name) => `blogs`,
    }),
  }),
});

export const OneblogApi = createApi({
  reducerPath: "OneblogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://furniture-website.onrender.com/" }),
  endpoints: (builder) => ({
    getOneblog: builder.query({
      query: (id) => `blogs/${id}`,
    }),
    Comment: builder.mutation({
      query: (comment) => ({
        url: '/blogs/comment',
        method: 'POST',
        body: comment,
      }),
    }), 
  }),
});

export const ReviewApi = createApi({
  reducerPath: "ReviewApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://furniture-website.onrender.com/" }),
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (name) => `Review`,
    }),
  }),
});


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproductByNameQuery } = productApi
export const { useGetOneProductQuery } = oneproductsApi;
export const { useGetblogsByNameQuery } = blogsApi;
export const { useGetOneblogQuery , useCommentMutation } = OneblogApi;
export const { useGetReviewQuery } = ReviewApi;


