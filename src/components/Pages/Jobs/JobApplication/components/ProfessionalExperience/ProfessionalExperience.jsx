import React, { useState } from "react";
import { Formik, Field } from "formik";
import { AppModal } from "../../../../UI/AppModal/AppModal";
import { PreviewModal } from "../PreviewModal/PreviewModal";
import { DelConfirmationModal } from "../DelConfirmationModal/DelConfirmationModal";
import axios from "axios";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { AppLoader } from "../../../../UI/AppLoader/AppLoader";
import { initialValuesProfessionalExperience } from "../../constants/constants";
import { validationSchemaProfessionalExperience } from "../../constants/validation-schema";
import moment from "moment/moment";

const ProfessionalExperience = ({ professionalExperience, setJobApplicationMsg, setFieldValue }) => {
  const { REACT_APP_SITE_URL } = process.env;
  const [showModal, setShowModal] = useState(false);
  const tokenCheck = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const postData = async (values) => {
    setLoading(true)
    try {
      const res = await axios.post(
        `${REACT_APP_SITE_URL}/api/experience-details`, values,
        {
          headers: {
            Authorization: `Bearer ${tokenCheck}`,
          },
        }
      );
      if (res?.data?.status) {
        setShowModal(false);
        setFieldValue('experience_details', professionalExperience?.length ? [res?.data?.data?.experience_detail, ...professionalExperience] : [res?.data?.data?.experience_detail]);
      }
      setJobApplicationMsg({
        title: res?.data?.msg,
        isToggle: true,
        type: res?.data?.status ? "success" : "error",
      })
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-2xl leading-normal font-semibold">
              Professional Experience
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-600">
              Add your professional experience here.
            </p>
          </div>
          <div className="">
            <button type="button" onClick={() => setShowModal(true)} className="py-2 text-xs bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white rounded-md ">
              Add Another experiences
            </button>
          </div>
        </div>
        {
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {
                    ['Company Name', 'Job Title', 'Start Date', 'End Date', 'Experience Letter', 'Action'].map((item, index) => <th key={item} scope="col" className={`px-6 py-3 ${index === 5 || index === 4 ? 'text-center' : ''}`}>
                      {item}
                    </th>)
                  }
                </tr>
              </thead>
              <tbody>
                {
                  !!professionalExperience?.length ? professionalExperience?.map(item => <tr key={item?.id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {
                      [item?.company, item?.job_title, item?.start_date, item?.end_date, item?.document, item?.id].map((item, index) =>
                        <td key={index} className="px-6 py-4">
                          {
                            index === 5 ? <DelConfirmationModal showSnackbar={setJobApplicationMsg} deletionArray={professionalExperience} deletionId={item} apiRoute="experience-details" setFieldValue={setFieldValue} /> : index === 4 ? <PreviewModal imgUrl={item} /> : index === 3 && item === null ? 'Currently Working' : item
                          }
                        </td>)
                    }
                  </tr>) :
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      {
                        ["", "No", " Details ", "Found", "", ""].map((item, index) =>
                          <td key={index} className="px-6 py-4 text-right">
                            {item}
                          </td>)
                      }
                    </tr>
                }
              </tbody>
            </table>
          </div>
        }

      </div>
      <AppModal open={showModal} setOpen={setShowModal}>
        <Formik
          initialValues={initialValuesProfessionalExperience}
          validationSchema={validationSchemaProfessionalExperience}
          onSubmit={() => { }}
        >
          {({ errors, touched, handleSubmit, values, setFieldValue, handleBlur }) => (
            <div>
              <InputWrapper error={errors.company} touched={touched.company} label="Company Name" labelName="company">
                <Field id={`company`} name={`company`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.company && touched.company && "border-red-500"}`} />
              </InputWrapper>
              <InputWrapper error={errors.job_title} touched={touched.job_title} label="Job Title" labelName="job_title">
                <Field id={`job_title`} name={`job_title`} type="text" className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.job_title && touched.job_title && "border-red-500"}`} />
              </InputWrapper>
              <InputWrapper error={errors.start_date} touched={touched.start_date} label="Start Date" labelName="start_date">
                <Field type="date" id={`start_date`} max={`${moment(new Date()).format("YYYY-MM-DD")}`} name={`start_date`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.start_date && touched.start_date && "border-red-500"}`} />
              </InputWrapper>
              <div className="mb-[0.125rem] flex items-center">
                <Field
                  className="w-4 h-4 ease-soft cursor-pointer mr-2 accent-emerald-600"
                  type="checkbox"
                  id={`currentlyWorking`} name={`currentlyWorking`} />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="currentlyWorking">
                  Currently Working Here?
                </label>
              </div>
              {!values.currentlyWorking && <InputWrapper error={errors.end_date} touched={touched.end_date} label="End Date" labelName="end_date">
                <Field type="date" id={`end_date`} name={`end_date`} min={values.start_date} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.end_date && touched.end_date && "border-red-500"}`} />
              </InputWrapper>}
              <InputWrapper error={errors.document} touched={touched.document} label="Experience Letter" labelName="document">
                <input accept=".doc, .docx, .jpg, .png, .pdf" id={`document`} onChange={(e) => {
                  const file = e.target.files[0];
                  if (file?.size / 1024 / 1024 >= 2) {
                    setJobApplicationMsg({
                      title: "File Size Must be Lower than 2 MB",
                      isToggle: true,
                      type: "error",
                    })
                    return;
                  }
                  if (file != null) {
                    setFieldValue("document", file)
                  }
                }} onBlur={handleBlur} name={`document`} type="file" className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.document && touched.document && "border-red-500"}`} />
              </InputWrapper>
              <div className="flex justify-center">
                <button type="button" onClick={() => {
                  handleSubmit();
                  let allGood = true;
                  for (var key in values) {
                    if (values[key] === "") {
                      values.currentlyWorking && !values.end_date ? allGood = true : allGood = false
                    }
                  }
                  if (allGood) {
                    const formData = new FormData();
                    formData.append('document', values.document);
                    formData.append('company', values.company);
                    formData.append('end_date', values.end_date === "null" ? null : values.end_date);
                    formData.append('start_date', values.start_date);
                    formData.append('job_title', values.job_title);
                    formData.append('currently_working', values.currentlyWorking);
                    postData(formData);
                  }
                }} className="flex py-2 bg-emerald-600 hover:bg-emerald-700 px-5 border-emerald-600 hover:border-emerald-700 text-white rounded-md  " >
                  Submit {loading && <AppLoader />}
                </button>
              </div>
            </div>
          )}
        </Formik>
      </AppModal>
    </>
  );
};
export default ProfessionalExperience;