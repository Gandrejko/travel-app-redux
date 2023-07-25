export const FullName = () => {
  return (
    <label className="input">
      <span className="input__heading">Full name</span>
      <input
        data-test-id="auth-full-name"
        name="full-name"
        type="text"
        required
      />
    </label>
  );
};
