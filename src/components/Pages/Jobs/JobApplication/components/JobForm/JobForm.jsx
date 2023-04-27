import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SelfIdentificationForm from "../SelfIdentificationForm/SelfIdentificationForm";
import IntroductionVideo from "../../../JobDetails/components/IntroductionVideo/IntroductionVideo";
import VoluntaryDisability from "../VoluntaryDisability/VoluntaryDisability";
import axios from "axios";
import { InputWrapper } from "../InputWrapper/InputWrapper";

import EducationDetails from "../EducationDetails/EducationDetails";

import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";

import JobReferences from "../JobReferences/JobReferences";
import GlobalSnackBar from "../../../../UI/SnackBar";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("email is required"),
  phone_no: Yup.string().required("phone_no is required"),
  // resume: Yup.string().required(" resume is Required"),
  cover_letter: Yup.string().required("Cover Letter is required"),
  linkedin: Yup.string().required("Please enter a valid URL"),
  website: Yup.string().required("Please enter a valid URL"),
  github: Yup.string().required("Please enter a valid URL"),
  gender: Yup.string().required("gender is required"),
  veteran_status: Yup.mixed().required(" veteran_status status is Required"),
  disability: Yup.string().required(" status is required"),
  ethnicity: Yup.string().required(" Field is required"),
});

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Decline To Self Identify", label: "Decline To Self Identify" },
];

const veteran_statusOptions = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
  { value: "I don't wish to answer", label: "I don't wish to answer" },

];


const ethnicity_statusOptions = [
  { value: "Asian", label: "Asian" },
  { value: "American Indian or Alaska Native", label: "American Indian or Alaska Native" },
  { value: "Black or African America", label: "Black or African America" },
  { value: "Native Hawaiian or Other Pacific Islander", label: "Native Hawaiian or Other Pacific Islander" },
  { value: "White", label: "White" },

];
const disabilityOptions = [
  { value: "Yes", label: "Disabled" },
  { value: "No", label: "Not disabled" },
  { value: "I don't wish to answer", label: "I don't wish to answer" },
];

