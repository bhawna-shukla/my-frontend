import React from 'react'

const Page = () => {
  return (
    <div>
      <>
  {/* Hero */}
  <div className="relative overflow-hidden h-full bg-gradient-to-br from-red-500 to-red-950">
    {/* Gradients */}
    {/* <div
      aria-hidden="true"
      className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
    >
      <div className="bg-gradient-to-r from-red-500/50 to-red-300 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-yellow-900/50 dark:to-yellow-900" />
      <div className="bg-gradient-to-tl from-red-50 via-red-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-red-950/70 dark:via-red-950/70 dark:to-red-900/70" />
    </div> */}
    {/* End Gradients */}
    <div className="relative z-10">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            Preline: A vision for 2023
          </p>
          {/* Title */}
          <div className="mt-5 max-w-2xl">
            <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              The Intuitive Web Solutions
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Preline UI is an open-source set of prebuilt UI components,
              ready-to-use examples and Figma design system based on the
              utility-first Tailwind CSS framework.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Get started
              <svg
                className="shrink-0 size-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <a
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              <svg
                className="shrink-0 size-4"
                width={19}
                height={18}
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
                  fill="#0ACF83"
                />
                <path
                  d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
                  fill="#A259FF"
                />
                <path
                  d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
                  fill="#F24E1E"
                />
                <path
                  d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z"
                  fill="#FF7262"
                />
                <path
                  d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z"
                  fill="#1ABCFE"
                />
              </svg>
              Preline Figma
            </a>
          </div>
          {/* End Buttons */}
        </div>
      </div>
    </div>
  </div>
  {/* End Hero */}
  {/* --------------------------------------------------------------------------------- */}
  <div>
  <>
  {/* Card Blog */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-red-900 mt-12 ">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 ">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-dark">
        The Blog
      </h2>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
        See how game-changing companies are making the most of every engagement
        with Preline.
      </p>
    </div>
    {/* End Title */}
    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card */}
      <a
        className="group flex flex-col h-full border border-red-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-red-700 dark:hover:border-transparent dark:hover:shadow-white/40 dark:focus:border-transparent dark:focus:shadow-red/40"
        href="#"
      >
        <div className="aspect-w-16 aspect-h-11">
          <img
            className="w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
            alt="Blog Image"
          />
        </div>
        <div className="my-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
            Announcing a free plan for small teams
          </h3>
          <p className="mt-5 text-gray-600 dark:text-neutral-400">
            At Wake, our mission has always been focused on bringing openness.
          </p>
        </div>
        <div className="mt-auto flex items-center gap-x-3">
          <img
            className="size-8 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div>
            <h5 className="text-sm text-gray-800 dark:text-neutral-200">
              By Lauren Waller
            </h5>
          </div>
        </div>
      </a>
      {/* End Card */}
      {/* Card */}
      <a
        className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-red-700 dark:hover:border-transparent dark:hover:shadow-white/40 dark:focus:border-transparent dark:focus:shadow-red/40"
        href="#"
      >
        <div className="aspect-w-16 aspect-h-11">
          <img
            className="w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
            alt="Blog Image"
          />
        </div>
        <div className="my-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
            How Google Assistant now helps you record stories for kids
          </h3>
          <p className="mt-5 text-gray-600 dark:text-neutral-400">
            Google is constantly updating its consumer AI, Google Assistant,
            with new features.
          </p>
        </div>
        <div className="mt-auto flex items-center gap-x-3">
          <img
            className="size-8 rounded-full"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div>
            <h5 className="text-sm text-gray-800 dark:text-neutral-200">
              By Aaron Larsson
            </h5>
          </div>
        </div>
      </a>
      {/* End Card */}
      {/* Card */}
      <a
        className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-red-700 dark:hover:border-transparent dark:hover:shadow-white/40 dark:focus:border-transparent dark:focus:shadow-red/40"
        href="#"
      >
        <div className="aspect-w-16 aspect-h-11">
          <img
            className="w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
            alt="Blog Image"
          />
        </div>
        <div className="my-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
            Front accounts - let's work together
          </h3>
          <p className="mt-5 text-gray-600 dark:text-neutral-400">
            Are you an accountant? Are you a company formation advisor?
          </p>
        </div>
        <div className="mt-auto flex items-center gap-x-3">
          <img
            className="size-8 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div>
            <h5 className="text-sm text-gray-800 dark:text-neutral-200">
              By Lauren Waller
            </h5>
          </div>
        </div>
      </a>
      {/* End Card */}
    </div>
    {/* End Grid */}
    {/* Card */}
    <div className="mt-12 text-center">
      <a
        className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        href="#"
      >
        Read more
        <svg
          className="shrink-0 size-4"
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
          <path d="m9 18 6-6-6-6" />
        </svg>
      </a>
    </div>
    {/* End Card */}
  </div>
  {/* End Card Blog */}
</>

  </div>
</>

    </div>
  )
}

export default Page