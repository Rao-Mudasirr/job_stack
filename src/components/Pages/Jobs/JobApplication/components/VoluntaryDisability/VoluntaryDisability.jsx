import React from "react";


const VoluntaryDisability = () => {
  return (
    <div className="mx-auto mt-10">
      <a href="#" className="text-blue-400 hover:underline">
        Voluntary Self-Identification of Disability
      </a>
      <p className="text-gray-600 mt-1">
        Why are you being asked to complete this form?
      </p>

      <p className="mt-2">
        We are a federal contractor or subcontractor required by law to provide
        equal employment opportunity to qualified people with disabilities. We
        are also required to measure our progress toward having at least 7% of
        our workforce be individuals with disabilities. To do this, we must ask
        applicants and employees if they have a disability or have ever had a
        disability. Because a person may become disabled at any time, we ask all
        of our employees to update their information at least every five years.
      </p>
      <p className="my-4">
        Identifying yourself as an individual with a disability is voluntary,
        and we hope that you will choose to do so. Your answer will be
        maintained confidentially and not be seen by selecting officials or
        anyone else involved in making personnel decisions. Completing the form
        will not negatively impact you in any way, regardless of whether you
        have self-identified in the past. For more information about this form
        or the equal employment obligations of federal contractors under Section
        503 of the Rehabilitation Act, visit the U.S. Department of Labor’s
        Office of Federal Contract Compliance Programs (OFCCP) website at
        <span className="">
          <a href="www.dol.gov/ofccp" className="text-blue-400 hover:underline">
            www.dol.gov/ofccp.
          </a>
        </span>
      </p>
      <p>How do you know if you have a disability?</p>
      <p className="my-4">
        {" "}
        You are considered to have a disability if you have a physical or mental
        impairment or medical condition that substantially limits a major life
        activity, or if you have a history or record of such an impairment or
        medical condition.
      </p>
      <p>Disabilities include, but are not limited to:</p>
      <div>
        <ul className="list-disc ml-5">
          <li>Autism</li>
          <li>
            Autoimmune disorder, for example, lupus, fibromyalgia, rheumatoid
            arthritis, or HIV/AIDS
          </li>
          <li>Blind or low vision</li>
          <li>Cancer</li>
          <li>Cardiovascular or heart disease</li>
          <li>Celiac disease</li>
          <li>Cerebral palsy</li>
          <li>Deaf or hard of hearing</li>
          <li>Depression or anxiety</li>
          <li>Diabetes</li>
          <li>Epilepsy</li>
          <li>
            Gastrointestinal disorders, for example, Crohn's Disease, or
            irritable bowel syndrome
          </li>
          <li>Intellectual disability</li>
          <li>Missing limbs or partially missing limbs</li>
          <li>
            Nervous system condition for example, migraine headaches,
            Parkinson’s disease, or Multiple sclerosis (MS)
          </li>
          <li>
            Psychiatric condition, for example, bipolar disorder, schizophrenia,
            PTSD, or major depression
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VoluntaryDisability;
