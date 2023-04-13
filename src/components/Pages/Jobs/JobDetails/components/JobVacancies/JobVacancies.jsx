import React from "react";
import {JobVacanciesData} from './JobVacanciesData.jsx';

const JobVacancies = () => {
    // const JobVacanciesData = [
    //     {
    //       company: "Facebook",
    //       time:'2 days ago',
    //       companyLogo: "assets/images/company/facebook-logo.png",
    //       jobType: "Full Time",
    //       title: "Web Designer / Developer",
    //       location: "Australia",
    //       applied: "21",
    //       vacancy: "40",
    //     },
    //     {
    //       company: "Google",
    //       time:'2 days ago',
    //       companyLogo: "assets/images/company/google-logo.png",
    //       jobType: "Part Time",
    //       title: "Marketing Director",
    //       location: "USA",
    //       applied: "21",
    //       vacancy: "40",
    //     },
    //     {
    //       company: "Android",
    //       time:'2 days ago',
    //       companyLogo: "assets/images/company/android.png",
    //       jobType: "Full Time",
    //       title: "Software Engineer",
    //       location: "Canada",
    //       applied: "15",
    //       vacancy: "20",
    //     },
    //   ];
      
     
      
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]" dir="ltr">
      {JobVacanciesData.map((job) => (
        <div
          key={job.title}
          className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <img
                  src={job.companyLogo}
                  className="h-8 w-8"
                  alt={job.company}
                />
              </div>

              <div className="ltr:ml-3 rtl:mr-3">
                <a
                  href="employer-detail.html"
                  className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                >
                  {job.company}
                </a>
                <span className="block text-sm text-slate-400">2 days ago</span>
              </div>
            </div>

            <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
              {job.jobType}
            </span>
          </div>

          <div className="mt-6">
            <a
              href="job-detail-one.html"
              className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
            >
              {job.title}
            </a>
            <h6 className="text-base font-medium">
              <i className="uil uil-map-marker"></i> {job.location}
            </h6>
          </div>

          <div className="mt-6">
            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
              <div
                className="bg-emerald-600 h-[6px] rounded-full"
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>
          <div className="mt-2">
                <span className="text-slate-400 text-sm">
                  <span className="text-slate-900 dark:text-white font-semibold inline-block">
                    {job.applied} applied
                  </span>{" "}
                  of {job.vacancy} vacancy
                </span>
              </div>
        </div>
      ))}
    </div>
  );
};

export default JobVacancies;
