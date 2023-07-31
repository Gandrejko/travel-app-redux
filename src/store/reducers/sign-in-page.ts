import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Page = {
  fullName: string;
  email: string;
  password: string;
}

const initialState: Page = {
  fullName: '',
  email: '',
  password: ''
}

export const signInPageSlice = createSlice({
  name: 'signInPage',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
})
