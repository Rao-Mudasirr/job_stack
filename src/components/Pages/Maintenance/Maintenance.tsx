import React from "react";

const Maintenance = () => {
  return (
    <div dir="ltr">
      {" "}
      <section className="md:h-screen py-36 flex items-center justify-center relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative z-3 text-center">
          <div className="grid grid-cols-1">
            <img
              src="assets/images/logo-icon-40.png"
              className="mx-auto h-10"
              alt=""
            />
            <h1 className="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">
              We Are Back Soon...
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Find Jobs, Employment & Career Opportunities. Some of the
              companies we've helped recruit excellent applicants over the
              years.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-10">
            <div className="text-center">
              <span
                id="maintenance"
                className="timer text-white text-[56px] tracking-[1px]"
              ></span>
              <span className="block text-base font-semibold uppercase text-white">
                Minutes
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-8">
            <div className="text-center subcribe-form">
              <form className="relative mx-auto max-w-xl">
                <input
                  type="email"
                  id="subemail"
                  name="name"
                  className="pt-4 ltr:pr-40 rtl:pl-40 pb-4 pl-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border dark:border-gray-700"
                  placeholder="Enter your email id.."
                />
                <button
                  type="submit"
                  className="btn absolute top-[2px] ltr:right-[3px] rtl:left-[3px] h-[46px] bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-full"
                >
                  Subcribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-3 ltr:right-3 rtl:left-3 z-10">
        <a
          href="#"
          className="back-button btn btn-icon bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-full"
        >
          <i data-feather="arrow-left" className="h-4 w-4"></i>
        </a>
      </div>
      <div className="fixed top-1/4 -left-2 z-50 hidden sm:block">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <i className="uil uil-moon text-[20px] text-yellow-500"></i>
            <i className="uil uil-sun text-[20px] text-yellow-500"></i>
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
          </label>
        </span>
      </div>
      <div className="fixed top-1/2 -right-11 z-50 hidden sm:block">
        <a
          href="https://1.envato.market/jobstack"
          target="_blank"
          className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-700 font-semibold"
        >
          <i className="mdi mdi-cart-outline mr-1"></i> Download
        </a>
      </div>
      <div className="fixed top-[40%] -left-3 z-50">
        <a href="#" id="switchRtl">
          <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden">
            LTR
          </span>
          <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">
            RTL
          </span>
        </a>
      </div>
      <script src="assets/libs/feather-icons/feather.min.js"></script>
      <script src="assets/js/plugins.init.js"></script>
      <script src="assets/js/app.js"></script>
    </div>
  );
};

export default Maintenance;
