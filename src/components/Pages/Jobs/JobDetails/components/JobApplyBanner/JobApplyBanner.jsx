import React from 'react'

const JobApplyBanner = () => {
  return (
    <div className="container-fluid md:mt-24 mt-16" dir='ltr'>
    <div className="container">
      <div className="grid grid-cols-1">
        <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-8 md:col-span-7">
              <div className="text-left  relative z-1">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  Explore a job now!
                </h3>
                <p className="text-slate-400 max-w-xl">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 30000+
                  companies worldwide.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5">
              <div className="ltr:text-right rtl:text-left relative z-1">
                <a
                  href="employer-detail.html"
                  className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md"
                >
                  Apply Now
                </a>
                <a
                  href="aboutus.html"
                  className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ml-2 "
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="absolute -top-5 -left-5 ">
            <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 -rotate-45 "></div>
          </div>

          <div className="absolute -bottom-5 -right-5 ">
            <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 -rotate-270"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default JobApplyBanner
