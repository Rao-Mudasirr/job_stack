import React, { useEffect, useState } from "react";
import JobForm from "./components/JobForm/JobForm";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AppLoader } from "../../UI/AppLoader/AppLoader";

const JobApplication = ({ page }) => {
  const { REACT_APP_SITE_URL } = process.env;
  const tokenCheck = localStorage.getItem("token") === null ? "false" : "true";
  const authToken = localStorage.getItem("token");
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState();
  const [loadingJobDetails, setLoadingJobDetails] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
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
      setData(response?.data);
      localStorage.setItem("user", JSON.stringify(response?.data?.data?.user));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error(error);
    }
  };
  const updateProfileImage = async (imageUrl) => {
    console.log(imageUrl);
    try {
      setLoadingImage(true);
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
          setLoadingImage(false);
        await fetchProfileData();
      }
    } catch (error) {
      setLoadingImage(false);
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchJobDetails = async () => {
      setLoadingJobDetails(true);
      try {
        const response = await axios.get(
          `${REACT_APP_SITE_URL}/api/jobs/${id}`
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
    <div className="container mx-auto mt-10">
      {page ?
        <div className="update-profile">
          <div className="job-description mb-5 flex justify-between items-center">
            <h1 className="text-emerald-600  text-2xl font-bold">
              Update Profile
            </h1>
            <div className="bg-white rounded-lg text-center relative">
              <div className="rounded-full shadow-lg">
                <img className="w-[50px] h-[50px] mx-auto rounded-full object-cover object-center" src={data?.data?.user?.image} alt="Avatar Upload" />
              </div>
              <label className="cursor-pointer top-0 left-0 w-[50px] h-[50px] absolute opacity-0">
                <span className="mt-2 text-base leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full" >Select Avatar</span>
                <input type='file' className="hidden" onChange={(e) => {
                  const file = e.target.files[0];
                  console.log(file);
                  if (file != null) {
                    const formData = new FormData();
                    formData.append('profile_image', file);
                    updateProfileImage(formData);
                  }
                }} accept="png, gif, jpeg, jpg, svg" />
              </label>
            </div>
          </div>
        </div>
        : <div className="apply-for-job">
          {loadingJobDetails ?
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
        </div>}
      <JobForm jobId={jobDetails?.[0]?.id}  data={data} error={error} fetchProfileData={fetchProfileData} loading={loading} setLoading={setLoading} page={page} />
    </div>
  );
};

export default JobApplication;
