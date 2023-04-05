// import React from 'react'

// const Home2 = () => {
//   return (
//     <>
//          <section className="relative md:py-56 py-36 w-full">
//             <div className="absolute inset-0 bg-emerald-600/5 dark:bg-emerald-600/10"></div>
//             <div className="container z-1">
//                 <div className="grid grid-cols-1 text-center mt-10 relative">
//                     <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Join us & <span className="text-emerald-600 font-bold">Explore</span> <br/> <span className="text-emerald-600 font-bold">Thousands</span> of Jobs</h4>
//                     <p className="text-slate-400 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
                
//                     <div className="d-flex" id="reserve-form">
//                         <div className="md:w-5/6 mx-auto">
//                             <div className="lg:col-span-10 mt-8">
//                                 <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
//                                     <form action="#">
//                                         <div className="registration-form text-dark text-start">
//                                             <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
//                                                 <div className="filter-search-form relative filter-border">
//                                                     <i className="uil uil-briefcase-alt icons"></i>
//                                                     <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords"/>
//                                                 </div>
    
//                                                 <div className="filter-search-form relative filter-border">
//                                                     <i className="uil uil-map-marker icons"></i>
//                                                     <select className="form-select" data-trigger name="choices-location" id="choices-location" aria-label="Default select example">
//                                                         <option value="AF">Afghanistan</option>
//                                                         <option value="AZ">Azerbaijan</option>
//                                                         <option value="BS">Bahamas</option>
//                                                         <option value="BH">Bahrain</option>
//                                                         <option value="CA">Canada</option>
//                                                         <option value="CV">Cape Verde</option>
//                                                         <option value="DK">Denmark</option>
//                                                         <option value="DJ">Djibouti</option>
//                                                         <option value="ER">Eritrea</option>
//                                                         <option value="EE">Estonia</option>
//                                                         <option value="GM">Gambia</option>
//                                                     </select>
//                                                 </div>
                                            
//                                                 <div className="filter-search-form relative filter-border">
//                                                     <i className="uil uil-briefcase-alt icons"></i>
//                                                     <select className="form-select" data-trigger name="choices-type" id="choices-type" aria-label="Default select example">
//                                                         <option selected="" value="1">Full Time</option>
//                                                         <option value="2">Part Time</option>
//                                                         <option value="3">Freelancer</option>
//                                                         <option value="4">Remote Work</option>
//                                                         <option value="5">Office Work</option>
//                                                     </select>
//                                                 </div>
    
//                                                 <input type="submit" id="search" name="search" style="height: 60px" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100" value="Search"/>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-4">
//                         <span className="text-slate-400"><span className="text-dark">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
//                     </div>

//                     <div className="absolute -top-20 left-1/2 -translate-x-1/2">
//                         <div className="w-10 h-10 animate-[bounce_2s_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
//                             <img src="assets/images/company/facebook-logo.png" className="h-6 w-6"  alt=""/>
//                         </div>
//                     </div>
    
//                     <div className="absolute top-[20%] ltr:left-10 rtl:right-10">
//                         <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
//                             <img src="assets/images/company/google-logo.png" className="h-6 w-6"  alt=""/>
//                         </div>
//                     </div>
    
//                     <div className="absolute top-[20%] ltr:right-1 rtl:left-1">
//                         <div className="w-10 h-10 bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
//                             <img src="assets/images/company/android.png" className="h-6 w-6"  alt=""/>
//                         </div>
//                     </div>
    
//                     <div className="absolute top-3/4 ltr:left-1 rtl:right-1">
//                         <div className="w-10 h-10 bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
//                             <img src="assets/images/company/lenovo-logo.png" className="h-6 w-6"  alt=""/>
//                         </div>
//                     </div>
    
//                     <div className="absolute top-3/4 ltr:right-10 rtl:left-10">
//                         <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
//                             <img src="assets/images/company/skype.png" className="h-6 w-6"  alt=""/>
//                         </div>
//                     </div>
    
//                     <div className="absolute -bottom-32 left-1/2 -translate-x-1/2">
//                         <div className="w-10 h-10 animate-pulse bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
//                             <img src="assets/images/company/snapchat.png" className="h-6 w-6"  alt=""/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
        

        
//         <section className="relative md:py-24 py-16">
//             <div className="container">
//                 <div className="grid grid-cols-1 pb-8 text-center">
//                     <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Categories</h3>

//                     <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
//                 </div>

