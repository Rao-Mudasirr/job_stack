import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { countryData, jobTypeData } from "../HomePages/Components/Hero";
import axios from "axios";
import moment from "moment";
import { AppModal } from "../UI/AppModal/AppModal";
import { AppLoader } from "../UI/AppLoader/AppLoader";
import { CommonPagination } from "../UI/CommonPagination";

export const JobList = (props) => {
  const [data, setData] = useState(null);
  // const [jobDetails, setJobDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [totalPost, setTotalPost] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const fetchJobDetails = () => {
    setLoading(true);
    axios
      .get("https://jobs.orcaloholding.co.uk/api/jobs")
      .then((response) => {
        setData(response?.data?.data?.data);
        setTotalPost(response?.data?.data?.meta?.total);
        setPostsPerPage(response?.data?.data?.meta?.per_page);
        setFrom(response?.data?.data?.meta?.from);
        setTo(response?.data?.data?.meta?.to);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchJobDetails();
  }, []);

  const currentPosts = data?.slice(from - 1, to);

  return (
    <div dir="ltr">
      <section className="relative table w-full py-36 bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
              Job Vacancies
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
        {/* <div className="container z-1">
          <div className="d-flex" id="reserve-form">
            <div className="md:w-5/6 mx-auto">
              <div className="lg:col-span-10">
                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                  <form action="#" >
                    <div className="registration-form text-dark text-start">
                      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                        <div className="filter-search-form relative filter-border flex ">
                          <i className="uil uil-briefcase-alt icons pl-1"></i>
                          <input
                            name="name"
                            type="text"
                            id="job-keyword"
                            className=" pl-7 form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                            placeholder="Search your Keywords"
                          />
                        </div>
                        <div className="filter-search-form relative filter-border bg-gray-50">
                          <i className="uil uil-map-marker icons"></i>
                          <select
                            className="form-select w-full h-full pl-10 bg-gray-50"
                            data-trigger
                            name="choices-location"
                            id="choices-location"
                            aria-label="Default select example"
                          >
                            {countryData.map((item) => {
                              return (
                                <option key={item.id} value={item.value}>
                                  {item.Descp}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="filter-search-form relative filter-border">
                          <i className="uil uil-briefcase-alt icons"></i>
                          <select
                            className="form-select w-full h-full pl-10 bg-gray-50"
                            data-trigger
                            name="choices-type"
                            id="choices-type"
                            aria-label="Default select example"
                          >
                            {jobTypeData.map((item) => {
                              return (
                                <option key={item.id} value={item.value}>
                                  {item.Descp}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <input
                          type="submit"
                          id="search"
                          name="search"
                          style={{ height: "60px" }}
                          className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100"
                          value="Search"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="mt-20">
          <div className=" sm:mx-16 md:mx-32 lg:mx-40">
            <div className=" overflow-auto my-6 ">
              <div className="font-sans min-w-[800px]  bg-white rounded ">
                <table className="w-full whitespace-nowrap  relative">
                  <thead>
                    <tr>
                      <th className="sticky top-0 py-3 px-6 text-left bg-gray-200 text-gray-600 uppercase text-sm leading-normal z-50">
                        Job Title
                      </th>
                      <th className="sticky top-0 py-3 px-6 text-center bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        Type
                      </th>
                      <th className="sticky top-0 py-3 px-6 text-center bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        Created At
                      </th>
                      <th className="sticky top-0 py-3 px-6 text-left bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        Location
                      </th>
                      <th className="sticky top-0 py-3 px-6 text-center bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-600 text-sm font-light">
                    {!loading ? (
                      <>
                        {!!currentPosts &&
                          currentPosts?.map((item) => (
                            <tr
                              key={item?.id}
                              className="border-b border-gray-200 hover:bg-gray-100"
                            >
                              <td className="py-3 px-2 text-left whitespace-nowrap relative overflow-hidden">
                                {!!item?.is_remote && (
                                  <span
                                    title="Remote Job 👨‍💻"
                                    className="w-24 bg-yellow-400 text-white text-center absolute -rotate-45 "
                                    style={{ left: "-20px" }}
                                  >
                                    <i className="uil uil-star"></i>
                                  </span>
                                )}
                                <div className="flex items-center z-10">
                                  <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md ">
                                    <img
                                      src={item?.company?.logo}
                                      className="h-8 w-8"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <Link
                                      to={`/jobDetails/${item?.slug}`}
                                      // state={item?.slug}
                                      // replace={true}
                                      className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]"
                                    >
                                      {item?.title}
                                    </Link>
                                    <span className="block text-sm text-slate-400 pl-3">
                                      {item?.role?.name}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 px-2 text-center md:block flex justify-between md:mt-0 mt-4">
                                <span className="block">
                                  <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">
                                    {item?.type}
                                  </span>
                                </span>
                                <span className="block text-slate-400 text-sm md:mt-1 mt-0">
                                  <i className="uil uil-clock"></i>
                                  {item?.deadline}
                                </span>
                              </td>
                              <td className="py-3 px-2 text-center">
                                <div className="flex item-center justify-center">
                                  {moment(item?.created_at).format(
                                    "DD-MM-YYYY"
                                  )}
                                </div>
                              </td>
                              <td className="py-3 px-2 text-left">
                                <div className="flex items-center md:block justify-between md:mt-0 mt-2">
                                  <span className="text-slate-400">
                                    <i className="uil uil-map-marker"></i>{" "}
                                    {item?.location}
                                  </span>
                                  <span className="block font-semibold md:mt-1 mt-0">
                                    {item?.salary}
                                  </span>
                                </div>
                              </td>

                              <td className="py-3 px-2 text-center">
                                <div className="flex item-center justify-center">
                                  <NavLink
                                    to={
                                      localStorage.getItem("token")
                                        ? {
                                            pathname: `/job-application/${item?.slug}`,
                                          }
                                        : { pathname: "/login" }
                                    }
                                    state={item}
                                    className={`btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto`}
                                    onClick={() => {
                                      if (!localStorage.getItem("token")) {
                                        props.setPreviousRoute("/job-list");
                                      }
                                    }}
                                  >
                                    Apply Now
                                  </NavLink>
                                </div>
                              </td>
                            </tr>
                          ))}
                        {!data && (
                          <span className="h-24 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            No Data Found!
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="h-24 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <AppLoader />
                      </span>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="my-8">
            <CommonPagination
              postsPerPage={postsPerPage}
              totalPosts={totalPost}
              setData={setData}
              endPoint={`https://jobs.orcaloholding.co.uk/api/jobs`}
            />
          </div>
        </div>
      </section>
      <AppModal />
    </div>
  );
};
