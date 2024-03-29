import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

const JobCard = (props) => {
  const tokenCheck = localStorage.getItem("token") === null ? "false" : "true";

  const {
    id,
    companyIcon,
    slug,
    companyName,
    type,
    created_at,
    title,
    location,
    isRemote,
  } = props;
  return (
    <div
      key={id}
      className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
            <img src={companyIcon} className="h-8 w-8" alt="" />
          </div>

          <div className="ml-3 rtl:mr-3">
            <NavLink
              to={
                localStorage.getItem("token")
                  ? {
                      pathname: `/jobDetails/${slug}`,
                    }
                  : { pathname: "/login" }
              }
              state={slug}
              className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
            >
              {companyName}
            </NavLink>
            <span className="block text-sm text-slate-400">
              {moment(created_at).fromNow()}
            </span>
          </div>
        </div>

        <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
          {isRemote ? "Remote" : type}
        </span>
      </div>

      <div className="mt-6">
        <NavLink
          to={
            localStorage.getItem("token")
              ? {
                  pathname: `jobDetails/${slug}`,
                }
              : { pathname: "/login" }
          }
          className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500"
        >
          {title}
        </NavLink>
        <h6 className="text-base font-medium">
          <i className="uil uil-map-marker"></i> {location}
        </h6>
      </div>

      <div className="mt-6">
        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
          <div
            className="bg-emerald-600 h-[6px] rounded-full"
            style={{ width: "55%" }}
          ></div>
        </div>
        <div className="mt-2">
          <span className="text-slate-400 text-sm">
            <span className="text-slate-900 dark:text-white font-semibold inline-block">
              21 applied
            </span>{" "}
            of 40 vacancy
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
