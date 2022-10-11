import React from 'react';
import Lottie from 'lottie-react';
import reader from '../../assets/contact.json'

const Contact = () => {
  return (
    <div>
      <h1>This Is Contact</h1>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100">
        <div className="">
          <div className="">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
            <div className="text-gray-400">Vivamus in nisl metus? Phasellus.</div>
          </div>
          <Lottie animationData={reader} loop={true} />
        </div>
        <form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input id="name" type="text" placeholder="" className="w-full my-2 p-3 rounded bg-gray-900 border border-violet-500" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" type="email" className="w-full p-3 my-2 rounded bg-gray-900 border border-violet-500" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea id="message" rows="3" className="w-full p-3 my-2 rounded bg-gray-900 border border-violet-500"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-xl font-semibold tracking-wide uppercase rounded bg-violet-500 hover:bg-violet-600 text-white">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;