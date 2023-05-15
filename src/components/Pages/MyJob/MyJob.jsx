import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { AppLoader } from "../UI/AppLoader/AppLoader";
import { AppModal } from "../UI/AppModal/AppModal";
import { CommonPagination } from "../UI/CommonPagination";

export const MyJob = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [totalPost, setTotalPost] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

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
      setData(response?.data?.data?.data);
      setTotalPost(response?.data?.data?.meta?.total);
      setPostsPerPage(response?.data?.data?.meta?.per_page);
      setFrom(response?.data?.data?.meta?.from);
      setTo(response?.data?.data?.meta?.to);
      console.log(response?.data?.data?.meta?.from);
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

  const currentPosts = data?.slice(from - 1, to);

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
      <div className=" sm:mx-16 md:mx-32 lg:mx-40">
        <div className=" overflow-auto my-6 ">
          <div className="font-sans min-w-[800px] bg-white rounded ">
            <table className=" w-full whitespace-nowrap  relative">
              <thead>
                <tr>
                  <th className="sticky top-0 py-3 px-2 text-left bg-gray-200 text-gray-600 uppercase text-sm leading-normal z-50">
                    Job Title
                  </th>
                  <th className="sticky top-0 py-3 px-2 text-center bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    Type
                  </th>
                  <th className="sticky top-0 py-3 px-2 text-center bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    Created At
                  </th>
                  <th className="sticky top-0 py-3 px-2 text-center bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    Status
                  </th>
                  <th className="sticky top-0 py-3 px-2 text-left bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    Location
                  </th>
                  <th className="sticky top-0 py-3 px-2 text-center bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light divide-y">
                {!loading ? (
                  <>
                    {!!currentPosts &&
                      currentPosts?.map((item) => (
                        <tr
                          key={item?.id}
                          className="border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="py-3 px-2 text-left whitespace-nowrap relative overflow-hidden">
                            {!!item?.job?.is_remote && (
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
                                  src={item?.job?.company?.logo}
                                  className="h-8 w-8"
                                  alt=""
                                />
                              </div>
                              <div>
                                <Link
                                  to={`/jobDetails/${item?.job?.slug}`}
                                  state={'my-jobs'}
                                  // replace={true}
                                  className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]"
                                >
                                  {item?.job?.title}
                                </Link>
                                <span className="block text-sm text-slate-400 pl-3">
                                  {item?.job?.role?.name}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-2 text-center md:block flex justify-between md:mt-0 mt-4">
                            <span className="block bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">
                              {item?.job?.type}
                            </span>
                            <span className="block text-slate-400 text-sm md:mt-1 mt-0">
                              <i className="uil uil-clock"></i>
                              {item?.job?.deadline}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-center">
                            <div className="flex item-center justify-center">
                              {moment(item?.created_at).format("DD-MM-YYYY")}
                            </div>
                          </td>
                          <td className="py-3 px-2 text-center">
                            <div className="flex item-center justify-center">
                              <span className="block font-semibold md:mt-1 mt-0">
                                {item?.status}
                              </span>
                            </div>
                          </td>

                          <td className="py-3 px-2 text-left">
                            <div className="flex items-center md:block justify-between md:mt-0 mt-2">
                              <span className="text-slate-400">
                                <i className="uil uil-map-marker"></i>{" "}
                                {item?.job?.location}
                              </span>
                              <span className="block font-semibold md:mt-1 mt-0">
                                {item?.job?.salary}
                              </span>
                            </div>
                          </td>

                          <td className="py-3 px-2 text-center">
                            <div className="flex item-center justify-center">
                              {item?.status === "In Review" ? (
                                <button
                                  disabled={true}
                                  className={`btn rounded-md bg-gray-400/50 text-black/30 ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto`}
                                >
                                  Learning Material
                                </button>
                              ) : (
                                <Link
                                  state={item}
                                  to={`/learning-material/${item?.id}`}
                                  // replace={true}
                                  className={`btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto`}
                                >
                                  Learning Material
                                </Link>
                              )}
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
          endPoint={`https://jobs.orcaloholding.co.uk/api/my-jobs`}
        />
      </div>
      <AppModal />
    </div>
  );
};
