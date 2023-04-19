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
      <script src="assets/libs/feather-icons/feather.min.js"></script>
      <script src="assets/js/plugins.init.js"></script>
      <script src="assets/js/app.js"></script>
    </div>
  );
};

export default Maintenance;
