import { createSlice } from '@reduxjs/toolkit';
import { api } from 'api/api';
import { IBooking } from 'interfaces/booking.interface';

type BookingsState = {
  bookings: IBooking[],
};
export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: { bookings: [] } as BookingsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getBookings.matchFulfilled,
      (state, { payload }) => {
        // @ts-ignore
        state.bookings = payload.data;
      }
    );
  }
});

export default bookingsSlice.reducer;