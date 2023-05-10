import * as Yup from "yup";
export const validationSchemaJobForm = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_no: Yup.string().required("Phone No is required"),
    resume: Yup.string().required(" resume is Required"),
    cover_letter: Yup.string(),
    linkedin: Yup.string().required("Please enter a valid URL"),
    gender: Yup.string().required("Gender is required"),
    veteran_status: Yup.mixed().required(" veteran_status status is Required"),
    disability: Yup.string().required(" status is required"),
    ethnicity: Yup.string().required(" Field is required"),
  });

  export const validationSchemaEducationDetails = Yup.object().shape({
    institute: Yup.string().max(80,"School name should not be greater than 80 words").required("School name is required"),
    degree_title: Yup.string().required("Degree is required"),
    gpa: Yup.number().required("CGPA is required"),
    discipline: Yup.string().required("Discipline is required"),
    document: Yup.string().required("Document is required")
  });
  export const validationSchemaJobReferences = Yup.object().shape({
    name: Yup.string().max(80,"name should not be greater than 80 words").required("Name is required"),
    company: Yup.string().max(80,"Company name should not be greater than 80 words").required("Company Name is required"),
    position: Yup.string().required("Position is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  export const validationSchemaProfessionalExperience = Yup.object().shape({
    company: Yup.string().max(80,"Company name should not be greater than 80 words").required("Company name is required"),
    job_title: Yup.string().max(100,"Job title should not be greater than 100 words").required("Job title is required"),
    start_date: Yup.date().required("Start date is required"),
    currentlyWorking:Yup.boolean(),
    end_date: Yup.date().when('currentlyWorking', {
      is: true, 
      then: ()=>Yup.date(),
      otherwise: ()=>Yup.date().required('End Date is required')
      }),
    document: Yup.string().required("Experience letter is required")
  });