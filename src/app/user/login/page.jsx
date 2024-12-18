"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const router = useRouter();
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/user/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("Login Successfully");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to Login");
        });
    },
    validationSchema: LoginSchema,
  });
  return (
    <div>
      <>
        {/* Hero */}
        <div className="relative   h-screen bg-[url('https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg')] bg-no-repeat">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                {/* <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
                  Preline: A vision for 2024
                </p> */}
                {/* Title */}
                {/* <div className="mt-4 md:mb-12 max-w-2xl">
                  <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl">
                    Fully customizable rules to match your unique needs
                  </h1>
                  <p className="text-gray-600 text-lg">
                    We provide you with a test account that can be set up in
                    seconds. Our main focus is getting responses to you as soon
                    as we can.
                  </p>
                </div>
                {/* End Title */}
                {/* Blockquote */}
                <blockquote className="hidden md:block relative max-w-sm">
                  <svg
                    className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="relative z-10">
                    {/* <p className="text-xl italic text-gray-800">
                      Amazing people to work with. Very fast and professional
                      partner.
                    </p> */}
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center gap-x-4">
                      <div className="shrink-0">
                        {/* <img
                          className="size-8 rounded-full"
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Avatar"
                        /> */}
                      </div>
                      {/* <div className="grow">
                        <div className="font-semibold text-gray-800">
                          Josh Grazioso
                        </div>
                        <div className="text-xs text-gray-500">
                          Director Payments &amp; Risk | Airbnb
                        </div>
                      </div>  */}
                    </div>
                  </footer>
                </blockquote>
                {/* End Blockquote */}
              </div>
              {/* End Col */}

              <div className="w-full mt-8  max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className=" px-8 py-12">
                  <div className="flex justify-center mx-auto">
                    {/* <img
                      className="w-auto h-7 sm:h-8"
                      src="https://merakiui.com/images/logo.svg"
                      alt=""
                    /> */}
                  </div>
                  <h3 className="mt-7 text-3xl font-medium text-center text-gray-600 dark:text-gray-200">
                    Welcome Back
                  </h3>
                  <div className="mt-6 justify-between">
                    <div className="mt-3 md:flex md:items-center md:-mx-2">
                      {/* <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="mx-2">Worker</span>
                      </button>
                      <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <a className="mx-2" href="/signup">
                          Client
                        </a>
                      </button> */}
                    </div>
                  </div>
                  <form onSubmit={loginForm.handleSubmit}>
                    <div className="w-full mt-4">
                      <label className="block mb-2 text-xl "></label>
                      {loginForm.errors.email && loginForm.touched.email ? (
                        <div className="text-red-500 text-sm">
                          {loginForm.errors.email}
                        </div>
                      ) : null}
                      <input
                        className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="email"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        id="email"
                        onChange={loginForm.handleChange}
                        value={loginForm.values.email}
                      />
                    </div>
                    <div className="w-full mt-4">
                      <label className="block mb-2 text-xl "></label>
                  
                      {loginForm.errors.password && loginForm.touched.password ? (
                        <div className="text-red-500 text-sm">
                          {loginForm.errors.password}
                        </div>
                      ) : null}
                      <input
                        className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                        id="password"
                        onChange={loginForm.handleChange}
                        value={loginForm.values.password}
                      />
                    </div>

                    <div className="flex items-center justify-center mt-4">
                      <button className="px-6 w-full py-2 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-400 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign In
                      </button>
                    </div>
                    <div class="flex items-center mt-6 -mx-2">
                      <button
                        type="button"
                        class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-gray-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                        </svg>

                        <span class="hidden mx-2 sm:inline">
                          Sign in with Google
                        </span>
                      </button>

                      <a
                        href="#"
                        class="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200"
                      >
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                        </svg>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* End Grid */}
          </div>
          {/* End Clients Section */}
        </div>
        {/* End Hero */}
      </>
    </div>
  );
};

export default Login;