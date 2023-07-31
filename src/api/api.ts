import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://binary-travel-app.xyz/api/v1/',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token') || '';
    headers.set('Authorization', `Bearer ${token}`);
    headers.set('access', 'application/json');
    return headers
  },
})

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({
    getAuthenticatedUser: builder.query({
      query: () => ({ url: 'auth/authenticated-user' })
    }),
    signUp: builder.mutation({
      query: (requestBody) => ({
        url: "auth/sign-up",
        method: "POST",
        body: requestBody,
      }),
    }),
    signIn: builder.mutation({
      query: (requestBody) => ({
        url: "auth/sign-in",
        method: "POST",
        body: requestBody,
      }),
    }),
    getTrips: builder.query({
      query: () => ({ url: 'trips' })
    }),
    getTripById: builder.query({
      query: (tripId) => ({ url: `trips/${tripId}` })
    }),
  })
});

export const {
  useGetAuthenticatedUserQuery,
  useSignUpMutation,
  useSignInMutation,
  useGetTripsQuery,
  useGetTripByIdQuery,
} = api;