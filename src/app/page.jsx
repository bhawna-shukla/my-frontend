import React from 'react'

const Page = () => {
  return (
    <div >
      {/* <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
      
        <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
          <div className="container relative flex px-6 py-16 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
              <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                Be on
                <span className="text-5xl sm:text-7xl">Time</span>
              </h1>
              <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                Dimension of reality that makes change possible and understandable. An
                indefinite and homogeneous environment in which natural events and
                human existence take place.
              </p>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5 "> */}
              {/* <img
          src="/images/object/10.png"
          className="max-w-xs m-auto md:max-w-sm"
        /> */}


        {/* ----------------------------------------------- */}

        

             
            
            {/* </div>
          </div>
        </div>
      </main> */}


<div className="bg-dark pb-6 sm:pb-8 lg:pb-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
   
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      {/* image - start */}
      <img
        src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
        loading="lazy"
        alt="Photo by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* image - end */}
      {/* overlay - start */}
      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
      {/* overlay - end */}
      {/* text start */}
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        {/* <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
          Very proud to introduce
        </p> */}
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
          Welcome' UI/UX Marketplace        </h1>
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
        Collaborate with skilled designers to deliver powerful digital experiences that engage and delight users.
        </p>
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Start now
          </a>
          {/* <a
            href="#"
            className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >
            Take tour
          </a> */}
        </div>
      </div>
      {/* text end */}
    </section>
  </div>
</div>
{/* --------------------------------------------------------------------------- */}

{/* <section className="bg-white dark:bg-white-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-dark">
      explore our <br /> awesome{" "}
      <span className="underline decoration-blue-500">Components</span>
    </h1>
    <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
      voluptatibus
    </p>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 bg-blue-500">
      <div className="p-8 space-y-3 border-2 border-blue-400  dark:border-blue-300 rounded-xl">
        <span className="inline-block text-blue-500 dark:text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </span>
        <h1 className="text-xl font-semibold text-black capitalize dark:text-black">
          elegant Dark Mode
        </h1>
        <p className="text-gray-500 dark:text-white-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
          nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
        </p>
        <a
          href="#"
          className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
      <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
        <span className="inline-block text-blue-500 dark:text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            />
          </svg>
        </span>
        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
          Easy to customiztions
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
          nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
        </p>
        <a
          href="#"
          className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
      <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
        <span className="inline-block text-blue-500 dark:text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </span>
        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
          Simple &amp; clean designs
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
          nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
        </p>
        <a
          href="#"
          className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section> */}
{/* ----------------------------------------------------------------------- */}
<section className="bg-white ">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-4xl flex justify-center font-[sans-serief] text-gray-800 capitalize lg:text-6xl dark:text-indigo-700 ">
      Explore our Features{" "}
      {/* <span className="underline decoration-blue-500">Features</span> */}
    </h1>
    <p className="mt-4 text-gray-900 xl:mt-6 font-[Georgial] text-lg">
     
    UI/UX design focuses on creating a seamless, intuitive, and engaging experience for users, whether they’re interacting with a website, mobile app, or software product...
    </p>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
      <div className="p-8 space-y-3 border-2 border-indigo-700  rounded-xl ">
        {/* <span className="inline-block text-blue-500 dark:text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </span> */}
        <h1 className="text-3xl font-[mono] font-bold text-indigo-700 capitalize mt-10 ">
        User Profiles
        </h1>
        <p className="text-gray-900 text-md  font-[Georgia]">
        Showcase portfolios, skills, experience, past projects, and client reviews. Designers can highlight their specialties .
        </p>
        <a
          href="#"
          className="inline-flex p-2 text-gray-700 capitalize transition-colors duration-300 transform bg-blue-100 rounded- rtl:-scale-x-100 font-bold dark:text-indigo-900  hover:underline hover:text-indigo-700 "
        >
          <button>MORE</button>
          
        </a>
      </div>
      <div className="p-8 space-y-3 border-2 border-indigo-700 dark:border-indigo-700 rounded-xl">
        
        <h1 className="text-3xl font-[mono] font-bold text-indigo-700 capitalize mt-10 ">
        Project Listings
        </h1>
        <p className="text-gray-900 text-md  font-[Georgia]">
        Designers can filter projects by type (e.g., UX research, UI design), budget range, timeline, or skills required.
        </p>
        <a
          href="#"
          className="inline-flex p-2 text-gray-700 capitalize transition-colors duration-300 transform bg-blue-100 rounded- rtl:-scale-x-100 font-bold dark:text-indigo-900  hover:underline hover:text-indigo-700 "
        >
          <button>MORE</button>
         
        </a>
      </div>
      <div className="p-8 space-y-3 border-2 border-indigo-700  dark:border-indigo-700 rounded-xl">
        <span className="inline-block text-blue-500 dark:text-blue-400">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg> */}
        </span>
        <h1 className="text-3xl font-[mono] font-bold text-indigo-700 capitalize ">
        Search and Discovery
 
        </h1>
        <p className="text-gray-900  text-md  font-[Georgia]">
        
         Projects and freelancers are categorized by skills (e.g., user interface design, user testing, prototyping).
        </p>
        <a
          href="#"
          className="inline-flex p-2 text-gray-700 capitalize transition-colors duration-300 transform bg-blue-100 rounded- rtl:-scale-x-100 font-bold dark:text-indigo-900  hover:underline hover:text-indigo-700    "
        >
          <button>MORE</button>
         
        </a>

        
      </div>
      </div>
      {/* ---------- */}
      
      
  </div>

  <div className="container px-6 mx-auto">
    {/* <h1 className="text-4xl flex justify-center font-[sans-serief] text-gray-800 capitalize lg:text-6xl dark:text-indigo-700 ">
      Explore our Features{" "}
     
    </h1>
    <p className="mt-4 text-gray-900 xl:mt-6  text-lg">
     
    UI/UX design focuses on creating a seamless, intuitive, and engaging experience for users, whether they’re interacting with a website, mobile app, or software product...
    </p> */}
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
      <div className="p-8   space-y-3 border-2 border-indigo-700  rounded-xl">
        
        <h1 className="text-3xl font-[mono] font-bold text-indigo-700 capitalize mt-10 ">
       
        Portfolio Gallery
        </h1>
        <p className="text-gray-900 text-md  font-[Georgia] ">
        Portfolios should highlight the designer’s range, from wireframes to high-fidelity prototypes, and client testimonials.
        </p>
        <a
          href="#"
          className="inline-flex p-2 text-gray-700 capitalize transition-colors duration-300 transform bg-blue-100 rounded- rtl:-scale-x-100 font-bold dark:text-indigo-900  hover:underline hover:text-indigo-700 "
        >
          <button>MORE</button>
         
        </a>
      </div>
      <div className="p-8 space-y-3 border-2 border-indigo-700 dark:border-indigo-700 rounded-xl">
        
        <h1 className="text-3xl font-[mono] font-bold text-indigo-700 capitalize mt-10 ">
        Rating and Reviews
        </h1>
        <p className="text-gray-900 text-md  font-[Georgia]">
        Clients can rate designers on aspects such as communication, quality of work, adherence to deadlines, and creativity.
        </p>
        <a
          href="#"
          className="inline-flex p-2 text-gray-700 capitalize transition-colors duration-300 transform bg-blue-100 rounded- rtl:-scale-x-100 font-bold dark:text-indigo-900  hover:underline hover:text-indigo-700 "
        >
          <button>MORE</button>
        </a>
      </div>
      <div className="p-8 space-y-3 border-2 border-indigo-700  dark:border-indigo-700 rounded-xl">
       
        <h1 className="text-3xl font-[mono] font-bold text-indigo-700 capitalize mt-10 ">
        Project Collaboration Tools
        </h1>
        <p className="text-gray-900  text-md  font-[Georgia]">
        A built-in chat feature for communication between clients and designers.
        </p>
        <a
          href="#"
          className="inline-flex p-2 text-gray-700 capitalize transition-colors duration-300 transform bg-blue-100 rounded- rtl:-scale-x-100 font-bold dark:text-indigo-900  hover:underline hover:text-indigo-700   "
        >
          <button>MORE</button>
        </a>

        
      </div>
    </div>
  </div>
</section>

<>
  {/* Features */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    {/* <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
      <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
        Explore tools
      </h2>
      <p className="mt-3 text-gray-800 dark:text-neutral-200">
        The powerful and flexible theme for all kinds of businesses.
      </p>
    </div> */}
    {/* End Title */}
    {/* Grid */}
    <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
      {/* Icon Block */}
      {/* <div className="col-span-6 sm:col-span-4 text-center">
        <svg
          className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-200"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width={10} height={14} x={3} y={8} rx={2} />
          <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
          <path d="M8 18h.01" />
        </svg>
        <div className="mt-2 sm:mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Responsive
          </h3>
        </div>
      </div> */}
      {/* End Icon Block */}
      {/* Icon Block */}
      <div className="col-span-6 sm:col-span-4 text-center">
        {/* <svg
          className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-200"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <circle cx={17} cy={17} r={3} />
          <circle cx={7} cy={7} r={3} />
        </svg> */}
        {/* <div className="mt-2 sm:mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Customizable
          </h3>
        </div> */}
      </div>
      {/* End Icon Block */}
      {/* Icon Block */}
      <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
        {/* <svg
          className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-200"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg> */}
        {/* <div className="mt-2 sm:mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            24/7 Support
          </h3>
        </div> */}
      </div>
      {/* End Icon Block */}
    </div>
    {/* End Grid */}
    {/* Grid */}
    <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
      <div className="hidden md:block col-span-4 md:col-span-3">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx"
          alt="Features Image"
        />
      </div>
      {/* End Col */}
      <div className="col-span-4 md:col-span-3">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
          alt="Features Image"
        />
      </div>
      {/* End Col */}
      <div className="col-span-4 md:col-span-3">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
          alt="Features Image"
        />
      </div>
      {/* End Col */}
      <div className="col-span-4 md:col-span-3">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
          alt="Features Image"
        />
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Features */}
</>



 
 




{/* ------------testimonoly--- */}
<section className=" ">
  <div className="max-w-6xl px-6 py-10 mx-auto">
    <p className="text-xl font-medium text-blue-500 ">Testimonials</p>
    <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
      What clients saying
    </h1>
    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
      <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl" />
      <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
        <img
          className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
          src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="client photo"
        />
        <div className="mt-2 md:mx-6">
          <div>
            <p className="text-xl font-medium tracking-tight text-white">
              Ema Watson
            </p>
            <p className="text-blue-200 ">Marketing Manager at Stech</p>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
            {" "}
            "As a startup founder, we were looking for a reliable platform to connect with talented UI/UX designers who could help us create an intuitive and visually appealing app for our users. We found exactly what we needed through this marketplace."
          </p>
          <div className="flex items-center justify-between mt-6 md:justify-start">
            {/* <button
              title="left arrow"
              className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              title="right arrow"
              className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </main>
  </div>
</section>

<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline text-gray-900">What is a UI/UX Marketplace?</summary>
				<div className="px-4 pb-4">
					<p> A UI/UX marketplace is an online platform that connects businesses with talented designers and agencies specializing in user interface (UI) and user experience (UX) design. Clients can post projects, browse designer portfolios, and collaborate with designers to create user-friendly and visually appealing products.</p>
				</div>
			</details>
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline text-gray-900">How do I post a project?</summary>
				<div className="px-4 pb-4">
					<p>To post a project, simply sign up for an account, create a project brief detailing your design needs (e.g., app design, website redesign, wireframes, prototyping), and set your budget and timeline. Your project will then be visible to qualified designers who can apply or submit proposals.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline text-gray-900">How do I communicate with designers during the project?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p> We provide an integrated messaging system for direct communication. You can discuss project details, share feedback, and exchange files in real-time. Additionally, some designers may offer video calls or screen sharing for more in-depth collaboration.</p>
				</div>
			</details>
		</div>
	</div>
</section>





{/* ---------------------footer------------ */}
{/* <footer className="bg-white dark:bg-gray-900">
  <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
    <a href="#">
      <img
        className="w-auto h-7"
        src="https://merakiui.com/images/full-logo.svg"
        alt=""
      />
    </a>
    <p className="text-sm text-gray-600 dark:text-gray-300">
      © Copyright 2021. All Rights Reserved.
    </p>
    <div className="flex -mx-2">
      <a
        href="#"
        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        aria-label="Reddit"
      >
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
        </svg>
      </a>
      <a
        href="#"
        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        aria-label="Facebook"
      >
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
        </svg>
      </a>
      <a
        href="#"
        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        aria-label="Github"
      >
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
        </svg>
      </a>
    </div>
  </div>
</footer> */}
{/* Footer Section */}
<footer className=" relative flex justify-center max-w-[75rem] px-4 py-10 sm:px-6 lg:px-2 lg:py-2 mx-auto">
          <div className="container p-4 mx-auto md:p-8 lg:flex-row dark:divide-geray-600">
            <div className="flex flex-col justify-center pt-6 lg:pt-0 mt-10">
              <div className="flex justify-center space-x-8">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Pinterest"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M16.021 0c-8.828 0-15.984 7.156-15.984 15.984 0 6.771 4.214 12.552 10.161 14.88-0.141-1.266-0.266-3.203 0.052-4.583 0.292-1.25 1.875-7.943 1.875-7.943s-0.479-0.964-0.479-2.375c0-2.219 1.292-3.88 2.891-3.88 1.365 0 2.026 1.021 2.026 2.25 0 1.37-0.87 3.422-1.323 5.323-0.38 1.589 0.797 2.885 2.365 2.885 2.839 0 5.026-2.995 5.026-7.318 0-3.813-2.75-6.49-6.677-6.49-4.547 0-7.214 3.417-7.214 6.932 0 1.375 0.526 2.854 1.188 3.651 0.13 0.161 0.146 0.302 0.109 0.464-0.12 0.5-0.391 1.599-0.443 1.818-0.073 0.297-0.229 0.359-0.536 0.219-1.99-0.922-3.245-3.839-3.245-6.193 0-5.036 3.667-9.672 10.563-9.672 5.542 0 9.854 3.958 9.854 9.229 0 5.516-3.474 9.953-8.307 9.953-1.62 0-3.141-0.839-3.677-1.839l-1 3.797c-0.359 1.391-1.339 3.135-2 4.193 1.5 0.458 3.078 0.714 4.734 0.714 8.813 0 15.979-7.151 15.979-15.984 0-8.828-7.167-15.979-15.979-15.979z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Gmail"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Section Ends */}



    </div>
  )
}

export default Page