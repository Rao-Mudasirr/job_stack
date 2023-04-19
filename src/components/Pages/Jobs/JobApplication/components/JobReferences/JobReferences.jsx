import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { AppModal } from "../../../../../AppModal/AppModal";
import { DelConfirmationModal } from "../DelConfirmationModal/DelConfirmationModal";
import axios from "axios";
import { InputWrapper } from "../InputWrapper/InputWrapper";

const validationSchemaJobReferences = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Company Name is required"),
  position: Yup.string().required("Position is required"),
  contactNumber: Yup.string()
    .matches(/^\d+$/, "Contact number should be a number")
    .required("Contact number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const initialValuesJobReferences = {
  name: "",
  company: "",
  position: "",
  contactNumber: "",
  email: "",
};
const JobReferences = ({ jobReferences }) => {
  const { REACT_APP_SITE_URL } = process.env;
  const [showModal, setShowModal] = useState(false);
  const tokenCheck = localStorage.getItem("token");

  const postData = async (values) => {
    try {
      const response = await axios.post(
        `${REACT_APP_SITE_URL}/api/education-details`, values,
        {
          headers: {
            Authorization: `Bearer ${tokenCheck}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mb-8">
        <div className="flex justify-between">
          <div className="">
            <h3 className="text-2xl leading-normal font-semibold">
              Job References
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-600">
              Add your job references here.
            </p>
          </div>
          <div className="">
            <button type="button" onClick={() => setShowModal(true)} className="py-2 mt-4 bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white rounded-md ">
              Add Another Reference
            </button>
          </div>
        </div>
        {
          !!jobReferences?.length && <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {
                    ['Name', 'Company Name', 'Position', 'Email', 'Action'].map((item) => <th key={item} scope="col" className="px-6 py-3">
                      {item}
                    </th>)
                  }
                </tr>
              </thead>
              <tbody>
                {
                  jobReferences?.map((item,index) => <tr key={index} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {
                      [item?.name, item?.company, item?.position, item?.email, item?.id].map((item, index) =>
                        <td key={index} className="px-6 py-4">
                          {
                            index === 4 ? <DelConfirmationModal deletionId={item} apiRoute="" /> : item
                          }
                        </td>)
                    }
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        }

      </div>
      <AppModal open={showModal} setOpen={setShowModal}>
        <Formik
          initialValues={initialValuesJobReferences}
          validationSchema={validationSchemaJobReferences}
          onSubmit={() => { }}
        >
          {({ errors, touched, handleSubmit, values }) => (
            <div>
              <InputWrapper error={errors.name} touched={touched.name} label="Name" labelName="name">
                <Field id={`name`} name={`name`} type="text" className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name && touched.name && "border-red-500"}`} />
              </InputWrapper>
              <InputWrapper error={errors.company} touched={touched.company} label="Company Name" labelName="company">
                <Field id={`company`} name={`company`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.company && touched.company && "border-red-500"}`} />
              </InputWrapper>
              <InputWrapper error={errors.position} touched={touched.position} label="Position" labelName="position">
                <Field id={`position`} name={`position`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.position && touched.position && "border-red-500"}`} />
              </InputWrapper>
              <InputWrapper error={errors.contactNumber} touched={touched.contactNumber} label="Contact Number" labelName="contactNumber">
                <Field id={`contactNumber`} name={`contactNumber`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.contactNumber && touched.contactNumber && "border-red-500"}`} />
              </InputWrapper>
              <InputWrapper error={errors.email} touched={touched.email} label="Email" labelName="email">
                <Field id={`email`} type="email" name={`email`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && touched.email && "border-red-500"}`} />
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
                    postData(values);
                    console.log(values);
                  }
                }} className="py-2 bg-emerald-600 hover:bg-emerald-700 px-5 border-emerald-600 hover:border-emerald-700 text-white rounded-md  " >
                  Submit
                </button>
              </div>
            </div>
          )}
        </Formik>
      </AppModal>
    </>
  );
};
export default JobReferences;