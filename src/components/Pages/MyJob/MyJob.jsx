import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppLoader } from "../../AppLoader/AppLoader";
import { AppModal } from "../../AppModal/AppModal";

export const MyJob = () => {
  const [myJob, setMyJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const tokenCheck = localStorage.getItem("token");

  const fetchMyJobs = async () => {
    setLoading(true); // Set loading to true before making the API call
    try {
      const response = await axios.get(
        "https://jobs.orcaloholding.co.uk/api/my-jobs",
        {
          headers: {
            Authorization: `Bearer ${tokenCheck}`,
            "Content-Type": "application/json",
          },
        }
      );
      setMyJob(response?.data?.data?.data);
    //   console.log(response?.data?.data?.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMyJobs();
  }, []);

  return (
    <div dir="ltr">
      <section className="relative table w-full py-36 bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
              My Jobs
            </h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section className="relative -mt-[42px] md:pb-24 pb-16">
        <div className="container mt-20">
          <div className="grid grid-cols-1 gap-[30px]">
            {!loading ? (
              myJob?.map((item) => (
                <div
                  key={item?.id}
                  className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5"
                >
                  <div className="flex items-center">
                    <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                      <img
                        src={item?.job?.company?.logo}
                        className="h-8 w-8"
                        alt=""
                      />
                    </div>
                    <Link
                      to={`/jobDetails/${item?.job?.slug}`}
                      className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]"
                    >
                      {item?.job?.role?.name}
                    </Link>
                  </div>
                  <div className="md:block flex justify-between md:mt-0 mt-4">
                    <span className="block">
                      <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        {item?.job?.type}
                      </span>
                    </span>
                    <span className="block text-slate-400 text-sm md:mt-1 mt-0">
                      <i className="uil uil-clock"></i>
                      {item?.job?.deadline}
                    </span>
                  </div>
                  <div className="md:block flex justify-between md:mt-0 mt-2">
                    <span className="text-slate-400">
                      <i className="uil uil-map-marker"></i>{" "}
                      {item?.job?.location}
                    </span>
                    <span className="block font-semibold md:mt-1 mt-0">
                      {item?.job?.salary}
                    </span>
                  </div>
                  <div className="md:mt-0 mt-4">
                    <Link
                      to="/job-application"
                      className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
                    >
                      Apply Now
                    </Link>
                  </div>
                  {!!item?.job?.is_remote && (
                    <span
                      title="Remote Job 👨‍💻"
                      className="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 ltr:-left-[30px] rtl:-right-[30px] top-1"
                    >
                      <i className="uil uil-star"></i>
                    </span>
                  )}
                </div>
              ))
            ) : (
              <div className="h-24 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <AppLoader />
              </div>
            )}
          </div>
        </div>
      </section>
      <AppModal />
    </div>
  );
};
