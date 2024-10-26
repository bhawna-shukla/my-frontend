import React from "react";
import Link from 'next/link'


const Navbar = () => {
  return (
    <div>
      <>
        {/* Navbar Start */}
        <nav className=" flex justify-center items-center py-4 bg-red-950">
          <div className=" ml-6">
            <img className="" src="" alt="" />
          </div>
          <div className="font-semibold  text-lg text-white   lg:flex justify-between items-center">
            <Link className="px-4 hover:border-b-2  border-red-400" href="/">
              Home
            </Link>
            <Link className="px-4 hover:border-b-2  border-red-400" href="/about">
              About
            </Link>
            {/* <Link className="px-4 hover:border-b-2  border-red-400" href="/counterExample">
              Counter
            </Link> */}
            {/* <Link className="px-4 hover:border-b-2  border-red-400" href="/todo">
              Todo
            </Link> */}
            {/* <Link className="px-4 hover:border-b-2  border-red-400 " href="/contactUs">
              ContactUs
            </Link> */}
            <Link className="px-4 hover:border-b-2  border-red-400 " href="/productListing">
              Product
            </Link>
            <Link className="px-4 hover:border-b-2  border-red-400 " href="/addProduct">
              AddProduct
            </Link>
            <Link className="px-4 hover:border-b-2  border-red-400" href="/signup">
              SignUp
            </Link>
            <Link className="px-4 hover:border-b-2  border-red-400 " href="/login">
              Login
            </Link>

            <Link className="px-4 hover:border-b-2  border-red-400 " href="/contactus">
              ContactUs
            </Link>
            {/* <Link className="px-4 hover:border-b-2  border-blue-400 " href="/manageUser">
              ManageUser
            </Link> */}
          </div>
          {/* <div className=" flex  justify-center items-center "> */}
            {/* <div className="hidden lg:flex justify-center items-center mr-5">
           <nutton className=" text-white font-semibold size-md">SignUp</nutton>
              <button className="border-2 p-1  rounded-e-lg border-blue-600 bg-orange-400">
                <i className="fa-solid fa-magnifying-glass "></i>
              </button>
            </div>
            <div className="lg:hidden mr-10">
              <i className="fa-solid fa-magnifying-glass "></i>
            </div>
            <div className="lg:hidden mr-10">
              <i className="fa-solid fa-bars" />
            </div> */}
          {/* </div> */}
        </nav>
        {/* Nav Done */}
      </>
    </div>
  );
};

export default Navbar