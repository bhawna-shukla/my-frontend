// 'use client'
// import React from 'react'
// import { useFormik } from 'formik';
// import *as Yup from "yup"



// // /yup validation

// const SignupSchema = Yup.object().shape({
//     username: Yup.string()
//         .min(2, 'Name must be at least 2 characters')
//         .max(50, 'Name must be at most 50 characters')
//         .required('Name is required'),

//     useremail: Yup.string()
//         .email('Please enter a valid email address')
//         .required('Email is required'),

//     password: Yup.string()
//         .min(8, 'Password must be at least 8 characters')
//         .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
//         .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//         .matches(/[0-9]/, 'Password must contain at least one number')
//         .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'Password must contain at least one special character')
//         .required('Password is required'),
// })


// const Signup = () => {
//     // Formik
//     const SignUpForm = useFormik({
//         initialValues: {
//             username: " ",
//             useremail: "",
//             password: ""
//         },

//         // onsubmit
//         onSubmit: (values, { resetForm }) => {
//             console.log(values);
//             resetForm();

//         },
//         validationSchema: SignupSchema
//     })


//     return (
//         <div>
//             <div className="flex h-screen  bg-gradient-to-bl from-indigo-300  ">
//                 <div className="w-full max-w-sm p-6 m-auto mx-auto bg-gradient-to-r from-white-100 to-white-900 rounded-lg shadow-md dark:bg-red-600 mt-12">
//                     <div className="flex justify-center mx-auto ">
//                         {/* <img
//                         className="w-auto h-7 sm:h-8"
//                         src="https://merakiui.com/images/logo.svg"
//                         alt=""
//                     /> */}
//                     </div>
//                     <form className="mt-6 ">
//                         <div>
//                             <label
//                                 htmlFor="username"
//                                 className="block text-center text-lg text-white-800 dark:text-gray-200"
//                             >
//                                 UserName
//                             </label>
//                             {SignUpForm.errors.username && SignUpForm.touched.username ? (
//                                 <div className='text-red-500 text-sm'>{SignUpForm.errors.username}</div>
//                             ) : null}
//                             <input

//                                 type="text"
//                                 className="block w-full px-4 py-2 mt-2 text-dark-900 bg-red border rounded-2lg dark:bg-red-800 dark:text-red-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                                 id="username"
//                                 onChange ={SignUpForm.handleChange}
//                                 value ={SignUpForm.values.username}
//                             />
//                         </div>
//                         <div>
//                             <label
//                                 htmlFor="useremail"
//                                 className="block  w-full px-4 py-2 mt-2 text-center text-lg text-white-800 dark:text-gray-200"
//                             >
//                                 UserEmail
//                             </label>
//                             {SignUpForm.errors.useremail && SignUpForm.touched.useremail ? (
//                                 <div className='text-red-500 text-sm'>{SignUpForm.errors.useremail}</div>
//                             ) : null}
//                             <input
//                                 type="text"
//                                 className="block w-full px-4 py-2 mt-2 text-dark-900 bg-red border rounded-2lg dark:bg-red-800 dark:text-red-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                                 id="useremail"
//                                 onChange ={SignUpForm.handleChange}
//                                 value ={SignUpForm.values.useremail}
//                             />
//                         </div>
//                         <div className="mt-4">
//                             <div className="">
//                                 <label
//                                     htmlFor="password"
//                                     className="block   text-center text-lg text-white-800 dark:text-gray-200 "
//                                 >
//                                     Password
//                                 </label>
//                                 {SignUpForm.errors.password && SignUpForm.touched.passsword ? (
//                                     <div className='text-red-500 text-sm'>{SignUpForm.errors.password}</div>
//                                 ) : null}
//                                 {/* <a
//                                     href="#"
//                                     className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
//                                 >
//                                     Forget Password?
//                                 </a> */}
//                             </div>
//                             <input
//                                 type="password"
//                                 className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-2lg dark:bg-red-800 dark:text-red-300 dark:border-white-600 focus:border-white-400 dark:focus:border-white-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                                 id="password"
//                                 onChange ={SignUpForm.handleChange}
//                                 value ={SignUpForm.values.password}
//                             />
//                         </div>
//                         <div className="mt-6">
//                             <button className="w-full px-6 py-2.5 rounded-full text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-br from-red-400 to-red-500 hover:from-blue-500 hover:to-teal-500 .">
//                                 Sign In
//                             </button>
//                         </div>
//                     </form>
//                     <div className="flex items-center justify-between mt-4">
//                         <span className="w-1/5 border-b dark:border-red-600 lg:w-1/5" />
//                         <a
//                             href="#"
//                             className="text-sm text-center text-blue-800 lowercase dark:text-blue-950 hover:underline"
//                         >
//                             or login with Social Media
//                         </a>
//                         <span className="w-1/5 border-b dark:border-blue-800 lg:w-1/5" />
//                     </div>

