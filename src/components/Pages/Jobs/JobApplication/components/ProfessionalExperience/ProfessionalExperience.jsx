import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
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

const initialValues = {
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
const ProfessionalExperience = () => {
  const handleSave = (values, { resetForm }) => {
    console.log(values);
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
              Professional Experience
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-600">
              Add your professional experience here.
            </p>
            <FieldArray name="experiences">
              {({ push, remove }) => (
                <>
                  {values.experiences.map((experience, index) => (
                    <div key={index} className="grid grid-cols-5 gap-4 mt-4">
                      <div className="col-span-4 md:col-span-1">
                        <label
                          className="block  font-semibold  mb-2"
                          htmlFor={`experiences.${index}.company`}
                        >
                          Company Name <span className="text-red-500"> *</span>
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
                          Job Title <span className="text-red-500"> *</span>
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
                          Start Date <span className="text-red-500"> *</span>
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
                          End Date <span className="text-red-500"> *</span>
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
                          Experience Letter<span className="text-red-500"> *</span>
                        </label>
                        <Field
                          id={`experiences.${index}.experienceLetter`}
                          name={`experiences.${index}.experienceLetter`}
                          type="file"
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.experiences &&
                            errors.experiences[index] &&
                            errors.experiences[index].experienceLetter &&
                            touched.experiences &&
                            touched.experiences[index] &&
                            touched.experiences[index].experienceLetter &&
                            "border-red-500"
                          }`}
                        />
                        {errors.experiences &&
                          errors.experiences[index] &&
                          errors.experiences[index].experienceLetter &&
                          touched.experiences &&
                          touched.experiences[index] &&
                          touched.experiences[index].experienceLetter && (
                            <p className="text-red-500 text-xs italic">
                              {errors.experiences[index].experienceLetter}
                            </p>
                          )}
                      </div>

                      <div className="col-span-1 md:col-span-2 flex items-center">
                      {values.experiences.length > 1 && (   <button
                            type="button"
                            className="py-2  rounded-md bg-emerald-600 hover:bg-emerald-700 px-3 border-emerald-600 hover:border-emerald-700 text-white mr-2"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>)}
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
        </Form>
      )}
    </Formik>
  );
};

export default ProfessionalExperience;
