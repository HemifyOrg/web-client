import { Field, useField, ErrorMessage, ErrorMessageProps } from "formik";
import { InputHTMLAttributes } from "react";

const validatePhone = (value: string) => {
  // Regular expression to match only numbers
  const regEx = /^[\d]*$/;

  if (!value) {
    return "Phone number is required";
  }

  if (!regEx.test(value)) {
    return "Invalid phone number";
  }

  return undefined;
};

export const TextError = (props: ErrorMessageProps | any) => {
  const { errors } = props;
  return <div className="text-sm text-red-500 text-left">{props.children}</div>;
};

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  hideError?: boolean;
};

export const InputField = ({
  name,
  label,
  hideError,
  type,
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(name);
  return (
    <div className={`w-full`}>
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold"
          htmlFor={field.name}
        >
          {label}
        </label>
      )}
      <Field
        validate={type === "phone" ? validatePhone : null}
        type={type === "phone" ? "number" : type}
        className={`${
          meta.error && meta.touched ? "border-red-400" : ""
        }`}
        {...field}
        {...props}
      />
      {!hideError && (
        <ErrorMessage
          name={field.name}
          component={TextError}
          className="text-red-500 text-xs"
        />
      )}
    </div>
  );
};
