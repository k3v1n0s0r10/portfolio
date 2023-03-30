import { ChangeEvent } from "react";

import styles from "./index.module.scss";

interface Props {
  type: "text" | "number" | "tel" | "email" | "password";
  label: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<Props> = ({
  label,
  type,
  name,
  required = false,
  value,
  onChange,
}) => {
  return (
    <div className={styles.customInput}>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CustomInput;
