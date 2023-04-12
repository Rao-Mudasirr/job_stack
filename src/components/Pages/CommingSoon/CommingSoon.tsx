import React from "react";

const CommingSoon = () => {
  return (
    <div dir="ltr">
      {" "}
      <section className="md:h-screen py-36 flex items-center justify-center relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container-fluid relative z-3">
          <div className="grid grid-cols-1">
            <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
              <div className="text-center">
                <a href="index.html">
                  <img
                    src="assets/images/logo-icon-40.png"
                    className="mx-auto h-10"
                    alt=""
                  />
                </a>
              </div>
              <div className="title-heading text-center my-auto">
                <h1 className="text-white mt-3 mb-6 md:text-5xl text-3xl font-bold">
                  We Are Coming Soon...
                </h1>
                <p className="text-white/70 text-lg max-w-xl mx-auto">
                  Find Jobs, Employment & Career Opportunities. Some of the
                  companies we've helped recruit excellent applicants over the
                  years.
                </p>

                <div id="countdown">
                  <ul className="count-down list-none inline-block text-white text-center mt-8 m-6">
                    <li
                      id="days"
                      className="count-number inline-block m-2"
                    ></li>
                    <li
                      id="hours"
                      className="count-number inline-block m-2"
                    ></li>
                    <li
                      id="mins"
                      className="count-number inline-block m-2"
                    ></li>
                    <li
                      id="secs"
                      className="count-number inline-block m-2"
                    ></li>
                    <li id="end" className="h1"></li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-0 text-slate-400 font-medium">
                  © <script>document.write(new Date().getFullYear())</script>{" "}
                  Jobstack. Design with{" "}
                  <i className="mdi mdi-heart text-red-600"></i> by{" "}
                  <a
                    href="https://shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </a>
                  .
                </p>
              </div>
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

export default CommingSoon;
