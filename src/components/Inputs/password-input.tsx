import { Input } from "./input/input";

type Props = {
  password: string;
  setPassword: (email: string) => void;
};

export const PasswordInput = ({ password, setPassword }: Props) => (
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
    value={password}
    onChange={(e) => {
      setPassword(e.target.value);
    }}
  />
);
