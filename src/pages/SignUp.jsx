import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Email } from "../components/Inputs/EmailInput";
import { Password } from "../components/Inputs/Password";
import { FullName } from "../components/Inputs/FullName";

export const SignUp = ({ setIsLogin }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setIsLogin(false);
  }, []);

  const signUp = (e) => {
    e.preventDefault();
    setIsLogin(true);
    return navigate("/");
  };
  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off" onSubmit={signUp}>
        <h2 className="sign-up-form__title">Sign Up</h2>
        <FullName />
        <Email />
        <Password />
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
