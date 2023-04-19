import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div dir="ltr">
      <section className="relative h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="title-heading text-center my-auto">
              <div className="w-24 h-24 bg-emerald-600/5 text-emerald-600 rounded-full text-5xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-thumbs-up"></i>
              </div>
              <h1 className="mt-6 mb-8 md:text-5xl text-3xl font-bold">
                Thank You
              </h1>
              <p className="text-slate-400 max-w-xl mx-auto">
                We are a huge marketplace dedicated to connecting great artists
                of all Jobstack with their fans and unique token collectors!
              </p>

              <div className="mt-6">
                <Link
                  to="/"
                  className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full"
                  replace={true}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-3 right-3">
        <a
          href="#"
          className="back-button btn btn-icon bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-full"
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
    </div>
  );
};

export default ThankYou;
