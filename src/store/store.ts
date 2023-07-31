import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from 'api/api';
import { authSlice } from 'store/reducers/auth';
import { signInPageSlice } from 'store/reducers/sign-in-page';
import { signUpPageSlice } from 'store/reducers/sign-up-page';
import { tripSlice } from 'store/reducers/trips';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [authSlice.name]: authSlice.reducer,
  [signUpPageSlice.name]: signUpPageSlice.reducer,
  [signInPageSlice.name]: signInPageSlice.reducer,
  [tripSlice.name]: tripSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch