import React, { useEffect, useState } from "react";
import JobForm from "./components/JobForm/JobForm";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppLoader } from "../../UI/AppLoader/AppLoader";
import GlobalSnackBar from "../../UI/SnackBar";

import { Link } from "react-router-dom";

const JobApplication = ({ page }) => {
  const { REACT_APP_SITE_URL } = process.env;
  const tokenCheck = localStorage.getItem("token") === null ? "false" : "true";
  const authToken = localStorage.getItem("token");
  const { state } = useLocation();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState();
  const [loadingJobDetails, setLoadingJobDetails] = useState(false);
  const [jobApplicationMsg, setJobApplicationMsg] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfileData = async () => {
    setLoading(true); // Set loading to true before making the API call
    try {
      const response = await axios.get(
        "https://jobs.orcaloholding.co.uk/api/my-profile",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setData(response?.data?.data);
      localStorage.setItem("user", JSON.stringify(response?.data?.data?.user));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error(error);
    }
  };
  const updateProfileImage = async (imageUrl) => {
    try {
      const response = await axios.post(
        `${REACT_APP_SITE_URL}/api/update-profile-image`,
        imageUrl,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (response.status === 200) {
        setData({ ...data, user: response?.data?.data?.user });
        localStorage.setItem(
          "user",
          JSON.stringify(response?.data?.data?.user)
        );
        setJobApplicationMsg({
          title: "Profile Picture Changed Successfully",
          isToggle: true,
          type: "success",
        });
        window.dispatchEvent(new Event("storage"));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchJobDetails = async () => {
      setLoadingJobDetails(true);
      try {
        const response = await axios.get(
          `${REACT_APP_SITE_URL}/api/jobs/${state?.slug}`
        );
        setJobDetails([response?.data?.data]);
        setLoadingJobDetails(false);
      } catch (error) {
        console.error(error);
        setLoadingJobDetails(false);
      }
    };
    !!!page && fetchJobDetails();
    fetchProfileData();
  }, []);
  useEffect(() => {
    if (tokenCheck === "false") {
      navigate("/login");
    }
  }, [navigate, tokenCheck]);

  return (
    <>
      {" "}
     
      <div className="container mx-auto my-32">
  {!page?( <div className="flex items-center ">
  <Link to="/job-list" className="mt-[-100px] sm:ml-[-5px]  ">
    <img src="/assets/images/back_arrow_icon.png" alt="Back Arrow" className="w-5" />
  </Link>
  <Link to="/job-list" className="text-emerald-600 cursor-pointer underline ml-1 mt-[-100px]">
    Back To Job
  </Link>
</div>):("")}   


        <GlobalSnackBar
          isOpenSnack={jobApplicationMsg}
          setIsOpenSnack={setJobApplicationMsg}
        />
        {page ? (
          <div className="update-profile">
            <div className="job-description mb-5 flex justify-between items-center">
              <h1 className="text-emerald-600  text-2xl font-bold">
                Update Profile
              </h1>
              <div className="bg-white rounded-lg  text-center relative">
                {data?.user?.image ? (
                  <div className="rounded-full shadow-lg">
                    <img
                      className="w-[50px] h-[50px] mx-auto rounded-full object-cover object-center"
                      src={data?.user?.image}
                      alt="Avatar Upload"
                    />
                  </div>
                ) : (
                  <div class="relative inline-flex shadow-lg items-center justify-center w-[50px] h-[50px] overflow-hidden bg-emerald-600 hover:bg-emerald-700 rounded-full dark:bg-gray-600">
                    <span class="font-medium text-white dark:text-gray-900 uppercase">
                      {loading ? (
                        <AppLoader />
                      ) : (
                        `${data?.user?.first_name[0] ?? ""}${
                          data?.user?.last_name[0] ?? ""
                        }`
                      )}
                    </span>
                  </div>
                )}
                <label
                  title="Click to Upload Profile Photo"
                  className="cursor-pointer top-0 left-0 w-[50px] h-[50px] absolute opacity-0"
                >
                  <span className="mt-2 text-base leading-normal px-4 py-2 bg-blue-500 text-white rounded-full">
                    Select Avatar
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file?.size / 1024 / 1024 >= 2) {
                        setJobApplicationMsg({
                          title: "File Size Must be Lower than 2 MB",
                          isToggle: true,
                          type: "error",
                        });
                        return;
                      }
                      if (file != null) {
                        const formData = new FormData();
                        formData.append("profile_image", file);
                        updateProfileImage(formData);
                      }
                    }}
                    accept=".png, .gif, .jpeg, .jpg, .svg"
                  />
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="apply-for-job">
            {loadingJobDetails ? (
              <div className="py-16 flex justify-center">
                <AppLoader color="rgb(5 150 105)" />
              </div>
            ) : (
              <div className="job-description mb-5">
                <h1 className="text-emerald-600  text-2xl font-bold">
                  {jobDetails?.[0]?.role?.name}
                </h1>
                <p className="text-gray-600 mt-1">
                  at{" "}
                  <i className="uil uil-building text-[18px] text-emerald-600"></i>{" "}
                  {jobDetails?.[0]?.company?.name}
                </p>
                <p className="mt-2">
                  <i className="uil uil-map-marker text-[18px] text-emerald-600"></i>{" "}
                  {jobDetails?.[0]?.company?.location}
                </p>
                <div
                  className="[&>ul]:list-disc [&>ul]:my-2 [&>ul]:ml-8"
                  dangerouslySetInnerHTML={{
                    __html: jobDetails?.[0]?.description,
                  }}
                />
              </div>
            )}
          </div>
        )}
        <JobForm
          jobId={jobDetails?.[0]?.id}
          data={data}
          error={error}
          setJobApplicationMsg={setJobApplicationMsg}
          fetchProfileData={fetchProfileData}
          loading={loading}
          setLoading={setLoading}
          page={page}
          setData={setData}
        />
      </div>
    </>
  );
};

export default JobApplication;
