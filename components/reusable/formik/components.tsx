import { Field, useField, ErrorMessage, ErrorMessageProps } from "formik";
import React, { InputHTMLAttributes } from "react";

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
  return <div className="text-sm text-red-500 text-left">{props.children}</div>;
};

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  hideError?: boolean;
  helpText?: string;
};

export const InputField = ({
  name,
  label,
  hideError,
  type,
  helpText,
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(name);
  const currentYear = new Date().getFullYear();
  const [dob, setDob] = React.useState<{
    day: number | string;
    month: number | string;
    year: number | string;
  }>({
    day: "",
    month: "",
    year: "",
  });
  // set dob to formik values
  React.useEffect(() => {
    if (dob.day && dob.month && dob.year) {
      field.onChange({
        target: {
          name: "dob",
          value: `${dob.day}/${dob.month}/${dob.year}`,
        },
      });
    }
  }, [dob]);
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
      {helpText && <p className="text-xs text-gray-500 mb-2">{helpText}</p>}
      {name === "dob" ? (
        <div className="flex gap-5 w-full justify-between">
          <input
            type={"number"}
            placeholder={"Day"}
            onChange={(e) => setDob({ ...dob, day: e.target.value })}
            value={dob.day}
            min={1}
            max={31}
            className={`${meta.error && meta.touched ? "border-red-400" : ""}
            w-32 h-12 text-center`}
          />
          <input
            type={"number"}
            placeholder={"Month"}
            onChange={(e) => setDob({ ...dob, month: e.target.value })}
            value={dob.month}
            min={1}
            max={12}
            className={`${meta.error && meta.touched ? "border-red-400" : ""}
            w-32 h-12 text-center`}
          />
          <input
            type={"number"}
            placeholder={"Year"}
            onChange={(e) => setDob({ ...dob, year: e.target.value })}
            value={dob.year}
            min={1900}
            max={currentYear}
            className={`${meta.error && meta.touched ? "border-red-400" : ""}
            w-32 h-12 text-center`}
          />
        </div>
      ) : (
        <Field
          validate={type === "phone" ? validatePhone : null}
          type={type === "phone" ? "number" : type}
          className={`${meta.error && meta.touched ? "border-red-400" : ""}`}
          {...field}
          {...props}
        />
      )}

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
