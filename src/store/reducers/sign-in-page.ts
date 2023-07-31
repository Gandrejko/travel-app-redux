import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISignInUserDto } from 'interfaces/dto/sign-in-user.dto';

const initialState: ISignInUserDto = {
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
