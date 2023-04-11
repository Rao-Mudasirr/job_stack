import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import EducationDetails from "../EducationDetails/EducationDetails"

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  resume: Yup.mixed().required(" Resume is Required"),
  coverLetter: Yup.mixed().required("Cover Letter is required"),
  education: Yup.array().of(
    Yup.object().shape({
      schoolName: Yup.string().required("School name is required"),
      degree: Yup.string().required("Degree is required"),
      cgpa: Yup.number().required("CGPA is required"),
      discipline: Yup.string().required("Discipline is required"),
    })
  ),
  linkedInProfile: Yup.string().url('Please enter a valid URL'),
  website: Yup.string().url('Please enter a valid URL'),
  yearsOfExperience: Yup.number()
    .min(0, 'Years of experience must be a positive number')
    .required('Please enter your years of experience'),
  operationsCoordinatorExperience: Yup.boolean()
    .required('Please select your experience as Operations Coordinator')
 
});

const options = [
  { label: 'Operations Coordinator', value: 'operationsCoordinator' },
  { label: 'Other', value: 'other' }
];


const schoolData = [
  { label: "School A", value: "schoolA" },
  { label: "School B", value: "schoolB" },
  { label: "School C", value: "schoolC" },
];

const degreeData = [
  { label: "Degree A", value: "degreeA" },
  { label: "Degree B", value: "degreeB" },
  { label: "Degree C", value: "degreeC" },
];

const disciplineData = [
  { label: "Discipline A", value: "disciplineA" },
  { label: "Discipline B", value: "disciplineB" },
  { label: "Discipline C", value: "disciplineC" },
];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  resume: "",
  coverLetter: "",
  education: [{ schoolName: "", degree: "", discipline: "", cgpa: "" }],
  // yearsOfExperience: "",
  // operationsExperience: false,
  // linkedInProfile: "",
  // website: "",
};

const JobForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // logs the value of firstName
    resetForm();
  };

  return (
  <>   
  <EducationDetails/>
   <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="firstName"
              >
                First Name *
              </label>
              <Field
                id="firstName"
                name="firstName"
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.firstName && touched.firstName && "border-red-500"
                }`}
              />
              {errors.firstName && touched.firstName && (
                <p className="text-red-500 text-xs italic">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name *
              </label>
              <Field
                id="lastName"
                name="lastName"
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.lastName && touched.lastName && "border-red-500"
                }`}
              />
              {errors.lastName && touched.lastName && (
                <p className="text-red-500 text-xs italic">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email *
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
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone"
              >
                Phone *
              </label>
              <Field
                id="phone"
                name="phone"
                type="tel"
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.phone && touched.phone && "border-red-500"
                }`}
              />
              {errors.phone && touched.phone && (
                <p className="text-red-500 text-xs italic">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="resume"
              >
                Resume/CV *
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
                className="block text-gray-700 font-bold mb-2"
                htmlFor="coverLetter"
              >
                Cover Letter*
              </label>
              <Field
                id="coverLetter"
                name="coverLetter"
                type="file"
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.coverLetter && touched.coverLetter && "border-red-500"
                }`}
              />
              {errors.coverLetter && touched.coverLetter && (
                <p className="text-red-500 text-xs italic">
                  {errors.coverLetter}
                </p>
              )}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
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
                      <div key={index} className="grid grid-cols-4 gap-4 mt-4">
                        <div className="col-span-4 md:col-span-1">
                          <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor={`education.${index}.schoolName`}
                          >
                            School Name *
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
                            Degree *
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
                            Discipline *
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
                            CGPA *
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

                        <div className="col-span-1 md:col-span-2 flex items-center">
                          <button
                            type="button"
                            className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out mr-2"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>
                          {index === values.education.length - 1 && (
                            <button
                              type="button"
                              className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
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
          <div class="border-t border-gray-400  mt-5 mb-5" ></div>
          <div>
            <label htmlFor="linkedInProfile">LinkedIn Profile</label>
            {/* <Field name="linkedInProfile" /> */}
            <Field
                id="linkedInProfile"
                name="linkedInProfile"
                // type="email"
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email && touched.email && "border-red-500"
                }`}
              />
            {errors.linkedInProfile && touched.linkedInProfile && (
              <div>{errors.linkedInProfile}</div>
            )}
          </div>
          <div>
            <label htmlFor="website">Website</label>
            {/* <Field name="website" /> */}
 {/* <Field name="linkedInProfile" /> */}
 <Field
                id="website"
                name="website"
                // type="email"
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email && touched.email && "border-red-500"
                }`}
              />
            {errors.website && touched.website && (
              <div>{errors.website}</div>
            )}
          </div>
          {/* <div>
            <label htmlFor="yearsOfExperience">
              How many years of information services experience do you currently have?
            </label>
            <Field type="number" name="yearsOfExperience" />
            {errors.yearsOfExperience && touched.yearsOfExperience && (
              <div>{errors.yearsOfExperience}</div>
            )}
          </div>
          <div>
            <label htmlFor="operationsCoordinatorExperience">
              Do you have strong experience as Operations Coordinator?
            </label>
            {options.map(({ label, value }) => (
              <label key={value}>
                <Field type="radio" name="operationsCoordinatorExperience" value={value} />
                {label}
              </label>
            ))}
            {errors.operationsCoordinatorExperience && touched.operationsCoordinatorExperience && (
              <div>{errors.operationsCoordinatorExperience}</div>
            )}
          </div> */}


          <div className="flex mt-5">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
    </>

  );
};

export default JobForm;
