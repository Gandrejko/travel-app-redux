import { createSlice } from '@reduxjs/toolkit';
import { api } from 'api/api';

type AuthState = {
  token?: string;
};
export const authSlice = createSlice({
  name: "auth",
  initialState: { token: localStorage.getItem('token') } as AuthState,
  reducers: {
    removeToken(state) {
      state.token = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      api.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
  },
});

export default authSlice.reducer;