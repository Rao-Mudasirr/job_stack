import React, { useEffect, useState } from "react";
import JobInformation from "./components/JobInformation/JobInformation";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const JobDetails = () => {
  const [jobDetails, setJobDetails] = useState();
  const { id } = useParams();
  
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `https://jobs.orcaloholding.co.uk/api/jobs/${id}`
        );

        setJobDetails([response?.data?.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobDetails();
  }, []);

  return (
    <div dir="ltr">
      <section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
        <div className="container mt-10 mx-auto">
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
                <div
                  className="[&>ul]:list-disc [&>ul]:my-2 [&>ul]:ml-8"
                  dangerouslySetInnerHTML={{ __html: details?.description }}
                />

                <div className="mt-5">
                  <NavLink
                    to={
                      localStorage.getItem("token")
                        ? {
                            pathname: `/job-application/${details?.slug}`,
                          }
                        : { pathname: "/login" }
                    }
                    state={details}
                    className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
                  >
                    Apply Now
                  </NavLink>
                </div>
              </div>
              <JobInformation
                experience={details?.experience}
                type={details?.type}
                location={details?.location}
                created_at={details?.created_at}
                salary={details?.salary}
                education={details?.education}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
