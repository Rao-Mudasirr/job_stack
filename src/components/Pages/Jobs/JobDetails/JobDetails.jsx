import React, { useEffect, useState } from "react";
import JobApplyBanner from "./components/JobApplyBanner/JobApplyBanner";
import JobVacancies from "./components/JobVacancies/JobVacancies";
import JobInformation from "./components/JobInformation/JobInformation";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const JobDetails = () => {
  const [jobDetails, setJobDetails] = useState();
  const { id } = useParams();
  const fetchJobDetails = () => {
    axios
      .get(`https://jobs.orcaloholding.co.uk/api/jobs/${id}`)
      .then((response) => {
        console.log(response?.data?.data);
        setJobDetails([response?.data?.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchJobDetails();
  }, []);
  return (
    <section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16" dir="ltr">
      <div className="container mt-10">
        {/* <GlobalSnackBar
          title={snackBar.title}
          isToggle={snackBar.isToggle}
          type={snackBar.type}
        /> */}
        {jobDetails?.map((details) => (
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">
              <div className="md:flex items-center p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
                <img
                  src={details?.company?.logo}
                  className="rounded-full h-28 w-28 p-4 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
                  alt=""
                />

                <div className="md:ltr:ml-4 md:rtl:mr-4 md:mt-0 mt-6">
                  <h5 className="text-xl font-semibold">
                    {details?.role?.name}
                  </h5>
                  <div className="mt-2">
                    <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                      <i className="uil uil-building text-[18px] text-emerald-600 ltr:mr-1 rtl:ml-1"></i>{" "}
                      {details?.company?.name}
                    </span>
                    <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                      <i className="uil uil-map-marker text-[18px] text-emerald-600 ltr:mr-1 rtl:ml-1"></i>{" "}
                      {details?.company?.location}
                    </span>
                  </div>
                </div>
              </div>

              <h5 className="text-lg font-semibold mt-6">Job Description:</h5>

              {details?.description}

              <h5 className="text-lg font-semibold mt-6">
                Responsibilities and Duties:{" "}
              </h5>
              <p className="text-slate-400 mt-4">
                It sometimes makes sense to select texts containing the various
                letters and symbols specific to the output language.
              </p>
              <ul className="list-none">
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Participate in requirements analysis
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Write clean, scalable code using C# and .NET frameworks
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Test and deploy applications and systems
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Revise, update, refactor and debug code
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Improve existing software
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Develop documentation throughout the software development life
                  cycle (SDLC)
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Serve as an expert on applications and provide technical
                  support
                </li>
              </ul>

              <h5 className="text-lg font-semibold mt-6">
                Required Experience, Skills and Qualifications:{" "}
              </h5>
              <p className="text-slate-400 mt-4">
                It sometimes makes sense to select texts containing the various
                letters and symbols specific to the output language.
              </p>
              <ul className="list-none">
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Proven experience as a .NET Developer or Application Developer
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  good understanding of SQL and Relational Databases,
                  specifically Microsoft SQL Server.
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Experience designing, developing and creating RESTful web
                  services and APIs
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Basic know how of Agile process and practices
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Good understanding of object-oriented programming.
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Good understanding of concurrent programming.
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Sound knowledge of application architecture and design.
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right text-emerald-600 ltr:mr-1 rtl:ml-1"></i>
                  Excellent problem solving and analytical skills
                </li>
              </ul>

              <div className="mt-5">
                <a
                  href="job-apply.html"
                  className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
                >
                  Apply Now
                </a>
              </div>
            </div>
            <JobInformation
              experience={details?.experience}
              type={details?.type}
              location={details?.location}
              created_at={details?.created_at}
              salary={details?.salary}
            />
          </div>
        ))}
      </div>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
            Related Vacancies
          </h3>

          <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>

        <JobVacancies />
      </div>
      <JobApplyBanner />
    </section>
  );
};

export default JobDetails;
