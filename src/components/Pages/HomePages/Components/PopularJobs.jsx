import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./Components/JobCard";
import { NavLink } from "react-router-dom";
import { CommonPagination } from "../../UI/CommonPagination";

const PopularJobs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [totalPost, setTotalPost] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jobs.orcaloholding.co.uk/api/jobs"
        );
        setData(response.data?.data?.data);

        setTotalPost(response?.data?.data?.meta?.total);
        setPostsPerPage(response?.data?.data?.meta?.per_page);
        setFrom(response?.data?.data?.meta?.from);
        setTo(response?.data?.data?.meta?.to);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const currentPosts = data?.slice(from - 1, to);

  // if (error) {
  //     return <div>Error: {error}</div>;
  // }
  // console.log(data?.data?.data, 'data')
  return (
    <section
      className="relative bg-slate-50 dark:bg-slate-800 md:py-24 py-16"
      dir="ltr"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
            Popular Jobs
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px] mb-3">
          {currentPosts?.map((item) => {
            return (
              <div key={item.id}>
                <JobCard
                  id={item.id}
                  slug={item.slug}
                  companyIcon={item.company?.logo}
                  companyName={item.company?.name}
                  type={item.type}
                  title={item.title}
                  location={item.location}
                  isRemote={item?.is_remote}
                  created_at={item?.created_at}
                />
              </div>
            );
          })}
        </div>
        <CommonPagination
          postsPerPage={postsPerPage}
          totalPosts={totalPost}
          setData={setData}
        />
        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
          <div className="md:col-span-12 text-center">
            <NavLink
              to={`job-list`}
              className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
            >
              See More Jobs <i className="uil uil-arrow-right align-middle"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularJobs;
