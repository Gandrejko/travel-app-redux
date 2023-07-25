import { Link, useNavigate } from "react-router-dom";
import { EmailInput } from "components/inputs/email-input";
import { PasswordInput } from "components/inputs/password-input";
import { FullNameInput } from "components/inputs/full-name-input";
import { Dispatch, FC, SyntheticEvent, useEffect } from "react";

interface ISignUpPageProps {
  setIsLogin: Dispatch<boolean>;
}

export const SignUpPage: FC<ISignUpPageProps> = ({ setIsLogin }) => {
  useEffect(() => {
    setIsLogin(false);
  });
  const navigate = useNavigate();

  const signUp = (e: SyntheticEvent) => {
    e.preventDefault();
    return navigate("/");
  };
  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off" onSubmit={signUp}>
        <h2 className="sign-up-form__title">Sign Up</h2>
        <FullNameInput />
        <EmailInput />
        <PasswordInput />
        <button data-test-id="auth-submit" className="button" type="submit">
          Sign Up
        </button>
      </form>
      <span>
        Already have an account?
        <Link
          data-test-id="auth-sign-in-link"
          to="/sign-in"
          className="sign-up-form__link"
        >
          Sign In
        </Link>
      </span>
    </main>
  );
};
