import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      schoolName: Yup.string().required("School name is required"),
      degree: Yup.string().required("Degree is required"),
      cgpa: Yup.number().required("CGPA is required"),
      discipline: Yup.string().required("Discipline is required"),
      extrala: Yup.string().required("Extra la is required"),
    })
  ),
});

const initialValues = {
  education: [
    { schoolName: "", degree: "", discipline: "", cgpa: "", extrala: "" },
  ],
};
const EducationDetails = () => {
  const handleSave = (values, { resetForm }) => {
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
            <h3 className="text-emerald-600  text-2xl font-bold">
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
                            className="block text-gray-700 font-bold mb-2"
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
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor={`education.${index}.degree`}
                          >
                            Degree <span className="text-red-500"> *</span>
                          </label>
                          <Field
                            id={`education.${index}.degree`}
                            name={`education.${index}.degree`}
                            type="text"
                            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                              errors.education &&
                              errors.education[index] &&
                              errors.education[index].degree &&
                              touched.education &&
                              touched.education[index] &&
                              touched.education[index].degree &&
                              "border-red-500"
                            }`}
                          />
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
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor={`education.${index}.discipline`}
                          >
                            Discipline <span className="text-red-500"> *</span>
                          </label>
                          <Field
                            id={`education.${index}.discipline`}
                            name={`education.${index}.discipline`}
                            type="text"
                            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                              errors.education &&
                              errors.education[index] &&
                              errors.education[index].discipline &&
                              touched.education &&
                              touched.education[index] &&
                              touched.education[index].discipline &&
                              "border-red-500"
                            }`}
                          />

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
                            className="block text-gray-700 font-bold mb-2"
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
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor={`education.${index}.extrala`}
                          >
                            Attach Document<span className="text-red-500"> *</span>
                          </label>
                          <Field
                            id={`education.${index}.extrala`}
                            name={`education.${index}.extrala`}
                            type="file"
                            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                              errors.education &&
                              errors.education[index] &&
                              errors.education[index].extrala &&
                              touched.education &&
                              touched.education[index] &&
                              touched.education[index].extrala &&
                              "border-red-500"
                            }`}
                          />
                          {errors.education &&
                            errors.education[index] &&
                            errors.education[index].extrala && 
                            touched.education &&
                            touched.education[index] &&
                            touched.education[index].extrala && (
                              <p className="text-red-500 text-xs italic">
                                {errors.education[index].extrala}
                              </p>
                            )}
                        </div>

                        <div className="col-span-1 md:col-span-2 flex items-center">
                          <button
                            type="button"
                            className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out mr-2"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>
                          {index === values.education.length - 1 && (
                            <button
                              type="button"
                              className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                              onClick={() =>
                                push({
                                  schoolName: "",
                                  degree: "",
                                  discipline: "",
                                  cgpa: "",
                                })
                              }
                            >
                              Add Another Education
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
        </Form>
      )}
    </Formik>
  );
};

export default EducationDetails;
