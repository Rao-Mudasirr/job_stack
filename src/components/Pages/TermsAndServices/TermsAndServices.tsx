import React from "react";
import { Link } from "react-router-dom";

export function jobMenuFunction(divToBeClickedOn, theDIvToBeShown) {
   divToBeClickedOn.classList.toggle("open");
   var isOpen = theDIvToBeShown;
   if (isOpen.style.display === "none") {
     isOpen.style.display = "block";
   } else {
     isOpen.style.display = "none";
   }
 }
const TermsAndServices = () => {
  return (
    <div dir="ltr">
      <section className="relative table w-full py-36">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
              Terms & Services
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/" replace={true}>Jobstack</Link>
            </li>
            <li
              className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Terms & Services
            </li>
          </ul>
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
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <h5 className="text-xl font-medium mb-4">Introduction :</h5>
                <p className="text-slate-400">
                  It seems that only fragments of the original text remain in
                  the Lorem Ipsum texts used today. One may speculate that over
                  the course of time certain letters were added or deleted at
                  various positions within the text.
                </p>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  User Agreements :
                </h5>
                <p className="text-slate-400">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have <b className="text-danger-600">originated</b> in
                  the 16th century. Lorem Ipsum is{" "}
                  <b className="text-danger-600">composed</b> in a pseudo-Latin
                  language which more or less{" "}
                  <b className="text-danger-600">corresponds</b> to 'proper'
                  Latin. It contains a series of real Latin words. This ancient
                  dummy text is also{" "}
                  <b className="text-danger-600">incomprehensible</b>, but it
                  imitates the rhythm of most European languages in Latin
                  script. The <b className="text-danger-600">advantage</b> of
                  its Latin origin and the relative{" "}
                  <b className="text-danger-600">meaninglessness</b> of Lorum
                  Ipsum is that the text does not attract attention to itself or
                  distract the viewer's{" "}
                  <b className="text-danger-600">attention</b> from the layout.
                </p>
                <p className="text-slate-400 mt-3">
                  There is now an <b className="text-danger-600">abundance</b>{" "}
                  of readable dummy texts. These are usually used when a text is{" "}
                  <b className="text-danger-600">required purely</b> to fill a
                  space. These alternatives to the classic Lorem Ipsum texts are
                  often amusing and tell short, funny or{" "}
                  <b className="text-danger-600">nonsensical</b> stories.
                </p>
                <p className="text-slate-400 mt-3">
                  It seems that only{" "}
                  <b className="text-danger-600">fragments</b> of the original
                  text remain in the Lorem Ipsum texts used today. One may
                  speculate that over the course of time certain letters were
                  added or deleted at various positions within the text.
                </p>

                <h5 className="text-xl font-medium mb-4 mt-8">
                  Restrictions :
                </h5>
                <p className="text-slate-400">
                  You are specifically restricted from all of the following :
                </p>
                <ul className="list-none text-slate-400 mt-3">
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Create your own skin to match your brand
                  </li>
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="flex mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 align-middle ltr:mr-2 rtl:ml-2"></i>
                    Create your own skin to match your brand
                  </li>
                </ul>

                <h5 className="text-xl font-medium mt-8">
                  Users Question & Answer :
                </h5>

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

                <div className="mt-6">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndServices;