//                 <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
//                     <div className="px-3 py-10 rounded-md shadow dark:shadow-gray-700 group text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
//                         <div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
//                             <i className="uil uil-gitlab"></i>
//                         </div>

//                         <div className="content mt-6">
//                             <a href="#" className="title text-lg font-semibold hover:text-emerald-600">Business <br/> Development</a>
//                             <p className="text-slate-400 mt-3">74 Jobs</p>
//                         </div>
//                     </div>

//                     <div className="px-3 py-10 rounded-md shadow dark:shadow-gray-700 group text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
//                         <div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
//                             <i className="uil uil-book-open"></i>
//                         </div>

//                         <div className="content mt-6">
//                             <a href="#" className="title text-lg font-semibold hover:text-emerald-600">Marketing & <br/> Communication</a>
//                             <p className="text-slate-400 mt-3">20 Jobs</p>
//                         </div>
//                     </div>
                
//                     <div className="px-3 py-10 rounded-md shadow dark:shadow-gray-700 group text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
//                         <div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
//                             <i className="uil uil-chart-pie-alt"></i>
//                         </div>

//                         <div className="content mt-6">
//                             <a href="#" className="title text-lg font-semibold hover:text-emerald-600">Project <br/> Management</a>
//                             <p className="text-slate-400 mt-3">35 Jobs</p>
//                         </div>
//                     </div>
                
//                     <div className="px-3 py-10 rounded-md shadow dark:shadow-gray-700 group text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
//                         <div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
//                             <i className="uil uil-feedback"></i>
//                         </div>

//                         <div className="content mt-6">
//                             <a href="#" className="title text-lg font-semibold hover:text-emerald-600">Customer <br/> Service</a>
//                             <p className="text-slate-400 mt-3">46 Jobs</p>
//                         </div>
//                     </div>
                
//                     <div className="px-3 py-10 rounded-md shadow dark:shadow-gray-700 group text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
//                         <div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
//                             <i className="uil uil-presentation-line"></i>
//                         </div>

//                         <div className="content mt-6">
//                             <a href="#" className="title text-lg font-semibold hover:text-emerald-600">Software <br/> Engineering</a>
//                             <p className="text-slate-400 mt-3">60 Jobs</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="container md:mt-24 md:pb-16 mt-16">
//                 <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
//                     <div className="lg:col-span-5 md:col-span-6">
//                         <div className="relative">
//                             <div className="relative">
//                                 <img src="assets/images/about/ab01.jpg" className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt=""/>
//                                 <div className="absolute top-0 translate-y-2/4 ltr:right-0 rtl:left-0 text-center">
//                                     <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
//                                         <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="absolute ltr:md:-right-5 ltr:right-0 rtl:md:-left-5 rtl:left-0 -bottom-16">
//                                 <img src="assets/images/about/ab02.jpg" className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt=""/>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
//                         <div className="ltr:lg:ml-5 rtl:lg:mr-5">
//                             <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Millions of jobs. <br/> Find the one that's right for you.</h3>

//                             <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

//                             <ul className="list-none text-slate-400 mt-4">
//                                 <li className="mb-1 flex"><i className="uil uil-check-circle text-emerald-600 text-xl ltr:mr-2 rtl:ml-2"></i> Digital Marketing Solutions for Tomorrow</li>
//                                 <li className="mb-1 flex"><i className="uil uil-check-circle text-emerald-600 text-xl ltr:mr-2 rtl:ml-2"></i> Our Talented & Experienced Marketing Agency</li>
//                                 <li className="mb-1 flex"><i className="uil uil-check-circle text-emerald-600 text-xl ltr:mr-2 rtl:ml-2"></i> Create your own skin to match your brand</li>
//                             </ul>
                        
//                             <div className="mt-6">
//                                 <a href="contact.html" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md"><i className="uil uil-envelope"></i> Contact us</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
        

        
//         <section className="relative bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
//             <div className="container">
//                 <div className="grid grid-cols-1 pb-8 text-center">
//                     <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

//                     <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
//                 </div>

//                 <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
//                     <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                     <img src="assets/images/company/facebook-logo.png" className="h-8 w-8"  alt=""/>
//                                 </div>

//                                 <div className="ltr:ml-3 rtl:mr-3">
//                                     <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Facebook</a>
//                                     <span className="block text-sm text-slate-400">2 days ago</span>
//                                 </div>
//                             </div>

