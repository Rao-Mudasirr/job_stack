import React from 'react'
import { AppBreadcrumb } from '../app-breadcrumb/AppBreadcrumb'
import { Link } from 'react-router-dom'
import { EmployersCard } from './employers-card/EmployersCard'
export const Employers = () => {
    return (
        <div dir='ltr'>
            <AppBreadcrumb />
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <EmployersCard />
                    </div>
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 ltr:rounded-l-3xl rtl:rounded-r-3xl hover:text-white border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                            <i className="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">1</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 ltr:rounded-r-3xl rtl:rounded-l-3xl hover:text-white border border-gray-100 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                            <i className="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container md:mt-24 md:pb-16 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="relative">
                                <div className="relative">
                                    <img src={"assets/images/about/ab01.jpg"} className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />
                                    <div className="absolute top-0 translate-y-2/4 right-0 text-center">
                                        <Link href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="absolute ltr:md:-right-5 right-0 rtl:md:-left-5 -bottom-16">
                                    <img src={"assets/images/about/ab02.jpg"} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
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
                </div>
                <div className="container-fluid md:mt-24 mt-16">
                    <div className="container">
                        <div className="grid grid-cols-1">
                            <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                                    <div className="lg:col-span-8 md:col-span-7">
                                        <div className="ltr:md:text-left rtl:md:text-right relative z-1 text-left">
                                            <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job now!</h3>
                                            <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-4 md:col-span-5">
                                        <div className="ltr:text-right rtl:text-left relative z-1">
                                            <Link href="employer-detail.html" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md mr-2">Apply Now</Link>
                                            <Link href="aboutus.html" className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ltr:ml-2 rtl:mr-2">Learn More</Link>
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
                </div>
            </section>
        </div>
    )
}
