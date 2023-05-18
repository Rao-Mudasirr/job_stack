import React, { useState } from "react";
import { Formik, Field } from "formik";
import { AppModal } from "../../../../UI/AppModal/AppModal";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { initialValuesJobReferences } from "../../constants/constants";
import { validationSchemaJobReferences } from "../../constants/validation-schema";

const JobReferences = ({ jobReferences, setFieldValue }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-2xl leading-normal font-semibold">
              Job References
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-600">
              Add your job references here.
            </p>
          </div>
          <div className="">
            <button type="button" onClick={() => setShowModal(true)} className="py-2 text-xs bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white rounded-md ">
              Add Another Reference
            </button>
          </div>
        </div>
        {
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
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
                  !!jobReferences?.length ? jobReferences?.map((item, mainIndex) => <tr key={mainIndex} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {
                      [item?.name, item?.company, item?.position, item?.email, item?.id].map((item, index) =>
                        <td key={index} className="px-6 py-4">
                          {
                            index === 4 ? <div className="flex ml-6"><i className="uil uil-trash-alt cursor-pointer hover:text-red-600" onClick={() => setFieldValue('jobReferences', jobReferences.filter((item, id) => id !== mainIndex))}></i></div> : item
                          }
                        </td>)
                    }
                  </tr>) : <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {
                      ["", "No ", "Data ", "Found", ""].map((item, index) =>
                        <td key={index} className={`px-6 py-4 ${index === 1 ? "text-center" : ''}`}>
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
              <InputWrapper error={errors.email} touched={touched.email} label="Email" labelName="email">
                <Field id={`email`} type="email" name={`email`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && touched.email && "border-red-500"}`} />
              </InputWrapper>
              <div className="flex justify-center">
                <button type="button" onClick={() => {
                  handleSubmit();
                  let allGood = true;
                  for (var key in values) {
                    if (values[key] === "" || values[key]?.length > 80) {
                      allGood = false
                    }
                  }
                  if (allGood) {
                    setFieldValue('jobReferences', jobReferences?.length ? [...jobReferences, values] : [values]);
                    setShowModal(false)
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