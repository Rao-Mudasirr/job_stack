import React from "react";

const TermsAndServices = () => {
  return (
    <div>
        {/* <nav id="topnav" className="defaultscroll is-sticky">
            <div className="container">
                <a className="logo" href="index.html">
                    <div className="block sm:hidden">
                        <img src="assets/images/logo-icon-40.png" className="h-10 inline-block dark:hidden"  alt=""/>
                        <img src="assets/images/logo-icon-40-white.png" className="h-10 hidden dark:inline-block"  alt=""/>
                    </div>
                    <div className="sm:block hidden">
                        <span className="inline-block dark:hidden">
                            <img src="assets/images/logo-dark.png" className="h-[24px] l-dark" alt=""/>
                            <img src="assets/images/logo-light.png" className="h-[24px] l-light" alt=""/>
                        </span>
                        <img src="assets/images/logo-white.png" className="h-[24px] hidden dark:inline-block" alt=""/>
                    </div>
                </a>
                
                <div className="menu-extras">
                    <div className="menu-item">
                        <a className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>
               
                <ul className="buy-button list-none mb-0">
                    <li className="inline-block mb-0">
                        <div className="relative top-[3px]">
                            <i className="uil uil-search text-lg absolute top-[3px] ltr:right-3 rtl:left-3"></i>
                            <input type="text" className="form-input h-9 ltr:pr-10 rtl:pr-10 rounded-3xl sm:w-44 w-36 border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..."/>
                        </div>
                    </li>
                    <li className="inline-block pl-1 mb-0">
                        <a href="#" className="btn btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"><img src="assets/images/team/05.jpg" className="rounded-full" alt=""/></a>
                    </li>
                </ul>

                <div id="navigation">
                    <ul className="navigation-menu justify-end nav-light">
                        <li className="has-submenu parent-menu-item">
                            <a href="javascript:void(0)">Home</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="index.html" className="sub-menu-item">Hero One</a></li>
                                <li><a href="index-two.html" className="sub-menu-item">Hero Two</a></li>
                                <li><a href="index-three.html" className="sub-menu-item">Hero Three</a></li>
                                <li><a href="index-four.html" className="sub-menu-item">Hero Four</a></li>
                                <li><a href="index-five.html" className="sub-menu-item">Hero Five</a></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item"><a href="javascript:void(0)"> Jobs </a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="job-categories.html" className="sub-menu-item">Job Categories</a></li>
                        
                                <li className="has-submenu parent-menu-item">
                                    <a href="javascript:void(0)"> Job Grids </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="job-grid-one.html" className="sub-menu-item">Job Grid One</a></li>
                                        <li><a href="job-grid-two.html" className="sub-menu-item">Job Grid Two</a></li>
                                        <li><a href="job-grid-three.html" className="sub-menu-item">Job Grid Three</a></li>
                                    </ul>  
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <a href="javascript:void(0)"> Job Lists </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="job-list-one.html" className="sub-menu-item">Job List One</a></li>
                                        <li><a href="job-list-two.html" className="sub-menu-item">Job List Two</a></li>
                                        <li><a href="job-list-three.html" className="sub-menu-item">Job List Three</a></li>
                                        <li><a href="job-list-four.html" className="sub-menu-item">Job List Four</a></li>
                                    </ul>  
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <a href="javascript:void(0)"> Job Detail </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="job-detail-one.html" className="sub-menu-item">Job Detail One</a></li>
                                        <li><a href="job-detail-two.html" className="sub-menu-item">Job Detail Two</a></li>
                                        <li><a href="job-detail-three.html" className="sub-menu-item">Job Detail Three</a></li>
                                    </ul>  
                                </li>
                
                                <li><a href="job-apply.html" className="sub-menu-item">Job Apply</a></li>
                            </ul>  
                        </li>
                
                        <li className="has-submenu parent-parent-menu-item">
                            <a href="javascript:void(0)">Pages</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="aboutus.html" className="sub-menu-item">About Us</a></li>
                                <li><a href="services.html" className="sub-menu-item">Services</a></li>

                                <li className="has-submenu parent-menu-item">
                                    <a href="javascript:void(0)">Employers</a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="employer-list.html" className="sub-menu-item">Employers</a></li>
                                        <li><a href="employer-detail.html" className="sub-menu-item">Employer Detail</a></li>
                                    </ul>
                                </li>
                        
                                <li className="has-submenu parent-menu-item">
                                    <a href="javascript:void(0)">Candidates</a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="candidate-list.html" className="sub-menu-item">Candidates</a></li>
                                        <li><a href="candidate-detail.html" className="sub-menu-item">Candidate Detail</a></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <a href="javascript:void(0)"> Helpcenter </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="helpcenter-overview.html" className="sub-menu-item">Overview</a></li>
                                        <li><a href="helpcenter-faqs.html" className="sub-menu-item">FAQs</a></li>
                                        <li><a href="helpcenter-guides.html" className="sub-menu-item">Guides</a></li>
                                        <li><a href="helpcenter-support.html" className="sub-menu-item">Support</a></li>
                                    </ul>  
                                </li>

                                <li className="has-submenu parent-menu-item"><a href="javascript:void(0)"> Blog </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="blogs.html" className="sub-menu-item"> Blogs</a></li>
                                        <li><a href="blog-detail.html" className="sub-menu-item"> Blog Detail</a></li>
                                    </ul> 
                                </li>

                                <li className="has-submenu parent-menu-item"><a href="javascript:void(0)"> Auth Pages </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="login.html" className="sub-menu-item"> Login</a></li>
                                        <li><a href="signup.html" className="sub-menu-item"> Signup</a></li>
                                        <li><a href="reset-password.html" className="sub-menu-item"> Forgot Password</a></li>
                                        <li><a href="lock-screen.html" className="sub-menu-item"> Lock Screen</a></li>
                                    </ul> 
                                </li>

                                <li className="has-submenu parent-menu-item"><a href="javascript:void(0)"> Utility </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="terms.html" className="sub-menu-item">Terms of Services</a></li>
                                        <li><a href="privacy.html" className="sub-menu-item">Privacy Policy</a></li>
                                    </ul>  
                                </li>

                                <li className="has-submenu parent-menu-item"><a href="javascript:void(0)"> Special </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="comingsoon.html" className="sub-menu-item"> Coming Soon</a></li>
                                        <li><a href="maintenance.html" className="sub-menu-item"> Maintenance</a></li>
                                        <li><a href="error.html" className="sub-menu-item"> 404!</a></li>
                                        <li><a href="thankyou.html" className="sub-menu-item"> Thank you</a></li>
                                    </ul> 
                                </li>
                            </ul>
                        </li>
                
                        <li><a href="contact.html" className="sub-menu-item">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav> */}
      <section className="relative table w-full py-36 ">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
              Terms & Services
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
              <a href="index.html">Jobstack</a>
            </li>
            <li
              className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Terms & Services
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <h5 className="text-xl font-medium mb-4">Introduction :</h5>
                <p className="text-slate-400">
                  It seems that only fragments of the original text remain in
                  the Lorem Ipsum texts used today. One may speculate that over
                  the course of time certain letters were added or deleted at
                  various positions within the text.
                </p>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  User Agreements :
                </h5>
                <p className="text-slate-400">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have <b className="text-danger-600">originated</b> in
                  the 16th century. Lorem Ipsum is{" "}
                  <b className="text-danger-600">composed</b> in a pseudo-Latin
                  language which more or less{" "}
                  <b className="text-danger-600">corresponds</b> to 'proper'
                  Latin. It contains a series of real Latin words. This ancient
                  dummy text is also{" "}
                  <b className="text-danger-600">incomprehensible</b>, but it
                  imitates the rhythm of most European languages in Latin
                  script. The <b className="text-danger-600">advantage</b> of
                  its Latin origin and the relative{" "}
                  <b className="text-danger-600">meaninglessness</b> of Lorum
                  Ipsum is that the text does not attract attention to itself or
                  distract the viewer's{" "}
                  <b className="text-danger-600">attention</b> from the layout.
                </p>
                <p className="text-slate-400 mt-3">
                  There is now an <b className="text-danger-600">abundance</b>{" "}
                  of readable dummy texts. These are usually used when a text is{" "}
                  <b className="text-danger-600">required purely</b> to fill a
                  space. These alternatives to the classic Lorem Ipsum texts are
                  often amusing and tell short, funny or{" "}
                  <b className="text-danger-600">nonsensical</b> stories.
                </p>
                <p className="text-slate-400 mt-3">
                  It seems that only{" "}
                  <b className="text-danger-600">fragments</b> of the original
                  text remain in the Lorem Ipsum texts used today. One may
                  speculate that over the course of time certain letters were
                  added or deleted at various positions within the text.
                </p>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  Restrictions :
                </h5>
                <p className="text-slate-400">
                  You are specifically restricted from all of the following :
                </p>
                <ul className="list-none text-slate-400 mt-3">
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Create your own skin to match your brand
                  </li>
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Create your own skin to match your brand
                  </li>
                </ul>

                <h5 className="text-xl font-medium mt-8">
                  Users Question & Answer :
                </h5>

                <div
                  id="accordion-collapse"
                  data-accordion="collapse"
                  className="mt-6"
                >
                  <div className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                    <h2
                      className="text-base font-medium"
                      id="accordion-collapse-heading-1"
                    >
                      <button
                        type="button"
                        className="flex justify-between items-center p-5 w-full font-medium text-left"
                        data-accordion-target="#accordion-collapse-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-1"
                      >
                        <span>How does it work ?</span>
                        <svg
                          data-accordion-icon
                          className="w-4 h-4 rotate-180 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-body-1"
                      className="hidden"
                      aria-labelledby="accordion-collapse-heading-1"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                    <h2
                      className="text-base font-medium"
                      id="accordion-collapse-heading-2"
                    >
                      <button
                        type="button"
                        className="flex justify-between items-center p-5 w-full font-medium text-left"
                        data-accordion-target="#accordion-collapse-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-2"
                      >
                        <span>Do I need a designer to use Jobstack ?</span>
                        <svg
                          data-accordion-icon
                          className="w-4 h-4 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-body-2"
                      className="hidden"
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                    <h2
                      className="text-base font-medium"
                      id="accordion-collapse-heading-3"
                    >
                      <button
                        type="button"
                        className="flex justify-between items-center p-5 w-full font-medium text-left"
                        data-accordion-target="#accordion-collapse-body-3"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-3"
                      >
                        <span>What do I need to do to start selling ?</span>
                        <svg
                          data-accordion-icon
                          className="w-4 h-4 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-body-3"
                      className="hidden"
                      aria-labelledby="accordion-collapse-heading-3"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                    <h2
                      className="text-base font-medium"
                      id="accordion-collapse-heading-4"
                    >
                      <button
                        type="button"
                        className="flex justify-between items-center p-5 w-full font-medium text-left"
                        data-accordion-target="#accordion-collapse-body-4"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-4"
                      >
                        <span>What happens when I receive an order ?</span>
                        <svg
                          data-accordion-icon
                          className="w-4 h-4 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-body-4"
                      className="hidden"
                      aria-labelledby="accordion-collapse-heading-4"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#"
                    className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                  >
                    Accept
                  </a>
                  <a
                    href="#"
                    className="btn bg-transparent hover:bg-emerald-600 border border-emerald-600 text-emerald-600 hover:text-white rounded-md ml-2"
                  >
                    Decline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndServices;
