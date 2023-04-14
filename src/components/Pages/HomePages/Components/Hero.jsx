import React from 'react';
import HeroStyleCard from './Components/HeroStyleCard';
export const countryData =[
    { id: 1, value: 'AF', Descp:'Afghanistan' },
    { id: 2, value: 'AZ', Descp:'Azerbaijan' },
    { id: 3, value: 'BS', Descp:'Bahamas' },
    { id: 4, value: 'BH', Descp:'Bahrain' },
    { id: 5, value: 'CA', Descp:'Canada' },
    { id: 6, value: 'CV', Descp:'Cape Verde' },
    { id: 7, value: 'DK', Descp:'Denmark' },
];
export const jobTypeData =[
    { id: 1, value: '1', Descp:'Full Time' },
    { id: 2, value: '2', Descp:'Part Time' },
    { id: 3, value: '3', Descp:'Freelancer' },
    { id: 4, value: '4', Descp:'Remote Work' },
    { id: 5, value: '5', Descp:'Office Work' },
];
const Hero = () => {
    const SearchStylingData = [
        { id: 1, mainDiv: '-top-20 left-1/2 -translate-x-1/2', subDiv: 'animate-[bounce_2s_infinite]', icon: 'assets/images/company/facebook-logo.png' },
        { id: 2, mainDiv: 'top-[20%] ltr:left-10 rtl:right-10', subDiv: 'animate-[spin_5s_linear_infinite]', icon: 'assets/images/company/google-logo.png' },
        { id: 3, mainDiv: 'top-[20%] -right-0', subDiv: '', icon: 'assets/images/company/android.png' },
        { id: 4, mainDiv: 'top-3/4', subDiv: '', icon: 'assets/images/company/lenovo-logo.png' },
        { id: 5, mainDiv: 'top-3/4 -right-0', subDiv: 'animate-[spin_5s_linear_infinite]', icon: 'assets/images/company/skype.png' },
        { id: 6, mainDiv: '-bottom-32 left-1/2 -translate-x-1/2', subDiv: 'animate-pulse', icon: 'assets/images/company/snapchat.png' },
    ];
   

    return (
        <section className="relative md:py-56 py-36 w-full">
            <div className="absolute inset-0 bg-emerald-600/5 dark:bg-emerald-600/10"></div>
            <div className="container z-1">
                <div className="grid grid-cols-1 text-center mt-10 relative">
                    <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Join us & <span className="text-emerald-600 font-bold">Explore</span> <br /> <span className="text-emerald-600 font-bold">Thousands</span> of Jobs</h4>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>

                    <div className="d-flex" id="reserve-form">
                        <div className="md:w-5/6 mx-auto">
                            <div className="lg:col-span-10 mt-8">
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
                                                        {countryData.map((item)=>{
                                                            return(
                                                                <option key={item.id} value={item.value}>{item.Descp}</option>
                                                            )
                                                        })}
                                                        
                                                    </select>

                                                </div>

                                                <div className="filter-search-form relative filter-border">
                                                    <i className="uil uil-briefcase-alt icons"></i>
                                                    <select className="form-select w-full h-full ml-3 bg-gray-50" data-trigger name="choices-type" id="choices-type" aria-label="Default select example">
                                                    {jobTypeData.map((item)=>{
                                                            return(
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

                    <div className="mt-4">
                        <span className="text-slate-400"><span className="text-dark">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                    </div>

                    {SearchStylingData.map((item) => {
                        return (
                            <div key={item.id}>
                                <HeroStyleCard id={item.id} mainDiv={item.mainDiv} subDiv={item.subDiv} icon={item.icon} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Hero