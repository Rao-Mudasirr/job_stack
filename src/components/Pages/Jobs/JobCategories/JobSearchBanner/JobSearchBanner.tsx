import React from "react";
const JobSearchBanner = () => {
  return (
    <>
      <section className="container-fluid md:mt-24 mt-16">
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
                      personalized salary estimate. Read reviews on over 30000+
                      companies worldwide.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-4 md:col-span-5">
                  <div className="ltr:text-right rtl:text-left relative z-1">
                    <a
                      href="#"
                      className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md "
                    >
                      Apply Now
                    </a>
                    <a
                      href="#"
                      className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ltr:ml-2 rtl:mr-2"
                    >
                      Learn More
                    </a>
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
      </section>
    </>
  );
};
export default JobSearchBanner;
