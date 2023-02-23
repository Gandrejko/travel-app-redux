import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Email } from "../components/Inputs/EmailInput";
import { Password } from "../components/Inputs/Password";

export const SignIn = ({ setIsLogin }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setIsLogin(false);
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    setIsLogin(true);
    return navigate("/");
  };

  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form" autoComplete="off" onSubmit={signIn}>
        <h2 className="sign-in-form__title">Sign In</h2>
        <Email />
        <Password />
        <button data-test-id="auth-submit" className="button" type="submit">
          Sign In
        </button>
      </form>
      <span>
        Don't have an account?
        <Link
          data-test-id="auth-sign-up-link"
          to="/sign-up"
          className="sign-in-form__link"
        >
          Sign Up
        </Link>
      </span>
    </main>
  );
};
