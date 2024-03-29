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
    </div>
  );
};

export default ThankYou;
