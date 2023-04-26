import React, { useEffect, useState } from "react";
import JobForm from "./components/JobForm/JobForm";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AppLoader } from "../../UI/AppLoader/AppLoader";

const JobApplication = () => {
  const { REACT_APP_SITE_URL } = process.env;
  console.log(REACT_APP_SITE_URL);
  const tokenCheck = localStorage.getItem("token") === null ? "false" : "true";
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchJobDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${REACT_APP_SITE_URL}/api/jobs/${id}`
        );
        setJobDetails([response?.data?.data]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, []);
  console.log(jobDetails);
  useEffect(() => {
    if (tokenCheck === "false") {
      navigate("/login");
    }
  }, [navigate,tokenCheck]);

  return (
    <div className="container mx-auto mt-10">
      {loading ?
        <div className="py-16 flex justify-center"><AppLoader color="rgb(5 150 105)" /></div>
      :
      <div className="job-description mb-5">
        <h1 className="text-emerald-600  text-2xl font-bold">
          {jobDetails?.[0]?.role?.name}
        </h1>
        <p className="text-gray-600 mt-1">
          at <i className="uil uil-building text-[18px] text-emerald-600"></i>{" "}{jobDetails?.[0]?.company?.name}
        </p>

        <p className="mt-2"><i className="uil uil-map-marker text-[18px] text-emerald-600"></i>{" "}{jobDetails?.[0]?.company?.location}</p>
        <div
          dangerouslySetInnerHTML={{ __html: jobDetails?.[0]?.description }}
        />
      </div>}
      <JobForm />
    </div>
  );
};

export default JobApplication;
