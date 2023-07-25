import { Input } from "./input/input";

export const EmailInput = () => (
  <Input
    type="text"
    name="email"
    required
    labelText="Email"
    data-test-id="auth-email"
    spanClassNames="input__heading"
  />
);
