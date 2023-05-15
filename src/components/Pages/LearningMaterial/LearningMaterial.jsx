import React, { useEffect, useState } from "react";
import { AccordianItem } from "./AccordianItem/AccordianItem";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { AppLoader } from "../UI/AppLoader/AppLoader";

const LearningMaterial = () => {
  const authToken = localStorage.getItem("token");
  const { REACT_APP_SITE_URL } = process.env;
  const [learningMaterial, setlearningMaterial] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state } = useLocation();
  const {id} = useParams();
  const fetchLearningMaterialData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${REACT_APP_SITE_URL}/api/my-jobs/${id}/learning-materials`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setlearningMaterial(response?.data?.data?.learning_materials);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLearningMaterialData();
  }, []);
  return (
    <div dir="ltr">
      <section className="relative table w-full py-36">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
              Assessment
            </h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
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

      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="flex justify-between items-center w-full text-left">
                <h5 className="text-2xl font-bold mb-4">Learning Material</h5>
                <div className="mb-6 mt-2 justify-end">
                  <Link
                    replace={true}
                    // state={state}
                    to={`/job-test/${id}`}
                    className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md justify-end"
                  >
                    Attempt Test
                  </Link>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <div
                  id="accordion-collapse"
                  data-accordion="collapse"
                  className="mt-6"
                >
                  {loading ? (
                    <div className="h-60 flex justify-center items-center">
                      <AppLoader color="rgb(6 78 59 / 0.9)" />
                    </div>
                  ) : !!learningMaterial?.length ? (
                    learningMaterial?.map((accordianItemData) => {
                      return (
                        <AccordianItem
                          key={accordianItemData?.id}
                          accordianItemData={accordianItemData}
                        />
                      );
                    })
                  ) : (
                    <div className="h-60 flex justify-center items-center">
                      <div className="text-red-700">{error}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningMaterial;
