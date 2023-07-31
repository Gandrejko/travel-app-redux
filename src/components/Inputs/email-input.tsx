import { Input } from "./input/input";

type Props = {
  email: string;
  setEmail: (email: string) => void;
};

export const EmailInput = ({ email, setEmail }: Props) => (
  <Input
    type="text"
    name="email"
    required
    labelText="Email"
    data-test-id="auth-email"
    spanClassNames="input__heading"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
    }}
  />
);
