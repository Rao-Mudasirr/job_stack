import React from 'react';

const PopularJob = () => {
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

        <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
      </div>

      <div className="grid grid-cols-1 mt-8 gap-[30px]">
        <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              <img src="assets/images/company/facebook-logo.png" className="h-8 w-8" alt="" />
            </div>
            <a href="job-detail-one.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]">Web Designer</a>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-4">
            <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Full Time</span></span>
            <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-2">
            <span className="text-slate-400"><i className="uil uil-map-marker"></i> Australia</span>
            <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
          </div>

          <div className="md:mt-0 mt-4">
            <a href="#" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 right-0 md:m-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a>
            
            <a href="job-apply.html" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto">Apply Now</a>
          </div>

          <span className="w-24 bg-yellow-400 text-white text-center absolute  -rotate-45 -left-[30px] right-[30px] top-0"><i className="uil uil-star"></i></span>

          
        </div>


        <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              <img src="assets/images/company/google-logo.png" className="h-8 w-8" alt="" />
            </div>
            <a href="job-detail-one.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]">Marketing Director</a>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-4">
            <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Part Time</span></span>
            <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-2">
            <span className="text-slate-400"><i className="uil uil-map-marker"></i> USA</span>
            <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
          </div>

          <div className="md:mt-0 mt-4">
            <a href="#" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 right-0 md:m-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a>
            <a href="job-apply.html" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto">Apply Now</a>
          </div>
        </div>

        <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              <img src="assets/images/company/android.png" className="h-8 w-8" alt="" />
            </div>
            <a href="job-detail-one.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]">App Developer</a>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-4">
            <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Remote</span></span>
            <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-2">
            <span className="text-slate-400"><i className="uil uil-map-marker"></i> China</span>
            <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
          </div>

          <div className="md:mt-0 mt-4">
            <a href="#" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 right-0 md:m-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a>
            <a href="job-apply.html" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto">Apply Now</a>
          </div>
        </div>

        <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              <img src="assets/images/company/lenovo-logo.png" className="h-8 w-8" alt="" />
            </div>
            <a href="job-detail-one.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]">Product Designer</a>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-4">
            <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">WFH</span></span>
            <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-2">
            <span className="text-slate-400"><i className="uil uil-map-marker"></i> Dubai</span>
            <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
          </div>

          <div className="md:mt-0 mt-4">
            <a href="#" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 right-0 md:m-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a>
            <a href="job-apply.html" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto">Apply Now</a>
          </div>
        </div>

        <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              <img src="assets/images/company/spotify.png" className="h-8 w-8" alt="" />
            </div>
            <a href="job-detail-one.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]">C++ Developer</a>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-4">
            <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Full Time</span></span>
            <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-2">
            <span className="text-slate-400"><i className="uil uil-map-marker"></i> India</span>
            <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
          </div>

          <div className="md:mt-0 mt-4">
            <a href="#" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 right-0 md:m-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a>
            <a href="job-apply.html" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto">Apply Now</a>
          </div>

          <span className="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 ltr:-left-[30px] rtl:-right-[30px] top-1"><i className="uil uil-star"></i></span>
        </div>

        <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              <img src="assets/images/company/linkedin.png" className="h-8 w-8" alt="" />
            </div>
            <a href="job-detail-one.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]">Php Developer</a>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-4">
            <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Remote</span></span>
            <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
          </div>

          <div className="md:block flex justify-between md:mt-0 mt-2">
            <span className="text-slate-400"><i className="uil uil-map-marker"></i> Pakistan</span>
            <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
          </div>

          <div className="md:mt-0 mt-4">
            <a href="#" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 right-0 md:m-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a>
            <a href="job-apply.html" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto">Apply Now</a>
          </div>

          <span className="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 ltr:-left-[30px] rtl:-right-[30px] top-1"><i className="uil uil-star"></i></span>
        </div>
      </div>

      <div className="grid md:grid-cols-1 grid-cols-1 mt-8">
        <div className="md:col-span-12 text-center">
          <a href="job-grid-two.html" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See More Jobs <i className="uil uil-arrow-right align-middle"></i></a>
        </div>
      </div>
    </div>
  );
};

export default PopularJob;
