import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/blog/01.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>

              <div className="relative p-6">
                <div className="absolute left-6 -top-4">
                  <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Arts
                  </span>
                </div>

                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm">
                      <i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ml-3">
                      <i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>
                      5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                    to="/login"
                  >
                    11 Tips to Help You Get New Clients Through Cold Calling
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                      to=""
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by
                      <Link
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                        to=""
                      >
                        Google
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/blog/02.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>

              <div className="relative p-6">
                <div className="absolute left-6 -top-4">
                  <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Illustration
                  </span>
                </div>

                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm">
                      <i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ml-3">
                      <i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>
                      5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                    to="/login"
                  >
                    DigitalOcean launches first Canadian data centre in Toronto
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                      to=""
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by
                      <Link
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                        to=""
                      >
                        Facebook
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/blog/03.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>

              <div className="relative p-6">
                <div className="absolute left-6 -top-4">
                  <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Music
                  </span>
                </div>

                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm">
                      <i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ml-3">
                      <i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>
                      5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                    to="/login"
                  >
                    Using Banner Stands To Increase Trade Show Traffic
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                      to=""
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by
                      <Link
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                        to=""
                      >
                        Linkedin
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/blog/04.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>

              <div className="relative p-6">
                <div className="absolute left-6 -top-4">
                  <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Arts
                  </span>
                </div>

                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm">
                      <i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ml-3">
                      <i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>
                      5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                    to="/login"
                  >
                    11 Tips to Help You Get New Clients Through Cold Calling
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                      to=""
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by
                      <Link
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                        to=""
                      >
                        Google
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/blog/05.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>

              <div className="relative p-6">
                <div className="absolute left-6 -top-4">
                  <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Illustration
                  </span>
                </div>

                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm">
                      <i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ml-3">
                      <i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>
                      5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                    to="/login"
                  >
                    DigitalOcean launches first Canadian data centre in Toronto
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                      to=""
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by
                      <Link
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                        to=""
                      >
                        Facebook
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/blog/06.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>

              <div className="relative p-6">
                <div className="absolute left-6 -top-4">
                  <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Music
                  </span>
                </div>

                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm">
                      <i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ml-3">
                      <i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>
                      5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                    to="/login"
                  >
                    Using Banner Stands To Increase Trade Show Traffic
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                      to=""
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by
                      <Link
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                        to=""
                      >
                        Linkedin
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/blog/07.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>

              <div className="relative p-6">
                <div className="absolute left-6 -top-4">
                  <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Arts
                  </span>
                </div>

                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm">
                      <i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ml-3">
                      <i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>
                      5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                    to="/login"
                  >
                    11 Tips to Help You Get New Clients Through Cold Calling
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                      to=""
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by
                      <Link
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                        to=""
                      >
                        Google
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/blog/08.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>

              <div className="relative p-6">
                <div className="absolute left-6 -top-4">
                  <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Illustration
                  </span>
                </div>

                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm">
                      <i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ml-3">
                      <i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>
                      5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                    to="/login"
                  >
                    DigitalOcean launches first Canadian data centre in Toronto
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                      to=""
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by
                      <Link
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                        to=""
                      >
                        Facebook
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/blog/09.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>

              <div className="relative p-6">
                <div className="absolute left-6 -top-4">
                  <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Music
                  </span>
                </div>

                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm">
                      <i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ml-3">
                      <i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>
                      5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                    to="/login"
                  >
                    Using Banner Stands To Increase Trade Show Traffic
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                      to=""
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by
                      <Link
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                        to=""
                      >
                        Linkedin
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <Link
                      to=""
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 ltr:rounded-l-3xl rtl:rounded-r-3xl hover:text-white border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                    >
                      <i className="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      aria-current="page"
                      className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600"
                    >
                      3
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                    >
                      4
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                    >
                      5
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 ltr:rounded-r-3xl rtl:rounded-l-3xl hover:text-white border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600"
                    >
                      <i className="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
