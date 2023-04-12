import React from "react";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  return (
    <div>
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">
              <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                <img src="assets/images/blog/09.jpg" alt="" />
                <div className="p-6">
                  <p className="text-slate-400">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. Lorem Ipsum
                    is composed in a pseudo-Latin language which more or less
                    corresponds to 'proper' Latin. It contains a series of real
                    Latin words. This ancient dummy text is also
                    incomprehensible, but it imitates the rhythm of most
                    European languages in Latin script.
                  </p>
                  <p className="text-slate-400 italic border-x-4 border-emerald-600 rounded-tl-xl rounded-br-xl mt-3 p-3">
                    " There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. "
                  </p>
                  <p className="text-slate-400 mt-3">
                    The advantage of its Latin origin and the relative
                    meaninglessness of Lorum Ipsum is that the text does not
                    attract attention to itself or distract the viewer's
                    attention from the layout.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                <form className="mt-8">
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-left">
                        <label for="name" className="font-semibold">
                          Your Name:
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="user"
                            className="w-4 h-4 absolute top-3 left-4"
                          ></i>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-input pl-11"
                            placeholder="Name :"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <div className="text-left">
                        <label for="email" className="font-semibold">
                          Your Email:
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="mail"
                            className="w-4 h-4 absolute top-3 left-4"
                          ></i>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-input pl-11"
                            placeholder="Email :"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <div className="text-left">
                        <label for="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="message-circle"
                            className="w-4 h-4 absolute top-3 left-4"
                          ></i>
                          <textarea
                            name="comments"
                            id="comments"
                            className="form-input pl-11 h-28"
                            placeholder="Message :"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
              <div className="sticky top-20">
                <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
                  Author
                </h5>
                <div className="text-center mt-8">
                  <img
                    src="assets/images/team/05.jpg"
                    className="h-20 w-20 mx-auto rounded-full shadow mb-4"
                    alt=""
                  />

                  <Link
                    to=""
                    className="text-lg font-medium hover:text-emerald-600 transition-all duration-500 ease-in-out h5"
                  >
                    Cristina Romsey
                  </Link>
                  <p className="text-slate-400">Content Writer</p>
                </div>

                <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                  Social sites
                </h5>
                <ul className="list-none text-center mt-8">
                  <li className="inline">
                    <Link
                      to=""
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
                    >
                      <i data-feather="facebook" className="h-4 w-4"></i>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      to=""
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
                    >
                      <i data-feather="instagram" className="h-4 w-4"></i>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      to=""
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
                    >
                      <i data-feather="twitter" className="h-4 w-4"></i>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      to=""
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
                    >
                      <i data-feather="linkedin" className="h-4 w-4"></i>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      to=""
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
                    >
                      <i data-feather="github" className="h-4 w-4"></i>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      to=""
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
                    >
                      <i data-feather="youtube" className="h-4 w-4"></i>
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      to=""
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-emerald-600 hover:text-white hover:bg-emerald-600"
                    >
                      <i data-feather="gitlab" className="h-4 w-4"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
              Related Blogs
            </h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">
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
                    to=""
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                  >
                    11 Tips to Help You Get New Clients Through Cold Calling
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      to=""
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by{" "}
                      <Link
                        to=""
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
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
                    to=""
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                  >
                    DigitalOcean launches first Canadian data centre in Toronto
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      to=""
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by{" "}
                      <Link
                        to=""
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
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
                    to=""
                    className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                  >
                    Using Banner Stands To Increase Trade Show Traffic
                  </Link>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      to=""
                      className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by{" "}
                      <Link
                        to=""
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                      >
                        Linkedin
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid md:mt-24 mt-16">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <div className="ltr:md:text-left rtl:md:text-right text-center relative z-1">
                      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                        Explore a job now!
                      </h3>
                      <p className="text-slate-400 max-w-xl">
                        Search all the open positions on the web. Get your own
                        personalized salary estimate. Read reviews on over
                        30000+ companies worldwide.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-4 md:col-span-5">
                    <div className="ltr:text-right rtl:text-left relative z-1">
                      <Link
                        to=""
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md"
                      >
                        Apply Now
                      </Link>
                      <Link
                        to=""
                        className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ltr:ml-2 rtl:mr-2"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-5 ltr:-left-5 rtl:-right-5">
                  <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
                </div>

                <div className="absolute -bottom-5 ltr:-right-5 rtl:-left-5">
                  <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
