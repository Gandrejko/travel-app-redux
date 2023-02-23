export const Password = () => {
  return (
    <label className="input">
      <span className="input__heading">Password</span>
      <input
        data-test-id="auth-password"
        name="password"
        type="password"
        minLength="3"
        maxLength="20"
        autoComplete="new-password"
        required
      />
    </label>
  );
};
