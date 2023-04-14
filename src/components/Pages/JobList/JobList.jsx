import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { countryData, jobTypeData } from '../HomePages/Components/Hero'
import axios from "axios";

export const JobList = () => {

    const [jobDetails, setJobDetails] = useState();

    const fetchJobDetails = () => {
        axios.get("https://jobs.orcaloholding.co.uk/api/jobs").then((response) => {
            setJobDetails(response?.data?.data?.data);
        })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchJobDetails()
    }, [])

    console.log("dasdasdasdas", jobDetails);
    return (
        <div dir='ltr'>
            <section className="relative table w-full py-36 bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Job Vacancies</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative -mt-[42px] md:pb-24 pb-16">
                <div className="container z-1">
                    <div className="d-flex" id="reserve-form">
                        <div className="md:w-5/6 mx-auto">
                            <div className="lg:col-span-10">
                                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                <div className="filter-search-form relative filter-border flex ">
                                                    <i className="uil uil-briefcase-alt icons pl-1"></i>
                                                    <input name="name" type="text" id="job-keyword" className=" pl-7 form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                                </div>

                                                <div className="filter-search-form relative filter-border bg-gray-50">
                                                    <i className="uil uil-map-marker icons"></i>
                                                    <select className="form-select w-full h-full ml-3 bg-gray-50" data-trigger name="choices-location" id="choices-location" aria-label="Default select example">
                                                        {countryData.map((item) => {
                                                            return (
                                                                <option key={item.id} value={item.value}>{item.Descp}</option>
                                                            )
                                                        })}

                                                    </select>

                                                </div>

                                                <div className="filter-search-form relative filter-border">
                                                    <i className="uil uil-briefcase-alt icons"></i>
                                                    <select className="form-select w-full h-full ml-3 bg-gray-50" data-trigger name="choices-type" id="choices-type" aria-label="Default select example">
                                                        {jobTypeData.map((item) => {
                                                            return (
                                                                <option key={item.id} value={item.value}>{item.Descp}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>

                                                <input type="submit" id="search" name="search" style={{ height: "60px" }} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100" value="Search" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-10">
                    
                    <div className="grid grid-cols-1 gap-[30px]">
                    {
                        jobDetails?.map((item) => <div key={item?.id} className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
                            <div className="flex items-center">
                                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                    <img src={item?.company?.logo} className="h-8 w-8" alt="" />
                                </div>
                                <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]">{item?.role?.name}</a>
                            </div>

                            <div className="md:block flex justify-between md:mt-0 mt-4">
                                <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item?.type}</span></span>
                                <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i>{item?.deadline}</span>
                            </div>

                            <div className="md:block flex justify-between md:mt-0 mt-2">
                                <span className="text-slate-400"><i className="uil uil-map-marker"></i> {item?.location}</span>
                                <span className="block font-semibold md:mt-1 mt-0">{item?.salary}</span>
                            </div>

                            <div className="md:mt-0 mt-4">
                                <Link href="job-apply.html" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto">Apply Now</Link>
                            </div>

                           {!!item?.is_remote && <span title='Remote Job 👨‍💻' className="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 ltr:-left-[30px] rtl:-right-[30px] top-1"><i className="uil uil-star"></i></span>}
                        </div>)
                    }
                    </div>
                </div>
            </section>
        </div>
    )
}
