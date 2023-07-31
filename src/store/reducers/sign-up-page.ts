import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISignUpUserDto } from 'interfaces/dto/sign-up-user.dto';

const initialState: ISignUpUserDto = {
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
