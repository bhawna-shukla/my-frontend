'use client'
import React from 'react'
import { useFormik } from 'formik';
import *as Yup from "yup"



// /yup validation

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be at most 50 characters')
        .required('Name is required'),

    useremail: Yup.string()
        .email('Please enter a valid email address')
        .required('Email is required'),

    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'Password must contain at least one special character')
        .required('Password is required'),
})


const Signup = () => {
    // Formik
    const SignUpForm = useFormik({
        initialValues: {
            username: " ",
            useremail: "",
            password: ""
        },

        // onsubmit
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();

        },
        validationSchema: SignupSchema
    })


    return (
        <div>
            <div className="flex h-screen  bg-gradient-to-r from-red-400 from-10% via-red-500 via-30% to-red-900 to-90%  ">
                <div className="w-full max-w-sm p-6 m-auto mx-auto bg-gradient-to-r from-white-100 to-white-900 rounded-lg shadow-md dark:bg-red-600 mt-12">
                    <div className="flex justify-center mx-auto ">
                        {/* <img
                        className="w-auto h-7 sm:h-8"
                        src="https://merakiui.com/images/logo.svg"
                        alt=""
                    /> */}
                    </div>
                    <form className="mt-6 ">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-center text-lg text-white-800 dark:text-gray-200"
                            >
                                UserName
                            </label>
                            {SignUpForm.errors.username && SignUpForm.touched.username ? (
                                <div className='text-red-500 text-sm'>{SignUpForm.errors.username}</div>
                            ) : null}
                            <input

                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-dark-900 bg-red border rounded-2lg dark:bg-red-800 dark:text-red-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                id="username"
                                onChange ={SignUpForm.handleChange}
                                value ={SignUpForm.values.username}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="useremail"
                                className="block  w-full px-4 py-2 mt-2 text-center text-lg text-white-800 dark:text-gray-200"
                            >
                                UserEmail
                            </label>
                            {SignUpForm.errors.useremail && SignUpForm.touched.useremail ? (
                                <div className='text-red-500 text-sm'>{SignUpForm.errors.useremail}</div>
                            ) : null}
                            <input
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-dark-900 bg-red border rounded-2lg dark:bg-red-800 dark:text-red-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                id="useremail"
                                onChange ={SignUpForm.handleChange}
                                value ={SignUpForm.values.useremail}
                            />
                        </div>
                        <div className="mt-4">
                            <div className="">
                                <label
                                    htmlFor="password"
                                    className="block   text-center text-lg text-white-800 dark:text-gray-200 "
                                >
                                    Password
                                </label>
                                {SignUpForm.errors.password && SignUpForm.touched.passsword ? (
                                    <div className='text-red-500 text-sm'>{SignUpForm.errors.password}</div>
                                ) : null}
                                {/* <a
                                    href="#"
                                    className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                                >
                                    Forget Password?
                                </a> */}
                            </div>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-2lg dark:bg-red-800 dark:text-red-300 dark:border-white-600 focus:border-white-400 dark:focus:border-white-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                id="password"
                                onChange ={SignUpForm.handleChange}
                                value ={SignUpForm.values.password}
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-6 py-2.5 rounded-full text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-br from-red-400 to-red-500 hover:from-blue-500 hover:to-teal-500 .">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-red-600 lg:w-1/5" />
                        <a
                            href="#"
                            className="text-sm text-center text-blue-800 lowercase dark:text-blue-950 hover:underline"
                        >
                            or login with Social Media
                        </a>
                        <span className="w-1/5 border-b dark:border-blue-800 lg:w-1/5" />
                    </div>

                    <p className="mt-8 text-xs font-light text-center text-gray-400">
                        {" "}
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
                        >
                            Create One
                        </a>
                    </p>
                </div>

            </div>


        </div>
    )
}

export default Signup