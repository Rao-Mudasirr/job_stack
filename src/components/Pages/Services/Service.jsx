import React from 'react';

const Service = () => {
    return (
        <div className="dark:bg-slate-900">
        {/* <!-- Loader Start --> */}
        {/* <!-- <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div> --> */}
        {/* <!-- Loader End --> */}
        
        {/* <!-- Start Navbar --> */}
        <nav id="topnav" className="defaultscroll is-sticky">
            <div className="container">
                {/* <!-- Logo container--> */}
                <a className="logo" href="index.html">
                    <div className="block sm:hidden">
                        <img src="assets/images/logo-icon-40.png" className="h-10 inline-block dark:hidden"  alt="" />
                        <img src="assets/images/logo-icon-40-white.png" className="h-10 hidden dark:inline-block"  alt="" />
                    </div>
                    <div className="sm:block hidden">
                        <span className="inline-block dark:hidden">
                            <img src="assets/images/logo-dark.png" className="h-[24px] l-dark" alt="" />
                            <img src="assets/images/logo-light.png" className="h-[24px] l-light" alt="" />
                        </span>
                        <img src="assets/images/logo-white.png" className="h-[24px] hidden dark:inline-block" alt="" />
                    </div>
                </a>
                {/* <!-- End Logo container--> */}

                {/* <!-- Start Mobile Toggle --> */}
                <div className="menu-extras">
                    <div className="menu-item">
                        <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>
                {/* <!-- End Mobile Toggle --> */}

                {/* <!--Login button Start--> */}
                <ul className="buy-button list-none mb-0">
                    <li className="inline-block mb-0">
                        <div className="relative top-[3px]">
                            <i className="uil uil-search text-lg absolute top-[3px] ltr:right-3 rtl:left-3"></i>
                            <input type="text" className="form-input h-9 ltr:pr-10 rtl:pr-10 rounded-3xl sm:w-44 w-36 border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..." />
                        </div>
                    </li>
                    <li className="inline-block pl-1 mb-0">
                        <a href="#" className="btn btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"><img src="assets/images/team/05.jpg" className="rounded-full" alt="" /></a>
                    </li>
                </ul>
                {/* <!--Login button End--> */}

                <div id="navigation">
                    {/* <!-- Navigation Menu-->    */}
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
                    {/* <!--end navigation menu--> */}
                </div>
                {/* <!--end navigation--> */}
            </div>
            {/* <!--end container--> */}
        </nav>
        {/* <!--end header--> */}
        {/* <!-- End Navbar --> */}

        {/* <!-- Start Hero --> */}
        <section className="relative table w-full py-36 bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-emerald-900/90"></div>
            <div className="container">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">How it works?</h3>
                </div>
                {/* <!--end grid--> */}
            </div>
            {/* <!--end container--> */}
            
            <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
                <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                   <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><a href="index.html">Jobstack</a></li>
                    <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Services</li>
                </ul>
            </div>
        </section>
        {/* <!--end section--> */}
        <div className="relative">
            <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        {/* <!-- End Hero --> */}

        {/* <!-- Start --> */}
        <section className="relative md:py-24 py-16 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                            <i className="uil uil-phone text-[30px] text-emerald-600 group-hover:text-white"></i>
                        </div>
    
                        <div className="mt-4">
                            <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">24/7 Support</a>
    
                            <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>
    
                            <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <!--end content--> */}
                    
                    <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                            <i className="uil uil-atom text-[30px] text-emerald-600 group-hover:text-white"></i>
                        </div>
    
                        <div className="mt-4">
                            <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Tech & Startup Jobs</a>
    
                            <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>
    
                            <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <!--end content--> */}
                    
                    <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                            <i className="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white"></i>
                        </div>
    
                        <div className="mt-4">
                            <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Quick & Easy</a>
    
                            <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>
    
                            <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <!--end content--> */}
                    
                    <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                            <i className="uil uil-hourglass text-[30px] text-emerald-600 group-hover:text-white"></i>
                        </div>
    
                        <div className="mt-4">
                            <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Save Time</a>
    
                            <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>
    
                            <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <!--end content--> */}
                    
                    <div className="group p-6 shadow dark:shadow-gray-800 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-800 rounded-lg transition-all duration-500">
                            <i className="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white"></i>
                        </div>

                        <div className="mt-4">
                            <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Apply with confidence</a>

                            <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

                            <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <!--end content--> */}
                    
                    <div className="group p-6 shadow dark:shadow-gray-800 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-800 rounded-lg transition-all duration-500">
                            <i className="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white"></i>
                        </div>

                        <div className="mt-4">
                            <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Reduce Hiring Bias</a>

                            <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

                            <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <!--end content--> */}
                    
                    <div className="group p-6 shadow dark:shadow-gray-800 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-800 rounded-lg transition-all duration-500">
                            <i className="uil uil-briefcase text-[30px] text-emerald-600 group-hover:text-white"></i>
                        </div>

                        <div className="mt-4">
                            <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Proactive Employers</a>

                            <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

                            <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <!--end content--> */}
                    
                    <div className="group p-6 shadow dark:shadow-gray-800 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                        <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-800 rounded-lg transition-all duration-500">
                            <i className="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white"></i>
                        </div>

                        <div className="mt-4">
                            <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">No Missed Opportunities</a>

                            <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

                            <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <!--end content--> */}
                </div>
                {/* <!--end grid--> */}
            </div>
            {/* <!--end container--> */}

            

            <div className="container md:mt-24 md:pb-16 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <div className="relative">
                                <img src="assets/images/about/ab01.jpg" className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                <div className="absolute top-0 translate-y-2/4 ltr:right-0 rtl:left-0 text-center">
                                    <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="absolute ltr:md:-right-5 ltr:right-0 rtl:md:-left-5 rtl:left-0 -bottom-16">
                                <img src="assets/images/about/ab02.jpg" className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                        <div className="ltr:lg:ml-5 rtl:lg:mr-5">
                            <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Frequently Asked Questions</h3>

                            <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                            <div id="accordion-collapseone" data-accordion="collapse" className="mt-8">
                                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden">
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" className="flex justify-between items-center p-5 w-full font-semibold text-left" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>How does it work ?</span>
                                            <svg data-accordion-icon className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-2">
                                        <button type="button" className="flex justify-between items-center p-5 w-full font-semibold text-left" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <span>Do I need a designer to use Jobstack ?</span>
                                            <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-3">
                                        <button type="button" className="flex justify-between items-center p-5 w-full font-semibold text-left" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <span>What do I need to do to start selling ?</span>
                                            <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end grid--> */}
            </div>
            {/* <!--end container--> */}

            <div className="container-fluid md:mt-24 mt-16">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                                <div className="lg:col-span-8 md:col-span-7">
                                    <div className="ltr:md:text-left rtl:md:text-right text-center relative z-1">
                                        <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job now!</h3>
                                        <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
            
                                <div className="lg:col-span-4 md:col-span-5">
                                    <div className="ltr:text-right rtl:text-left relative z-1">
                                        <a href="employer-detail.html" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Apply Now</a>
                                        <a href="aboutus.html" className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ltr:ml-2 rtl:mr-2">Learn More</a>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end grid--> */}
            
                            <div className="absolute -top-5 ltr:-left-5 rtl:-right-5">
                                <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
                            </div>
            
                            <div className="absolute -bottom-5 ltr:-right-5 rtl:-left-5">
                                <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end grid--> */}
                </div>
                {/* <!--end container--> */}
            </div>
            {/* <!--end container--> */}
        </section>
        {/* <!--end section--> */}
        {/* <!-- End --> */}

        {/* <!-- Start Footer --> */}
        <footer className="relative bg-slate-900 dark:bg-slate-800">
            <div className="container">
                <div className="grid grid-cols-1">
                    <div className="relative py-12">
                        {/* <!-- Subscribe --> */}
                        <div className="relative w-full">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div className="md:col-span-3">
                                    <a href="#" className="flex justify-center md:justify-start focus:outline-none">
                                        <img src="assets/images/logo-light.png" className="" alt="" />
                                    </a>
                                </div>
                                {/* <!--end col--> */}
                        
                                <div className="md:col-span-9">
                                    <ul className="list-disc footer-list ltr:md:text-right rtl:md:text-left text-center">
                                        <li className="inline-block"><a href="index.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4">Home</a></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><a href="services.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4">How it works</a></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4">Create a job</a></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><a href="aboutus.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium ltr:mr-4 rtl:ml-4">About us</a></li>
                                        <li className="inline-block mt-[10px] md:mt-0"><a href="contact.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">Contact us</a></li>
                                    </ul>
                                    {/* <!--end icon--> */}
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end grid--> */}
                        </div>
                        {/* <!-- Subscribe --> */}
                    </div>
                </div>
            </div>
            {/* <!--end container--> */}

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
                        {/* <!--end icon--> */}
                    </div>
                    {/* <!--end grid--> */}
                </div>
                {/* <!--end container--> */}
            </div>
        </footer>
        {/* <!--end footer--> */}
        {/* <!-- End Footer --> */}
        {/* <!-- Switcher --> */}
        <div className="fixed top-1/4 -left-2 z-50 hidden sm:block">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
                <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i className="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i className="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
                </label>
            </span>
        </div>

        <div className="fixed top-1/2 -right-11 z-50 hidden sm:block">
            <a href="https://1.envato.market/jobstack" target="_blank" className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-700 font-semibold"><i className="mdi mdi-cart-outline mr-1"></i> Download</a>
        </div>
        {/* <!-- Switcher --> */}

        {/* <!-- LTR & RTL Mode Code --> */}
        <div className="fixed top-[40%] -left-3 z-50">
            <a href="#" id="switchRtl">
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" >LTR</span>
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">RTL</span>
            </a>
        </div>
        {/* <!-- LTR & RTL Mode Code -->  */}

        {/* <!-- Back to top --> */}
        <a href="#" onclick="topFunction()" id="back-to-top" className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 ltr:right-5 rtl:left-5 h-9 w-9 text-center bg-emerald-600 text-white justify-center items-center"><i className="uil uil-arrow-up"></i></a>
        {/* <!-- Back to top --> */}

        {/* <!-- JAVASCRIPTS -->
        <script src="assets/libs/tobii/js/tobii.min.js"></script>
        <script src="assets/libs/feather-icons/feather.min.js"></script>
        <script src="assets/js/plugins.init.js"></script>
        <script src="assets/js/app.js"></script>
        <!-- JAVASCRIPTS --> */}
    </div>
    );
}

export default Service