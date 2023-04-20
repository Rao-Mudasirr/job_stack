import React, { useEffect, useLayoutEffect } from "react";
import JobForm from "./components/JobForm/JobForm";
import { useNavigate } from "react-router-dom";

const JobApplication = () => {
  const tokenCheck = localStorage.getItem("token") === null ? "false" : "true";
  const navigate = useNavigate();
  useEffect(() => {
    if (tokenCheck === "false") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container mx-auto mt-10">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
              <div className="lg:col-span-8 md:col-span-6">
                <div className="md:flex items-center p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
                  <img
                    // src={details?.company?.logo}
                    className="rounded-full h-28 w-28 p-4 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
                    alt=""
                  />

                  <div className="md:ltr:ml-4 md:rtl:mr-4 md:mt-0 mt-6">
                    <h5 className="text-xl font-semibold ml-5">
                    Administrator
                    </h5>
                    <div className="mt-2">
                      <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                        <i className="uil uil-building text-[18px] text-emerald-600 ltr:mr-1 rtl:ml-1 ml-5"></i>{" "}
                        Randolph Cote Inc
                      </span>
                      <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                        <i className="uil uil-map-marker text-[18px] text-emerald-600 ltr:mr-1 rtl:ml-1 ml-2"></i>{" "}
                        Frederick Graham Inc
                      </span>
                    </div>
                  </div>
                </div>
                <h5
                  className="text-lg font-semibold mt-6"
                >
                  Job Description:
                </h5>
                <p
                 asssss
                />

                
              </div>
              {/* <JobInformation
                experience={details?.experience}
                type={details?.type}
                location={details?.location}
                created_at={details?.created_at}
                salary={details?.salary}
                education={details?.education}
              /> */}
            </div>

      <JobForm />
    </div>
  );
};

export default JobApplication;
