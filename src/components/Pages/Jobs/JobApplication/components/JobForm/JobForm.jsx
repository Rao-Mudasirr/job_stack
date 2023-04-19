import React, { useState, useEffect, useLayoutEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import SelfIdentificationForm from "../SelfIdentificationForm/SelfIdentificationForm";
import IntroductionVideo from "../../../JobDetails/components/IntroductionVideo/IntroductionVideo";
import VoluntaryDisability from "../VoluntaryDisability/VoluntaryDisability";
import axios from "axios";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("email is required"),
  phone_no: Yup.string().required("phone_no is required"),
  resume: Yup.mixed().required(" resume is Required"),
  cover_letter: Yup.mixed().required("Cover Letter is required"),
  education: Yup.array().of(
    Yup.object().shape({
      schoolName: Yup.string().required("School name is required"),
      degree: Yup.string().required("Degree is required"),
      cgpa: Yup.number().required("CGPA is required"),
      discipline: Yup.string().required("Discipline is required"),
    })
  ),
  linkedin: Yup.string().required("Please enter a valid URL"),
  website: Yup.string().required("Please enter a valid URL"),
  github: Yup.string().required("Please enter a valid URL"),
  total_experience: Yup.string()
    .matches(/^\d+$/, "Please enter a valid number")
    .min(0, "Years of experience cannot be negative")
    .max(100, "Please enter a valid number")
    .required("This field is required"),
  operationsCoordinatorExperince: Yup.string().required(
    "This field is required"
  ),
  gender: Yup.string().required("gender is required"),
  hispanic: Yup.mixed().required(" hispanic is Required"),
  veteran_status: Yup.mixed().required(" veteran_status status is Required"),
  disability: Yup.string().required(" status is required"),
  reference_details: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name is required"),
      compname: Yup.string().required("Company Name is required"),
      position: Yup.string().required("Position is required"),
      // contactNumber: Yup.string()
      //   .matches(/^\d+$/, "Contact number should be a number")
      //   .required("Contact number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    })
  ),
  education: Yup.array().of(
    Yup.object().shape({
      schoolName: Yup.string().required("School name is required"),
      degree: Yup.string().required("Degree is required"),
      cgpa: Yup.number().required("CGPA is required"),
      discipline: Yup.string().required("Discipline is required"),
      attachdocument: Yup.string().required("Extra la is required"),
    })
  ),
  experiences: Yup.array().of(
    Yup.object().shape({
      company: Yup.string().required("Company name is required"),
      jobTitle: Yup.string().required("Job title is required"),
      startDate: Yup.date().required("Start date is required"),
      endDate: Yup.date().required("End date is required"),
      experienceLetter: Yup.string().required("Experience letter is required"),
    })
  ),
});

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "nonbinary", label: "Non-binary" },
];

const hispanicOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const veteran_statusOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unknown", label: "Unknown" },
];

const disabilityOptions = [
  { value: "disabled", label: "Disabled" },
  { value: "not-disabled", label: "Not disabled" },
  { value: "unknown", label: "Unknown" },
];

const JobForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // logs the value of first_name
    resetForm();
  };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const tokenCheck = localStorage.getItem("token");
  const [profilename, setProfileName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before making the API call
      try {
        const response = await axios.get(
          "https://jobs.orcaloholding.co.uk/api/my-profile",
          {
            headers: {
              Authorization: `Bearer ${tokenCheck}`,
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data);
        setProfileName(response?.data?.data?.user?.first_name);
        setLoading(false);
        console.log(
          response?.data?.data?.user?.reference_details.map(
            (item, index) => item.name
          )
        );
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data?.data?.user?.first_name);
  console.log(error);

  let initialValues = {
    first_name: profilename,
    last_name: data?.data?.user?.last_name,
    email: data?.data?.user?.email,
    phone_no: data?.data?.user?.phone_no,
    resume: data?.data?.user?.resume,
    cover_letter: data?.data?.user?.cover_letter,
    linkedin: data?.data?.user?.linkedin,
    website: data?.data?.user?.website,
    github: data?.data?.user?.github,
    total_experience: data?.data?.user?.total_experience,
    operationsCoordinatorExperince: "",
    gender: data?.data?.user?.gender,
    disability: data?.data?.user?.disability,
    hispanic: data?.data?.user?.hispanic,
    veteran_status: data?.data?.user?.veteran_status,
    reference_details: [
      {
        name: data?.data?.user?.reference_details.name,
        compname: "",
        position: "",
        contactNumber: "",
        email: "",
      },
    ],
    education: [
      {
        schoolName: "",
        degree: "",
        discipline: "",
        cgpa: "",
        attachdocument: "",
      },
    ],
    experiences: [
      {
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        experienceLetter: "",
      },
    ],
  };
  console.log(initialValues);

  return (
    <>
    {loading ? (
  <div className="h-48 flex items-center justify-center">
    <span className="ml-2 text-blue-500 font-bold text-xl">
      Loading<span className="animate-pulse">...</span>
    </span>
  </div>
) : error ? (
  <div>{error}</div>
) : (
  <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form className="bg-red-50 p-7 ">
                  <div className="py-5 mb-2 flex justify-between">
                    {" "}
                    <h4>Apply for this Job</h4>
                    <p>
                      <span className="text-red-500"> *</span> Required
                    </p>
                  </div>
                  <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block  font-semibold  mb-2"
                        htmlFor="first_name"
                      >
                        First Name <span className="text-red-500"> *</span>
                      </label>
                      <Field
                        id="first_name"
                        name="first_name"
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.first_name &&
                          touched.first_name &&
                          "border-red-500"
                        }`}
                      />
                      {errors.first_name && touched.first_name && (
                        <p className="text-red-500 text-xs italic">
                          {errors.first_name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block  font-semibold  mb-2"
                        htmlFor="last_name"
                      >
                        Last Name <span className="text-red-500"> *</span>
                      </label>
                      <Field
                        id="last_name"
                        name="last_name"
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.last_name &&
                          touched.last_name &&
                          "border-red-500"
                        }`}
                      />
                      {errors.last_name && touched.last_name && (
                        <p className="text-red-500 text-xs italic">
                          {errors.last_name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label
                        className="block  font-semibold  mb-2"
                        htmlFor="email"
                      >
                        email <span className="text-red-500"> *</span>
                      </label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.email && touched.email && "border-red-500"
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-500 text-xs italic">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block  font-semibold  mb-2"
                        htmlFor="phone_no"
                      >
                        phone_no <span className="text-red-500"> *</span>
                      </label>
                      <Field
                        id="phone_no"
                        name="phone_no"
                        type="tel"
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.phone_no &&
                          touched.phone_no &&
                          "border-red-500"
                        }`}
                      />
                      {errors.phone_no && touched.phone_no && (
                        <p className="text-red-500 text-xs italic">
                          {errors.phone_no}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label
                        className="block  font-semibold  mb-2"
                        htmlFor="resume"
                      >
                        resume/CV <span className="text-red-500"> *</span>
                      </label>
                      <Field
                        id="resume"
                        name="resume"
                        type="file"
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.resume && touched.resume && "border-red-500"
                        }`}
                      />
                      {errors.resume && touched.resume && (
                        <p className="text-red-500 text-xs italic">
                          {errors.resume}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block  font-semibold  mb-2"
                        htmlFor="cover_letter"
                      >
                        Cover Letter<span className="text-red-500"> *</span>
                      </label>
                      <Field
                        id="cover_letter"
                        name="cover_letter"
                        type="file"
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.cover_letter &&
                          touched.cover_letter &&
                          "border-red-500"
                        }`}
                      />
                      {errors.cover_letter && touched.cover_letter && (
                        <p className="text-red-500 text-xs italic">
                          {errors.cover_letter}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 

                                     ===========================================================
                                                        Education Details start
                                     ===========================================================




*/}
                  <div className="border-t border-gray-400  mt-5 mb-5"></div>
                  <div className="mb-8">
                    <h3 className="mb-6 text-2xl leading-normal font-semibold">
                      Education
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-600">
                      Add your education details here.
                    </p>
                    <FieldArray name="education">
                      {({ push, remove }) => (
                        <>
                          {values.education &&
                            values.education.length > 0 &&
                            values.education.map((edu, index) => (
                              <div
                                key={index}
                                className="grid grid-cols-5 gap-4 mt-4"
                              >
                                <div className="col-span-4 md:col-span-1">
                                  <label
                                    className="block  font-semibold  mb-2"
                                    htmlFor={`education.${index}.schoolName`}
                                  >
                                    School Name{" "}
                                    <span className="text-red-500"> *</span>
                                  </label>
                                  <Field
                                    id={`education.${index}.schoolName`}
                                    name={`education.${index}.schoolName`}
                                    type="text"
                                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                      errors.education &&
                                      errors.education[index] &&
                                      errors.education[index].schoolName &&
                                      touched.education &&
                                      touched.education[index] &&
                                      touched.education[index].schoolName &&
                                      "border-red-500"
                                    }`}
                                  />
                                  {errors.education &&
                                    errors.education[index] &&
                                    errors.education[index].schoolName &&
                                    touched.education &&
                                    touched.education[index] &&
                                    touched.education[index].schoolName && (
                                      <p className="text-red-500 text-xs italic">
                                        {errors.education[index].schoolName}
                                      </p>
                                    )}
                                </div>

                                <div className="col-span-4 md:col-span-1">
                                  <label
                                    className="block  font-semibold  mb-2"
                                    htmlFor={`education.${index}.degree`}
                                  >
                                    Degree{" "}
                                    <span className="text-red-500"> *</span>
                                  </label>
                                  <Field
                                    as="select"
                                    id={`education.${index}.degree`}
                                    name={`education.${index}.degree`}
                                    // type="text"
                                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                      errors.education &&
                                      errors.education[index] &&
                                      errors.education[index].degree &&
                                      touched.education &&
                                      touched.education[index] &&
                                      touched.education[index].degree &&
                                      "border-red-500"
                                    }`}
                                  >
                                    <option value="">Select an option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </Field>
                                  {errors.education &&
                                    errors.education[index] &&
                                    errors.education[index].degree &&
                                    touched.education &&
                                    touched.education[index] &&
                                    touched.education[index].degree && (
                                      <p className="text-red-500 text-xs italic">
                                        {errors.education[index].degree}
                                      </p>
                                    )}
                                </div>

                                <div className="col-span-4 md:col-span-1">
                                  <label
                                    className="block  font-semibold  mb-2"
                                    htmlFor={`education.${index}.discipline`}
                                  >
                                    Discipline{" "}
                                    <span className="text-red-500"> *</span>
                                  </label>
                                  <Field
                                    as="select"
                                    id={`education.${index}.discipline`}
                                    name={`education.${index}.discipline`}
                                    // type="text"
                                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                      errors.education &&
                                      errors.education[index] &&
                                      errors.education[index].discipline &&
                                      touched.education &&
                                      touched.education[index] &&
                                      touched.education[index].discipline &&
                                      "border-red-500"
                                    }`}
                                  >
                                    <option value="">Select an option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </Field>

                                  {errors.education &&
                                    errors.education[index] &&
                                    errors.education[index].discipline &&
                                    touched.education &&
                                    touched.education[index] &&
                                    touched.education[index].discipline && (
                                      <p className="text-red-500 text-xs italic">
                                        {errors.education[index].discipline}
                                      </p>
                                    )}
                                </div>
                                <div className="col-span-4 md:col-span-1">
                                  <label
                                    className="block  font-semibold  mb-2"
                                    htmlFor={`education.${index}.cgpa`}
                                  >
                                    CGPA{" "}
                                    <span className="text-red-500"> *</span>
                                  </label>
                                  <Field
                                    id={`education.${index}.cgpa`}
                                    name={`education.${index}.cgpa`}
                                    type="number"
                                    step="0.01"
                                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                      errors.education &&
                                      errors.education[index] &&
                                      errors.education[index].cgpa &&
                                      touched.education &&
                                      touched.education[index] &&
                                      touched.education[index].cgpa &&
                                      "border-red-500"
                                    }`}
                                  />
                                  {errors.education &&
                                    errors.education[index] &&
                                    errors.education[index].cgpa &&
                                    touched.education &&
                                    touched.education[index] &&
                                    touched.education[index].cgpa && (
                                      <p className="text-red-500 text-xs italic">
                                        {errors.education[index].cgpa}
                                      </p>
                                    )}
                                </div>
                                <div className="col-span-4 md:col-span-1">
                                  <label
                                    className="block  font-semibold mb-2"
                                    htmlFor={`education.${index}.attachdocument`}
                                  >
                                    Attach Document
                                    <span className="text-red-500"> *</span>
                                  </label>
                                  <Field
                                    id={`education.${index}.attachdocument`}
                                    name={`education.${index}.attachdocument`}
                                    type="file"
                                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                      errors.education &&
                                      errors.education[index] &&
                                      errors.education[index].attachdocument &&
                                      touched.education &&
                                      touched.education[index] &&
                                      touched.education[index].attachdocument &&
                                      "border-red-500"
                                    }`}
                                  />
                                  {errors.education &&
                                    errors.education[index] &&
                                    errors.education[index].attachdocument &&
                                    touched.education &&
                                    touched.education[index] &&
                                    touched.education[index].attachdocument && (
                                      <p className="text-red-500 text-xs italic">
                                        {errors.education[index].attachdocument}
                                      </p>
                                    )}
                                </div>

                                <div className="col-span-1 md:col-span-2 flex items-center">
                                  {values.education.length > 1 && (
                                    <button
                                      type="button"
                                      className="py-2  rounded-md bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white mr-2"
                                      onClick={() => remove(index)}
                                    >
                                      Remove
                                    </button>
                                  )}
                                  {index === values.education.length - 1 && (
                                    <button
                                      type="button"
                                      className="py-2 bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white rounded-md  "
                                      onClick={() =>
                                        push({
                                          schoolName: "",
                                          degree: "",
                                          discipline: "",
                                          cgpa: "",
                                          attachdocument: "",
                                        })
                                      }
                                    >
                                      Add Another education
                                    </button>
                                  )}
                                </div>
                              </div>
                            ))}
                        </>
                      )}
                    </FieldArray>
                  </div>
                  <button
                    // type="submit"
                    className="text-emerald-600 border px-2"
                    // disabled={isSubmitting}
                  >
                    save
                  </button>

                  {/* 

                                     ===========================================================
                                                        Education Details End
                                     ===========================================================




*/}

                  {/* 

                                     ===========================================================
                                                        start professional experience
                                     ===========================================================




*/}

                  <div className="border-t border-gray-400  mt-5 mb-5"></div>
                  <div className="mb-8">
                    <h3 className="mb-6 text-2xl leading-normal font-semibold">
                      Professional Experience
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-600">
                      Add your professional experience here.
                    </p>
                    <FieldArray name="experiences">
                      {({ push, remove }) => (
                        <>
                          {values.experiences.map((experience, index) => (
                            <div
                              key={index}
                              className="grid grid-cols-5 gap-4 mt-4"
                            >
                              <div className="col-span-4 md:col-span-1">
                                <label
                                  className="block  font-semibold  mb-2"
                                  htmlFor={`experiences.${index}.company`}
                                >
                                  Company Name{" "}
                                  <span className="text-red-500"> *</span>
                                </label>
                                <Field
                                  id={`experiences.${index}.company`}
                                  name={`experiences.${index}.company`}
                                  type="text"
                                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    errors.experiences &&
                                    errors.experiences[index] &&
                                    errors.experiences[index].company &&
                                    touched.experiences &&
                                    touched.experiences[index] &&
                                    touched.experiences[index].company &&
                                    "border-red-500"
                                  }`}
                                />
                                {errors.experiences &&
                                  errors.experiences[index] &&
                                  errors.experiences[index].company &&
                                  touched.experiences &&
                                  touched.experiences[index] &&
                                  touched.experiences[index].company && (
                                    <p className="text-red-500 text-xs italic">
                                      {errors.experiences[index].company}
                                    </p>
                                  )}
                              </div>

                              <div className="col-span-4 md:col-span-1">
                                <label
                                  className="block  font-semibold  mb-2"
                                  htmlFor={`experiences.${index}.jobTitle`}
                                >
                                  Job Title{" "}
                                  <span className="text-red-500"> *</span>
                                </label>
                                <Field
                                  id={`experiences.${index}.jobTitle`}
                                  name={`experiences.${index}.jobTitle`}
                                  type="text"
                                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    errors.experiences &&
                                    errors.experiences[index] &&
                                    errors.experiences[index].jobTitle &&
                                    touched.experiences &&
                                    touched.experiences[index] &&
                                    touched.experiences[index].jobTitle &&
                                    "border-red-500"
                                  }`}
                                />
                                {errors.experiences &&
                                  errors.experiences[index] &&
                                  errors.experiences[index].jobTitle &&
                                  touched.experiences &&
                                  touched.experiences[index] &&
                                  touched.experiences[index].jobTitle && (
                                    <p className="text-red-500 text-xs italic">
                                      {errors.experiences[index].jobTitle}
                                    </p>
                                  )}
                              </div>

                              <div className="col-span-4 md:col-span-1">
                                <label
                                  className="block  font-semibold  mb-2"
                                  htmlFor={`experiences.${index}.startDate`}
                                >
                                  Start Date{" "}
                                  <span className="text-red-500"> *</span>
                                </label>
                                <Field
                                  id={`experiences.${index}.startDate`}
                                  name={`experiences.${index}.startDate`}
                                  type="date"
                                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    errors.experiences &&
                                    errors.experiences[index] &&
                                    errors.experiences[index].startDate &&
                                    touched.experiences &&
                                    touched.experiences[index] &&
                                    touched.experiences[index].startDate &&
                                    "border-red-500"
                                  }`}
                                />
                                {errors.experiences &&
                                  errors.experiences[index] &&
                                  errors.experiences[index].startDate &&
                                  touched.experiences &&
                                  touched.experiences[index] &&
                                  touched.experiences[index].startDate && (
                                    <p className="text-red-500 text-xs italic">
                                      {errors.experiences[index].startDate}
                                    </p>
                                  )}
                              </div>

                              <div className="col-span-4 md:col-span-1">
                                <label
                                  className="block  font-semibold  mb-2"
                                  htmlFor={`experiences.${index}.endDate`}
                                >
                                  End Date{" "}
                                  <span className="text-red-500"> *</span>
                                </label>
                                <Field
                                  id={`experiences.${index}.endDate`}
                                  name={`experiences.${index}.endDate`}
                                  type="date"
                                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    errors.experiences &&
                                    errors.experiences[index] &&
                                    errors.experiences[index].endDate &&
                                    touched.experiences &&
                                    touched.experiences[index] &&
                                    touched.experiences[index].endDate &&
                                    "border-red-500"
                                  }`}
                                />
                                {errors.experiences &&
                                  errors.experiences[index] &&
                                  errors.experiences[index].endDate &&
                                  touched.experiences &&
                                  touched.experiences[index] &&
                                  touched.experiences[index].endDate && (
                                    <p className="text-red-500 text-xs italic">
                                      {errors.experiences[index].endDate}
                                    </p>
                                  )}
                              </div>
                              <div className="col-span-4 md:col-span-1">
                                <label
                                  className="block  font-semibold  mb-2"
                                  htmlFor={`experiences.${index}.experienceLetter`}
                                >
                                  Experience Letter
                                  <span className="text-red-500"> *</span>
                                </label>
                                <Field
                                  id={`experiences.${index}.experienceLetter`}
                                  name={`experiences.${index}.experienceLetter`}
                                  type="file"
                                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    errors.experiences &&
                                    errors.experiences[index] &&
                                    errors.experiences[index]
                                      .experienceLetter &&
                                    touched.experiences &&
                                    touched.experiences[index] &&
                                    touched.experiences[index]
                                      .experienceLetter &&
                                    "border-red-500"
                                  }`}
                                />
                                {errors.experiences &&
                                  errors.experiences[index] &&
                                  errors.experiences[index].experienceLetter &&
                                  touched.experiences &&
                                  touched.experiences[index] &&
                                  touched.experiences[index]
                                    .experienceLetter && (
                                    <p className="text-red-500 text-xs italic">
                                      {
                                        errors.experiences[index]
                                          .experienceLetter
                                      }
                                    </p>
                                  )}
                              </div>

                              <div className="col-span-1 md:col-span-2 flex items-center">
                                {values.experiences.length > 1 && (
                                  <button
                                    type="button"
                                    className="py-2  rounded-md bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white mr-2"
                                    onClick={() => remove(index)}
                                  >
                                    Remove
                                  </button>
                                )}
                                {index === values.experiences.length - 1 && (
                                  <button
                                    type="button"
                                    className="py-2 bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white rounded-md  "
                                    onClick={() =>
                                      push({
                                        company: "",
                                        jobTitle: "",
                                        startDate: "",
                                        endDate: "",
                                        experienceLetter: "",
                                      })
                                    }
                                  >
                                    Add Another experiences
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </FieldArray>
                  </div>
                  <button
                    type="submit"
                    className="text-emerald-600 border px-2"
                    disabled={isSubmitting}
                  >
                    save
                  </button>
                  <div className="border-t border-gray-400  mt-5 mb-5"></div>

                  {/* 

                                     ===========================================================
                                                        End professional experience
                                     ===========================================================




*/}

                  {/* 

                                     ===========================================================
                                                           job reference start
                                     ===========================================================




*/}
                  <div className="mb-8">
                    <h3 className="mb-6 text-2xl leading-normal font-semibold">
                      Job reference_details
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-600">
                      Add your job reference_details here.
                    </p>
                    <FieldArray name="reference_details">
                      {({ push, remove }) => (
                        <>
                          {values.reference_details.map((ref, index) => (
                            <div
                              key={index}
                              className="grid grid-cols-5 gap-4 mt-4"
                            >
                              <div className="col-span-4 md:col-span-1">
                                <label
                                  className="block  font-semibold  mb-2"
                                  htmlFor={`reference_details.${index}.name`}
                                >
                                  Name <span className="text-red-500"> *</span>
                                </label>
                                <Field
                                  id={`reference_details.${index}.name`}
                                  name={`reference_details.${index}.name`}
                                  type="text"
                                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    errors.reference_details &&
                                    errors.reference_details[index] &&
                                    errors.reference_details[index].name &&
                                    touched.reference_details &&
                                    touched.reference_details[index] &&
                                    touched.reference_details[index].name &&
                                    "border-red-500"
                                  }`}
                                />
                                {errors.reference_details &&
                                  errors.reference_details[index] &&
                                  errors.reference_details[index].name &&
                                  touched.reference_details &&
                                  touched.reference_details[index] &&
                                  touched.reference_details[index].name && (
                                    <p className="text-red-500 text-xs italic">
                                      {errors.reference_details[index].name}
                                    </p>
                                  )}
                              </div>

                              <div className="col-span-4 md:col-span-1">
                                <label
                                  className="block  font-semibold  mb-2"
                                  htmlFor={`reference_details.${index}.compname`}
                                >
                                  Company Name{" "}
                                  <span className="text-red-500"> *</span>
                                </label>
                                <Field
                                  id={`reference_details.${index}.compname`}
                                  name={`reference_details.${index}.compname`}
                                  type="text"
                                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    errors.reference_details &&
                                    errors.reference_details[index] &&
                                    errors.reference_details[index].compname &&
                                    touched.reference_details &&
                                    touched.reference_details[index] &&
                                    touched.reference_details[index].compname &&
                                    "border-red-500"
                                  }`}
                                />
                                {errors.reference_details &&
                                  errors.reference_details[index] &&
                                  errors.reference_details[index].compname &&
                                  touched.reference_details &&
                                  touched.reference_details[index] &&
                                  touched.reference_details[index].compname && (
                                    <p className="text-red-500 text-xs italic">
                                      {errors.reference_details[index].compname}
                                    </p>
                                  )}
                              </div>
                              <div className="col-span-4 md:col-span-1">
                                <label
                                  className="block  font-semibold  mb-2"
                                  htmlFor={`reference_details.${index}.position`}
                                >
                                  Position{" "}
                                  <span className="text-red-500"> *</span>
                                </label>
                                <Field
                                  id={`reference_details.${index}.position`}
                                  name={`reference_details.${index}.position`}
                                  type="text"
                                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    errors.reference_details &&
                                    errors.reference_details[index] &&
                                    errors.reference_details[index].position &&
                                    touched.reference_details &&
                                    touched.reference_details[index] &&
                                    touched.reference_details[index].position &&
                                    "border-red-500"
                                  }`}
                                />
                                {errors.reference_details &&
                                  errors.reference_details[index] &&
                                  errors.reference_details[index].position &&
                                  touched.reference_details &&
                                  touched.reference_details[index] &&
                                  touched.reference_details[index].position && (
                                    <p className="text-red-500 text-xs italic">
                                      {errors.reference_details[index].position}
                                    </p>
                                  )}
                              </div>
                              {/* <div className="col-span-4 md:col-span-1">
                                <label
                                  className="block  font-semibold  mb-2"
                                  htmlFor={`reference_details.${index}.contactNumber`}
                                >
                                  Contact Number{" "}
                                  <span className="text-red-500"> *</span>
                                </label>
                                <Field
                                  id={`reference_details.${index}.contactNumber`}
                                  name={`reference_details.${index}.contactNumber`}
                                  type="text"
                                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    errors.reference_details &&
                                    errors.reference_details[index] &&
                                    errors.reference_details[index].contactNumber &&
                                    touched.reference_details &&
                                    touched.reference_details[index] &&
                                    touched.reference_details[index].contactNumber &&
                                    "border-red-500"
                                  }`}
                                />
                                {errors.reference_details &&
                                  errors.reference_details[index] &&
                                  errors.reference_details[index].contactNumber &&
                                  touched.reference_details &&
                                  touched.reference_details[index] &&
                                  touched.reference_details[index].contactNumber && (
                                    <p className="text-red-500 text-xs italic">
                                      {errors.reference_details[index].contactNumber}
                                    </p>
                                  )}
                              </div> */}

                              <div className="col-span-4 md:col-span-1">
                                <label
                                  className="block  font-semibold  mb-2"
                                  htmlFor={`reference_details.${index}.email`}
                                >
                                  Email <span className="text-red-500"> *</span>
                                </label>
                                <Field
                                  id={`reference_details.${index}.email`}
                                  name={`reference_details.${index}.email`}
                                  type="text"
                                  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    errors.reference_details &&
                                    errors.reference_details[index] &&
                                    errors.reference_details[index].email &&
                                    touched.reference_details &&
                                    touched.reference_details[index] &&
                                    touched.reference_details[index].email &&
                                    "border-red-500"
                                  }`}
                                />
                                {errors.reference_details &&
                                  errors.reference_details[index] &&
                                  errors.reference_details[index].email &&
                                  touched.reference_details &&
                                  touched.reference_details[index] &&
                                  touched.reference_details[index].email && (
                                    <p className="text-red-500 text-xs italic">
                                      {errors.reference_details[index].email}
                                    </p>
                                  )}
                              </div>
                              <div className="col-span-1 md:col-span-2 flex items-center">
                                {values.reference_details.length > 1 && (
                                  <button
                                    type="button"
                                    className="py-2  rounded-md bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white mr-2"
                                    onClick={() => remove(index)}
                                  >
                                    Remove
                                  </button>
                                )}
                                {index ===
                                  values.reference_details.length - 1 && (
                                  <button
                                    type="button"
                                    className="py-2 bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white rounded-md  "
                                    onClick={() =>
                                      push({
                                        name: "",
                                        compname: "",

                                        position: "",

                                        email: "",
                                      })
                                    }
                                  >
                                    Add Another Reference
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </FieldArray>
                  </div>
                  <button
                    // type="submit"
                    className="text-emerald-600 border px-2"
                    // disabled={isSubmitting}
                  >
                    save
                  </button>

                  {/*

                                       =============================================================
                                                              job Reference End 
                                       =============================================================

*/}

                  <div className="border-t border-gray-400  mt-5 mb-5"></div>

                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block  font-semibold  mb-2"
                    >
                      {" "}
                      LinkedIn Profile
                    </label>

                    <Field
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.first_name &&
                        touched.first_name &&
                        "border-red-500"
                      }`}
                    />
                    {errors.linkedin && touched.linkedin && (
                      <p className="text-red-500 text-xs italic">
                        {errors.linkedin}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="website" className=" font-semibold  mb-2">
                      website
                    </label>

                    <Field
                      id="website"
                      name="website"
                      type="url"
                      className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.website && touched.website && "border-red-500"
                      }`}
                    />
                    {errors.website && touched.website && (
                      <p className="text-red-500 text-xs italic">
                        {errors.website}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="github" className=" font-semibold  mb-2">
                      Git Hub
                    </label>

                    <Field
                      id="github"
                      name="github"
                      type="url"
                      className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.github && touched.github && "border-red-500"
                      }`}
                    />
                    {errors.github && touched.github && (
                      <p className="text-red-500 text-xs italic">
                        {errors.website}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block  font-semibold  mb-2"
                      htmlFor="total_experience"
                    >
                      How many years of experience do you have?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Field
                      id="total_experience"
                      name="total_experience"
                      // type="string"
                      className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.total_experience &&
                        touched.total_experience &&
                        "border-red-500"
                      }`}
                    />
                    {errors.total_experience && touched.total_experience && (
                      <p className="text-red-500 text-xs italic">
                        {errors.total_experience}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block  font-semibold  mb-2"
                      htmlFor="operationsExperience"
                    >
                      Do you have strong experience as Operations Coordinator?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Field
                      as="select"
                      id="operationsCoordinatorExperince"
                      name="operationsCoordinatorExperince"
                      className={`form-select form-input border border-slate-100 dark:border-slate-800 mt-1 ${
                        errors.operationsCoordinatorExperince &&
                        touched.operationsCoordinatorExperince &&
                        "border-red-500"
                      }`}
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Field>
                    {errors.operationsCoordinatorExperince &&
                      touched.operationsCoordinatorExperince && (
                        <p className="text-red-500 text-xs italic">
                          {errors.operationsCoordinatorExperince}
                        </p>
                      )}
                  </div>
                  <div className="border-t border-gray-400  mt-5 mb-5"></div>
                  <div className="mt-10">
                    <p className="text-gray-600 mt-1">
                      <span className=" block  font-semibold  ">
                        {" "}
                        Voluntary Self-Identification
                      </span>
                    </p>

                    <p className="my-4">
                      For government reporting purposes, we ask candidates to
                      respond to the below self-identification survey.
                      Completion of the form is entirely
                      <span className="block  font-semibold  ">
                        {" "}
                        voluntary.{" "}
                      </span>
                      Whatever your decision, it will not be considered in the
                      hiring process or thereafter. Any information that you do
                      provide will be recorded and maintained in a confidential
                      file.
                    </p>
                    <p className="mb-2">
                      As set forth in Care Library’s Equal Employment
                      Opportunity policy, we do not discriminate on the basis of
                      any protected group status under any applicable law.
                    </p>
                    <div className="flex flex-col gap-4 w-1/2 mb-5">
                      <label
                        htmlFor="gender"
                        className="block  font-semibold  "
                      >
                        Gender
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className="w-full form-select form-input  mt-1"
                        placeholder="Select gender"
                      >
                        <option value="" disabled>
                          Select gender
                        </option>
                        {genderOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Field>

                      <label
                        htmlFor="hispanic"
                        className="text-gray-700 font-bold"
                      >
                        Are you Hispanic/Latino?
                      </label>
                      <Field
                        as="select"
                        name="hispanic"
                        className="w-full form-select form-input  mt-1"
                        placeholder="Select an option"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {hispanicOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                  <SelfIdentificationForm />
                  <div className="w-1/2 mt-5">
                    <label htmlFor="veteran_status" className="block font-bold">
                      veteran Status
                    </label>
                    <Field
                      as="select"
                      name="veteran_status"
                      className="w-full form-select form-input mt-1"
                      placeholder="Select an option"
                    >
                      <option value="">Select an option</option>
                      {veteran_statusOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <VoluntaryDisability />

                  <div className="w-1/2 mt-5">
                    {" "}
                    <label
                      htmlFor="disability"
                      className="block font-semibold  mt-5 mb-2"
                    >
                      Disability Status
                    </label>
                    <Field
                      as="select"
                      name="disability"
                      className="w-full form-select form-input mt-1"
                    >
                      <option value="" disabled>
                        Please select
                      </option>
                      {disabilityOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <p className="my-4">
                    PUBLIC BURDEN STATEMENT: According to the Paperwork
                    Reduction Act of 1995 no persons are required to respond to
                    a collection of information unless such collection displays
                    a valid OMB control number. This survey should take about 5
                    minutes to complete.
                  </p>

                  <div className="border-t border-gray-400  mt-5 mb-5"></div>
                  <IntroductionVideo />
                  <div className="border-t border-gray-400  mt-5 mb-5"></div>
                  <div className="flex mt-5">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      disabled={isSubmitting}
                    >
                      Submit Application
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            </div>
)}
    </>
  );
};

export default JobForm;
