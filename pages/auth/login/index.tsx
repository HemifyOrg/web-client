import { InputField } from "@/components/reusable/formik";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const fieldsList = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      autoComplete: "email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      autoComplete: "new-password",
    },
  ];

  return (
    <main className="md:mt-32 mt-20 mb-12 p-4 gap-4 h-full flex w-full md:w-[45%] lg:w-1/3 m-auto flex-col items-center justify-start lg:justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ dirty, isValid }) => (
          <>
            <p className="text-[#15120d96] text-base ml-2 w-full font-semibold">
              Kindly login with the email you used to sign up
            </p>
            <Form
              className={`form md:p-2 flex flex-col gap-8 overflow-hidden md:border-[0.5px] md:border-themeColor md:bg-white  w-full`}
            >
              {fieldsList.slice(0, 4).map((field, index) => (
                <InputField {...field} key={index} />
              ))}

              <div className="flex gap-4 my-2 justify-center items-center w-full">
                <button
                  type="submit"
                  disabled={!dirty || !isValid}
                  className="bg-btnImage disabled:cursor-not-allowed disabled:opacity-50 rounded-full px-5 w-full active:scale-90 transition-all text-gray-700 font-bold py-2"
                >
                  Log me in
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </main>
  );
};

export default LoginPage;
