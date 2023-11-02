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
      label: "Sign up with Email",
      type: "email",
      placeholder: "example@email.com",
      autoComplete: "email",
      className:
        `relative items-center flex border rounded-xl py-2 px-4 w-full bg-white`,
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
          <span className="text-gray-500 font-medium text-sm flex gap-1 flex-wrap w-full">
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
        <h1 className="text-2xl font-semibold">Ready to start winning?</h1>
        <h4>Sign up and join the action with Hemify!</h4>
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
            {/* flight indicator */}
            <div className="py-2 w-full my-4 relative flex items-center justify-center">
              <div className="w-full border-b-4 rounded-full border-[#eadbfe]"></div>
              <div className="absolute w-full flex justify-end">
                <div
                  className={`mr-auto border-b-4 rounded-full transition-all duration-[550ms]  ${
                    currentSlide > 0 ? "w-full" : "w-[0%]"
                  } border-[#7c4dba]`}
                ></div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute top-0 ${
                  currentSlide > 0 ? "left-full" : "-left-2"
                } w-6 h-5 scale-110 transition-all duration-500`}
                viewBox="0 0 34 13"
                fill="none"
              >
                <g clipPath="url(#clip0_7532_94349)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.2382 8.36989L33.0723 8.36528L33.0716 4.91274L20.1077 4.89258C18.5799 5.2671 18.0258 6.91048 18.8964 7.93246C19.0382 8.09891 19.0951 8.19074 19.2382 8.36988H19.2381L19.2382 8.36989Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.454 0.0609693L13.459 3.48976L27.1914 3.5378C26.9658 0.766228 25.056 -0.00172712 22.3213 2.91472e-06L13.4541 0.0609555L13.454 0.0609693Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.4604 9.46094L13.4609 12.9999L22.3209 12.9978C25.1152 13.0001 26.9755 12.1843 27.1875 9.46416L13.4604 9.46094Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5029 5.21686L13.4904 7.80882L16.3462 7.80526L16.373 5.21387L13.5029 5.21686Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2716 6.90868C13.3127 6.85887 13.3402 6.79531 13.349 6.71287C13.3766 6.6367 13.3728 6.50522 13.3557 6.41894C13.2062 5.66681 12.0478 5.19985 11.3678 4.98008C10.5061 4.7016 9.6172 4.60173 8.73357 4.54705C8.4764 4.53113 8.0075 4.51387 7.73869 4.51683C7.68092 4.51745 7.62984 4.51737 7.57191 4.51606C7.21722 4.50797 6.43052 4.53633 6.06684 4.55896C5.84466 4.57279 5.6247 4.58776 5.39624 4.60275L4.72456 4.66005C4.42106 4.69285 3.68197 4.76295 3.38198 4.8187L4.16493 4.95305C4.74263 5.0496 5.80901 5.26256 6.33275 5.43338C6.38449 5.45025 6.47788 5.4815 6.52355 5.50577C6.49667 5.51829 3.32128 5.89953 2.85635 5.96122C2.11242 6.05994 1.36049 6.1405 0.612445 6.23791C0.537457 6.24767 0.0274687 6.30587 0.000555992 6.31669L2.09518 6.61477C2.23887 6.63444 2.37361 6.65219 2.51631 6.67402C2.79315 6.7164 3.08837 6.75018 3.35861 6.7936L3.77568 6.85245C4.04733 6.89047 4.35002 6.92952 4.61802 6.97156L5.03912 7.03173C5.32283 7.06824 5.59659 7.11343 5.87735 7.1504C6.01726 7.16882 6.15617 7.18925 6.29847 7.20994C6.35578 7.21827 6.69432 7.26201 6.71801 7.27225C6.65416 7.31286 6.29671 7.46678 6.2054 7.5051C5.81802 7.66771 5.23055 7.8905 4.8057 7.94284C4.77004 7.94724 4.70972 7.95011 4.6807 7.95733C4.71064 7.9703 4.77835 7.98101 4.81482 7.98923C4.8698 8.00162 4.90082 8.00774 4.95034 8.01801C5.64635 8.16247 6.29135 8.26205 7.00335 8.35316L7.2765 8.38368C7.33026 8.38859 7.37014 8.3932 7.41718 8.3991C7.50941 8.41067 7.59965 8.41344 7.69068 8.42427C7.78486 8.4355 7.87472 8.43803 7.96856 8.44611C8.17133 8.46358 8.44375 8.4784 8.65816 8.48601C9.11179 8.5021 9.76513 8.49742 10.1873 8.45487C10.457 8.42769 10.616 8.41075 10.8861 8.36706C10.9373 8.35878 10.9743 8.34995 11.0257 8.34133C11.4845 8.26438 12.0311 8.08377 12.4524 7.82697C12.6456 7.70917 12.8423 7.54532 12.9776 7.38407C13.0675 7.27698 13.2439 7.02814 13.2716 6.90865L13.2716 6.90868Z"
                    fill="#FF6041"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.337 6.63602C13.339 6.56896 13.265 6.45291 13.2141 6.3978C13.1396 6.3171 13.0402 6.25015 12.95 6.2004C12.0752 5.71805 10.6322 5.79929 9.65797 5.87851C9.60322 5.88297 9.15057 5.92719 9.1 5.94157L9.74078 6.05794C9.85271 6.07996 10.3018 6.17167 10.3833 6.22549C10.3565 6.23356 10.3278 6.23367 10.295 6.2381C9.98224 6.28033 9.61572 6.31854 9.29766 6.35628C8.94785 6.3978 8.55407 6.44814 8.20755 6.48418C8.08538 6.4969 7.96617 6.51522 7.84581 6.52694L7.48278 6.57042C7.50063 6.57911 7.79462 6.6199 7.83856 6.62601L9.27917 6.83564C9.38544 6.85114 10.3488 6.98899 10.3639 6.99668C10.3054 7.03055 10.1898 7.07563 10.1234 7.10112C10.0473 7.13034 9.96003 7.16536 9.88271 7.1918C9.75543 7.23533 9.65623 7.26459 9.52539 7.29091C9.48206 7.29965 9.44387 7.30152 9.40592 7.30838C9.48732 7.35059 10.2571 7.47279 10.3496 7.48707C10.4873 7.50835 10.8043 7.54396 10.9455 7.55298L11.3072 7.56991C11.3504 7.57053 11.377 7.57122 11.4238 7.57208C11.4676 7.57288 11.5043 7.57183 11.5449 7.57215C11.919 7.57514 12.4248 7.51136 12.7668 7.34745C12.9101 7.27875 13.133 7.12948 13.2052 6.99797C13.2467 6.93256 13.3744 6.78273 13.337 6.63603L13.337 6.63602Z"
                    fill="#F0B043"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2104 6.98148L13.2703 6.90883C13.2918 6.87833 13.3077 6.84453 13.3222 6.81292C13.3433 6.76718 13.3425 6.75457 13.3477 6.71303C13.34 6.69342 13.3408 6.66939 13.3326 6.65317C13.2922 6.58876 13.2837 6.56307 13.2116 6.50903C12.8015 6.20183 12.0397 6.22563 11.5325 6.24379C11.4646 6.24623 10.9736 6.28015 10.9088 6.30163L11.273 6.37035C11.3268 6.38082 11.58 6.43216 11.6277 6.46373L9.93841 6.66376C9.96684 6.67413 10.0122 6.67716 10.0445 6.68206C10.0807 6.68753 10.1128 6.6928 10.1477 6.69739C10.4903 6.74254 10.8465 6.80508 11.1877 6.85049C11.2578 6.85982 11.3226 6.87051 11.3942 6.8806C11.4601 6.88988 11.5326 6.90352 11.5966 6.91056C11.5673 6.93604 11.3604 7.00934 11.3172 7.02473C11.1846 7.07209 11.064 7.0884 11.0388 7.09699C11.0868 7.12758 11.5503 7.20153 11.6452 7.21308L11.8438 7.23561C12.0765 7.26313 12.422 7.26696 12.6539 7.22707C12.8652 7.19072 13.0209 7.14708 13.2105 6.98151L13.2104 6.98148Z"
                    fill="#F5E162"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3091 1.67025C13.3344 1.63961 13.3513 1.6005 13.3567 1.54977C13.3737 1.50292 13.3714 1.42203 13.3609 1.36892C13.2689 0.906158 12.5561 0.618848 12.1378 0.483642C11.6076 0.312313 11.0607 0.250849 10.517 0.217203C10.3588 0.207404 10.0703 0.196789 9.9049 0.198602C9.86935 0.199003 9.83793 0.198934 9.80228 0.198131C9.58406 0.193163 9.10002 0.210601 8.87626 0.224538C8.73955 0.233036 8.60423 0.242254 8.46365 0.251472L8.05037 0.286723C7.86364 0.306902 7.40891 0.350042 7.22434 0.384338L7.70607 0.466992C8.0615 0.526395 8.71761 0.657421 9.03987 0.762524C9.0717 0.772904 9.12916 0.792142 9.15726 0.807076C9.14072 0.814771 7.187 1.04934 6.90094 1.08729C6.44321 1.14803 5.98058 1.19759 5.52032 1.25753C5.47418 1.26354 5.16041 1.29935 5.14385 1.306L6.4326 1.48941C6.52101 1.5015 6.60392 1.51243 6.69172 1.52587C6.86204 1.55193 7.04368 1.57272 7.20996 1.59945L7.46658 1.63565C7.63372 1.65904 7.81995 1.68308 7.98484 1.70895L8.24392 1.74597C8.41848 1.76843 8.58692 1.79624 8.75967 1.81898C8.84575 1.83031 8.9312 1.84288 9.01878 1.85561C9.05405 1.86075 9.26232 1.88766 9.27692 1.89397C9.23762 1.91896 9.0177 2.01364 8.96154 2.03723C8.72319 2.13728 8.36174 2.27435 8.10033 2.30656C8.07839 2.30926 8.04128 2.31102 8.02342 2.31547C8.04184 2.32344 8.08349 2.33005 8.10594 2.3351C8.13977 2.34272 8.15886 2.34647 8.1893 2.3528C8.61755 2.44168 9.01439 2.50295 9.45245 2.55902L9.62052 2.57779C9.65362 2.58082 9.67814 2.58365 9.70708 2.58728C9.76383 2.59441 9.81935 2.5961 9.87536 2.60277C9.9333 2.60967 9.98859 2.61124 10.0463 2.61621C10.1711 2.62695 10.3387 2.63607 10.4706 2.64076C10.7497 2.65066 11.1517 2.64778 11.4115 2.62159C11.5774 2.60487 11.6753 2.59445 11.8414 2.56757C11.8729 2.56248 11.8957 2.55704 11.9273 2.55174C12.2096 2.50441 12.5459 2.39328 12.8051 2.23528C12.924 2.16281 13.045 2.06199 13.1283 1.96278C13.1835 1.8969 13.2921 1.7438 13.3091 1.67028V1.67025Z"
                    fill="#FF6041"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3494 1.50211C13.3506 1.46084 13.3051 1.38945 13.2737 1.35554C13.2279 1.30588 13.1668 1.26469 13.1112 1.23408C12.573 0.937302 11.6852 0.987293 11.0858 1.03604C11.0521 1.03878 10.7736 1.06599 10.7425 1.07483L11.1367 1.14643C11.2056 1.15998 11.4819 1.2164 11.532 1.24951C11.5156 1.25447 11.4979 1.25455 11.4777 1.25728C11.2853 1.28325 11.0598 1.30675 10.8641 1.32998C10.6488 1.35553 10.4066 1.3865 10.1934 1.40867C10.1182 1.41651 10.0448 1.42777 9.97078 1.43498L9.74742 1.46174C9.75841 1.46709 9.93929 1.49217 9.96633 1.49595L10.8527 1.62493C10.9181 1.63446 11.5108 1.71928 11.5201 1.72401C11.4841 1.74484 11.413 1.77258 11.3721 1.78827C11.3253 1.80625 11.2716 1.8278 11.224 1.84406C11.1457 1.87086 11.0847 1.88885 11.0042 1.90504C10.9775 1.91041 10.954 1.91156 10.9307 1.9158C10.9808 1.94176 11.4544 2.01695 11.5113 2.02574C11.596 2.03882 11.7911 2.06074 11.878 2.06629L12.1005 2.0767C12.1271 2.07708 12.1434 2.07752 12.1723 2.07803C12.1992 2.07853 12.2218 2.07788 12.2467 2.07809C12.4769 2.07993 12.7881 2.04069 12.9985 1.93984C13.0867 1.89757 13.2238 1.80571 13.2683 1.7248C13.2938 1.68455 13.3724 1.59236 13.3493 1.50211H13.3494Z"
                    fill="#F0B043"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.273 1.71456L13.3098 1.66986C13.3231 1.65109 13.3328 1.6303 13.3418 1.61084C13.3547 1.58271 13.3543 1.57494 13.3574 1.54938C13.3527 1.53732 13.3532 1.52254 13.3481 1.51255C13.3233 1.47293 13.3181 1.45713 13.2737 1.42386C13.0214 1.23484 12.5527 1.2495 12.2406 1.26068C12.1988 1.26218 11.8967 1.28305 11.8568 1.29625L12.0809 1.33854C12.114 1.34499 12.2698 1.37657 12.2992 1.39599L11.2598 1.51905C11.2773 1.52544 11.3052 1.5273 11.3251 1.53031C11.3473 1.53367 11.3671 1.53692 11.3886 1.53975C11.5994 1.56752 11.8186 1.606 12.0285 1.63394C12.0716 1.63967 12.1115 1.64626 12.1555 1.65246C12.196 1.65818 12.2406 1.66656 12.28 1.6709C12.262 1.68658 12.1347 1.73167 12.1081 1.74115C12.0265 1.77028 11.9523 1.7803 11.9368 1.7856C11.9664 1.80443 12.2516 1.84992 12.3099 1.85703L12.4321 1.8709C12.5753 1.88783 12.7879 1.89018 12.9305 1.86564C13.0606 1.84328 13.1564 1.81643 13.273 1.71455L13.273 1.71456Z"
                    fill="#F5E162"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2497 11.1808C13.2721 11.1538 13.287 11.1192 13.2918 11.0744C13.3068 11.033 13.3047 10.9616 13.2954 10.9147C13.2142 10.506 12.5847 10.2522 12.2152 10.1328C11.7469 9.98149 11.2639 9.92721 10.7837 9.89749C10.644 9.88884 10.3892 9.87946 10.2431 9.88107C10.2117 9.88141 10.1839 9.88137 10.1525 9.88065C9.95973 9.87625 9.53221 9.89167 9.33459 9.90397C9.21386 9.91149 9.09434 9.91961 8.97018 9.92776L8.60517 9.9589C8.44025 9.97673 8.03862 10.0148 7.8756 10.0451L8.30108 10.1181C8.61501 10.1706 9.19447 10.2863 9.47909 10.3791C9.50719 10.3883 9.55795 10.4053 9.58277 10.4185C9.56817 10.4253 7.84263 10.6325 7.58997 10.666C7.18573 10.7196 6.77711 10.7634 6.37062 10.8163C6.32986 10.8216 6.05273 10.8533 6.03811 10.8591L7.17634 11.0211C7.25444 11.0318 7.32764 11.0414 7.40519 11.0533C7.55564 11.0764 7.71605 11.0947 7.86292 11.1183L8.08956 11.1503C8.23718 11.171 8.40167 11.1922 8.5473 11.215L8.77612 11.2477C8.93029 11.2676 9.07906 11.2921 9.23163 11.3122C9.30767 11.3222 9.38316 11.3333 9.46047 11.3446C9.49162 11.3491 9.67558 11.3729 9.68845 11.3784C9.65376 11.4005 9.45952 11.4842 9.40991 11.505C9.19941 11.5933 8.88016 11.7144 8.64929 11.7428C8.62991 11.7452 8.59713 11.7468 8.58135 11.7507C8.59763 11.7578 8.63441 11.7636 8.65423 11.768C8.68411 11.7748 8.70096 11.7781 8.72786 11.7837C9.10608 11.8622 9.45658 11.9163 9.84349 11.9658L9.99194 11.9824C10.0211 11.9851 10.0428 11.9876 10.0684 11.9908C10.1185 11.9971 10.1675 11.9986 10.217 12.0045C10.2682 12.0106 10.317 12.0119 10.368 12.0163C10.4782 12.0258 10.6262 12.0339 10.7428 12.038C10.9893 12.0468 11.3443 12.0442 11.5737 12.0211C11.7203 12.0063 11.8067 11.9971 11.9535 11.9734C11.9813 11.9689 12.0014 11.9641 12.0293 11.9594C12.2786 11.9176 12.5756 11.8194 12.8046 11.6799C12.9096 11.6159 13.0165 11.5268 13.09 11.4392C13.1389 11.381 13.2347 11.2458 13.2498 11.1808L13.2497 11.1808Z"
                    fill="#FF6041"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2854 11.0332C13.2865 10.9968 13.2463 10.9337 13.2186 10.9037C13.1781 10.8599 13.1241 10.8235 13.0751 10.7965C12.5997 10.5344 11.8156 10.5785 11.2861 10.6216C11.2564 10.624 11.0104 10.648 10.9829 10.6558L11.3312 10.7191C11.392 10.731 11.636 10.7809 11.6803 10.8101C11.6658 10.8145 11.6502 10.8146 11.6323 10.817C11.4624 10.8399 11.2632 10.8607 11.0904 10.8812C10.9003 10.9038 10.6863 10.9311 10.498 10.9507C10.4316 10.9576 10.3668 10.9676 10.3014 10.9739L10.1041 10.9976C10.1138 11.0023 10.2736 11.0245 10.2975 11.0278L11.0803 11.1417C11.1381 11.1501 11.6616 11.225 11.6698 11.2292C11.638 11.2476 11.5752 11.2721 11.5391 11.286C11.4977 11.3018 11.4503 11.3209 11.4083 11.3352C11.3391 11.3589 11.2852 11.3748 11.2141 11.3891C11.1906 11.3938 11.1698 11.3948 11.1492 11.3986C11.1934 11.4215 11.6118 11.4879 11.662 11.4957C11.7368 11.5072 11.9091 11.5266 11.9858 11.5315L12.1824 11.5407C12.2059 11.541 12.2203 11.5414 12.2458 11.5419C12.2695 11.5423 12.2895 11.5418 12.3115 11.5419C12.5148 11.5436 12.7897 11.5089 12.9755 11.4198C13.0534 11.3825 13.1745 11.3014 13.2138 11.2299C13.2363 11.1944 13.3057 11.1129 13.2854 11.0332L13.2854 11.0332Z"
                    fill="#F0B043"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2184 11.2204L13.2509 11.181C13.2626 11.1644 13.2713 11.146 13.2792 11.1288C13.2906 11.104 13.2902 11.0971 13.293 11.0746C13.2888 11.0639 13.2892 11.0508 13.2848 11.042C13.2628 11.007 13.2582 10.9931 13.219 10.9637C12.9962 10.7968 12.5822 10.8097 12.3066 10.8196C12.2697 10.8209 12.0029 10.8393 11.9676 10.851L12.1655 10.8883C12.1948 10.894 12.3324 10.9219 12.3583 10.9391L11.4403 11.0478C11.4558 11.0534 11.4804 11.055 11.498 11.0577C11.5176 11.0607 11.5351 11.0635 11.554 11.066C11.7402 11.0906 11.9338 11.1246 12.1192 11.1492C12.1573 11.1543 12.1925 11.1601 12.2314 11.1656C12.2672 11.1706 12.3066 11.178 12.3414 11.1819C12.3255 11.1957 12.213 11.2356 12.1896 11.2439C12.1175 11.2697 12.052 11.2785 12.0383 11.2832C12.0644 11.2998 12.3162 11.34 12.3678 11.3463L12.4757 11.3585C12.6022 11.3735 12.7899 11.3756 12.9159 11.3539C13.0308 11.3341 13.1154 11.3104 13.2184 11.2204V11.2204Z"
                    fill="#F5E162"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7532_94349">
                    <rect
                      width="13"
                      height="33.0717"
                      fill="white"
                      transform="matrix(0 1 -1 0 33.0723 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Form
              className={`form flex flex-col gap-8 ${
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

              <div className="flex gap-4 justify-center items-center w-full">
                <button
                  type={"button"}
                  onClick={currentSlide === 0 ? goToNextSlide : undefined}
                  disabled={
                    !dirty ||
                    typeof errors.email === "string" ||
                    typeof errors.checkedTerms === "string"
                  }
                  className="disabled:bg-[#F1F5F9] bg-themeColor disabled:cursor-not-allowed border disabled:opacity-50 rounded-full px-5 w-full active:scale-90 transition-all disabled:text-gray-700 text-gray-50 font-medium py-4"
                >
                  {currentSlide === 1 ? "Verify" : "Next"}
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
                    <span className="text-sm">Connect your wallet</span>
                  </button>
                  <span className="mx-auto mt-2 flex gap-2">
                    Already have an account?
                    <Link href="/auth/login">
                      <span className="text-themeColor font-semibold">
                        Login Instead
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
