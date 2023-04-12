import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import EducationDetails from "../EducationDetails/EducationDetails";
import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";

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
  linkedInProfile: Yup.string().url("Please enter a valid URL"),
  website: Yup.string().url("Please enter a valid URL"),
  yearsOfExperience: Yup.number()
    .min(0, "Years of experience must be a positive number")
    .required("Please enter your years of experience"),
  operationsCoordinatorExperience: Yup.boolean().required(
    "Please select your experience as Operations Coordinator"
  ),
});

const options = [
  { label: "Operations Coordinator", value: "operationsCoordinator" },
  { label: "Other", value: "other" },
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
                  <p className="text-red-500 text-xs italic">
                    {errors.lastName}
                  </p>
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
                    errors.coverLetter &&
                    touched.coverLetter &&
                    "border-red-500"
                  }`}
                />
                {errors.coverLetter && touched.coverLetter && (
                  <p className="text-red-500 text-xs italic">
                    {errors.coverLetter}
                  </p>
                )}
              </div>
            </div>
            <div class="border-t border-gray-400  mt-5 mb-5"></div>
            <div>
              {" "}
              <EducationDetails />
            </div>
            <div class="border-t border-gray-400  mt-5 mb-5"></div>
            <div>
              <ProfessionalExperience/>
            </div>
            <div class="border-t border-gray-400  mt-5 mb-5"></div>
            <div>
              <label htmlFor="linkedInProfile">LinkedIn Profile</label>

              <Field
                id="linkedInProfile"
                name="linkedInProfile"
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

              <Field
                id="website"
                name="website"
                // type="email"
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email && touched.email && "border-red-500"
                }`}
              />
              {errors.website && touched.website && <div>{errors.website}</div>}
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
