import React from "react";
import { Link } from "react-router-dom";

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
                <Link to="/">
                  <img
                    src="assets/images/logo-icon-40.png"
                    className="mx-auto h-10"
                    alt=""
                  />
                </Link>
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
     
      <script src="assets/libs/feather-icons/feather.min.js"></script>
      <script src="assets/js/plugins.init.js"></script>
      <script src="assets/js/app.js"></script>
    </div>
  );
};

export default CommingSoon;
