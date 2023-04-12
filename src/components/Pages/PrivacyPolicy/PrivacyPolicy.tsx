import React from "react";

const PrivacyPolicy = () => {
  return (
    <div dir="ltr">
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
              Privacy Policy
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
              Privacy Policy
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
                <h5 className="text-xl font-medium mb-4">Overview :</h5>
                <p className="text-slate-400">
                  It seems that only fragments of the original text remain in
                  the Lorem Ipsum texts used today. One may speculate that over
                  the course of time certain letters were added or deleted at
                  various positions within the text.
                </p>
                <p className="text-slate-400">
                  In the 1960s, the text suddenly became known beyond the
                  professional circle of typesetters and layout designers when
                  it was used for Letraset sheets (adhesive letters on
                  transparent film, popular until the 1980s) Versions of the
                  text were subsequently included in DTP programmes such as
                  PageMaker etc.
                </p>
                <p className="text-slate-400">
                  There is now an abundance of readable dummy texts. These are
                  usually used when a text is required purely to fill a space.
                  These alternatives to the classic Lorem Ipsum texts are often
                  amusing and tell short, funny or nonsensical stories.
                </p>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  We use your information to :
                </h5>
                <ul className="list-unstyled text-slate-400 mt-4">
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

                <h5 className="text-xl font-medium mb-4 mt-8">
                  Information Provided Voluntarily :
                </h5>
                <p className="text-slate-400">
                  In the 1960s, the text suddenly became known beyond the
                  professional circle of typesetters and layout designers when
                  it was used for Letraset sheets (adhesive letters on
                  transparent film, popular until the 1980s) Versions of the
                  text were subsequently included in DTP programmes such as
                  PageMaker etc.
                </p>

                <div className="mt-8">
                  <a
                    href="#"
                    className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                  >
                    Print
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <footer className="relative bg-slate-900 dark:bg-slate-800">
            <div className="container">
                <div className="grid grid-cols-1">
                    <div className="relative py-12">
                        
                        <div className="relative w-full">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div className="md:col-span-3">
                                    <a href="#" className="flex justify-center md:justify-start focus:outline-none">
                                        <img src="assets/images/logo-light.png" className="" alt=""/>
                                    </a>
                                </div>
                        
                                <div className="md:col-span-9">
                                    <ul className="list-disc footer-list ltr:md:text-right rtl:md:text-left text-center">
                                        <li className="inline-block"><a href="index.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4">Home</a></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><a href="services.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4">How it works</a></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4">Create a job</a></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><a href="aboutus.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4">About us</a></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><a href="contact.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">Contact us</a></li>
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
                            <p className="mb-0 text-gray-300 font-medium">© <script>document.write(new Date().getFullYear())</script> Jobstack. Design with <i className="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
                        </div>

                        <ul className="list-none ltr:md:text-right rtl:md:text-left text-center">
                            <li className="inline"><a href="https://1.envato.market/jobstack" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i className="uil uil-shopping-cart align-middle" title="Buy Now"></i></a></li>
                            <li className="inline"><a href="https://dribbble.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i className="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
                            <li className="inline"><a href="https://www.behance.net/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i className="uil uil-behance" title="Behance"></i></a></li>
                            <li className="inline"><a href="http://linkedin.com/company/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i className="uil uil-linkedin" title="Linkedin"></i></a></li>
                            <li className="inline"><a href="https://www.facebook.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                            <li className="inline"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i className="uil uil-instagram align-middle" title="instagram"></i></a></li>
                            <li className="inline"><a href="https://twitter.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
                            <li className="inline"><a href="mailto:support@shreethemes.in" className="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i className="uil uil-envelope align-middle" title="email"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className="fixed top-1/4 -left-2 z-50 hidden sm:block">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk"/>
                <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
                    <i className="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i className="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
                </label>
            </span>
        </div>

        <div className="fixed top-1/2 -right-11 z-50 hidden sm:block">
            <a href="https://1.envato.market/jobstack" target="_blank" className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-700 font-semibold"><i className="mdi mdi-cart-outline mr-1"></i> Download</a>
        </div>
        
        <div className="fixed top-[40%] -left-3 z-50">
            <a href="#" id="switchRtl">
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" >LTR</span>
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">RTL</span>
            </a>
        </div>
        
        <a href="#" onClick="topFunction()" id="back-to-top" class="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 ltr:right-5 rtl:left-5 h-9 w-9 text-center bg-emerald-600 text-white justify-center items-center"><i className="uil uil-arrow-up"></i></a> */}
    </div>
  );
};

export default PrivacyPolicy;
