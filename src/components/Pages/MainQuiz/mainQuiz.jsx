import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalSnackBar from "../UI/SnackBar";
const questionsArray = [
  {
    id: "V48gNWJqOY17rn7y5b6rQEepzx",
    question: "<p>dasdsadsa</p>",
    score: 20,
    options: [
      {
        id: "XEnyDRBL5vjk2JkJKMlQrWGpo0",
        option: "adadrwersada",
      },
      {
        id: "pjWbdg4e95NAGv70ERylv8qY2M",
        option: "rwerrwerrwrvfgdf",
      },
    ],
  },
  {
    id: "3YzGd0q86X2APzkpxVDeoNgyB5",
    question: "<p>Old</p>",
    score: 50,
    options: [
      {
        id: "QGEdNM4wWb073dAZ8jKX6za95O",
        option: "Repellendus Hic acc",
      },
      {
        id: "3lzPJY6OvGqk1OALE25ZjDWBxw",
        option: "Ea dolore qui eum qu",
      },
    ],
  },
  {
    id: "E0vR6qnY83Vk02AZwPaG1L5Odb",
    question:
      '<p>sdas adasdad a<img src="http://localhost/orcalo_job_portal/public/uploads/images/2023/s5M630TkaawkLy91rynqHghQ22mftelnWjQHaTyM.png"></p>',
    score: 10,
    options: [
      {
        id: "nLlEJ3XROWMklXk94Ywbyv56qP",
        option: "dfarwettrtttrsda",
      },
      {
        id: "bYWrM5QgZeykoVmpGXBNdJvDzq",
        option: "asdarwesd",
      },
      {
        id: "vL3E1Yz4D68m5EmlOxNg0yZXpo",
        option: "sadatertrwersd",
      },
      {
        id: "VGB0ZWP2jODk9Z7NKagpMvbdxo",
        option: "asrwewrwfdfsghyjerdas",
      },
    ],
  },
  {
    id: "V48gNWJqOY17rn7y5b6rQEepzx",
    question: "<p>dasdsadsa</p>",
    score: 10,
    options: [
      {
        id: "XEnyDRBL5vjk2JkJKMlQrWGpo0",
        option: "adadsadajjuwerwe",
      },
      {
        id: "pjWbdg4e95NAGv70ERylv8qY2M",
        option: "asdsdadfsdsadsdsa",
      },
    ],
  },
  {
    id: "V48gNWJqOY17rn7y5b6rQEepzx",
    question: "<p>dasdsadsa</p>",
    score: 10,
    options: [
      {
        id: "XEnyDRBL5vjk2JkJKMlQrWGpo0",
        option: "adadsadjujujyua",
      },
      {
        id: "pjWbdg4e95NAGv70ERylv8qY2M",
        option: "aasdasdeeeetggg",
      },
    ],
  },
];
export const MainQuiz = () => {
  const [jobTest, setJobTest] = useState(questionsArray);
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [snackbar, setSnackbar] = useState({
    title: "",
    isToggle: false,
    type: "",
  });
  // console.log(questionId, "questionId");
  // console.log(option, "option");

  const handleChange = (e, questionsId) => {
    setOption(e.target.value);
    setQuestionId(questionsId);
  };
  const isToken = localStorage.getItem("token");
  const nextQuestion = async () => {
    // Will move to next index only if option state is not empty
    if (option !== "") {
      try {
        const response = await axios.post(
          "https://jobs.orcaloholding.co.uk/api/test/submit-answer",
          {
            attempt_id: "Nd6OgKVR5MQkOeAw4jPz0LWDXG",
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
        console.log(data);
        setSnackbar({
          title: data?.msg,
          isToggle: true,
          type: "success",
        });
      } catch (error) {
        console.log(error);
        setSnackbar({
          title: error?.message,
          isToggle: true,
          type: "error",
        });
      }

      setIndex(index + 1);
    }
    option === "" &&
      setSnackbar({
        title: "Please Select One Answer",
        isToggle: true,
        type: "error",
      });
    setOption("");
  };
  const prevQuestion = () => {
    index !== 0 && setIndex(index - 1);
    setOption("");
  };
  console.log(jobTest[jobTest.length - 1] !== undefined);
  return (
    <div dir="ltr">
      <section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
        <GlobalSnackBar isOpenSnack={snackbar} setIsOpenSnack={setSnackbar} />
        <div className="container mt-10 mx-auto">
          <div className="flex text-2xl font-bold">
            Total Question {`${index + 1} / ${jobTest?.length}`}
          </div>
          <div className="flex text-2xl font-bold">
            Q.
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
                  value={opt?.id}
                  type="radio"
                  onChange={(e) => handleChange(e, jobTest[index]?.id)}
                />
                <label htmlFor={opt?.option} className="ml-2">
                  {" "}
                  {opt?.option}
                </label>
              </div>
            ))}
          </form>
          <div className="mt-4">
            <button
              disabled={index >= jobTest?.length + 1}
              onClick={prevQuestion}
              className={`btn ${
                index === 0 ? "bg-gray-600" : "bg-emerald-600"
              } ${
                index === 0 ? "hover:bg-gray-600" : "hover:bg-emerald-700"
              } hover:border-emerald-700 text-white rounded-md`}
            >
              Previous
            </button>
            <button
              disabled={index >= jobTest?.length - 1}
              onClick={nextQuestion}
              className={` ml-2 btn ${
                index >= jobTest?.length - 1 ? "bg-gray-600" : "bg-emerald-600"
              } ${
                index >= jobTest?.length - 1
                  ? "hover:bg-gray-600"
                  : "hover:bg-emerald-700"
              }  text-white rounded-md`}
            >
              Next
            </button>
          </div>
          <div className="flex justify-end">
            {index >= jobTest?.length - 1 && (
              <button className="btn bg-emerald-600 text-white rounded-md">
                End Test
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
