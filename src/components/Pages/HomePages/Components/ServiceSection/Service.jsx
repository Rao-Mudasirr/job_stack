import React from 'react'
import TrendingServices from './Components/TrendingService'
import PopularJob from './Components/PopularJob'

const Service = () => {
    return (
        <section className="relative md:py-24 py-16">
            <TrendingServices />
            <PopularJob />
            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1">
                    <div className="relative overflow-hidden bg-emerald-600 rounded-md shadow dark:shadow-gray-700">
                        <div className="grid md:grid-cols-2 items-center gap-[30px]">
                            <div className="relative">
                                <img src="assets/images/about/ab05.jpg" alt="" />
                                <div className="absolute md:bottom-1/2 md:translate-y-1/2 md:ltr:-right-10 md:rtl:-left-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 ltr:right-1/2 rtl:left-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                                    <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="text-white p-4">
                                    <h4 className="leading-normal text-4xl mb-3 font-semibold">Get the job of your <br /> dreams quickly.</h4>

                                    <p className="text-white/70 text-lg max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                                    <ul className="list-none text-white/50 mt-4">
                                        <li className="mb-1 flex"><i className="uil uil-check-circle text-white text-xl ltr:mr-2 rtl:ml-2"></i> Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mb-1 flex"><i className="uil uil-check-circle text-white text-xl ltr:mr-2 rtl:ml-2"></i> Our Talented & Experienced Marketing Agency</li>
                                        <li className="mb-1 flex"><i className="uil uil-check-circle text-white text-xl ltr:mr-2 rtl:ml-2"></i> Create your own skin to match your brand</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container md:mt-24 mt-16">
                <div className="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1">
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><span className="counter-value" data-target="1548">1010</span>K+</h1>
                        <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Job Fulfillment</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><span className="counter-value" data-target="25">2</span>+</h1>
                        <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Branches</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><span className="counter-value" data-target="9">0</span>+</h1>
                        <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Years Experience</h5>
                    </div>
                </div>
            </div>

            <div className="container md:mt-24 md:pb-16 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                        <div className="relative">
                            <div className="relative flex justify-end">
                                <img src="assets/images/about/ab03.jpg" className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                <div className="absolute top-0 translate-y-2/4 ltr:left-0 rtl:right-0 text-center">
                                    <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="absolute ltr:md:-left-5 ltr:left-0 rtl:md:-right-5 rtl:right-0 -bottom-16">
                                <img src="assets/images/about/ab04.jpg" className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0 md:order-1 order-2">
                        <div className="ltr:lg:mr-5 rtl:lg:ml-5">
                            <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Find Best Companies.</h3>

                            <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                                <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <img src="assets/images/company/spotify.png" className="h-8 w-8" alt="" />
                                        </div>

                                        <div className="ltr:ml-3 rtl:mr-3">
                                            <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Spotify</a>
                                            <span className="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <img src="assets/images/company/facebook-logo.png" className="h-8 w-8" alt="" />
                                        </div>

                                        <div className="ltr:ml-3 rtl:mr-3">
                                            <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Facebook</a>
                                            <span className="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <img src="assets/images/company/google-logo.png" className="h-8 w-8" alt="" />
                                        </div>

                                        <div className="ltr:ml-3 rtl:mr-3">
                                            <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Google</a>
                                            <span className="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <img src="assets/images/company/android.png" className="h-8 w-8" alt="" />
                                        </div>

                                        <div className="ltr:ml-3 rtl:mr-3">
                                            <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Android</a>
                                            <span className="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <img src="assets/images/company/lenovo-logo.png" className="h-8 w-8" alt="" />
                                        </div>

                                        <div className="ltr:ml-3 rtl:mr-3">
                                            <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Lenovo</a>
                                            <span className="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <img src="assets/images/company/linkedin.png" className="h-8 w-8" alt="" />
                                        </div>

                                        <div className="ltr:ml-3 rtl:mr-3">
                                            <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Linkedin</a>
                                            <span className="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                                <div className="md:col-span-12">
                                    <a href="blog.html" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See More Companies <i className="uil uil-arrow-right align-middle"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Questions & Answers</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="flex">
                        <i data-feather="help-circle" className="h-8 text-emerald-600 ltr:mr-3 rtl:ml-3"></i>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-semibold">How our <span className="text-emerald-600">Jobstack</span> work ?</h5>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <i data-feather="help-circle" className="h-8 text-emerald-600 ltr:mr-3 rtl:ml-3"></i>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-semibold"> What is the main process open account ?</h5>
                            <p className="text-slate-400">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                        </div>
                    </div>

                    <div className="flex">
                        <i data-feather="help-circle" className="h-8 text-emerald-600 ltr:mr-3 rtl:ml-3"></i>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-semibold"> How to make unlimited data entry ?</h5>
                            <p className="text-slate-400">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <i data-feather="help-circle" className="h-8 text-emerald-600 ltr:mr-3 rtl:ml-3"></i>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-semibold"> Is <span className="text-emerald-600">Jobstack</span> safer to use with my account ?</h5>
                            <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                        </div>
                    </div>
                </div>
            </div>

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
                                        <a href="aboutus.html" className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ml-2 mr-2">Learn More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-5 ltr:-left-5 rtl:-right-5">
                                <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 -rotate-45"></div>
                            </div>

                            <div className="absolute -bottom-5 -right-5 -left-5">
                                <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 -rotate-90"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service