import { FC, InputHTMLAttributes } from "react";
import { mergeClassnames } from "../../../helpers/merge-classnames";
import styles from "./style.module.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  labelClassNames?: string;
  spanClassNames?: string;
  inputClassNames?: string;
}

export const Input: FC<IInputProps> = ({
  labelText = "",
  labelClassNames = "",
  spanClassNames = "",
  inputClassNames = "",
  ...attributes
}) => {
  const labelClassName = mergeClassnames([styles.label, labelClassNames]);
  const inputClassName = mergeClassnames([styles.input, inputClassNames]);

  return (
    <label className={labelClassName}>
      <span className={spanClassNames}>{labelText}</span>
      <input className={inputClassName} {...attributes} />
    </label>
  );
};
