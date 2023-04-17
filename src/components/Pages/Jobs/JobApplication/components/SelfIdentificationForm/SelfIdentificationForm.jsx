import React from "react";
import { Field, Form, Formik } from "formik";
import VoluntaryDisability from "../VoluntaryDisability/VoluntaryDisability";



const SelfIdentificationForm = () => {
  return (
    <>
      <div className="mx-auto mt-10">
        <a
          href="https://boards.cdn.greenhouse.io/docs/RaceEthnicityDefinitions.pdf"
          className="text-blue-500 underline hover:text-blue-700 mt-10"
        >
          Race & Ethnicity Definitions
        </a>

        <div>
          <p className="my-4">
            If you believe you belong to any of the categories of protected
            veterans listed below, please indicate by making the appropriate
            selection. As a government contractor subject to the Vietnam Era
            Veterans Readjustment Assistance Act (VEVRAA), we request this
            information in order to measure the effectiveness of the outreach
            and positive recruitment efforts we undertake pursuant to VEVRAA.
            Classification of protected categories is as follows:
          </p>
          <p>
            A "disabled veteran" is one of the following: a veteran of the U.S.
            military, ground, naval or air service who is entitled to
            compensation (or who but for the receipt of military retired pay
            would be entitled to compensation) under laws administered by the
            Secretary of Veterans Affairs; or a person who was discharged or
            released from active duty because of a service-connected disability.
          </p>
          <p className="my-4">
            An "active duty wartime or campaign badge veteran" means a veteran
            who served on active duty in the U.S. military, ground, naval or air
            service during a war, or in a campaign or expedition for which a
            campaign badge has been authorized under the laws administered by
            the Department of Defense.
          </p>
          <p>
            An "Armed forces service medal veteran" means a veteran who, while
            serving on active duty in the U.S. military, ground, naval or air
            service, participated in a United States military operation for
            which an Armed Forces service medal was awarded pursuant to
            Executive Order 12985.
          </p>
        </div>
       
        

     
        
      </div>
    </>
  );
};

export default SelfIdentificationForm;
