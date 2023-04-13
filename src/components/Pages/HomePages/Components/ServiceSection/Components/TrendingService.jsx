import React from 'react';

const TrendingServices = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
        <div className="lg:col-span-8 md:col-span-6">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Trending Services</h3>
          <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-7 relative">
        <div className="tiny-five-item">
          <div className="tiny-slide">
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
              <img src="assets/images/work/01.jpg" alt="" />
              <div className="absolute inset-0 bg-slate-900/50"></div>

              <div className="absolute bottom-0 p-4">
                <a href="#" className="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">Product & Branding Design</a>
              </div>
            </div>
          </div>

          <div className="tiny-slide">
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
              <img src="assets/images/work/02.jpg" alt="" />
              <div className="absolute inset-0 bg-slate-900/50"></div>

              <div className="absolute bottom-0 p-4">
                <a href="#" className="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">Wordpress Development</a>
              </div>
            </div>
          </div>

          <div className="tiny-slide">
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
              <img src="assets/images/work/03.jpg" alt="" />
              <div className="absolute inset-0 bg-slate-900/50"></div>

              <div className="absolute bottom-0 p-4">
                <a href="#" className="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">Audio & Video Editing</a>
              </div>
            </div>
          </div>

          <div className="tiny-slide">
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
              <img src="assets/images/work/04.jpg" alt="" />
              <div className="absolute inset-0 bg-slate-900/50"></div>

              <div className="absolute bottom-0 p-4">
                <a href="#" className="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">Admin & Customer Support</a>
              </div>
            </div>
          </div>

          <div className="tiny-slide">
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
              <img src="assets/images/work/05.jpg" alt="" />
              <div className="absolute inset-0 bg-slate-900/50"></div>

              <div className="absolute bottom-0 p-4">
                <a href="#" className="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">UX / UI Designer</a>
              </div>
            </div>
          </div>

          <div className="tiny-slide">
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
              <img src="assets/images/work/06.jpg" alt="" />
              <div className="absolute inset-0 bg-slate-900/50"></div>

              <div className="absolute bottom-0 p-4">
                <a href="#" className="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">Digital Marketing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingServices;
