import React, { useState } from "react";
import { Formik, Field } from "formik";
import { AppModal } from "../../../../UI/AppModal/AppModal";
import { PreviewModal } from "../PreviewModal/PreviewModal";
import { DelConfirmationModal } from "../DelConfirmationModal/DelConfirmationModal";
import axios from "axios";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { AppLoader } from "../../../../UI/AppLoader/AppLoader";
import { degreeArray, disciplineArray, initialValuesEducationDetails } from "../../constants/constants";
import { validationSchemaEducationDetails } from "../../constants/validation-schema";

const EducationDetails = ({ educationDetails,setJobApplicationMsg,setFieldValue }) => {
  const { REACT_APP_SITE_URL } = process.env;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const tokenCheck = localStorage.getItem("token");

  const postData = async (values) => {
    try {
      setLoading(true)
     const res = await axios.post(
        `${REACT_APP_SITE_URL}/api/education-details`, values,
        {
          headers: {
            Authorization: `Bearer ${tokenCheck}`,
          },
        }
      );
      if(res?.data?.status){
        setShowModal(false);
        setFieldValue('education_details',educationDetails?.length ? [res?.data?.data?.education_detail,...educationDetails] : [res?.data?.data?.education_detail]);
    }
      setJobApplicationMsg({
        title: res?.data?.msg,
        isToggle: true,
        type: res?.data?.status ? "success" : "error",
      })
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-2xl leading-normal font-semibold">
              Education
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-600">
              Add your education details here.
            </p>
          </div>
          <div className="">
            <button type="button" onClick={() => setShowModal(true)} className="py-2 text-xs bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white rounded-md ">
              Add Another Education
            </button>
          </div>
        </div>
        {
           <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {
                    ['School Name', 'Degree', 'Discipline', 'CGPA', 'Document', 'Action'].map((item) => <th key={item} scope="col" className="px-6 py-3">
                      {item}
                    </th>)
                  }
                </tr>
              </thead>
              <tbody>
                {
                 !!educationDetails?.length ? educationDetails?.map(item => <tr key={item?.id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {
                      [item?.institute, item?.degree_title, item?.discipline, item?.gpa, item?.document, item?.id].map((item, index) =>
                        <td key={index} className="px-6 py-4">
                          {
                            index === 5 ? <DelConfirmationModal showSnackbar={setJobApplicationMsg} deletionArray={educationDetails} setFieldValue={setFieldValue} deletionId={item} apiRoute="education-details" /> : index === 4 ? <PreviewModal imgUrl={item} /> : item
                          }
                        </td>)
                    }
                  </tr>) :
                  <tr  className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {
                    ["","No"," Details ", "Found", "",""].map((item, index) =>
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
          initialValues={initialValuesEducationDetails}
          validationSchema={validationSchemaEducationDetails}
          onSubmit={() => { }}
        >
          {({ errors, touched, handleSubmit, values, setFieldValue, handleBlur }) => (
            <div>
              <InputWrapper error={errors.institute} touched={touched.institute} label="School Name" labelName="institute">
                <Field id={`institute`} name={`institute`} type="text" className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.institute && touched.institute && "border-red-500"}`} />
              </InputWrapper>
              <InputWrapper error={errors.degree_title} touched={touched.degree_title} label="Degree" labelName="degree_title">
                <Field as="select" id={`degree_title`} name={`degree_title`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.degree_title && touched.degree_title && "border-red-500"}`}>
                  <option value="">Select an option</option>
                  {
                    degreeArray.map(item => <option value={item}>{item}</option>)
                  }
                </Field>
              </InputWrapper>
              <InputWrapper error={errors.discipline} touched={touched.discipline} label="Discipline" labelName="discipline">
                <Field as="select" id={`discipline`} name={`discipline`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.discipline && touched.discipline && "border-red-500"}`} >
                  <option value="">Select an option</option>
                  {
                    disciplineArray.map(item => <option value={item}>{item}</option>)
                  }
                </Field>
              </InputWrapper>
              <InputWrapper error={errors.gpa} touched={touched.gpa} label="CGPA" labelName="gpa">
                <Field id={`gpa`} name={`gpa`} type="number" step="0.01" min={0} max={9} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.gpa && touched.gpa && "border-red-500"}`} />
              </InputWrapper>
              <InputWrapper error={errors.document} touched={touched.document} label="Attach Document" labelName="document">
                <input accept=".doc, .docx, .jpg, .png, .pdf" id="document" onChange={(e) => {
                  const file = e.target.files[0];
                  if(file?.size / 1024 / 1024 >= 2){
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
                }} onBlur={handleBlur} name="document" type="file" className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.document && touched.document && "border-red-500"}`} />
              </InputWrapper>
              <div className="flex justify-center">
                <button type="button" onClick={() => {
                  handleSubmit();
                  let allGood = true;
                  for (var key in values) {
                    if (values[key] === "") {
                      allGood = false
                    }
                  }
                  if (allGood) {
                    const formData = new FormData();
                    formData.append('document', values.document);
                    formData.append('degree_title', values.degree_title);
                    formData.append('discipline', values.discipline);
                    formData.append('gpa', values.gpa);
                    formData.append('institute', values.institute);
                    postData(formData);
                  }
                }} className="flex py-2 bg-emerald-600 hover:bg-emerald-700 px-5 border-emerald-600 hover:border-emerald-700 text-white rounded-md  " >
                  Submit {loading && <AppLoader/>}
                </button>
              </div>
            </div>
          )}
        </Formik>
      </AppModal>
    </>
  );
};
export default EducationDetails;