//                     <p className="mt-8 text-xs font-light text-center text-gray-400">
//                         {" "}
//                         Don't have an account?{" "}
//                         <a
//                             href="#"
//                             className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
//                         >
//                             Create One
//                         </a>
//                     </p>
//                 </div>

//             </div>


//         </div>
//     )
// }

// export default Signup




"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),

  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),

});

const SignUp = () => {
  const router = useRouter();
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/user/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("User Added Successfully");
          router.push("/login");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add User");
        });
    },
    validationSchema: SignUpSchema,
  });

  return (
    <div>
      <section className="p-20 rounded-lg ">
        <div className="flex gap-3 justify-center ">
          <div
            className="hidden bg-cover lg:block lg:w-3/5  rounded-lg "
            style={{
              backgroundImage:
                'url("https://t4.ftcdn.net/jpg/07/68/16/91/360_F_768169128_zyMcYFMFFgU3vR2ngogaosB6cGwfldKH.jpg")',
            }}
          ></div>
          <div className="flex  via-transparent bg-gradient-to-bl from-purple-500  to-pink-400 rounded-lg items-center w-full max-w-3xl p-4 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-black capitalize ">
                Get your free Account now.
              </h1>
              {/* <p className="mt-4  text-white"> */}
                {/* Let’s get you all set up so you can verify your personal account
                // and begin setting up your profile. */}
              {/* </p> */}
              <div className="mt-6">
                {/* <h1 className="text-black text-xl">Select type of Account</h1> */}
                <div className=" flex   mt-3 md:flex md:items-center md:-mx-2">
                  {/* <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none"> */}
                    {/* <svg
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
                    </svg> */}
                    {/* <span className="mx-2">Client</span> */}
                  {/* </button> */}
                  <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="1 1 24 24"
                      stroke="currentColor"
                      strokeWidth={4}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {/* <a className="mx-2" href="/login">
                      Worker
                    </a> */}
                  </button>
                </div>
              </div>
              <form
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                onSubmit={signUpForm.handleSubmit}
              >
                <div>
                  <label className="block mb-2 text-xl text-black ">
                    First Name
                  </label>
                  {signUpForm.errors.name && signUpForm.touched.name ? (
                    <div className="text-red-500 text-sm">
                      {signUpForm.errors.name}
                    </div>
                  ) : null}
                  <input
                    type="text"
                    placeholder="John Wick"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg "
                    id="name"
                    onChange={signUpForm.handleChange}
                    value={signUpForm.values.name}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-xl text-black ">
                    Last name
                  </label>

                  <input
                    type="text"
                    placeholder="Snow White"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-xl text-black ">
                    Phone number
                  </label>
                  {signUpForm.errors.phone && signUpForm.touched.phone ? (
                    <div className="text-red-500 text-sm">
                      {signUpForm.errors.phone}
                    </div>
                  ) : null}
                  <input
                    type="text"
                    placeholder="XXX-XXX-XXXX-"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
                    id="phone"
                    onChange={signUpForm.handleChange}
                    value={signUpForm.values.phone}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-xl text-black ">
                    Email address
                  </label>
                  {signUpForm.errors.email && signUpForm.touched.email ? (
                    <div className="text-red-500 text-sm">
                      {signUpForm.errors.email}
                    </div>
                  ) : null}
                  <input
                    type="email"
                    placeholder="johnsnow@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
                    id="email"
                    onChange={signUpForm.handleChange}
                    value={signUpForm.values.email}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-xl text-black ">
                    Password
                  </label>
                  {signUpForm.errors.password && signUpForm.touched.password ? (
                    <div className="text-red-500 text-sm">
                      {signUpForm.errors.password}
                    </div>
                  ) : null}
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
                    id="password"
                    onChange={signUpForm.handleChange}
                    value={signUpForm.values.password}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-xl text-black ">
                    Confirm password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
                  />
                </div>
                <button className="flex text-center items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span className="">Sign Up </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {/* <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    /> */}
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;