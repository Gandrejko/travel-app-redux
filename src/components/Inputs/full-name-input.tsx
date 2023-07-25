import { Input } from './input/input';

export const FullNameInput = () => (
  <Input
    data-test-id="auth-full-name"
    name="full-name"
    type="text"
    required
    labelText='Full name'
    spanClassNames='input__heading'
  />
);
