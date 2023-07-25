import { Input } from "./input/input";

export const PasswordInput = () => (
  <Input
    data-test-id="auth-password"
    name="password"
    type="password"
    minLength={3}
    maxLength={20}
    autoComplete="new-password"
    required
    labelText="Password"
    spanClassNames="input__heading"
  />
);
