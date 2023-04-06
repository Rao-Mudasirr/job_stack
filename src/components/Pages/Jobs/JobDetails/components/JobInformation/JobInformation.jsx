import React from "react";
 const JobInformation =()=>  {
  const jobInformationData = [
    {
      icon: "user-check",
      title: "Employee Type:",
      value: "Full Time",
    },
    {
      icon: "map-pin",
      title: "Location:",
      value: "Beijing, China",
    },
    {
      icon: "monitor",
      title: "Job Type:",
      value: "Back-end Developer",
    },
    {
      icon: "briefcase",
      title: "Experience:",
      value: "2+ years",
    },
    {
      icon: "book",
      title: "Qualifications:",
      value: "MCA",
    },
    {
      icon: "dollar-sign",
      title: "Salary:",
      value: "$4000 - $4500",
    },
    {
      icon: "clock",
      title: "Date posted:",
      value: "28th Feb, 2023",
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
                <i data-feather={info.icon} className="h-5 w-5"></i>
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
}
export default JobInformation