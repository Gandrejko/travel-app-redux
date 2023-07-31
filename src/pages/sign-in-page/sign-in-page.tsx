import { useSignInMutation } from 'api/api';
import { useAppSelector } from 'hooks/redux';
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { EmailInput } from "components/inputs/email-input";
import { PasswordInput } from "components/inputs/password-input";
import { FC, SyntheticEvent } from "react";
import { signInPageSlice } from 'store/reducers/sign-in-page';
import { AppDispatch, RootState } from 'store/store';

import styles from "./style.module.css";

const SignInEmail = connect(
  (state: RootState) => ({
    email: state.signInPage.email,
  }),
  (dispatch: AppDispatch) => ({
    setEmail: (val: string) =>
      dispatch(signInPageSlice.actions.setEmail(val)),
  })
)(EmailInput);

const SignInPassword = connect(
  (state: RootState) => ({
    password: state.signInPage.password,
  }),
  (dispatch: AppDispatch) => ({
    setPassword: (val: string) =>
      dispatch(signInPageSlice.actions.setPassword(val)),
  })
)(PasswordInput);

export const SignInPage: FC = () => {
  const [signInMut, data] = useSignInMutation();
  const pageData = useAppSelector((state) => state.signInPage);
  const navigate = useNavigate();

  if(data?.data?.token) {
    localStorage.setItem('token', data?.data?.token);
  }
  const token = localStorage.getItem('token');
  if(token) {
    navigate("/");
  }

  const signIn = async (e: SyntheticEvent) => {
    e.preventDefault();

    await signInMut(pageData);
  };

  return (
    <main className={styles.signPage}>
      <h1 className="visually-hidden">Travel App</h1>
      <form className={styles.form} autoComplete="off" onSubmit={signIn}>
        <h2 className={styles.formTitle}>Sign In</h2>
        <SignInEmail />
        <SignInPassword />
        <button data-test-id="auth-submit" className="button" type="submit">
          Sign In
        </button>
      </form>
      <span>
        Don't have an account?
        <Link
          data-test-id="auth-sign-up-link"
          to="/sign-up"
          className={styles.formLink}
        >
          Sign Up
        </Link>
      </span>
    </main>
  );
};
