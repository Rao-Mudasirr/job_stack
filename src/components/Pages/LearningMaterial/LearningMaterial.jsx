import React from "react";

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
              Learning Material
            </h3>
          </div>
        </div>
{/* 
        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
              <a href="index.html">Jobstack</a>
            </li>
            <li
              className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Learning Material
            </li>
          </ul>
        </div> */}
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
              {/* <button
                className={`flex item-right btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto`}
              >
                Learning Material
              </button>
              <div
                className={`flex item-center justify-center btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto`}
              >
                Apply Now
              </div> */}
              <div className="mb-6 mt-2 justify-end">
                  <a
                    href="#"
                    className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md justify-end"
                  >
                    Attempt Test
                  </a>
                </div>
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                {/* <h5 className="text-xl font-medium mb-4">Introduction :</h5>

                <h5 className="text-xl font-medium mt-8">
                  Users Question & Answer :
                </h5> */}

                <div
                  id="accordion-collapse"
                  data-accordion="collapse"
                  className="mt-6"
                >
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
                            document.getElementById("accordion-collapse-body-1")
                          )
                        }
                      >
                        <span>How does it work ?</span>
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
                      id="accordion-collapse-body-1"
                      style={{ display: "none" }}
                      aria-labelledby="accordion-collapse-heading-1"
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
                        <span>Do I need a designer to use Jobstack ?</span>
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

                  <div className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                    <h2
                      className="text-base font-medium"
                      id="accordion-collapse-heading-3"
                    >
                      <button
                        type="button"
                        className="flex justify-between items-center p-5 w-full font-medium text-left"
                        data-accordion-target="#accordion-collapse-body-3"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-3"
                        id="3rdAccordion"
                        onClick={() =>
                          jobMenuFunction(
                            document.getElementById("3rdAccordion"),
                            document.getElementById("accordion-collapse-body-3")
                          )
                        }
                      >
                        <span>What do I need to do to start selling ?</span>
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
                      id="accordion-collapse-body-3"
                      style={{ display: "none" }}
                      aria-labelledby="accordion-collapse-heading-3"
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

                  <div className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                    <h2
                      className="text-base font-medium"
                      id="accordion-collapse-heading-4"
                    >
                      <button
                        type="button"
                        className="flex justify-between items-center p-5 w-full font-medium text-left"
                        data-accordion-target="#accordion-collapse-body-4"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-4"
                        id="4thAccordion"
                        onClick={() =>
                          jobMenuFunction(
                            document.getElementById("4thAccordion"),
                            document.getElementById("accordion-collapse-body-4")
                          )
                        }
                      >
                        <span>What happens when I receive an order ?</span>
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
                      id="accordion-collapse-body-4"
                      style={{ display: "none" }}
                      aria-labelledby="accordion-collapse-heading-4"
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

                {/* <div className="mt-6">
                  <a
                    href="#"
                    className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                  >
                    Accept
                  </a>
                  <a
                    href="#"
                    className="btn bg-transparent hover:bg-emerald-600 border border-emerald-600 text-emerald-600 hover:text-white rounded-md ml-2"
                  >
                    Decline
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningMaterial;
