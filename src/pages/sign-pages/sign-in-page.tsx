import { Link, useNavigate } from "react-router-dom";
import { EmailInput } from "components/inputs/email-input";
import { PasswordInput } from "components/inputs/password-input";
import { Dispatch, FC, SyntheticEvent, useEffect } from "react";

import styles from "./style.module.css";

interface ISignInPageProps {
  setIsLogin: Dispatch<boolean>;
}

export const SignInPage: FC<ISignInPageProps> = ({ setIsLogin }) => {
  useEffect(() => {
    setIsLogin(false);
  });
  const navigate = useNavigate();

  const signIn = (e: SyntheticEvent): void => {
    e.preventDefault();
    return navigate("/");
  };

  return (
    <main className={styles.signPage}>
      <h1 className="visually-hidden">Travel App</h1>
      <form className={styles.form} autoComplete="off" onSubmit={signIn}>
        <h2 className={styles.formTitle}>Sign In</h2>
        <EmailInput />
        <PasswordInput />
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
