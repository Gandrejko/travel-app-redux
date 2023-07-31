import { createSlice } from '@reduxjs/toolkit';
import { api } from 'api/api';
import { ITrip } from 'interfaces/trip.interface';

type TripsState = {
  trips: ITrip[],
};
export const tripsSlice = createSlice({
  name: "trips",
  initialState: { trips: [] } as TripsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getTrips.matchFulfilled,
      (state, { payload }) => {
        // @ts-ignore
        state.trips = payload.data;
      }
    );
  }
});

export default tripsSlice.reducer;