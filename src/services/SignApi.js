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
        body: userData,
      }),
    }),    
    SignIn: builder.mutation({
      query: (userData) => ({
        url: '/signin',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useSignupMutation , useSignInMutation  } = SignApi;
export default SignApi;






