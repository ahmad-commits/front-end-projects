import { Card } from 'flowbite-react';

export default function Help() {
  return (
    <div className="pc:flex pc:justify-center">
      <div className="flex-col justify-evenly mobile:m-8 mobile:w-96 my-32">
        <h1 className="text-center text-md font-bold text-slate-300">
          Contact Us
        </h1>
        <h1 className="text-center text-3xl text-neutral-50 font-extrabold">
          We'd love to hear from you!
        </h1>
        <div className="flex my-8 pc:flex-row mobile:flex-col justify-evenly gap-5 mt-16 mobile:text-center">
          <div className="rounded-lg mobile:p-16 pc:p-32 text-blue-400 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <div className="font-bold">Email us</div>
            <div className="">You can contact us on our email address</div>
            <div className="text-center font-bold">
              ahmad.daud.baloch@gmail.com
            </div>
          </div>
          <div className="rounded-lg mobile:p-16 text-blue-400 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black mobile:text-center">
            <div className="font-bold">Call Us</div>
            <div className="">We're here to help</div>
            <div className="text-center font-extrabold">03 __ _______ _</div>
          </div>
          <div className="rounded-lg p-16 text-blue-400 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black mobile:text-center">
            <div className="font-bold">Visit Us</div>
            <div className="">Out team is here to help</div>
            <div className="font-bold">Some arbitrary address</div>
          </div>
        </div>

        <div className="flex justify-center">
          <form className="">
            <div className="text-2xl text-center text-slate-300">
              Get in touch
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-5 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
                <p class="text-red-500 text-xs italic"></p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
                <button className="bg-sky-700  rounded-sm mt-8 px-32">
                  <h1 className="text-neutral-50">Submit</h1>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


