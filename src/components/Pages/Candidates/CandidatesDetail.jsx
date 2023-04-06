import React from 'react';

const CandidatesDetail = () => {
    let date = new Date().getFullYear()
 return (
    <div className="dark:bg-slate-900">
        <section className="relative lg:mt-24 mt-[74px]">
            <div className="lg:container container-fluid">
                <div className="relative shrink-0">
                    <img src="assets/images/hero/bg5.jpg" className="h-64 w-full object-cover lg:rounded-xl shadow dark:shadow-gray-700" alt="" />
                </div>

                <div className="md:flex ltr:ml-4 rtl:mr-4 -mt-12">
                    <div className="md:w-full">
                        <div className="relative flex items-end">
                            <img src="assets/images/team/01.jpg" className="h-28 w-28 rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" alt="" />
                            <div className="ltr:ml-4 rtl:mr-4">
                                <h5 className="text-lg font-semibold">Mr. Calvin carlo</h5>
                                <p className="text-slate-400">Web Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--end --> */}
        </section>
        {/* <!-- End Hero --> */}
        
        {/* <!-- Start --> */}
        <section className="relative mt-12 md:pb-24 pb-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-7">
                        <h5 className="text-xl font-semibold">Calvin Carlo</h5>
                        <p className="text-slate-400 mt-4">Obviously I'M Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p className="text-slate-400 mt-4">Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either taking too much time or taking too much space.</p>
                        
                        <h4 className="mt-6 text-xl font-semibold">Skills :</h4>
                        <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">WordPress</span>
                                    <span className="text-slate-400">84%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-emerald-600 h-[6px] rounded-full" style={{width: "84%"}}></div>
                                </div>
                            </div>
    
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">JavaScript</span>
                                    <span className="text-slate-400">79%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-emerald-600 h-[6px] rounded-full" style={{width: "79%"}}></div>
                                </div>
                            </div>
    
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">HTML</span>
                                    <span className="text-slate-400">95%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-emerald-600 h-[6px] rounded-full" style={{width: "95%"}}></div>
                                </div>
                            </div>
    
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">Figma</span>
                                    <span className="text-slate-400">85%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-emerald-600 h-[6px] rounded-full" style={{width: "85%"}}></div>
                                </div>
                            </div>
    
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">Photoshop</span>
                                    <span className="text-slate-400">70%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-emerald-600 h-[6px] rounded-full" style={{width: "70%"}}></div>
                                </div>
                            </div>
    
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-400">Illustration</span>
                                    <span className="text-slate-400">65%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-emerald-600 h-[6px] rounded-full" style={{width: "65%"}}></div>
                                </div>
                            </div>
                        </div>

                        <h4 className="mt-6 text-xl font-semibold">Experience :</h4>

                        <div className="flex mt-6">
                            <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                                <img src="assets/images/company/shree-logo.png" className="h-16 w-16 mx-auto mb-2 block" alt="" /> 2-019-22
                            </div>

                            <div className="ltr:ml-4 rtl:mr-4">
                                <h5 className="text-lg font-medium mb-0">Full Stack Developer</h5>
                                <span className="text-slate-400 company-university">Shreethemes - India</span>
                                <p className="text-slate-400 mt-2 mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. </p>
                            </div>
                        </div>
                        
                        <div className="flex mt-6">
                            <div className="text-slate-400 font-semibold min-w-[80px] text-center">
                                <img src="assets/images/company/circle-logo.png" className="h-16 w-16 mx-auto mb-2 block" alt="" /> 2017-19
                            </div>

                            <div className="ltr:ml-4 rtl:mr-4">
                                <h5 className="text-lg font-medium mb-0">Back-end Developer</h5>
                                <span className="text-slate-400 company-university">CircleCI - U.S.A.</span>
                                <p className="text-slate-400 mt-2 mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. </p>
                            </div>
                        </div>

                    </div>
                    {/* <!--end col--> */}

                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
                            <h5 className="text-lg font-semibold">Personal Detail:</h5>
                            <ul className="list-none mt-4">
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><i data-feather="mail" className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"></i><span className="text-slate-400 ltr:mr-3 rtl:ml-3">Email  :</span></span>
                                    
                                    <span>thomas@mail.com</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><i data-feather="gift" className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"></i><span className="text-slate-400 ltr:mr-3 rtl:ml-3">D.O.B. :</span></span>
                                    
                                    <span>31st Dec, 1996</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><i data-feather="home" className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"></i><span className="text-slate-400 ltr:mr-3 rtl:ml-3">Address :</span></span>
                                    
                                    <span>15 Razy street</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><i data-feather="map-pin" className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"></i><span className="text-slate-400 ltr:mr-3 rtl:ml-3">City :</span></span>
                                    
                                    <span>London</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><i data-feather="globe" className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"></i><span className="text-slate-400 ltr:mr-3 rtl:ml-3">Country :</span></span>
                                    
                                    <span>UK</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><i data-feather="server" className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"></i><span className="text-slate-400 ltr:mr-3 rtl:ml-3">Postal Code :</span></span>
                                    
                                    <span>521452</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><i data-feather="phone" className="h-4 w-4 text-slate-400 ltr:mr-3 rtl:ml-3 inline"></i><span className="text-slate-400 ltr:mr-3 rtl:ml-3">Mobile :</span></span>
                                    
                                    <span>(+125) 1542-8452</span>
                                </li>

                                <li className="flex justify-between mt-3">
                                    <span className="text-slate-400 font-medium">Social:</span>

                                    <ul className="list-none ltr:text-right rtl:text-left">
                                        <li className="inline"><a href="https://dribbble.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
                                        <li className="inline"><a href="https://www.behance.net/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-behance" title="Behance"></i></a></li>
                                        <li className="inline"><a href="http://linkedin.com/company/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-linkedin" title="Linkedin"></i></a></li>
                                        <li className="inline"><a href="https://www.facebook.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                                        <li className="inline"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-instagram align-middle" title="instagram"></i></a></li>
                                        <li className="inline"><a href="https://twitter.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
                                        <li className="inline"><a href="mailto:support@shreethemes.in" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-envelope align-middle" title="email"></i></a></li>
                                    </ul>
                                    {/* <!--end icon--> */}
                                </li>

                                <li className="mt-3 w-full bg-white p-3 rounded-md shadow dark:shadow-gray-700">
                                    <div className="flex items-center mb-3">
                                        <i data-feather="file-text" className="h-8 w-8 text-slate-400"></i>
                                        <span className="font-medium ltr:ml-2 rtl:mr-2">calvin-carlo-resume.pdf</span>
                                    </div>

                                    <a href="assets/images/calvin-carlo-resume.pdf" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md w-full" download><i className="uil uil-file-download-alt"></i> Download CV</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--end col--> */}
                </div>
                {/* <!--end grid--> */}
            </div>
            {/* <!--end container--> */}

            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Candidates</h3>

                    <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>
                {/* <!--end grid--> */}

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
                    <div className="group bg-white dark:bg-slate-900 relative overflow-hidden rounded-md shadow dark:shadow-gray-700 text-center p-6">
                        <img src="assets/images/team/01.jpg" className="h-20 w-20 rounded-full shadow dark:shadow-gray-700 mx-auto" alt="" />
                        
                        <div className="mt-2">
                            <a href="candidate-detail.html" className="hover:text-emerald-600 font-semibold text-lg">Steven Townsend</a>
                            <p className="text-sm text-slate-400">Web Designer</p>
                        </div>

                        <ul className="mt-2 list-none">
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Design</span></li>
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">UI</span></li>
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Digital</span></li>
                        </ul>

                        <div className="flex justify-between mt-2">
                            <div className="block">
                                <span className="text-slate-400">Salary:</span>
                                <span className="block text-sm font-semibold">$4k - $4.5k</span>
                            </div>
                            <div className="block">
                                <span className="text-slate-400">Experience:</span>
                                <span className="block text-sm font-semibold">2 Years</span>
                            </div>
                        </div>

                        <div className="mt-3">
                            <a href="candidate-detail.html" className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Profile</a>
                            <a href="#" className="btn btn-sm btn-icon bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full ltr:ml-1 rtl:mr-1"><i className="uil uil-hipchat text-[20px]"></i></a>
                        </div>

                        <span className="w-24 bg-yellow-400 text-white text-center absolute ltr:rotate-45 rtl:rotate-45 ltr:-left-[30px] rtl:-right-[30px] top-1"><i className="uil uil-star"></i></span>

                        <span className="absolute top-[10px] ltr:right-4 rtl:left-4">
                            <a href="javascript:void(0)" className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i className="mdi mdi-heart"></i></a>
                        </span>
                    </div>
                    {/* <!--end content--> */}
                    
                    <div className="group bg-white dark:bg-slate-900 relative overflow-hidden rounded-md shadow dark:shadow-gray-700 text-center p-6">
                        <img src="assets/images/team/02.jpg" className="h-20 w-20 rounded-full shadow dark:shadow-gray-700 mx-auto" alt="" />
                        
                        <div className="mt-2">
                            <a href="candidate-detail.html" className="hover:text-emerald-600 font-semibold text-lg">Tiffany Betancourt</a>
                            <p className="text-sm text-slate-400">Web Designer</p>
                        </div>

                        <ul className="mt-2 list-none">
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Design</span></li>
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">UI</span></li>
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Digital</span></li>
                        </ul>

                        <div className="flex justify-between mt-2">
                            <div className="block">
                                <span className="text-slate-400">Salary:</span>
                                <span className="block text-sm font-semibold">$4k - $4.5k</span>
                            </div>
                            <div className="block">
                                <span className="text-slate-400">Experience:</span>
                                <span className="block text-sm font-semibold">2 Years</span>
                            </div>
                        </div>

                        <div className="mt-3">
                            <a href="candidate-detail.html" className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Profile</a>
                            <a href="#" className="btn btn-sm btn-icon bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full ltr:ml-1 rtl:mr-1"><i className="uil uil-hipchat text-[20px]"></i></a>
                        </div>
                        
                        <span className="absolute top-[10px] ltr:right-4 rtl:left-4">
                            <a href="javascript:void(0)" className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i className="mdi mdi-heart"></i></a>
                        </span>
                    </div>
                    {/* <!--end content--> */}
                    
                    <div className="group bg-white dark:bg-slate-900 relative overflow-hidden rounded-md shadow dark:shadow-gray-700 text-center p-6">
                        <img src="assets/images/team/03.jpg" className="h-20 w-20 rounded-full shadow dark:shadow-gray-700 mx-auto" alt="" />
                        
                        <div className="mt-2">
                            <a href="candidate-detail.html" className="hover:text-emerald-600 font-semibold text-lg">Jacqueline Burns</a>
                            <p className="text-sm text-slate-400">Web Designer</p>
                        </div>

                        <ul className="mt-2 list-none">
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Design</span></li>
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">UI</span></li>
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Digital</span></li>
                        </ul>

                        <div className="flex justify-between mt-2">
                            <div className="block">
                                <span className="text-slate-400">Salary:</span>
                                <span className="block text-sm font-semibold">$4k - $4.5k</span>
                            </div>
                            <div className="block">
                                <span className="text-slate-400">Experience:</span>
                                <span className="block text-sm font-semibold">2 Years</span>
                            </div>
                        </div>

                        <div className="mt-3">
                            <a href="candidate-detail.html" className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Profile</a>
                            <a href="#" className="btn btn-sm btn-icon bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full ltr:ml-1 rtl:mr-1"><i className="uil uil-hipchat text-[20px]"></i></a>
                        </div>
                        
                        <span className="absolute top-[10px] ltr:right-4 rtl:left-4">
                            <a href="javascript:void(0)" className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i className="mdi mdi-heart"></i></a>
                        </span>
                    </div>
                    {/* <!--end content--> */}
                    
                    <div className="group bg-white dark:bg-slate-900 relative overflow-hidden rounded-md shadow dark:shadow-gray-700 text-center p-6">
                        <img src="assets/images/team/04.jpg" className="h-20 w-20 rounded-full shadow dark:shadow-gray-700 mx-auto" alt="" />
                        
                        <div className="mt-2">
                            <a href="candidate-detail.html" className="hover:text-emerald-600 font-semibold text-lg">Mari Harrington</a>
                            <p className="text-sm text-slate-400">Web Designer</p>
                        </div>

                        <ul className="mt-2 list-none">
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Design</span></li>
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">UI</span></li>
                            <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Digital</span></li>
                        </ul>

                        <div className="flex justify-between mt-2">
                            <div className="block">
                                <span className="text-slate-400">Salary:</span>
                                <span className="block text-sm font-semibold">$4k - $4.5k</span>
                            </div>
                            <div className="block">
                                <span className="text-slate-400">Experience:</span>
                                <span className="block text-sm font-semibold">2 Years</span>
                            </div>
                        </div>

                        <div className="mt-3">
                            <a href="candidate-detail.html" className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Profile</a>
                            <a href="#" className="btn btn-sm btn-icon bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full ltr:ml-1 rtl:mr-1"><i className="uil uil-hipchat text-[20px]"></i></a>
                        </div>
                        
                        <span className="absolute top-[10px] ltr:right-4 rtl:left-4">
                            <a href="javascript:void(0)" className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i className="mdi mdi-heart"></i></a>
                        </span>
                    </div>
                    {/* <!--end content--> */}
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
            
                                <div className="lg:col-span-4 md:col-span-5">
                                    <div className="ltr:text-right rtl:text-left relative z-1">
                                        <a href="employer-detail.html" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Apply Now</a>
                                        <a href="aboutus.html" className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ltr:ml-2 rtl:mr-2">Learn More</a>
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
                    {/* <!--end grid--> */}
                </div>
                {/* <!--end container--> */}
            </div>
            {/* <!--end container--> */}
        </section>
        {/* <!--end section--> */}
        {/* <!-- Start --> */}

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
                            <p className="mb-0 text-gray-300 font-medium">© {date} Jobstack. Design with <i className="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
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
                {/* <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" >LTR</span> */}
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">RTL</span>
            </a>
        </div>
        {/* <!-- LTR & RTL Mode Code -->  */}

        {/* <!-- Back to top --> */}
        <a href="#" onclick="topFunction()" id="back-to-top" className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 ltr:right-5 rtl:left-5 h-9 w-9 text-center bg-emerald-600 text-white justify-center items-center"><i className="uil uil-arrow-up"></i></a>
        {/* <!-- Back to top --> */}

    </div>
 );   
}
export default CandidatesDetail