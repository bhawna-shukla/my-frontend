'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation';

const View = () => {

  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  const getProductData = async () => {
    const res = await fetch("http://localhost:5000/product/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    setProductList(data);
    console.log(data);
  }

  useEffect(() => {
    getProductData();
  }, [])

  return (
    <div className=''>
      <div className="">
        {/* <Link href={"/user/product"} className='btn btn-outline-warning rounded-pill px-3 my-4'><i className=" px-2 bi bi-arrow-left-circle"></i>Products</Link> */}

        {
          productList !== null ? (
            <div className=" ">
              <div className="row my-5  m-10 h-screen  ">
              <h1 className='flex justify-center m-10 p-2 text-6xl text-indigo-900  font-[sans-serief]'> {productList.filename}</h1>
                {/* <div className="col-md-4 w-full  "> */}
                  <img src={productList.image} alt="" className="img-fluid ms-3 border rounded-xl border-gray-300  border:shadow-gray-900" style={{ height: "",width : "1500px" }} />
                 
                {/* </div> */}
                <button className=" m-6 ml-10  border rounded-lg bg-gray-900 text-white hover:bg-blue-900 p-4">Use Templates</button>
                <div className="col-md-6">
                  <h1 className='py-3 ml-8 text-6xl text-gray-900 font-[geoge]'> {productList.title}</h1>
                  <h1 className=' font-semibold text-blue-900 ml-8  text-xl'> {productList.tag} </h1>
                  <h1 className='    mt-9  ml-8 font-[mono] text-3xl'> {productList.category}</h1>
                  {/* <h1 className='fw-bold ' style={{ color: "teal", fontFamily: "initial" }}> <i className="bi bi-currency-rupee fw-bold "></i>{productList.price}</h1> */}
                  <p className='py-3  ml-8   text-xl'> {productList.description}</p>

                  <>
  {/* Features */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Grid */}
    <div className="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
      {/* Stats */}
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-blue-900">
          Accuracy rate
        </h4>
        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
          99.95%
        </p>
        <p className="mt-1 text-gray-500 dark:text-sky-800">
          in fulfilling orders
        </p>
      </div>
      {/* End Stats */}
      {/* Stats */}
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-blue-800 dark:text-blue-900">
          Startup businesses
        </h4>
        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
          2,000+
        </p>
        <p className="mt-1 text-gray-500 dark:text-sky-800">
          partner with Preline
        </p>
      </div>
      {/* End Stats */}
      {/* Stats */}
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-blue-900">
          Happy customer
        </h4>
        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-sky-600">
          85%
        </p>
        <p className="mt-1 text-gray-500 dark:text-sky-800">
          this year alone
        </p>
      </div>
      {/* End Stats */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Features */}
</>


<>
  {/* ========== FOOTER ========== */}
  <footer className="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
    <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div className="col-span-full lg:col-span-1">
          <a
            className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
        </div>
        {/* End Col */}
        <div className="col-span-1">
          <h4 className="font-semibold text-gray-100">Product</h4>
          <div className="mt-3 grid space-y-3">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Pricing
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Changelog
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Docs
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}
        <div className="col-span-1">
          <h4 className="font-semibold text-gray-100">Company</h4>
          <div className="mt-3 grid space-y-3">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                About us
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Blog
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Careers
              </a>{" "}
              <span className="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                We're hiring
              </span>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Customers
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}
        <div className="col-span-2">
          <h4 className="font-semibold text-gray-100">Stay up to date</h4>
          <form>
            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
              <div className="w-full">
                <label htmlFor="hero-input" className="sr-only">
                  Subscribe
                </label>
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter your email"
                />
              </div>
              <a
                className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Subscribe
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              New UI kits or big discounts. Never spam.
            </p>
          </form>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
      <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400 dark:text-neutral-400">
            © 2024 Preline Labs.
          </p>
        </div>
        {/* End Col */}
        {/* Social Brands */}
        <div>
          <a
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
          <a
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </a>
          <a
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          <a
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
            </svg>
          </a>
        </div>
        {/* End Social Brands */}
      </div>
    </div>
  </footer>
  {/* ========== END FOOTER ========== */}
</>

                
                  {/* <button className="btn btn-outline-danger "><i className="bi bi-cart px-1 "></i>Add to Cart</button> */}
                  {/* <button className="btn btn-outline-warning ms-2 "><i className="bi bi-bag px-1"></i>Buy Now</button> */}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1>NO PRODUCT FOUND</h1>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default View