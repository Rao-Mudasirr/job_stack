import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { AppModal } from "../../../../../AppModal/AppModal";

const validationSchema = Yup.object().shape({
  schoolName: Yup.string().required("School name is required"),
  degree: Yup.string().required("Degree is required"),
  cgpa: Yup.number().required("CGPA is required"),
  discipline: Yup.string().required("Discipline is required"),
  attachdocument: Yup.string().required("Extra la is required")
});

const initialValues = {
  schoolName: "",
  degree: "",
  discipline: "",
  cgpa: "",
  attachdocument: ""
};
const EducationDetails = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="mb-8">
        <h3 className="mb-6 text-2xl leading-normal font-semibold">
          Education
        </h3>
        <p className="mt-1 text-sm leading-5 text-gray-600">
          Add your education details here.
        </p>
        <button type="button" onClick={()=>setShowModal(true)} className="py-2 mt-4 bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white rounded-md ">
          Add Another Education
        </button>
      </div>
      <AppModal open={showModal} setOpen={setShowModal}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => { }}
        >
          {({ errors, touched, isSubmitting, handleSubmit, values }) => (
            <div>
              <div className="my-4">
                <label className="block  font-semibold  mb-2" htmlFor={`schoolName`}>
                  School Name <span className="text-red-500"> *</span>
                </label>
                <Field id={`schoolName`} name={`schoolName`} type="text" className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.schoolName && touched.schoolName && "border-red-500"}`} />
                {errors.schoolName && touched.schoolName && (
                  <p className="text-red-500 text-xs italic">
                    {errors.schoolName}
                  </p>
                )}
              </div>
              <div className="my-4">
                <label className="block  font-semibold  mb-2" htmlFor={`degree`}>
                  Degree <span className="text-red-500"> *</span>
                </label>
                <Field as="select" id={`degree`} name={`degree`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.degree && touched.degree && "border-red-500"}`}
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Field>
                {errors.degree && touched.degree && (
                  <p className="text-red-500 text-xs italic">{errors.degree}</p>
                )}
              </div>
              <div className="my-4">
                <label className="block  font-semibold  mb-2" htmlFor={`discipline`} >
                  Discipline <span className="text-red-500"> *</span>
                </label>
                <Field as="select" id={`discipline`} name={`discipline`} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.discipline && touched.discipline && "border-red-500"}`} >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Field>
                {errors.discipline && touched.discipline && (
                  <p className="text-red-500 text-xs italic">
                    {errors.discipline}
                  </p>
                )}
              </div>
              <div className="my-4">
                <label className="block  font-semibold  mb-2" htmlFor={`cgpa`}>
                  CGPA <span className="text-red-500"> *</span>
                </label>
                <Field id={`cgpa`} name={`cgpa`} type="number" step="0.01" className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cgpa && touched.cgpa && "border-red-500"}`} />
                {errors.cgpa && touched.cgpa && (
                  <p className="text-red-500 text-xs italic">{errors.cgpa}</p>
                )}
              </div>
              <div className="my-4">
                <label className="block font-semibold mb-2" htmlFor={`attachdocument`} >
                  Attach Document <span className="text-red-500"> *</span>
                </label>
                <Field id={`attachdocument`} name={`attachdocument`} type="file" className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.attachdocument && touched.attachdocument && "border-red-500"}`} />
                {errors.attachdocument && touched.attachdocument && (
                  <p className="text-red-500 text-xs italic">
                    {errors.attachdocument}
                  </p>
                )}
              </div>
              <button type="button" onClick={() => {
                handleSubmit();
                let allGood = true;
                for (var key in values) {
                  if (values[key] === "") {
                    allGood = false
                  }
                }
                if (allGood) {
                  console.log(values);
                }
              }} className="py-2 bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white rounded-md  " disabled={isSubmitting}  >
                Submit
              </button>
            </div>
          )}
        </Formik>
      </AppModal>

    </>
  );
};
export default EducationDetails;