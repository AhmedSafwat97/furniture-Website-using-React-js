import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const SignApi = createApi({
  reducerPath: 'SignApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://furniture-website.onrender.com/' }),
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
    Forgotpass: builder.mutation({
      query: (body) => ({
        url: '/forgot-password',
        method: 'POST',
        body,
      }),
    }), 
    ConfirmCode: builder.mutation({
      query: (body) => ({
        url: '/confirmcode',
        method: 'POST',
        body,
      }), }), 

      ResetPass: builder.mutation({
        query: (body) => ({
          url: '/reset-password',
          method: 'POST',
          body,
        }),  }), 
        UpdateInfo : builder.mutation({
          query: (body) => ({
            url: '/update-profile',
            method: 'POST',
            body,
          }),  }), 
          Updatepass : builder.mutation({
            query: (body) => ({
              url: '/changepass',
              method: 'POST',
              body,
            }),  }), 

  }),
});





export const { useSignupMutation , useSignInMutation , 
  useForgotpassMutation , useConfirmCodeMutation , useResetPassMutation , 
  useUpdateInfoMutation , useUpdatepassMutation } = SignApi;
export default SignApi;







