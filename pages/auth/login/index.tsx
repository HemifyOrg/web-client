import { useState, useEffect, SetStateAction } from "react";
import { InputField, TextError, OTPField } from "@/components/reusable/formik";
import {
  ErrorMessage,
  Form,
  Formik,
  FormikErrors,
  FormikTouched,
} from "formik";
import * as Yup from "yup";
import { AnimatePresence } from "framer-motion";
import { Slide, TimerComponent } from "@/components/reusable";
import Link from "next/link";

const SignupPage = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    checkedTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });
  const initialValues = {
    email: "",
    checkedTerms: true,
  };
  const fieldsList = [
    {
      name: "email",
      label: "Sign in with Email",
      type: "email",
      placeholder: "example@email.com",
      autoComplete: "email",
      className:
        "relative items-center flex border rounded-xl py-2 px-4 w-full bg-white",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
        >
          <path
            d="M0.5 1.375H15.5M0.5 1.375V12C0.5 12.1658 0.565848 12.3247 0.683058 12.4419C0.800269 12.5592 0.95924 12.625 1.125 12.625H14.875C15.0408 12.625 15.1997 12.5592 15.3169 12.4419C15.4342 12.3247 15.5 12.1658 15.5 12V1.375M0.5 1.375L8 8.25L15.5 1.375"
            stroke="#A0A4A8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [containerOverflowChanged, setContainerOverflowChanged] =
    useState(false);

  const goToNextSlide = () => {
    setContainerOverflowChanged(true);
    setCurrentSlide((prevSlide) => prevSlide + 1);
    setTimeout(() => {
      setContainerOverflowChanged(false);
    }, 600);
  };

  const jumpToSlide = (slideNumber: number) => {
    setContainerOverflowChanged(true);
    setCurrentSlide(slideNumber);
    setTimeout(() => {
      setContainerOverflowChanged(false);
    }, 600);
  };

  const SlidesComponent = ({
    ...props
  }: {
    currentSlide: number;
    setValues: (values: SetStateAction<typeof initialValues>) => void;
    values: typeof initialValues;
    touched: FormikTouched<typeof initialValues>;
    errors: FormikErrors<typeof initialValues>;
  }) => {
    const [otpValue, setOTPValue] = useState("");
    const [email, setEmail] = useState("");

    // use 'useEffect' to set email value
    useEffect(() => {
      if (!props.values.email) return;
      const email = props.values.email;
      const hiddenEmail = email
        .substring(4, 8) // remove last character
        .replace(/./g, "*"); // replace all characters with '*'
      const firstFourChar = email.substring(0, 4); // get the first 4 characters of the email
      const lastChar = email.substring(email.indexOf("@") + 1); // get the last character after '@'
      const newEmail = firstFourChar + hiddenEmail + "@" + lastChar; // add the last character back
      setEmail(newEmail); // set the new email
    }, [props.values.email]);

    const [loading, setLoading] = useState(false);

    const [sentOTP, setSentOTP] = useState(false);

    // use 'useEffect' to check if otp is valid, then trigger 'goToNextSlide'
    useEffect(() => {
      if (otpValue.length === 6 && otpValue === "123456") {
        setLoading(true);
      }
    }, [otpValue]);

    const handleTimerUpdate = (isEnded: boolean) => {
      if (isEnded === true) {
        setSentOTP(false);
      }
    };

    return [
      <>
        {fieldsList.slice(0, 4).map((field, index) => (
          <InputField {...field} key={index} />
        ))}
      </>,
      <div className="flex flex-col gap-5 py-2">
        <p className="text-gray-500 text-sm">
          We have sent a 6-digit code to your email address{" "}
          <span className="text-themeColor font-semibold">{email}</span>{" "}
          <button
            type="button"
            className="text-themeColor underline text-sm"
            onClick={() => jumpToSlide(0)}
          >
            (change email)
          </button>
        </p>
        <OTPField
          label="Enter Verification Code"
          setValue={setOTPValue}
          loading={loading}
        />
        <div className="flex flex-col justify-center items-center">
          <span className="text-sm font-semibold">
            Didn't receive the code?{" "}
          </span>
          <div className="flex gap-1">
            <button
              type="button"
              disabled={sentOTP}
              onClick={() => {
                setSentOTP(true);
              }}
              className="text-themeColor disabled:opacity-50 underline font-semibold text-sm"
            >
              Resend {!sentOTP && "Code"}
            </button>
            {sentOTP && (
              <>
                <span className="text-sm">after</span>
                <TimerComponent
                  className="text-themeColor font-semibold text-sm"
                  duration={60}
                  onUpdate={handleTimerUpdate}
                />
              </>
            )}
          </div>
        </div>
      </div>,
    ][currentSlide];
  };
  return (
    <section className="md:mt-32 mt-20 mb-12 py-6 sm:px-12 px-6 gap-4 h-full flex w-full md:w-[45%] lg:w-1/3 m-auto flex-col items-center justify-start lg:justify-center">
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <h4>Sign in now and get back to the excitement!</h4>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          if (currentSlide === 0) {
            goToNextSlide();
            return;
          }
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ dirty, setValues, values, touched, errors }) => (
          <>
            <Form
              className={`form flex flex-col my-16 gap-8 ${
                containerOverflowChanged ? "overflow-hidden" : ""
              }  w-full`}
            >
              <AnimatePresence initial={false} custom={currentSlide}>
                <Slide
                  className="flex flex-col gap-8 justify-start items-center transition-transform duration-100"
                  key={currentSlide}
                >
                  <SlidesComponent
                    setValues={setValues}
                    currentSlide={currentSlide}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                </Slide>
              </AnimatePresence>

              <div className="flex gap-4 my-2 justify-center items-center w-full">
                <button
                  type={currentSlide === 1 ? "submit" : "button"}
                  onClick={currentSlide === 0 ? goToNextSlide : undefined}
                  disabled={
                    !dirty ||
                    typeof errors.email === "string" ||
                    typeof errors.checkedTerms === "string"
                  }
                  className="disabled:bg-[#F1F5F9] bg-themeColor disabled:cursor-not-allowed border disabled:opacity-50 rounded-full px-5 w-full active:scale-90 transition-all disabled:text-gray-700 text-gray-50 font-medium py-4"
                >
                  {currentSlide === 1 ? "Verify" : "Login"}
                </button>
              </div>
              {currentSlide === 0 && (
                <>
                  {/* or divider */}
                  <div className="flex w-full items-center justify-center gap-2">
                    <div className="w-full border-b-2 border-gray-200"></div>
                    <span className="text-gray-800 text-base font-medium mx-2">
                      Or
                    </span>
                    <div className="w-full border-b-2 border-gray-200"></div>
                  </div>
                  <button
                    type="button"
                    className=" border-themeColor justify-center items-center flex gap-2 border-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-full px-5 w-full active:scale-90 transition-all text-themeColor font-medium py-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      className="stroke-themeColor"
                    >
                      <path
                        d="M14.25 11.6667H14.2583M3 4.16667V15.8333C3 16.7538 3.74619 17.5 4.66667 17.5H16.3333C17.2538 17.5 18 16.7538 18 15.8333V7.5C18 6.57953 17.2538 5.83333 16.3333 5.83333L4.66667 5.83333C3.74619 5.83333 3 5.08714 3 4.16667ZM3 4.16667C3 3.24619 3.74619 2.5 4.66667 2.5H14.6667M14.6667 11.6667C14.6667 11.8968 14.4801 12.0833 14.25 12.0833C14.0199 12.0833 13.8333 11.8968 13.8333 11.6667C13.8333 11.4365 14.0199 11.25 14.25 11.25C14.4801 11.25 14.6667 11.4365 14.6667 11.6667Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm">Login with wallet</span>
                  </button>
                  <span className="mx-auto mt-2 flex gap-2">
                    Don’t have an account?
                    <Link
                      href="/auth/signup"
                      className="border-b border-themeColor hover:bor"
                    >
                      <span className="text-themeColor font-semibold">
                        Create one
                      </span>
                    </Link>
                  </span>
                </>
              )}
            </Form>
          </>
        )}
      </Formik>
    </section>
  );
};

export default SignupPage;
