import React from "react";
import moment from "moment";
<link
  rel="stylesheet"
  href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
></link>;
const JobInformation = ({ experience, type, location, created_at, salary }) => {
  const jobInformationData = [
    {
      icon: "user-check",
      title: "Employee Type:",
      value: "Full Time",
    },
    {
      icon: "location-point",
      title: "Location:",
      value: location,
    },
    {
      icon: "desktop",
      title: "Job Type:",
      value: type,
    },
    {
      icon: "briefcase-alt",
      title: "Experience:",
      value: experience,
    },
    {
      icon: "book-alt",
      title: "Qualifications:",
      value: "MCA",
    },
    {
      icon: "dollar-alt",
      title: "Salary:",
      value: salary,
    },
    {
      icon: "clock",
      title: "Date posted:",
      value: moment(created_at).format("Do MMM, YYYY"),
    },
  ];

  return (
    <>
      <div className="lg:col-span-4 md:col-span-6">
        <div className="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
          <div className="p-6">
            <h5 className="text-lg font-semibold">Job Information</h5>
          </div>
          <div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
            <ul className="list-none">
              {jobInformationData.map((info) => (
                <li className="flex items-center mt-3" key={info.title}>
                  <i className={`uil uil-${info.icon} h-5 w-5`}></i>
                  <div className="ltr:ml-4 rtl:mr-4">
                    <p className="font-medium">{info.title}</p>
                    <span className="text-emerald-600 font-medium text-sm">
                      {info.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobInformation;
