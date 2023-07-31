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

export const signUpPageSlice = createSlice({
  name: 'signUpPage',
  initialState,
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
})
