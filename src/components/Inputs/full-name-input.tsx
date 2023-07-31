import { Input } from "./input/input";

type Props = {
  fullName: string;
  setFullName: (email: string) => void;
};

export const FullNameInput = ({ fullName, setFullName }: Props) => (
  <Input
    data-test-id="auth-full-name"
    name="full-name"
    type="text"
    required
    labelText="Full name"
    spanClassNames="input__heading"
    value={fullName}
    onChange={(e) => {
      setFullName(e.target.value);
    }}
  />
);