//                             <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">Full Time</span>
//                         </div>

//                         <div className="mt-6">
//                             <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">Web Designer / Developer</a>
//                             <h6 className="text-base font-medium"><i className="uil uil-map-marker"></i> Australia</h6>
//                         </div>

//                         <div className="mt-6">
//                             <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
//                                 <div className="bg-emerald-600 h-[6px] rounded-full" style="width: 55%"></div>
//                             </div>
//                             <div className="mt-2">
//                                 <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                     <img src="assets/images/company/google-logo.png" className="h-8 w-8"  alt=""/>
//                                 </div>

//                                 <div className="ltr:ml-3 rtl:mr-3">
//                                     <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Google</a>
//                                     <span className="block text-sm text-slate-400">2 days ago</span>
//                                 </div>
//                             </div>

//                             <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">Part Time</span>
//                         </div>

//                         <div className="mt-6">
//                             <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">Marketing Director</a>
//                             <h6 className="text-base font-medium"><i className="uil uil-map-marker"></i> USA</h6>
//                         </div>

//                         <div className="mt-6">
//                             <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
//                                 <div className="bg-emerald-600 h-[6px] rounded-full" style="width: 55%"></div>
//                             </div>
//                             <div className="mt-2">
//                                 <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                     <img src="assets/images/company/android.png" className="h-8 w-8"  alt=""/>
//                                 </div>

//                                 <div className="ltr:ml-3 rtl:mr-3">
//                                     <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Android</a>
//                                     <span className="block text-sm text-slate-400">2 days ago</span>
//                                 </div>
//                             </div>

//                             <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">Remote</span>
//                         </div>

//                         <div className="mt-6">
//                             <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">Application Developer</a>
//                             <h6 className="text-base font-medium"><i className="uil uil-map-marker"></i> China</h6>
//                         </div>

//                         <div className="mt-6">
//                             <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
//                                 <div className="bg-emerald-600 h-[6px] rounded-full" style="width: 55%"></div>
//                             </div>
//                             <div className="mt-2">
//                                 <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                     <img src="assets/images/company/lenovo-logo.png" className="h-8 w-8"  alt=""/>
//                                 </div>

//                                 <div className="ltr:ml-3 rtl:mr-3">
//                                     <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Lenovo</a>
//                                     <span className="block text-sm text-slate-400">2 days ago</span>
//                                 </div>
//                             </div>

//                             <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">WFH</span>
//                         </div>

//                         <div className="mt-6">
//                             <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">Senior Product Designer</a>
//                             <h6 className="text-base font-medium"><i className="uil uil-map-marker"></i> Dubai</h6>
//                         </div>

//                         <div className="mt-6">
//                             <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
//                                 <div className="bg-emerald-600 h-[6px] rounded-full" style="width: 55%"></div>
//                             </div>
//                             <div className="mt-2">
//                                 <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                     <img src="assets/images/company/spotify.png" className="h-8 w-8"  alt=""/>
//                                 </div>

//                                 <div className="ltr:ml-3 rtl:mr-3">
//                                     <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Spotify</a>
//                                     <span className="block text-sm text-slate-400">2 days ago</span>
//                                 </div>
//                             </div>

//                             <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">Full Time</span>
//                         </div>

//                         <div className="mt-6">
//                             <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">C++ Developer</a>
//                             <h6 className="text-base font-medium"><i className="uil uil-map-marker"></i> India</h6>
//                         </div>

//                         <div className="mt-6">
//                             <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
//                                 <div className="bg-emerald-600 h-[6px] rounded-full" style="width: 55%"></div>
//                             </div>
//                             <div className="mt-2">
//                                 <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                     <img src="assets/images/company/linkedin.png" className="h-8 w-8"  alt=""/>
//                                 </div>

//                                 <div className="ltr:ml-3 rtl:mr-3">
//                                     <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Linkedin</a>
//                                     <span className="block text-sm text-slate-400">2 days ago</span>
//                                 </div>
//                             </div>

//                             <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">Remote</span>
//                         </div>

//                         <div className="mt-6">
//                             <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">Php Developer</a>
//                             <h6 className="text-base font-medium"><i className="uil uil-map-marker"></i> Pakistan</h6>
//                         </div>

