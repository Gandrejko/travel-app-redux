export const Email = () => {
  return (
    <label className="input">
      <span className="input__heading">Email</span>
      <input data-test-id="auth-email" name="email" type="email" required />
    </label>
  );
};
