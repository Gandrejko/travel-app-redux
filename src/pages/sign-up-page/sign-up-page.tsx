import { useSignUpMutation } from 'api/api';
import { useAppSelector } from 'hooks/redux';
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { EmailInput } from "components/inputs/email-input";
import { PasswordInput } from "components/inputs/password-input";
import { FullNameInput } from "components/inputs/full-name-input";
import { FC, SyntheticEvent } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { signUpPageSlice } from 'store/reducers/sign-up-page';
import { AppDispatch, RootState } from 'store/store';

import styles from "./style.module.css";

const SignUpFullName = connect(
  (state: RootState) => ({
    fullName: state.signUpPage.fullName,
  }),
  (dispatch: AppDispatch) => ({
    setFullName: (val: string) =>
      dispatch(signUpPageSlice.actions.setFullName(val)),
  })
)(FullNameInput);

const SignUpEmail = connect(
  (state: RootState) => ({
    email: state.signUpPage.email,
  }),
  (dispatch: AppDispatch) => ({
    setEmail: (val: string) =>
      dispatch(signUpPageSlice.actions.setEmail(val)),
  })
)(EmailInput);

const SignUpPassword = connect(
  (state: RootState) => ({
    password: state.signUpPage.password,
  }),
  (dispatch: AppDispatch) => ({
    setPassword: (val: string) =>
      dispatch(signUpPageSlice.actions.setPassword(val)),
  })
)(PasswordInput);

export const SignUpPage: FC = () => {
  const [signUpMut] = useSignUpMutation();
  const pageData = useAppSelector((state) => state.signUpPage);
  const navigate = useNavigate();

  const signUp = async (e: SyntheticEvent) => {
    e.preventDefault();

    // @ts-ignore
    const { data, error } = await signUpMut(pageData);
    if(data?.token) {
      localStorage.setItem('token', data?.token);
      navigate("/");
    }
    if(error) {
      toast.error(error.data.message, {
        className: 'notification'
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <main className={styles.signPage}>
        <h1 className="visually-hidden">Travel App</h1>
        <form className={styles.form} autoComplete="off" onSubmit={signUp}>
          <h2 className={styles.formTitle}>Sign Up</h2>
          <SignUpFullName />
          <SignUpEmail />
          <SignUpPassword />
          <button data-test-id="auth-submit" className="button" type="submit">
            Sign Up
          </button>
        </form>
        <span>
        Already have an account?
        <Link
          data-test-id="auth-sign-in-link"
          to="/sign-in"
          className={styles.formLink}
        >
          Sign In
        </Link>
      </span>
      </main>
    </>
  );
};
