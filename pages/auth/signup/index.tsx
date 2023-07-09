import { useState } from "react";
import {
  AuthHeader,
  InputField,
  TextError,
} from "@/components/reusable/formik";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { AnimatePresence } from "framer-motion";
import { Slide } from "@/components/reusable";
import { motion } from "framer-motion";
import Link from "next/link";

const SignupPage = () => {
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    dob: Yup.string().required("Date of birth is required"),
    checkedTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });
  const initialValues = {
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    dob: "",
    referralCode: "",
    checkedTerms: true,
  };
  const fieldsList = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      infoText: "Your full name will not be visible to other users",
      placeholder: "Enter your legal First and Last name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      infoText: "We'll never share your email with anyone else.",
      placeholder: "Enter a valid email address",
      autoComplete: "email",
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      infoText: "Your username will be visible to other users",
      placeholder: "Enter your preferred username",
      autoComplete: "username",
    },
    {
      name: "dob",
      label: "Date of Birth",
      type: "number",
      helpText: "Format: DD-MM-YYYY",
      infoText: "We require your date of birth to verify your age",
      placeholder: "Enter your date of birth",
      autoComplete: "dob",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      infoText: "Your password must be at least 8 characters long",
      placeholder: "Enter a strong password",
      autoComplete: "new-password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      infoText: "Your password must be at least 8 characters long",
      placeholder: "Confirm your password",
      autoComplete: "new-password",
    },
    {
      name: "referralCode",
      label: "Referral Code",
      type: "text",
      infoText: "Enter a referral code if you have one",
      placeholder: "Enter a referral code",
      autoComplete: "off",
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

  const goToPreviousSlide = () => {
    setContainerOverflowChanged(true);
    setCurrentSlide((prevSlide) => prevSlide - 1);
    setTimeout(() => {
      setContainerOverflowChanged(false);
    }, 600);
  };
  const SlidesComponent = ({
    ...props
  }: {
    currentSlide: number;
    setValues: any;
    values: any;
    touched: any;
    errors: any;
  }) => {
    return [
      <>
        {fieldsList.slice(0, 4).map((field, index) => (
          <InputField {...field} key={index} />
        ))}
      </>,
      <>
        {fieldsList.slice(4, 7).map((field, index) => (
          <InputField {...field} key={index} />
        ))}
        {/* term and condition checkbox */}
        <label className="flex items-center justify-start gap-2">
          <InputField
            name="checkedTerms"
            type="checkbox"
            hideError={true}
            onChange={(e: any) => {
              props.setValues({
                ...props.values,
                checkedTerms: e.target.checked,
              });
            }}
            checked={props.values.checkedTerms}
            className="form-checkbox h-5 !w-5 text-themeColor"
          />
          <span className="text-gray-500 text-sm flex gap-1 flex-wrap w-full">
            By signing up you agree to our
            <Link href={`/pages/terms-of-use`} className="text-themeColor">
              <span>Terms of Use</span>
            </Link>
            and
            <Link href={`/pages/privacy-policy`} className="text-themeColor">
              <span>Privacy Policy</span>
            </Link>
          </span>
        </label>
        <div className="ml-5">
          <ErrorMessage
            name={"checkedTerms"}
            component={TextError}
            className="text-red-500 text-xs"
          />
        </div>
      </>,
      // <div>Slide 3</div>,
    ][currentSlide];
  };
  return (
    <main className="md:mt-32 mt-20 mb-12 p-4 gap-4 h-full flex w-full md:w-[45%] lg:w-1/3 m-auto flex-col items-center justify-start lg:justify-center">
      <AuthHeader type="signup" />
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        validate={(values) => {
          // check if user is 18 years or older
          const dob = new Date(values.dob);
          const today = new Date();
          const age = today.getFullYear() - dob.getFullYear();
          if (age < 18) {
            return { dob: "You must be 18 years or older to use our platform" };
          }
          return;
        }}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ dirty, setValues, values, touched, errors }) => (
          <>
            {/* flight indicator */}
            <div className="py-2 w-full relative flex items-center justify-center">
              <div className="w-full border-b-4 border-dashed border-themeColor"></div>
              <svg
                viewBox="0 0 23 22"
                fill="none"
                className={`absolute top-0 ${
                  currentSlide > 1
                    ? "left-full"
                    : currentSlide > 0
                    ? "left-2/4"
                    : "-left-2"
                } w-6 h-6 transition-all duration-500`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_3122_38071)">
                  {dirty && (
                    <path
                      d="M16.7575 7.33101C17.6527 7.30988 18.3932 8.02607 18.4017 8.92131C18.41 9.79202 17.7214 10.5086 16.8509 10.5351L14.2546 10.6143C14.0511 10.6205 13.9493 10.6236 13.858 10.6546C13.7772 10.682 13.7026 10.7253 13.6387 10.7818C13.5664 10.8456 13.5133 10.9323 13.407 11.1057L10.8177 15.3313C10.7086 15.5093 10.6541 15.5983 10.5797 15.6631C10.5139 15.7205 10.437 15.7638 10.3538 15.7906C10.2598 15.8208 10.1553 15.8216 9.94636 15.8232L9.60783 15.8257C9.05439 15.8298 8.77767 15.8318 8.60991 15.7166C8.46341 15.6159 8.36474 15.4594 8.33711 15.284C8.30547 15.083 8.42686 14.8347 8.66965 14.338L10.4697 10.6552L7.41527 10.6779C7.23294 10.6793 7.14178 10.68 7.05784 10.7038C6.98347 10.7249 6.91352 10.7592 6.85134 10.805C6.78114 10.8568 6.72487 10.9284 6.61233 11.0715L5.94938 11.915C5.83684 12.0582 5.78057 12.1298 5.71037 12.1815C5.64818 12.2274 5.57824 12.2616 5.50387 12.2827C5.41992 12.3065 5.32876 12.3072 5.14644 12.3086L4.96611 12.3099C4.53418 12.3131 4.31822 12.3147 4.16611 12.2271C4.03269 12.1503 3.93098 12.0285 3.87931 11.8835C3.8204 11.7183 3.86073 11.5062 3.94141 11.0822L4.28234 9.29002C4.29676 9.21426 4.30396 9.17638 4.30662 9.13821C4.30898 9.1043 4.30865 9.07025 4.30565 9.03639C4.30227 8.99826 4.29434 8.96049 4.27849 8.88495L3.90345 7.09813C3.81471 6.67533 3.77034 6.46393 3.82609 6.29781C3.875 6.15211 3.97436 6.02876 4.1063 5.94998C4.25672 5.86015 4.47269 5.85854 4.90461 5.85533L5.08494 5.85399C5.26726 5.85264 5.35843 5.85196 5.44281 5.87452C5.51757 5.8945 5.58816 5.92774 5.65121 5.97266C5.72239 6.02336 5.78001 6.0941 5.89527 6.23559L6.57419 7.06907C6.68945 7.21055 6.74707 7.2813 6.81825 7.332C6.8813 7.37691 6.95189 7.41016 7.02665 7.43014C7.11103 7.45269 7.2022 7.45201 7.38452 7.45066L10.4389 7.42796L8.56899 3.77252C8.31677 3.27948 8.19066 3.03295 8.21847 2.83159C8.24275 2.65576 8.33843 2.49785 8.48298 2.39501C8.64853 2.27724 8.92525 2.27518 9.47868 2.27107L9.81721 2.26855C10.0262 2.267 10.1307 2.26622 10.2252 2.29505C10.3089 2.32057 10.3866 2.3628 10.4535 2.41919C10.5291 2.4829 10.5854 2.57107 10.6978 2.74743L13.3572 6.918C13.4677 7.0913 13.5229 7.17795 13.5967 7.24084C13.6679 7.30156 13.7515 7.34612 13.8415 7.37143C13.9348 7.39764 14.0375 7.39522 14.2428 7.39038L16.7575 7.33101Z"
                      fill="#2D4C82"
                    />
                  )}
                  <path
                    d="M16.7575 7.33101C17.6527 7.30988 18.3932 8.02607 18.4017 8.92131C18.41 9.79202 17.7214 10.5086 16.8509 10.5351L14.2546 10.6143C14.0511 10.6205 13.9493 10.6236 13.858 10.6546C13.7772 10.682 13.7026 10.7253 13.6387 10.7818C13.5664 10.8456 13.5133 10.9323 13.407 11.1057L10.8177 15.3313C10.7086 15.5093 10.6541 15.5983 10.5797 15.6631C10.5139 15.7205 10.437 15.7638 10.3538 15.7906C10.2598 15.8208 10.1553 15.8216 9.94636 15.8232L9.60783 15.8257C9.05439 15.8298 8.77767 15.8318 8.60991 15.7166C8.46341 15.6159 8.36474 15.4594 8.33711 15.284C8.30547 15.083 8.42686 14.8347 8.66965 14.338L10.4697 10.6552L7.41527 10.6779C7.23294 10.6793 7.14178 10.68 7.05784 10.7038C6.98347 10.7249 6.91352 10.7592 6.85134 10.805C6.78114 10.8568 6.72487 10.9284 6.61233 11.0715L5.94938 11.915C5.83684 12.0582 5.78057 12.1298 5.71037 12.1815C5.64818 12.2274 5.57824 12.2616 5.50387 12.2827C5.41992 12.3065 5.32876 12.3072 5.14644 12.3086L4.96611 12.3099C4.53418 12.3131 4.31822 12.3147 4.16611 12.2271C4.03269 12.1503 3.93098 12.0285 3.87931 11.8835C3.8204 11.7183 3.86073 11.5062 3.94141 11.0822L4.28234 9.29002C4.29676 9.21426 4.30396 9.17638 4.30662 9.13821C4.30898 9.1043 4.30865 9.07025 4.30565 9.03639C4.30227 8.99826 4.29434 8.96049 4.27849 8.88495L3.90345 7.09813C3.81471 6.67533 3.77034 6.46393 3.82609 6.29781C3.875 6.15211 3.97436 6.02876 4.1063 5.94998C4.25672 5.86015 4.47269 5.85854 4.90461 5.85533L5.08494 5.85399C5.26726 5.85264 5.35843 5.85196 5.44281 5.87452C5.51757 5.8945 5.58816 5.92774 5.65121 5.97266C5.72239 6.02336 5.78001 6.0941 5.89527 6.23559L6.57419 7.06907C6.68945 7.21055 6.74707 7.2813 6.81825 7.332C6.8813 7.37691 6.95189 7.41016 7.02665 7.43014C7.11103 7.45269 7.2022 7.45201 7.38452 7.45066L10.4389 7.42796L8.56899 3.77252C8.31677 3.27948 8.19066 3.03295 8.21847 2.83159C8.24275 2.65576 8.33843 2.49785 8.48298 2.39501C8.64853 2.27724 8.92525 2.27518 9.47868 2.27107L9.81721 2.26855C10.0262 2.267 10.1307 2.26622 10.2252 2.29505C10.3089 2.32057 10.3866 2.3628 10.4535 2.41919C10.5291 2.4829 10.5854 2.57107 10.6978 2.74743L13.3572 6.918C13.4677 7.0913 13.5229 7.17795 13.5967 7.24084C13.6679 7.30156 13.7515 7.34612 13.8415 7.37143C13.9348 7.39764 14.0375 7.39522 14.2428 7.39038L16.7575 7.33101Z"
                    stroke="#2D4C82"
                    strokeWidth="0.989988"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <Form
              className={`form md:p-2 flex flex-col gap-8 ${
                containerOverflowChanged ? "overflow-hidden" : ""
              }  md:border-[0.5px] md:border-themeColor md:bg-white  w-full`}
            >
              <AnimatePresence initial={false} custom={currentSlide}>
                <Slide
                  className="flex flex-col gap-8 justify-start items-center transition-transform duration-100"
                  key={currentSlide}
                  direction={currentSlide === 1 ? "right" : "left"}
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
                <motion.button
                  initial={{ opacity: 0, left: "-100%", display: "none" }}
                  animate={
                    !(currentSlide > 0)
                      ? { opacity: 0, left: "-100%", display: "none" }
                      : { opacity: 1, left: "0%", display: "block" }
                  }
                  exit={{ opacity: 0, left: "-100%", display: "none" }}
                  type="button"
                  onClick={goToPreviousSlide}
                  disabled={!dirty}
                  className="border-themeColor relative border rounded-full px-5 w-full active:scale-90 transition-all text-gray-700 font-bold py-2"
                >
                  Back
                </motion.button>
                <button
                  type="button"
                  onClick={goToNextSlide}
                  disabled={
                    !dirty ||
                    currentSlide >= 1 ||
                    (currentSlide === 0 &&
                      (typeof errors.email === "string" ||
                        typeof errors.fullName === "string" ||
                        typeof errors.username === "string" ||
                        typeof errors.dob === "string"))
                  }
                  className="bg-btnImage disabled:cursor-not-allowed disabled:opacity-50 rounded-full px-5 w-full active:scale-90 transition-all text-gray-700 font-bold py-2"
                >
                  Next
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </main>
  );
};

export default SignupPage;
