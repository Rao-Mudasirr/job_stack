import React from 'react'
import LatestBlogs from './LatestBlogs'
import ServicesStack from './ServicesStack'
import SearchCompany from './SearchCompany'

const BestCompanies = () => {
  return (
    <section className="relative md:py-24 py-16 overflow-hidden">
                <div className="container md:pb-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                            <div className="relative">
                                <div className="relative flex justify-end">
                                    <img src="assets/images/about/ab03.jpg" className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                    <div className="absolute top-0 translate-y-2/4 left-0 rtl:right-0 text-center">
                                        <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute -left-5 ltr:left-0 rtl:md:-right-5 rtl:right-0 -bottom-16">
                                    <img src="assets/images/about/ab04.jpg" className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
                                </div>
                            </div>
                        </div>

                       <SearchCompany />
                    </div>
                </div>

                <ServicesStack/>
                <LatestBlogs/>

                <div className="container-fluid md:mt-24 mt-16">
                    <div className="container">
                        <div className="grid grid-cols-1">
                            <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                                    <div className="lg:col-span-8 md:col-span-7">
                                        <div className="text-left rtl:md:text-right relative z-1">
                                            <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job now!</h3>
                                            <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-4 md:col-span-5">
                                        <div className="ltr:text-right rtl:text-left relative z-1">
                                            <a href="employer-detail.html" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Apply Now</a>
                                            <a href="aboutus.html" className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ml-2 rtl:mr-2">Learn More</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -top-5 -left-5 rtl:-right-5">
                                    <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 -rotate-45 rtl:rotate-45"></div>
                                </div>

                                <div className="absolute -bottom-5 -right-5 rtl:-left-5">
                                    <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default BestCompanies