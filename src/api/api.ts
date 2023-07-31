import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBooking } from 'interfaces/booking.interface';
import { ISignInUserDto } from 'interfaces/dto/sign-in-user.dto';
import { ISignUpUserDto } from 'interfaces/dto/sign-up-user.dto';
import { ITrip } from 'interfaces/trip.interface';
import { AuthState } from 'store/reducers/auth';

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
  tagTypes: ['booking'],
  baseQuery,
  endpoints: (builder) => ({
    getAuthenticatedUser: builder.query({
      query: () => ({ url: 'auth/authenticated-user' })
    }),
    signUp: builder.mutation<AuthState, ISignUpUserDto>({
      query: (requestBody) => ({
        url: "auth/sign-up",
        method: "POST",
        body: requestBody,
      }),
    }),
    signIn: builder.mutation<AuthState, ISignInUserDto>({
      query: (requestBody) => ({
        url: "auth/sign-in",
        method: "POST",
        body: requestBody,
      }),
    }),
    getTrips: builder.query<ITrip[], void>({
      query: () => ({ url: 'trips' })
    }),
    getTripById: builder.query<ITrip, string>({
      query: (tripId) => ({ url: `trips/${tripId}` })
    }),
    getBookings: builder.query<IBooking[], void>({
      query: () => ({ url: 'bookings' }),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'booking' as const, id })), 'booking']
          : ['booking'],
    }),
    createBooking: builder.mutation({
      query: (requestBody) => ({
        url: "bookings",
        method: "POST",
        body: requestBody,
      }),
      invalidatesTags: ['booking'],
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['booking'],
    }),
  })
});

export const {
  useGetAuthenticatedUserQuery,
  useSignUpMutation,
  useSignInMutation,
  useGetTripsQuery,
  useGetTripByIdQuery,
  useGetBookingsQuery,
  useCreateBookingMutation,
  useDeleteBookingMutation,
} = api;