const JobForm = ({jobId, data,loading,error,fetchProfileData,setLoading,page}) => {

  const tokenCheck = localStorage.getItem("token");
  const navigate = useNavigate();
  const { REACT_APP_SITE_URL } = process.env;
  const [jobApplicationMsg, setJobApplicationMsg] = useState(false);
  const [status, setStatus] = useState(false);
  const [_applyJobLoading, setApplyJobLoading] = useState(false);
  

  
  const postData = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${REACT_APP_SITE_URL}/api/my-profile`,
        values,
        {
          headers: {
            Authorization: `Bearer ${tokenCheck}`,
          },
        }
        );
        if (response.status === 200) {
          setStatus(response.data.status);
          setLoading(false);
        await fetchProfileData();
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  const applyForJob = async () => {
    try {
      setApplyJobLoading(true);
      const response = await axios.post(
        `${REACT_APP_SITE_URL}/api/apply-for-job`,
        {job_id:jobId},
        {
          headers: {
            Authorization: `Bearer ${tokenCheck}`,
          },
        }
        );
        setJobApplicationMsg({
          title: response?.data?.msg,
          isToggle: true,
          type: response?.data?.status ? "success" : "error",
        });
        response?.data?.status && setTimeout(() => {
          navigate("/")
        }, 3000);
    } catch (error) {
      setApplyJobLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    (status && !!!page) && applyForJob();
  }, [status]);

  let initialValues = {
    first_name: data?.data?.user?.first_name,
    last_name: data?.data?.user?.last_name,
    email: data?.data?.user?.email,
    phone_no: data?.data?.user?.phone_no,
    resume: data?.data?.user?.resume ?? "",
    cover_letter: data?.data?.user?.cover_letter ?? "",
    linkedin: data?.data?.user?.linkedin,
    website: data?.data?.user?.website,
    github: data?.data?.user?.github,
    total_experience: data?.data?.user?.total_experience,
    // operationsCoordinatorExperince: "",
    gender: data?.data?.user?.gender,
    disability: data?.data?.user?.disability,
    veteran_status: data?.data?.user?.veteran_status,
    education_details: data?.data?.education_details,
    professionalExperience: data?.data?.experience_details,
    ethnicity: data?.data?.user?.ethnicity,
    jobReferences: data?.data?.user?.reference_details,
  };
 
  return (
    <>
    <GlobalSnackBar isOpenSnack={jobApplicationMsg} setIsOpenSnack={setJobApplicationMsg}/>
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
            onSubmit={() => {}}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              setFieldValue,
              handleBlur,
            }) => (
              <Form className="bg-gray-100 p-7 ">
                <div className={`py-5 mb-2 flex ${!!!page ? 'justify-between' : 'justify-end'}`}>
                  {" "}
                 {!!!page && <h4>Apply for this Job</h4>}
                  <p >
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
                      Email <span className="text-red-500"> *</span>
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
                      Phone No <span className="text-red-500"> *</span>
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
                    {/* <label
                      className="block  font-semibold  mb-2"
                      htmlFor="resume"
                    >
                      resume/CV <span className="text-red-500"> *</span>
                    </label> */}
                    <InputWrapper
                      error={errors.document}
                      touched={touched.document}
                      label="Resume"
                      labelName="document"
                    >
                      <input
                        accept=".doc, .docx, .jpg, .png, .pdf"
                        id="document"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file != null) {
                            setFieldValue("resume", file);
                          }
                        }}
                        onBlur={handleBlur}
                        name="document"
                        type="file"
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.document &&
                          touched.document &&
                          "border-red-500"
                        }`}
                      />
                    </InputWrapper>
                    {errors.resume && touched.resume && (
                      <p className="text-red-500 text-xs italic">
                        {errors.resume}
                      </p>
                    )}
                  </div>



                  <div className="mb-4">
                    {/* <label
                      className="block  font-semibold  mb-2"
                      htmlFor="cover_letter"
                    >
                      Cover Letter<span className="text-red-500"> *</span>
                    </label> */}
                    <InputWrapper
                      error={errors.document}
                      touched={touched.document}
                      label="Cover Letter"
                      labelName="document"
                    >
                      <input
                        accept=".doc, .docx, .jpg, .png, .pdf"
                        id="document"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file != null) {
                            setFieldValue("cover_letter", file);
                          }
                        }}
                        onBlur={handleBlur}
                        name="document"
                        type="file"
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          errors.document &&
                          touched.document &&
                          "border-red-500"
                        }`}
                      />
                    </InputWrapper>
                    {errors.cover_letter && touched.cover_letter && (
                      <p className="text-red-500 text-xs italic">
                        {errors.cover_letter}
                      </p>
                    )}
                  </div>
                </div>

                <EducationDetails
                  educationDetails={data?.data?.education_details}
                  fetchProfileData={fetchProfileData}
                />

                <ProfessionalExperience
                  professionalExperience={data?.data?.experience_details}
                  fetchProfileData={fetchProfileData}
                />
                <JobReferences
                  jobReferences={values?.jobReferences}
                  fetchProfileData={fetchProfileData}
                  setFieldValue={setFieldValue}
                />
                <div className="border-t border-gray-400  mt-5 mb-5"></div>

                <div>
                  <label
                    htmlFor="linkedin"
                    className="block  font-semibold  mb-2 mt-2"
                  >
                    {" "}
                    LinkedIn Profile
                  </label>

                  <Field
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    className={`appearance-none border mt-2 mb-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
                  <label htmlFor="website" className=" font-semibold  mb-5 mt-5">
                    website
                  </label>

                  <Field
                    id="website"
                    name="website"
                    type="url"
                    className={`appearance-none border rounded w-full py-2 px-3 mt-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
                  <label htmlFor="github" className=" font-semibold  mb-2 mt-2">
                    Git Hub
                  </label>

                  <Field
                    id="github"
                    name="github"
                    type="url"
                    className={`appearance-none border mt-2 mb-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
                    className="block  font-semibold  mb-2 mt-2"
                    htmlFor="total_experience"
                  >
                    How many years of experience do you have?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    id="total_experience"
                    name="total_experience"
                    className={`appearance-none border mt-2 mb-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
                    respond to the below self-identification survey. Completion
                    of the form is entirely
                    <span className="block  font-semibold  "> voluntary. </span>
                    Whatever your decision, it will not be considered in the
                    hiring process or thereafter. Any information that you do
                    provide will be recorded and maintained in a confidential
                    file.
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
                  </div>
                </div>
                <SelfIdentificationForm />
                <div className="w-1/2 mt-5">
                  <label htmlFor="veteran_status" className="block font-bold">
                    Veteran Status
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
                <div className="w-1/2 mt-5">
                  <label htmlFor="ethnicity" className="block font-bold">
                  Ethnicity 
                  </label>
                  <Field
                    as="select"
                    name="ethnicity"
                    className="w-full form-select form-input mt-1"
                    placeholder="Select an option"
                  >
                    <option value="">Select an option</option>
                    { ethnicity_statusOptions.map((option) => (
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
                  PUBLIC BURDEN STATEMENT: According to the Paperwork Reduction
                  Act of 1995 no persons are required to respond to a collection
                  of information unless such collection displays a valid OMB
                  control number. This survey should take about 5 minutes to
                  complete.
                </p>

                <div className="border-t border-gray-400  mt-5 mb-5"></div>
                <IntroductionVideo />

                <div className="border-t border-gray-400  mt-5 mb-5"></div>
                <div className="flex mt-5">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      if (!values?.jobReferences) {
                        setJobApplicationMsg({
                          title: "At least 1 Job Refrence required",
                          isToggle: true,
                          type: "error",
                        })
                      }
                      if (!data?.data?.education_details.length) {
                        setJobApplicationMsg({
                          title: "At least 1 Education Detail required",
                          isToggle: true,
                          type: "error",
                        })
                      }
                      if (!data?.data?.experience_details.length) {
                        setJobApplicationMsg({
                          title: "At least 1 experience Detail required",
                          isToggle: true,
                          type: "error",
                        })
                      }
                      let allGood = true;
                      for (var key in values) {
                        if (values[key] === "") {
                          allGood = false;
                        }
                      }
                      
                      if (allGood) {
                        const formData = new FormData();
                        formData.append("first_name", values.first_name);
                        formData.append("last_name", values.last_name);
                        formData.append("email", values.email);
                        formData.append("phone_no", values.phone_no);
                        formData.append("resume", values.resume);
                        formData.append("cover_letter", values.cover_letter);
                        formData.append("disability", values.disability);
                        formData.append("linkedin", values.linkedin);
                        formData.append("website", values.website);
                        formData.append("github", values.github);
                        formData.append(
                          "total_experience",
                          values.total_experience
                        );
                        formData.append("gender", values.gender);
                        formData.append(
                          "veteran_status",
                          values.veteran_status
                        );
                        for (let i = 0; i < values.jobReferences.length; i++) {
                          for (const key in values.jobReferences[i]) {
                            formData.append(
                              `reference_details[${i}][${key}]`,
                              values.jobReferences[i][key]
                            );
                            }
                          
                        }
                        formData.append(
                          "ethnicity",
                          values.ethnicity
                        );
                        postData(formData);
                      }
                      
                    }}

                  >
                    {handleSubmit ? "Submit" : "Submit Application"}
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
