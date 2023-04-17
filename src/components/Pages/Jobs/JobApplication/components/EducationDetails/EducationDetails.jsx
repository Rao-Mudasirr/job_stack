import React,{useState} from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import EducationForm from "../EducationForm/EducationForm";

const validationSchema = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      schoolName: Yup.string().required("School name is required"),
      degree: Yup.string().required("Degree is required"),
      cgpa: Yup.number().required("CGPA is required"),
      discipline: Yup.string().required("Discipline is required"),
      attachdocument: Yup.string().required("Extra la is required"),
    })
  ),
});

const initialValues = {
  education: [
    { schoolName: "", degree: "", discipline: "", cgpa: "", attachdocument: "" },
  ],
};
const EducationDetails = () => {

  const [showModal, setShowModal] = useState(false);
  const [education, setEducation] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addEducation = (newEducation) => {
    setEducation([...education, newEducation]);
    toggleModal();
  };

  const handleSave = (values, 
    { resetForm }) => {
    console.log(values); // logs the value of firstName
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSave}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
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
                      <div key={index} className="grid grid-cols-5 gap-4 mt-4">
                        <div className="col-span-4 md:col-span-1">
                          <label
                            className="block  font-semibold  mb-2"
                            htmlFor={`education.${index}.schoolName`}
                          >
                            School Name <span className="text-red-500"> *</span>
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
                            Degree <span className="text-red-500"> *</span>
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
                            Discipline <span className="text-red-500"> *</span>
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
                            CGPA <span className="text-red-500"> *</span>
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
                            Attach Document<span className="text-red-500"> *</span>
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
                        {values.education.length > 1 && (   <button
                            type="button"
                             
                          
                            className="py-2  rounded-md bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white mr-2"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>)}
                          {/* {index === values.education.length - 1 && ( */}
                            <button
                              type="button"
                              className="py-2 bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white rounded-md  "
                              onClick={toggleModal}
                            >
                              Add Another Education
                            </button>
                          {/* )} */}
                          {showModal && (
    <div>
      <EducationForm onSubmit={addEducation} onClose={toggleModal} />
    </div>
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

          
        </Form>
      )}
    </Formik>
    
  );
};

export default EducationDetails;
