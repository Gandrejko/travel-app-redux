import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Page = {
  email: string;
  password: string;
}

const initialState: Page = {
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
