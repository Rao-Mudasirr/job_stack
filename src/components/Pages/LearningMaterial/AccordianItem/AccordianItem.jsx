import React, { useState } from 'react'

export const AccordianItem = ({ accordianItemData }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
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
                            setOpen(!open)
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
                            <spin>{accordianItemData?.title}</spin>
                        </div>
                        <svg
                            data-accordion-icon
                            className={`w-4 h-4 shrink-0 transition-[transform] ease-linear duration-900 ${open ? "rotate-180" : "rotate-0"}`}
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
                    className={`transition-[max-height] ease duration-1100 ${open ? "max-h-screen" : 'max-h-0 '} `}
                    aria-labelledby="accordion-collapse-heading-2"
                >
                    <div className="p-5">
                        <div
                            className="[&>ul]:list-disc [&>ul]:my-2 [&>ul]:ml-8"
                            dangerouslySetInnerHTML={{ __html: accordianItemData?.content }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
