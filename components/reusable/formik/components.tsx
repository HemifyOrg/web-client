import { Field, useField, ErrorMessage, ErrorMessageProps } from "formik";
import React, { InputHTMLAttributes } from "react";
import { motion } from "framer-motion";
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
  return (
    <motion.div
      initial={{ opacity: -1, y: "-100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: -1, y: "100%" }}
      className="text-sm text-red-500 text-left"
    >
      {props.children}
    </motion.div>
  );
};

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  hideError?: boolean;
  helpText?: string;
  infoText?: string;
  loading?: boolean;
};

export const InputField = ({
  name,
  label,
  hideError,
  type,
  helpText,
  infoText,
  loading,
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
          value: `${dob.month}/${dob.day}/${dob.year}`,
        },
      });
    }
  }, [dob]);
  return (
    <div className={`w-full flex flex-col gap-2`}>
      {label && (
        <label
          className="flex items-center gap-1 text-gray-700 text-sm font-bold"
          htmlFor={field.name}
        >
          <span className="capitalize">{label}</span>
          {infoText && (
            <div className="group cursor-pointer relative">
              <span
                className="absolute hidden group-hover:flex -left-[5.6rem] -top-2 -translate-y-full w-48 px-2 py-1
               bg-primary shadow-md rounded-lg text-center text-themeColor text-sm
               
               after:content-[''] after:absolute 
               after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent
                after:border-b-transparent after:border-t-primary"
              >
                {infoText}
              </span>
              <svg
                className="w-3 h-3"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 6.6669V5.00024M5 3.33357H5.00417M1.25 3.30917V6.6913C1.25 6.83407 1.25 6.90545 1.27104 6.96912C1.28964 7.02544 1.32007 7.07715 1.36026 7.12077C1.4057 7.17007 1.4681 7.20474 1.5929 7.27407L4.67624 8.98704C4.79441 9.05269 4.85349 9.08551 4.91606 9.09838C4.97144 9.10977 5.02856 9.10977 5.08394 9.09838C5.14651 9.08551 5.20559 9.05269 5.32376 8.98704L8.4071 7.27407C8.5319 7.20474 8.5943 7.17007 8.63974 7.12077C8.67993 7.07715 8.71036 7.02544 8.72896 6.96912C8.75 6.90545 8.75 6.83407 8.75 6.6913V3.30917C8.75 3.16641 8.75 3.09502 8.72896 3.03136C8.71036 2.97503 8.67993 2.92333 8.63974 2.87971C8.5943 2.8304 8.5319 2.79574 8.4071 2.7264L5.32376 1.01344C5.20559 0.94779 5.14651 0.914966 5.08394 0.902097C5.02856 0.890707 4.97144 0.890707 4.91606 0.902097C4.85349 0.914966 4.79441 0.94779 4.67624 1.01344L1.5929 2.7264C1.4681 2.79574 1.4057 2.8304 1.36026 2.87971C1.32007 2.92333 1.28964 2.97503 1.27104 3.03136C1.25 3.09502 1.25 3.16641 1.25 3.30917Z"
                  stroke="#D2B37D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}
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
        <div className="relative items-center flex">
          <Field
            validate={type === "phone" ? validatePhone : null}
            type={type === "phone" ? "number" : type}
            className={`${meta.error && meta.touched ? "border-red-400" : ""}`}
            {...field}
            {...props}
          />
          {loading && (
            <div
              className="inline-block input-loader pointer-events-none absolute right-2 h-4 w-4 animate-spin rounded-full border-2 border-solid border-themeColor border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
        </div>
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