//                         <div className="mt-6">
//                             <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
//                                 <div className="bg-emerald-600 h-[6px] rounded-full" style="width: 55%"></div>
//                             </div>
//                             <div className="mt-2">
//                                 <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
//                     <div className="md:col-span-12 text-center">
//                         <a href="job-grid-two.html" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See More Jobs <i className="uil uil-arrow-right align-middle"></i></a>
//                     </div>
//                 </div>
//             </div>
//         </section>
        

        
//         <section className="relative md:py-24 py-16 overflow-hidden">
//             <div className="container md:pb-16">
//                 <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
//                     <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
//                         <div className="relative">
//                             <div className="relative flex justify-end">
//                                 <img src="assets/images/about/ab03.jpg" className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt=""/>
//                                 <div className="absolute top-0 translate-y-2/4 ltr:left-0 rtl:right-0 text-center">
//                                     <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
//                                         <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="absolute ltr:md:-left-5 ltr:left-0 rtl:md:-right-5 rtl:right-0 -bottom-16">
//                                 <img src="assets/images/about/ab04.jpg" className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt=""/>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0 md:order-1 order-2">
//                         <div className="ltr:lg:mr-5 rtl:lg:ml-5">
//                             <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Find Best Companies.</h3>

//                             <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

//                             <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
//                                 <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
//                                     <div className="flex items-center">
//                                         <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                             <img src="assets/images/company/spotify.png" className="h-8 w-8"  alt=""/>
//                                         </div>
        
//                                         <div className="ltr:ml-3 rtl:mr-3">
//                                             <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Spotify</a>
//                                             <span className="block text-sm text-emerald-600">5 Vacancy</span>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
//                                     <div className="flex items-center">
//                                     <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                         <img src="assets/images/company/facebook-logo.png" className="h-8 w-8"  alt=""/>
//                                     </div>

//                                     <div className="ltr:ml-3 rtl:mr-3">
//                                         <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Facebook</a>
//                                             <span className="block text-sm text-emerald-600">5 Vacancy</span>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
//                                     <div className="flex items-center">
//                                     <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                         <img src="assets/images/company/google-logo.png" className="h-8 w-8"  alt=""/>
//                                     </div>

//                                     <div className="ltr:ml-3 rtl:mr-3">
//                                         <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Google</a>
//                                             <span className="block text-sm text-emerald-600">5 Vacancy</span>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
//                                     <div className="flex items-center">
//                                     <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                         <img src="assets/images/company/android.png" className="h-8 w-8"  alt=""/>
//                                     </div>

//                                     <div className="ltr:ml-3 rtl:mr-3">
//                                         <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Android</a>
//                                             <span className="block text-sm text-emerald-600">5 Vacancy</span>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
//                                     <div className="flex items-center">
//                                     <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                         <img src="assets/images/company/lenovo-logo.png" className="h-8 w-8"  alt=""/>
//                                     </div>

//                                     <div className="ltr:ml-3 rtl:mr-3">
//                                         <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Lenovo</a>
//                                             <span className="block text-sm text-emerald-600">5 Vacancy</span>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
//                                     <div className="flex items-center">
//                                     <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
//                                         <img src="assets/images/company/linkedin.png" className="h-8 w-8"  alt=""/>
//                                     </div>

//                                     <div className="ltr:ml-3 rtl:mr-3">
//                                         <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Linkedin</a>
//                                             <span className="block text-sm text-emerald-600">5 Vacancy</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
//                                 <div className="md:col-span-12">
//                                     <a href="#" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See More Companies <i className="uil uil-arrow-right align-middle"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="container md:mt-24 mt-16">
//                 <div className="grid grid-cols-1 pb-8 text-center">
//                     <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Here's why you'll love it Jobstack</h3>

//                     <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
//                 </div>

//                 <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">                    
//                     <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
//                         <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
//                             <i className="uil uil-phone text-[30px] text-emerald-600 group-hover:text-white"></i>
//                         </div>

//                         <div className="mt-4">
//                             <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">24/7 Support</a>

//                             <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

//                             <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
//                         </div>
//                     </div>
                    
//                     <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
//                         <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
//                             <i className="uil uil-atom text-[30px] text-emerald-600 group-hover:text-white"></i>
//                         </div>

//                         <div className="mt-4">
//                             <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Tech & Startup Jobs</a>

//                             <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

//                             <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
//                         </div>
//                     </div>
                    
//                     <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
//                         <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
//                             <i className="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white"></i>
//                         </div>

//                         <div className="mt-4">
//                             <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Quick & Easy</a>

//                             <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

//                             <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
//                         </div>
//                     </div>
                    
