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
                      to="/"
                      className="flex justify-center md:justify-start focus:outline-none"
                      replace={true}
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
                          to="/job-list"
                          replace={true}
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4"
                        >
                          Job List
                        </Link>
                      </li>
                      <li className="inline-block mt-[10px] md:mt-0">
                        <Link
                          to="/terms"
                          replace={true}
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4"
                        >
                          Terms & Services
                        </Link>
                      </li>
                      <li className="inline-block mt-[10px] md:mt-0">
                        <Link
                          to="/privacy"
                          replace={true}
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4"
                        >
                          Privacy Policy
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
                  © {moment().year()} Orcalo. Design with{" "}
                  <i className="mdi mdi-heart text-red-600"></i> by{" "}
                  <Link
                    to="/"
                    replace={true}
                    className="text-reset"
                  >
                    Orcalo Holding
                  </Link>
                  .
                </p>
              </div>

              <ul className="list-none ltr:md:text-right rtl:md:text-left text-center">
                <li className="inline">
                  <Link
                    to=""
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
                    to=""
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
                    to=""
                    replace={true}
                    target="_blank"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i className="uil uil-behance" title="Behance"></i>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to=""
                    replace={true}
                    target="_blank"
                    className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"
                  >
                    <i className="uil uil-linkedin" title="Linkedin"></i>
                  </Link>
                </li>
                <li className="inline">
                  <Link
                    to=""
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
                    to=""
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
                    to=""
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
                    to=""
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
    </div>
  );
};

export default Footer;
