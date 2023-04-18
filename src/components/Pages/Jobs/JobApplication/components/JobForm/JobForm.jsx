import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import EducationDetails from "../EducationDetails/EducationDetails";
import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";
import JobReferences from "../JobReferences/JobReferences";
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
  yearsOfExperience: Yup.number()
    .min(0, "Years of experience cannot be negative")
    .max(100, "Please enter a valid number")
    .required("This field is required"),
  operationsCoordinatorExperince: Yup.string().required(
    "This field is required"
  ),
  gender: Yup.string().required("gender is required"),
  hispanic: Yup.mixed().required(" hispanic is Required"),
  veteran: Yup.mixed().required(" veteran status is Required"),
  disabilitystatus: Yup.string().required(" status is required"),
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

const veteranOptions = [
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
  const fetchProfileData = async () => {
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
      setData(response?.data?.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfileData();
  }, []);
  console.log(data);
  console.log(error);
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    resume: "",
    cover_letter: "",
    linkedin: "",
    website: "",
    github: "",
    yearsOfExperience: "",
    operationsCoordinatorExperince: "",
    gender: "",
    hispanic: "",
  };

  return (
    <>
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
                    errors.first_name && touched.first_name && "border-red-500"
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
                    errors.last_name && touched.last_name && "border-red-500"
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
                <label className="block  font-semibold  mb-2" htmlFor="email">
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
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
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
                    errors.phone_no && touched.phone_no && "border-red-500"
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
                <label className="block  font-semibold  mb-2" htmlFor="resume">
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
                  <p className="text-red-500 text-xs italic">{errors.resume}</p>
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
            <div className="border-t border-gray-400  mt-5 mb-5"></div>
            <div>
              {" "}
              <EducationDetails educationDetails={data?.education_details} fetchProfileData={fetchProfileData} />
            </div>
            <div className="border-t border-gray-400  mt-5 mb-5"></div>
            <div>
              <ProfessionalExperience professionalExperience={data?.experience_details} fetchProfileData={fetchProfileData} />
            </div>
            <div className="border-t border-gray-400  mt-5 mb-5"></div>
            <JobReferences jobReferences={data?.user?.reference_details} fetchProfileData={fetchProfileData} />
            <div className="border-t border-gray-400  mt-5 mb-5"></div>
            <div>
              <label htmlFor="linkedin" className="block  font-semibold  mb-2">
                {" "}
                LinkedIn Profile
              </label>

              <Field
                id="linkedin"
                name="linkedin"
                type="url"
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.first_name && touched.first_name && "border-red-500"
                }`}
              />
              {errors.linkedin && touched.linkedin && (
                <p className="text-red-500 text-xs italic">{errors.linkedin}</p>
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
                <p className="text-red-500 text-xs italic">{errors.website}</p>
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
                <p className="text-red-500 text-xs italic">{errors.website}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block  font-semibold  mb-2"
                htmlFor="yearsOfExperience"
              >
                How many years of experience do you have?{" "}
                <span className="text-red-500">*</span>
              </label>
              <Field
                id="yearsOfExperience"
                name="yearsOfExperience"
                type="number"
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.yearsOfExperience &&
                  touched.yearsOfExperience &&
                  "border-red-500"
                }`}
              />
              {errors.yearsOfExperience && touched.yearsOfExperience && (
                <p className="text-red-500 text-xs italic">
                  {errors.yearsOfExperience}
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
                For government reporting purposes, we ask candidates to respond
                to the below self-identification survey. Completion of the form
                is entirely
                <span className="block  font-semibold  "> voluntary. </span>
                Whatever your decision, it will not be considered in the hiring
                process or thereafter. Any information that you do provide will
                be recorded and maintained in a confidential file.
              </p>
              <p className="mb-2">
                As set forth in Care Library’s Equal Employment Opportunity
                policy, we do not discriminate on the basis of any protected
                group status under any applicable law.
              </p>
              <div className="flex flex-col gap-4 w-1/2 mb-5">
                <label htmlFor="gender" className="block  font-semibold  ">
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

                <label htmlFor="hispanic" className="text-gray-700 font-bold">
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
            <div className="mt-5 ">
              {" "}
              <label htmlFor="veteran" className="text-gray-700 font-bold">
                Veteran Status
              </label>
              <Field
                as="select"
                name="veteran"
                className="w-full form-select form-input  mt-1"
                placeholder="Select an option"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {veteranOptions.map((option) => (
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
                htmlFor="disabilitystatus"
                className="block font-semibold  mt-5 mb-2"
              >
                Disability Status
              </label>
              <Field
                as="select"
                name="disabilitystatus"
                className="w-full form-select form-input  mt-1"
                placeholder="Select gender mt-5 "
              >
                <option value="" disabled>
                  please Select
                </option>
                {disabilityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
            </div>
            <p className="my-4">
              PUBLIC BURDEN STATEMENT: According to the Paperwork Reduction Act
              of 1995 no persons are required to respond to a collection of
              information unless such collection displays a valid OMB control
              number. This survey should take about 5 minutes to complete.
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
    </>
  );
};

export default JobForm;
