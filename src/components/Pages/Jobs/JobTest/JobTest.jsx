/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function JobTest() {
  const authToken = localStorage.getItem("token");
  const location = useLocation();
  const { REACT_APP_SITE_URL } = process.env;
  const [jobQuiz, setjobQuiz] = useState();
  const [data, setData] = useState();
  const isToken = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state } = useLocation();
  const navigate = useNavigate();
  const fetchJobTestData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jobs.orcaloholding.co.uk/api/my-jobs/${state?.id}/test`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setjobQuiz(response?.data?.data?.test);
      setData(response?.data?.data);
      localStorage.setItem(
        "timer",
        response?.data?.data?.test?.total_duration_min * 60
      );

      // Call attempt API
      //   const attemptResponse = await axios.post(
      //     `https://jobs.orcaloholding.co.uk/api/test/start`,
      //     {
      //         job_application_id:state?.id,
      //       test_id: data?.test?.id,
      //     },
      //     {
      //       headers: {
      //         Authorization: `Bearer ${authToken}`,
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   );
      //   console.log(attemptResponse?.data?.data,'res');

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobTestData();
  }, []);
  console.log(data);
  const startTest = async () => {
    try {
      const attemptResponse = await axios.post(
        `https://jobs.orcaloholding.co.uk/api/test/start`,
        {
          job_application_id: state?.id,
          test_id: data?.test?.id,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/main-quiz", {
        state: {
          testData: data,
          attemptData: attemptResponse?.data?.data,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const endTestHandler = async () => {
    try {
      const response = await axios.post(
        "https://jobs.orcaloholding.co.uk/api/test/end",
        {
          attempt_id: data?.attempt?.id,
        },
        {
          headers: {
            Authorization: `Bearer ${isToken}`,
            "Content-Type": "application/json",
          },
        }
      );

        navigate(
        "/quiz-card",
        {
          state: response?.data,
        },
        (replace = true)
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log(data, "state");
    if (data?.attempt?.status === "Started") {
      endTestHandler();
      localStorage.removeItem("timer");
      localStorage.removeItem("questionIndex");
      localStorage.removeItem("disabledIndex");

    }
  }, [data]);

  return (
    <div dir="ltr">
      {loading ? (
        <div className="h-48 flex items-center justify-center">
          <span className="ml-2 text-blue-500 font-bold text-xl">
            Loading<span className="animate-pulse">...</span>
          </span>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <section className="relative h-screen flex items-center justify-center  bg-gray-50 dark:bg-slate-800">
          <div className="container relative">
            <div className="grid grid-cols-1">
              <div className="title-heading  my-auto">
                <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-emerald-600/5 border-emerald-600/10">
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-emerald-600"></span>
                  {data?.attempt?.status === "Ended" ? (
                    <div className="text-center">
                      <p className=" text-2xl font-bold">
                        You have already attempted the test
                      </p>
                      <Link
                        to={"/my-jobs"}
                        className="mt-10  btn bg-emerald-600/10 hover:bg-emerald-600 border-emerald-600 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full"
                        replace={true}
                      >
                        Go Back
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div>
                        <div>
                          <div className="flex justify-center"></div>
                          <div className="flex justify-center mt-4">
                            <p className="max-w-[40ch] text-lg font-bold">
                              Quiz Test
                            </p>
                          </div>
                          {jobQuiz && (
                            <div className="grid grid-cols-1 gap-4 mt-6 m-8">
                              <div>
                                <dt className="text-lg font-medium text-gray-600">
                                  Name
                                </dt>
                                <dd className="text-sm text-gray-500">
                                  {jobQuiz.name}
                                </dd>
                              </div>
                              <div>
                                <dt className="text-lg font-medium text-gray-600">
                                  Quiz created Time
                                </dt>
                                <dd className="text-sm text-gray-500">
                                  {jobQuiz.created_at}
                                </dd>
                              </div>
                              <div>
                                <dt className="text-lg font-medium text-gray-600">
                                  Description
                                </dt>
                                <dd className="text-sm text-emerald-600">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: jobQuiz.description,
                                    }}
                                  />
                                </dd>
                              </div>
                              <div>
                                <dt className="text-lg font-medium text-gray-600">
                                  Total Duration
                                </dt>
                                <dd className="text-sm text-gray-500">
                                  {jobQuiz.total_duration_min} min
                                </dd>
                              </div>
                              <div>
                                <dt className="text-lg font-medium text-gray-600">
                                  Total score
                                </dt>
                                <dd className="text-sm text-gray-500">
                                  {jobQuiz.total_score}
                                </dd>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <Link
                          className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full"
                          replace={true}
                          onClick={startTest}
                        >
                          Start Test
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default JobTest;
