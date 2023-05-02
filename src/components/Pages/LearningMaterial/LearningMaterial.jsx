import React from "react";

export const AssessmentMockData = [
  {
    title: "What is care Library",
    content: [
      {
        id: "1",
        name: "U-ID:",
        created_at: "2023-04-07T05:30:25",
      },
      {
        id: "2",
        name: "USER:",
        created_at: "2023-04-07T05:30:25",
      },
      {
        id: "3",
        name: "NI Number:",
        created_at: "2023-04-07T05:30:25",
      },
      {
        id: "4",
        name: "A-ID:",
        created_at: "2023-04-07T05:30:25",
      },
    ],
  },
];

export function jobMenuFunction(divToBeClickedOn, theDIvToBeShown) {
  divToBeClickedOn.classList.toggle("open");
  var isOpen = theDIvToBeShown;
  if (isOpen.style.display === "none") {
    isOpen.style.display = "block";
  } else {
    isOpen.style.display = "none";
  }
}
const LearningMaterial = () => {
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
                  <a
                    href="#"
                    className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md justify-end"
                  >
                    Attempt Test
                  </a>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <div
                  id="accordion-collapse"
                  data-accordion="collapse"
                  className="mt-6"
                >
                  {AssessmentMockData.map((data) => {
                    return (
                      <div className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                        <h2
                          className="text-base font-medium"
                          id="accordion-collapse-heading-2"
                        >
                          <button
                            type="button"
                            className="flex justify-between items-center p-5 w-full font-medium text-left"
                            data-accordion-target="#accordion-collapse-body-2"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-1"
                            id="firstAccordion"
                            onClick={() =>
                              jobMenuFunction(
                                document.getElementById("firstAccordion"),
                                document.getElementById(
                                  "accordion-collapse-body-1"
                                )
                              )
                            }
                          >
                            <div className="flex items-center w-full text-lg text-left">
                              <div
                                className="mr-2"
                                style={{
                                  padding: "12px 10px",
                                  backgroundColor: "#D9D9D9",
                                  borderRadius: "50px",
                                }}
                              >
                                <img
                                  src="assets/images//assessment//assessmentvector.png"
                                  className=""
                                  alt=""
                                  style={{ height: "20px", width: "25px" }}
                                />
                              </div>
                              <spin>{data.title}</spin>
                            </div>
                            <svg
                              data-accordion-icon
                              className="w-4 h-4 shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </h2>
                        {data.content.map((content) => (
                          <div
                            id="accordion-collapse-body-1"
                            style={{ display: "none" }}
                            aria-labelledby="accordion-collapse-heading-1"
                          >
                            <div className="p-5">
                              <p className="text-slate-400 dark:text-gray-400">
                                {content.name}
                              </p>
                              <p className="text-slate-400 dark:text-gray-400">
                                {content.created_at}
                              </p>
                              {/* <div dangerouslySetInnerHTML={{ __html: content.c }} /> */}

                              <p className="text-slate-400 dark:text-gray-400">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form.
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                  <div className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                    <h2
                      className="text-base font-medium"
                      id="accordion-collapse-heading-2"
                    >
                      <button
                        type="button"
                        className="flex justify-between items-center p-5 w-full font-medium text-left"
                        data-accordion-target="#accordion-collapse-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-2"
                        id="2ndAccordion"
                        onClick={() =>
                          jobMenuFunction(
                            document.getElementById("2ndAccordion"),
                            document.getElementById("accordion-collapse-body-2")
                          )
                        }
                      >
                        <div className="flex items-center w-full text-lg text-left">
                          <div
                            className="mr-2"
                            style={{
                              padding: "12px 10px",
                              backgroundColor: "#D9D9D9",
                              borderRadius: "50px",
                            }}
                          >
                            <img
                              src="assets/images//assessment//assessmentvector.png"
                              className=""
                              alt=""
                              style={{ height: "20px", width: "25px" }}
                            />
                          </div>
                          <spin>What is care Library</spin>
                        </div>
                        <svg
                          data-accordion-icon
                          className="w-4 h-4 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-body-2"
                      style={{ display: "none" }}
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </div>
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
