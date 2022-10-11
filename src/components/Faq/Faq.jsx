import React from 'react';

const Faq = () => {

  return (
    <div className=' mb-40'>
      <h1 className='my-10 text-3xl md:text-4xl text-center text-white'>Frequently Asked <span className='text-violet-500 font-semibold'>Quesion</span> </h1>
      <div className="w-11/12 lg:w-6/12 mx-auto">
        <details className="group border border-violet-500 rounded-lg mb-5">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg p-4"
          >
            <h5 className="font-medium text-white text-2xl">
            What is the purpose of react router?
            </h5>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180 text-violet-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className=" px-4 leading-relaxed text-white py-5">
          React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
          </p>
        </details>
        <details className="group border border-violet-500 rounded-lg mb-5">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg p-4"
          >
            <h5 className="font-medium text-white text-2xl">
            How does context api works?
            </h5>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180 text-violet-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className=" px-4 leading-relaxed text-white py-5">
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent.It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
          </p>
        </details>
        <details className="group border border-violet-500 rounded-lg">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg p-4"
          >
            <h5 className="font-medium text-white text-2xl">
            What is useRef?
            </h5>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180 text-violet-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className=" px-4 leading-relaxed text-white py-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
          </p>
        </details>

      </div>


    </div>
  );
};

export default Faq;