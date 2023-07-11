import {
  Field,
  useField,
  ErrorMessage,
  ErrorMessageProps,
  useFormikContext,
} from "formik";
import React, { InputHTMLAttributes, useState, FC } from "react";
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

const validateDoB = (value: string) => {
  // Regular expression to match only numbers
  // check if user is 18 years and above
  const regEx = /^[\d]*$/;

  if (!value) {
    return "Date of birth is required";
  }

  if (!regEx.test(value)) {
    return "Invalid date of birth";
  }

  const currentYear = new Date().getFullYear();
  const userYear = parseInt(value.split("/")[2]);
  if (currentYear - userYear < 18) {
    return "You must be 18 years and above";
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

export const dobList = [
  {
    placeholder: "Day",
    name: "day",
    min: 1,
    max: 31,
    maxLength: 2,
  },
  {
    placeholder: "Month",
    name: "month",
    min: 1,
    max: 12,
    maxLength: 2,
  },
  {
    placeholder: "Year",
    name: "year",
    min: 1910,
    max: new Date().getFullYear(),
    maxLength: 4,
  },
];

let currentDOBIndex: number = 0;
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
  console.log(meta.error);
  const currentYear = new Date().getFullYear();
  const { values } = useFormikContext<any>();
  const [dob, setDob] = React.useState<{
    day: string;
    month: string;
    year: string;
  }>({
    day: values.dob ? values.dob.split("/")[1] : "",
    month: values.dob ? values.dob.split("/")[0] : "",
    year: values.dob ? values.dob.split("/")[2] : "",
  }); // DONOT CHANGE THIS ORDER
  const [activateDOBIndex, setActivateDOBIndex] = useState<number>(0);
  const inputDOBRef = React.useRef<HTMLInputElement>(null);

  const handleDOBChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let { name, value, min, max, maxLength } = e.target;
    if (isNaN(Number(value))) return;
    console.log({ name, value, min, max, field });
    // check for non-number or empty character
    if (name) {
      // check for min and max
      let valueAsNumber = parseInt(value);
      let minAsNumber = parseInt(min);
      let maxAsNumber = parseInt(max);

      // check if the value length is greater than or equal to max length
      if (value.length === maxLength) {
        if (valueAsNumber < minAsNumber) value = minAsNumber.toString();
        if (valueAsNumber > maxAsNumber) value = maxAsNumber.toString();
      }
      setDob((prev) => ({ ...prev, [name]: value }));
      if (value.length === maxLength) {
        if (index < dobList.length - 1) {
          setActivateDOBIndex(index + 1);
        } else {
          inputDOBRef.current?.blur();
          // setActivateDOBIndex(0);
        }
      }
    }
  };

  React.useEffect(() => {
    if (inputDOBRef.current) inputDOBRef.current.focus();
  }, [activateDOBIndex]);

  // set dob to formik values
  React.useEffect(() => {
    if (
      typeof dob.day === "string" &&
      parseInt(dob.day) > 0 &&
      parseInt(dob.day) < 32 &&
      typeof dob.month === "string" &&
      parseInt(dob.month) > 0 &&
      parseInt(dob.month) < 13 &&
      typeof dob.year === "string" &&
      parseInt(dob.year) > 1909 &&
      parseInt(dob.year) < currentYear
    ) {
      // console.log("dob", dob);
      field.onChange({
        target: {
          name: "dob",
          value: `${dob.month}/${dob.day}/${dob.year}`,
        },
      });
    } else {
      field.onChange({
        target: {
          name: "dob",
          value: "",
        },
      });
    }
  }, [dob]);

  return (
    <div
      className={`${props.className ? "w-auto" : "w-full"} flex flex-col gap-2`}
    >
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </label>
      )}
      {helpText && <p className="text-xs text-gray-500 mb-2">{helpText}</p>}
      {name === "dob" ? (
        <div className="flex gap-5 w-full justify-between">
          {dobList.map((n, index) => (
            <React.Fragment key={index}>
              <input
                ref={index === activateDOBIndex ? inputDOBRef : null}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={n.maxLength}
                placeholder={n.placeholder}
                onChange={(e) => handleDOBChange(e, index)}
                name={n.name}
                value={Object.values(dob)[index] || ""}
                min={n.min}
                max={n.max}
                className={`${
                  meta.error && meta.touched ? "border-red-400" : ""
                }
            w-32 h-12 text-center`}
              />
            </React.Fragment>
          ))}
          <Field
            type="hidden"
            name={field.name}
            value={`${dob.month}/${dob.day}/${dob.year}`}
          />
        </div>
      ) : (
        <div className="relative items-center flex">
          <Field
            validate={type === "phone" ? validatePhone : null}
            type={type === "phone" || type === "number" ? undefined : type}
            pattern={
              type === "phone"
                ? "[0-9]{10}"
                : type === "number"
                ? "[0-9]*"
                : undefined
            }
            inputMode={
              type === "phone" || type === "number" ? "numeric" : undefined
            }
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

interface Props {
  setValue: (value: string) => void;
  loading?: boolean;
  label?: string;
}
let currentOTPIndex: number = 0;
export const OTPField: FC<Props> = ({
  setValue,
  loading,
  label,
}): JSX.Element => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activateOTPIndex, setActivateOTPIndex] = useState<number>(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // check for non-number or empty character
    if (isNaN(Number(value))) return;
    // check if value contains more than 1 character
    const newOTP: string[] = [...otp];
    if (value.length > 1) {
      const otpArray = value.split("");
      otpArray.forEach((num, i) => {
        if (currentOTPIndex + i < otp.length) {
          newOTP[currentOTPIndex + i] = num;
        }
        // set focus on the last input
        if (i === otpArray.length - 1)
          setActivateOTPIndex(
            currentOTPIndex === 5
              ? 5
              : currentOTPIndex + i === 5
              ? 5
              : currentOTPIndex + i + 1
          );
      });
    } else {
      newOTP[currentOTPIndex] = value.substring(value.length - 1, value.length);
      if (!value)
        setActivateOTPIndex(currentOTPIndex > 0 ? currentOTPIndex - 1 : 0);
      else setActivateOTPIndex(currentOTPIndex === 5 ? 5 : currentOTPIndex + 1);
    }

    // check if otp is complete, then blur input
    if (newOTP.every((num) => num !== "")) {
      if (inputRef.current) inputRef.current.blur();
    }

    setOtp(newOTP);
  };

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (e.key === "Backspace") {
      setActivateOTPIndex(currentOTPIndex > 0 ? currentOTPIndex - 1 : 0);
    }
  };

  React.useEffect(() => {
    // unfocus input if otp is complete
    if (inputRef.current) inputRef.current.focus();
  }, [activateOTPIndex]);

  // set value to parent
  React.useEffect(() => {
    // check if otp is complete
    if (otp.length === 6 && otp.every((num) => num !== ""))
      setValue(otp.reduce((acc, num) => acc + num, ""));
  }, [otp]);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-gray-500 text-sm font-semibold mt-2">
          {label}
        </label>
      )}
      <div className="h-auto flex relative justify-center items-center gap-2">
        {/* Loader */}
        <div
          className={`absolute w-full h-full transition-all duration-200 right-0 flex justify-center items-center ${
            !loading
              ? "opacity-0 pointer-events-none bg-transparent z-0"
              : "opacity-100 bg-[#fffa] pointer-events-auto z-[1] backdrop-blur-sm"
          }`}
        >
          <div className="w-8 h-8 border-2 rounded-full border-themeColor border-l-transparent animate-spin" />
        </div>
        {otp.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <input
                ref={index === activateOTPIndex ? inputRef : null}
                // type="number"
                pattern="[0-9]*"
                value={otp[index]}
                onChange={handleChange}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                inputMode="numeric"
                disabled={loading}
                className="w-12 h-12 border-2 rounded disabled:animate-pulse disabled:opacity-50 bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
              />
              {index === otp.length - 1 ? null : (
                <span className="w-2 py-0.5 bg-gray-400" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
