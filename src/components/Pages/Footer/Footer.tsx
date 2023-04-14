import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div dir="ltr">
      <footer className="relative bg-slate-900 dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative py-12">
              <div className="relative w-full">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="md:col-span-3">
                    <Link
                      to="#"
                      className="flex justify-center md:justify-start focus:outline-none"
                    >
                      <img
                        src="assets/images/logo-light.png"
                        className=""
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="md:col-span-9">
                    <ul className="list-disc footer-list ltr:md:text-right rtl:md:text-left text-center">
                      <li className="inline-block">
                        <Link
                          to="/"
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4"
                          replace={true}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="inline-block mt-[10px] md:mt-0">
                        <Link
                          to="services.html"
                          replace={true}
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4"
                        >
                          How it works
                        </Link>
                      </li>
                      <li className="inline-block mt-[10px] md:mt-0">
                        <Link
                          to="#"
                          replace={true}
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4"
                        >
                          Create a job
                        </Link>
                      </li>
                      <li className="inline-block mt-[10px] md:mt-0">
                        <Link
                          to="aboutus.html"
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4"
                          replace={true}
                        >
                          About us
                        </Link>
                      </li>
                      <li className="inline-block mt-[10px] md:mt-0">
                        <Link
                          to="contact.html"
                          replace={true}
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium"
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="ltr:md:text-left rtl:md:text-right text-center">
                <p className="mb-0 text-gray-300 font-medium">
                  © {moment().year()} Jobstack. Design with{" "}
                  <i className="mdi mdi-heart text-red-600"></i> by{" "}
                  <Link
                    to="https://shreethemes.in/"
                    replace={true}
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </Link>
                  .
                </p>
              </div>

              <ul className="list-none ltr:md:text-right rtl:md:text-left text-center">
                <li className="inline">
                  <Link
                    to="https://1.envato.market/jobstack"
                    replace={true}
                    target="_blank"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i
                      className="uil uil-shopping-cart align-middle"
                      title="Buy Now"
                    ></i>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://dribbble.com/shreethemes"
                    replace={true}
                    target="_blank"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i
                      className="uil uil-dribbble align-middle"
                      title="dribbble"
                    ></i>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.behance.net/shreethemes"
                    replace={true}
                    target="_blank"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i className="uil uil-behance" title="Behance"></i>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="http://linkedin.com/company/shreethemes"
                    replace={true}
                    target="_blank"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i className="uil uil-linkedin" title="Linkedin"></i>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.facebook.com/shreethemes"
                    replace={true}
                    target="_blank"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i
                      className="uil uil-facebook-f align-middle"
                      title="facebook"
                    ></i>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://www.instagram.com/shreethemes/"
                    replace={true}
                    target="_blank"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i
                      className="uil uil-instagram align-middle"
                      title="instagram"
                    ></i>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="https://twitter.com/shreethemes"
                    replace={true}
                    target="_blank"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i
                      className="uil uil-twitter align-middle"
                      title="twitter"
                    ></i>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to="mailto:support@shreethemes.in"
                    replace={true}
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i
                      className="uil uil-envelope align-middle"
                      title="email"
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
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
        <Link
          to="https://1.envato.market/jobstack"
          target="_blank"
          className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-700 font-semibold"
        >
          <i className="mdi mdi-cart-outline mr-1"></i> Download
        </Link>
      </div>

      <div className="fixed top-[40%] -left-3 z-50">
        <Link to="#" id="switchRtl">
          <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden">
            LTR
          </span>
          <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">
            RTL
          </span>
        </Link>
      </div>

      <Link
        to="#"
        // onClick="topFunction()"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 ltr:right-5 rtl:left-5 h-9 w-9 text-center bg-emerald-600 text-white justify-center items-center"
      >
        <i className="uil uil-arrow-up"></i>
      </Link>
    </div>
  );
};

export default Footer;