//                     <div className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
//                         <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
//                             <i className="uil uil-hourglass text-[30px] text-emerald-600 group-hover:text-white"></i>
//                         </div>

//                         <div className="mt-4">
//                             <a href="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Save Time</a>

//                             <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

//                             <a href="#" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             <div className="container md:mt-24 mt-16">
//                 <div className="grid grid-cols-1 pb-8 text-center">
//                     <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Latest Blog or News</h3>

//                     <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
//                 </div>

//                 <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
//                     <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
//                         <div className="relative overflow-hidden">
//                             <img src="assets/images/blog/01.jpg" className="scale-110 group-hover:scale-100 transition-all duration-500" alt=""/>
//                         </div>

//                         <div className="relative p-6">
//                             <div className="absolute left-6 -top-4">
//                                 <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">Arts</span>
//                             </div>

//                             <div className="">
//                                 <div className="flex mb-4">
//                                     <span className="text-slate-400 text-sm"><i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>20th February, 2023</span>
//                                     <span className="text-slate-400 text-sm ml-3"><i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>5 min read</span>
//                                 </div>

//                                 <a href="blog-detail.html" className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out">11 Tips to Help You Get New Clients Through Cold Calling</a>
                                
//                                 <div className="flex justify-between items-center mt-3">
//                                     <a href="blog-detail.html" className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
//                                     <span className="text-slate-400 text-sm">by <a href="#" className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium">Google</a></span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
                    
//                     <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
//                         <div className="relative overflow-hidden">
//                             <img src="assets/images/blog/02.jpg" className="scale-110 group-hover:scale-100 transition-all duration-500" alt=""/>
//                         </div>

//                         <div className="relative p-6">
//                             <div className="absolute left-6 -top-4">
//                                 <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">Illustration</span>
//                             </div>

//                             <div className="">
//                                 <div className="flex mb-4">
//                                     <span className="text-slate-400 text-sm"><i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>20th February, 2023</span>
//                                     <span className="text-slate-400 text-sm ml-3"><i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>5 min read</span>
//                                 </div>

//                                 <a href="blog-detail.html" className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out">DigitalOcean launches first Canadian data centre in Toronto</a>
                                
//                                 <div className="flex justify-between items-center mt-3">
//                                     <a href="blog-detail.html" className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
//                                     <span className="text-slate-400 text-sm">by <a href="#" className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium">Facebook</a></span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
                    
//                     <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
//                         <div className="relative overflow-hidden">
//                             <img src="assets/images/blog/03.jpg" className="scale-110 group-hover:scale-100 transition-all duration-500" alt=""/>
//                         </div>

//                         <div className="relative p-6">
//                             <div className="absolute left-6 -top-4">
//                                 <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">Music</span>
//                             </div>

//                             <div className="">
//                                 <div className="flex mb-4">
//                                     <span className="text-slate-400 text-sm"><i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>20th February, 2023</span>
//                                     <span className="text-slate-400 text-sm ml-3"><i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>5 min read</span>
//                                 </div>

//                                 <a href="blog-detail.html" className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out">Using Banner Stands To Increase Trade Show Traffic</a>
                                
//                                 <div className="flex justify-between items-center mt-3">
//                                     <a href="blog-detail.html" className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
//                                     <span className="text-slate-400 text-sm">by <a href="#" className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium">Linkedin</a></span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
//                 </div>
//             </div>

//             <div className="container-fluid md:mt-24 mt-16">
//                 <div className="container">
//                     <div className="grid grid-cols-1">
//                         <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
//                             <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
//                                 <div className="lg:col-span-8 md:col-span-7">
//                                     <div className="ltr:md:text-left rtl:md:text-right text-center relative z-1">
//                                         <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job now!</h3>
//                                         <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
//                                     </div>
//                                 </div>
            
//                                 <div className="lg:col-span-4 md:col-span-5">
//                                     <div className="ltr:text-right rtl:text-left relative z-1">
//                                         <a href="employer-detail.html" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Apply Now</a>
//                                         <a href="aboutus.html" className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ltr:ml-2 rtl:mr-2">Learn More</a>
//                                     </div>
//                                 </div>
//                             </div>
            
//                             <div className="absolute -top-5 ltr:-left-5 rtl:-right-5">
//                                 <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
//                             </div>
            
//                             <div className="absolute -bottom-5 ltr:-right-5 rtl:-left-5">
//                                 <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default Home2