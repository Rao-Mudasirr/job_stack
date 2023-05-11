import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalSnackBar from "../UI/SnackBar";
import { useLocation, useNavigate } from "react-router-dom";
import QuizTimer from "../../QuizTimer/QuizTimer";
import { replace } from "feather-icons";
export const MainQuiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [jobTest, setJobTest] = useState(location?.state?.testData?.questions);
  const [index, setIndex] = useState(0);
  const [disabled, setDisabled] = useState(1);
  const [option, setOption] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [timeUp, setTimeUp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    location?.state?.testData?.test?.total_duration_min * 60
  );
  const [snackbar, setSnackbar] = useState({
    title: "",
    isToggle: false,
    type: "",
  });

  // const handleVisibilityChange = () => {
  //   if (document.hidden) {
  //     console.log("end Test");
  //   }
  // };
  // document.addEventListener("visibilitychange", handleVisibilityChange);

  const handleChange = (e, questionsId) => {
    setOption(e.target.value);
    setQuestionId(questionsId);
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionsId]: e.target.value,
    }));
  };
  const isToken = localStorage.getItem("token");
  const isLastQuestion = index === jobTest.length - 1;

  const nextQuestion = async () => {
    // Will move to next index only if option state is not empty
    if (option !== "") {
      try {
        const response = await axios.post(
          "https://jobs.orcaloholding.co.uk/api/test/submit-answer",
          {
            attempt_id: location?.state?.attemptData?.attempt?.id,
            question_id: questionId,
            option_id: option,
          },
          {
            headers: {
              Authorization: `Bearer ${isToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const { data } = response;
        if (index < jobTest.length - 1) {
          localStorage.setItem("questionIndex", JSON.stringify(index + 1));
          localStorage.setItem("disabledIndex", JSON.stringify(disabled + 1));
        } else {
          localStorage.setItem("questionIndex", JSON.stringify(index));
          localStorage.setItem("disabledIndex", JSON.stringify(disabled + 1));
        }
        setSnackbar({
          title: data?.msg,
          isToggle: true,
          type: "success",
        });
        setDisabled(disabled + 1);
      } catch (error) {
        console.log(error);
        setSnackbar({
          title: error?.message,
          isToggle: true,
          type: "error",
        });
      }

      // Move to the next question if not at the last question
      if (!isLastQuestion) {
        setIndex(index + 1);
      }
      setDisabled(disabled + 1);
      setOption("");
      setQuestionId("");
    }
    option === "" &&
      setSnackbar({
        title: "Please Select One Answer",
        isToggle: true,
        type: "error",
      });
    // setOption("");
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    localStorage.removeItem("timer");
    localStorage.removeItem("questionIndex");
    localStorage.removeItem("disabledIndex");
    setTimeout(() => {
      navigate("/my-jobs", (replace = true));
    }, 2000);
  };
  const prevQuestion = () => {
    index !== 0 && setIndex(index - 1);

    setDisabled(disabled - 1);

    setIndex(index - 1);

    localStorage.setItem("questionIndex", JSON.stringify(index - 1));

    localStorage.setItem("disabledIndex", JSON.stringify(disabled - 1));
  };

  const endTestHandler = async () => {
    try {
      const response = await axios.post(
        "https://jobs.orcaloholding.co.uk/api/test/end",
        {
          attempt_id: location?.state?.attemptData?.attempt?.id,
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
    const getIndex = localStorage.getItem("questionIndex");
    const getDisabledIndex = localStorage.getItem("disabledIndex");
    const timers = localStorage.getItem("timer");

    setTimeLeft(timers);
    setIndex(Number(getIndex));
    setDisabled(Number(getDisabledIndex));
    // const handleVisibilityChange = () => {
    //   if (document.hidden) {
    //     /* end the test */
    //     endTestHandler()
    //   }
    // };
    // document.addEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div dir="ltr">
      <section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
        <GlobalSnackBar isOpenSnack={snackbar} setIsOpenSnack={setSnackbar} />
        <div className="container mt-10 mx-auto rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-emerald-600/5 border-emerald-600/10">
          {timeUp ? (
            <div className="text-center">Time's up!</div>
          ) : (
            <>
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-emerald-600"></span>
              <div className="flex text-2xl font-bold justify-between align-center mb-10">
                <h1>Total Question : {` ${jobTest?.length}`}</h1>
                <QuizTimer
                  timeLeft={timeLeft}
                  setTimeLeft={setTimeLeft}
                  onTimeUp={handleTimeUp}
                />
              </div>
              <div className="flex text-2xl font-bold mb-10">
                Q.{`${index + 1}`}
                <h1
                  className="text-xl ml-3"
                  dangerouslySetInnerHTML={{ __html: jobTest[index]?.question }}
                />
              </div>
              <form>
                {jobTest[index]?.options?.map((opt) => (
                  <div key={opt?.id} className="mt-2 flex items-center">
                    <input
                      checked={selectedAnswers[jobTest[index]?.id] === opt?.id}
                      name="radio-group"
                      key={opt?.option}
                      id={opt?.option}
                      value={opt?.id}
                      type="radio"
                      onChange={(e) => handleChange(e, jobTest[index]?.id)}
                      className=" h-5 w-5  accent-emerald-800 "
                      disabled={disabled >= jobTest?.length}
                    />
                    <label
                      htmlFor={opt?.option}
                      className="ml-2   text-gray-700"
                    >
                      {opt?.option}
                    </label>
                  </div>
                ))}
              </form>
            </>
          )}
          <div className="mt-20 w-100 flex justify-between">
            <button
              disabled={index === 0}
              onClick={prevQuestion}
              className={` ml-2 btn w-32 ${
                index === 0
                  ? " bg-gray-600/5 border-gray-600 hover:border-gray-600 text-gray-600 hover:text-gray"
                  : "bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600 hover:border-emerald-600 text-emerald-600 hover:text-white"
              } rounded-full`}
            >
              Previous{" "}
            </button>
            {disabled >= jobTest?.length && (
            <button
              className="w-32 btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full"
              onClick={() => {
                endTestHandler();
                localStorage.removeItem("timer");
                localStorage.removeItem("questionIndex");
                localStorage.removeItem("disabledIndex");
              }}
            >
              End Test
            </button>
          )}
            <button
              disabled={disabled >= jobTest?.length}
              onClick={nextQuestion}
              className={` ml-2 btn w-32 ${
                disabled >= jobTest?.length
                  ? "bg-gray-600/5 border-gray-600 hover:border-gray-600 text-gray-600 hover:text-gray"
                  : "bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600 hover:border-emerald-600 text-emerald-600 hover:text-white"
              } rounded-full`}
            >
              Next
            </button>
          
          </div>
        </div>
      </section>
    </div>
  );
};
