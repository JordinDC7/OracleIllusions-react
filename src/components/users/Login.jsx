import React from "react";
import "../../css/login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginSchema from "../schemas/loginSchema";
import { login } from "../../service/usersService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const onLoginSuccess = (response) => {
    console.log("Login success", response);
    toast.success("Login was a success! redirecting..", {
      autoClose: 5000,
    });
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  const onLoginError = (error) => {
    console.log("Login error", error);
    toast.error("There was an error logging in!", {
      autoClose: 5000,
    });
  };
  return (
    <div className="top-section">
      <title>Rock Show Shop</title>

      <ToastContainer></ToastContainer>
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-10">
        <div className="form-container w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              console.log("Form submitted", values);
              let payload = {
                email: values.email,
                password: values.password,
              };
              login(payload).then(onLoginSuccess).catch(onLoginError);
              actions.setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Field
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing In..." : "Sign In"}
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
