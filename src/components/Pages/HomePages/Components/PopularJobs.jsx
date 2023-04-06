import React from 'react'
import JobCard from './Components/JobCard'

const PopularJobs = () => {
    const PopularJobData = [
        { id: 1, companyIcon: 'assets/images/company/facebook-logo.png', companyName: 'Facebook', jobType: 'Full Time', jobName: 'Web Designer / Developer', jobLoc: 'Australia' },
        { id: 2, companyIcon: 'assets/images/company/google-logo.png', companyName: 'Google', jobType: 'Part Time', jobName: 'Marketing Director', jobLoc: 'USA' },
        { id: 3, companyIcon: 'assets/images/company/android.png', companyName: 'Android', jobType: 'Remote', jobName: 'Application Developer', jobLoc: 'China' },
        { id: 4, companyIcon: 'assets/images/company/lenovo-logo.png', companyName: 'Lenovo', jobType: 'WFH', jobName: 'Senior Product Designer', jobLoc: 'Dubai' },
        { id: 5, companyIcon: 'assets/images/company/spotify.png', companyName: 'Spotify', jobType: 'Full Time', jobName: 'C++ Developer', jobLoc: 'India' },
        { id: 6, companyIcon: 'assets/images/company/linkedin.png', companyName: 'Linkedin', jobType: 'Remote', jobName: 'Php Developer', jobLoc: 'Pakistan' },
    ]
    return (
        <section className="relative bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    {PopularJobData.map((item) => {
                        return (
                            <div key={item.id}>
                                <JobCard id={item.id} companyIcon={item.companyIcon} companyName={item.companyName} jobType={item.jobType} jobName={item.jobName} jobLoc={item.jobLoc} />
                            </div>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <a href="job-grid-two.html" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See More Jobs <i className="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularJobs