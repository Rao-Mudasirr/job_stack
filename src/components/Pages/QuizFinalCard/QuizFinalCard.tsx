import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuizFinalCard = () => {

  const [quizEnd, setQuizEnd] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const tokenCheck = localStorage.getItem("token");
  // const userId = (JSON.parse(localStorage.getItem("user")))?.id;
  const fetchQuizEnd = async () => {
    setLoading(true); // Set loading to true before making the API call
    const formData = new FormData();
    formData.append('attempt_id', "RzZayXL2Klw7g9mP3GJ6bxOB1W");
    
    try {
      const response = await axios.post(
        "https://jobs.orcaloholding.co.uk/api/test/end", formData,
        {
          headers: {
            Authorization: `Bearer ${tokenCheck}`,
            "Content-Type": "application/json",
          },
        }
      );
      setQuizEnd(response?.data?.data?.attempt);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuizEnd();
  }, []);
  // console.log(quizEnd?.id, "quizEnd")
  return (
    <div dir="ltr">
      <section className="relative h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="title-heading text-center my-auto">
              <div
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-emerald-600/5 border-emerald-600/10"
              >
                <div>

                  {quizEnd ? <div>

                    <span
                      className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-emerald-600"
                    ></span>

                    <div className="flex justify-center">
                      <div >
                        <h3 className="text-2xl font-bold text-emerald-600 sm:text-xl">
                          Assessment Submitted Successfully
                        </h3>

                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <p className="max-w-[40ch] text-lg font-bold">
                        Quiz  Result
                      </p>
                    </div>

                    <dl className="flex justify-evenly mt-6 gap-4 m-8">

                      <div className="flex flex-col">
                        <dt className="text-lg font-medium text-gray-600">Total Score</dt>
                        <dd className="text-sm text-gray-500">{quizEnd?.total_score}</dd>
                      </div>

                      <div className="flex flex-col">
                        <dt className="text-lg font-medium text-gray-600">Score Obtained</dt>
                        <dd className="text-sm text-gray-500">{quizEnd?.score_obtained}</dd>
                      </div>

                      <div className="flex flex-col">
                        <dt className="text-lg font-medium text-gray-600">Total Time</dt>
                        <dd className="text-sm text-gray-500">{quizEnd?.total_time_taken} min</dd>
                      </div>

                      <div className="flex flex-col">
                        <dt className="text-lg font-medium text-gray-600">Remarks</dt>
                        {quizEnd?.is_passed ? <dd className="text-sm text-gray-500">Passed</dd> : <dd className="text-sm text-red-500">Failed</dd>}
                      </div>
                    </dl>
                    <p className="text-lg font-medium text-black-600 mt-6 mb-4">We will get back to you after reviewing your assessment</p>
                  </div> : <h3 className="text-xl font-bold text-red-600 sm:text-xl m-4">
                    Something went Wrong!
                  </h3>
                  }
                </div>

              </div>

              <div className="mt-6">
                <Link
                  to="/"
                  className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full"
                  replace={true}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuizFinalCard;
