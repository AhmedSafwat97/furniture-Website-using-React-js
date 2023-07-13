import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SignApi = createApi({
  reducerPath: 'SignApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    // Define your API endpoints here
    Signup: builder.mutation({
      query: (userData) => ({
        url: '/signup',
        method: 'POST',
        body: userData
      }),
    }),    
    SignIn: builder.mutation({
      query: (user) => ({
        url: '/signin',
        method: 'POST',
        body: user,
      }),
    }), 
    
    
  }),
});


export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',}),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => 'user',
    }),
  }),
});




export const { useSignupMutation , useSignInMutation  } = SignApi;
export const {  useGetUserQuery   } = userApi;
export default SignApi;







