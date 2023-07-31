import { createSlice } from '@reduxjs/toolkit';
import { api } from 'api/api';
import { IUserDto } from 'interfaces/dto/user.dto';

export interface AuthState {
  token?: string,
  user?: IUserDto,
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || undefined,
  user: undefined,
}
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeUserData(state) {
      state.token = undefined;
      state.user = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      api.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      }
    );
  },
});

export default authSlice.reducer;