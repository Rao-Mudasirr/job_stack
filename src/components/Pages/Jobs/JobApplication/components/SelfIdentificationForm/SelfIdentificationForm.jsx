import React from "react";
import { Field, Form, Formik } from "formik";
import VoluntaryDisability from "../VoluntaryDisability/VoluntaryDisability";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "nonbinary", label: "Non-binary" },
];

const hispanicOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const raceOptions = [
  { value: "white", label: "White" },
  { value: "black", label: "Black or African American" },
  { value: "asian", label: "Asian" },
  { value: "native", label: "American Indian or Alaska Native" },
  { value: "pacific", label: "Native Hawaiian or Pacific Islander" },
  { value: "multiracial", label: "Multiracial" },
];

const veteranOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unknown", label: "Unknown" },
];
const disabilityOptions = [
  { value: "disabled", label: "Disabled" },
  { value: "not-disabled", label: "Not disabled" },
  { value: "unknown", label: "Unknown" },
];

const SelfIdentificationForm = () => {
  return (
    <>
      <div className="mx-auto mt-10">
        <p className="text-gray-600 mt-1">
          <span className=" text-gray-700 font-bold ">
            {" "}
            Voluntary Self-Identification
          </span>
        </p>

        <p className="my-4">
          For government reporting purposes, we ask candidates to respond to the
          below self-identification survey. Completion of the form is entirely
          <span className="text-gray-700 font-bold "> voluntary. </span>Whatever
          your decision, it will not be considered in the hiring process or
          thereafter. Any information that you do provide will be recorded and
          maintained in a confidential file.
        </p>
        <p>
          As set forth in Care Library’s Equal Employment Opportunity policy, we
          do not discriminate on the basis of any protected group status under
          any applicable law.
        </p>
        <Formik
          initialValues={{
            gender: "",
            hispanic: "",
            race: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="flex flex-col gap-4 w-1/2 mb-5">
                <label htmlFor="gender" className="text-gray-700 font-bold ">
                  Gender
                </label>
                <Field
                  as="select"
                  name="gender"
                  className="w-full"
                  placeholder="Select gender"
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  {genderOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>

                <label htmlFor="hispanic" className="text-gray-700 font-bold">
                  Are you Hispanic/Latino?
                </label>
                <Field
                  as="select"
                  name="hispanic"
                  className="w-full"
                  placeholder="Select an option"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {hispanicOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>

                <label htmlFor="race" className="text-gray-700 font-bold ">
                  Please identify your race
                </label>
                <Field
                  as="select"
                  name="race"
                  className="w-full"
                  placeholder="Selectan option"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {raceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                {/* <button
            type="submit"
            disabled={isSubmitting}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button> */}
              </div>

              <a
                href="https://boards.cdn.greenhouse.io/docs/RaceEthnicityDefinitions.pdf"
                className="text-blue-500 underline hover:text-blue-700 mt-10"
              >
                Race & Ethnicity Definitions
              </a>

              <div>
                <p className="my-4">
                  If you believe you belong to any of the categories of
                  protected veterans listed below, please indicate by making the
                  appropriate selection. As a government contractor subject to
                  the Vietnam Era Veterans Readjustment Assistance Act (VEVRAA),
                  we request this information in order to measure the
                  effectiveness of the outreach and positive recruitment efforts
                  we undertake pursuant to VEVRAA. Classification of protected
                  categories is as follows:
                </p>
                <p>
                  A "disabled veteran" is one of the following: a veteran of the
                  U.S. military, ground, naval or air service who is entitled to
                  compensation (or who but for the receipt of military retired
                  pay would be entitled to compensation) under laws administered
                  by the Secretary of Veterans Affairs; or a person who was
                  discharged or released from active duty because of a
                  service-connected disability.
                </p>
                <p className="my-4">
                  An "active duty wartime or campaign badge veteran" means a
                  veteran who served on active duty in the U.S. military,
                  ground, naval or air service during a war, or in a campaign or
                  expedition for which a campaign badge has been authorized
                  under the laws administered by the Department of Defense.
                </p>
                <p>
                  An "Armed forces service medal veteran" means a veteran who,
                  while serving on active duty in the U.S. military, ground,
                  naval or air service, participated in a United States military
                  operation for which an Armed Forces service medal was awarded
                  pursuant to Executive Order 12985.
                </p>
              </div>
              <div className="w-1/2 mt-5">
                {" "}
                <label
                  htmlFor="gender"
                  className="text-gray-700 font-bold mt-5 mb-2"
                >
                  Gender
                </label>
                <Field
                  as="select"
                  name="gender"
                  className="w-full"
                  placeholder="Select gender mt-2 "
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  {veteranOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="mt-5 h-full flex flex-col justify-end ">
                <p className="mb-2">Form CC-305</p>
                <p className="mb-2">OMB Control Number 1250-0005</p>
                <p>Expires 05/31/2023</p>
              </div>
              <div className="border-t border-gray-400  mt-5 mb-5"></div>
              <VoluntaryDisability />

              <div className="w-1/2 mt-5">
                {" "}
                <label
                  htmlFor="gender"
                  className="text-gray-700 font-bold mt-5 mb-5"
                >
                  Disability Status
                </label>
                <Field
                  as="select"
                  name="gender"
                  className="w-full"
                  placeholder="Select gender mt-5 "
                >
                  <option value="" disabled>
                    please Select
                  </option>
                  {disabilityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
              
              </div>
              <p className="my-4">
                  PUBLIC BURDEN STATEMENT: According to the Paperwork Reduction
                  Act of 1995 no persons are required to respond to a collection
                  of information unless such collection displays a valid OMB
                  control number. This survey should take about 5 minutes to
                  complete.
                </p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SelfIdentificationForm;
