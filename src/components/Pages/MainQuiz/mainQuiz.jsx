import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalSnackBar from "../UI/SnackBar";
import { useLocation, useNavigate } from "react-router-dom";
import QuizTimer from "../../QuizTimer/QuizTimer";
export const MainQuiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [jobTest, setJobTest] = useState(location?.state?.testData?.questions);
  const [index, setIndex] = useState(0);
  const [disabled, setDisabled] = useState(1);
  const [option, setOption] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [timeUp, setTimeUp] = useState(false);
  // const [timer, setTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(
    location?.state?.testData?.test?.total_duration_min * 60
  );
  console.log(location);
  const [snackbar, setSnackbar] = useState({
    title: "",
    isToggle: false,
    type: "",
  });

  const handleChange = (e, questionsId) => {
    setOption(e.target.value);
    setQuestionId(questionsId);
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

        localStorage.setItem("questionIndex", JSON.stringify(index));
        localStorage.setItem("disabledIndex", JSON.stringify(disabled));

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
        setDisabled(disabled + 1);
        setOption("");
        setQuestionId("");
      }
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
  };
  // const prevQuestion = () => {
  //   index !== 0 && setIndex(index - 1);

  //   var optionsArray = JSON.parse(localStorage.getItem("optionArray"));

  //   const filteredArray = optionsArray?.filter((item) => {
  //     return item?.question_Id === questionId;
  //   });

  //   setOption(filteredArray[0]?.options_Id);
  //   console.log(filteredArray[0]?.options_Id, "filteredArray");
  //   // console.log(options_Id, "optionIds");
  //   // setOption("");
  // };

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
      navigate("/quiz-card", {
        state: response?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getIndex = localStorage.getItem("questionIndex");
    const getDisabledIndex = localStorage.getItem("disabledIndex");
    const timers = localStorage.getItem("timer");
    setTimeLeft(timers);
    console.log(timers * 60);
    setIndex(Number(getIndex));
    setDisabled(Number(getDisabledIndex));
  }, []);

  console.log(jobTest?.length + 1 === index + 1);
  return (
    <div dir="ltr">
      <section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
        <GlobalSnackBar isOpenSnack={snackbar} setIsOpenSnack={setSnackbar} />
        {timeUp ? (
          <div>Time's up!</div>
        ) : (
          <div className="container mt-10 mx-auto rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-emerald-600/5 border-emerald-600/10">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-emerald-600"></span>

            <div className="flex text-2xl font-bold justify-between align-center mb-10">
              <h1>Total Question : {` ${jobTest?.length}`}</h1>
              <QuizTimer
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                // initialTime={

                // }
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
                <div key={opt?.id} className="mt-2">
                  <input
                    name="radio-group"
                    key={opt?.option}
                    id={opt?.option}
                    value={opt?.id || option}
                    type="radio"
                    onChange={(e) => handleChange(e, jobTest[index]?.id)}
                  />
                  <label htmlFor={opt?.option} className="ml-2">
                    {opt?.option}
                  </label>
                </div>
              ))}
            </form>
            <div className="mt-20 flex justify-between">
              {/* <button
              disabled={index >= jobTest?.length + 1}
              onClick={prevQuestion}
              className={`btn ${
                index === 0 ? "bg-gray-600" : "bg-emerald-600"
              } ${
                index === 0 ? "hover:bg-gray-600" : "hover:bg-emerald-700"
              } hover:border-emerald-700 text-white rounded-md`}
            >
              Previous
            </button> */}
              <button
                disabled={disabled >= jobTest?.length}
                onClick={nextQuestion}
                className={` ml-2 btn ${
                  disabled > jobTest?.length ? "bg-gray-600" : "bg-emerald-600"
                } ${
                  disabled > jobTest?.length
                    ? "hover:bg-gray-600"
                    : "hover:bg-emerald-700"
                }  btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full`}
              >
                Next
              </button>
              {disabled >= jobTest?.length && (
                <button
                  className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full"
                  onClick={endTestHandler}
                >
                  End Test
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
