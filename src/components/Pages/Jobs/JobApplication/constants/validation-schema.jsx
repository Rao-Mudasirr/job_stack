import * as Yup from "yup";
export const validationSchemaJobForm = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("email is required"),
    phone_no: Yup.string().required("phone_no is required"),
    // resume: Yup.string().required(" resume is Required"),
    cover_letter: Yup.string().required("Cover Letter is required"),
    linkedin: Yup.string().required("Please enter a valid URL"),
    website: Yup.string().required("Please enter a valid URL"),
    github: Yup.string().required("Please enter a valid URL"),
    gender: Yup.string().required("gender is required"),
    veteran_status: Yup.mixed().required(" veteran_status status is Required"),
    disability: Yup.string().required(" status is required"),
    ethnicity: Yup.string().required(" Field is required"),
  });

  export const validationSchemaEducationDetails = Yup.object().shape({
    institute: Yup.string().required("School name is required"),
    degree_title: Yup.string().required("Degree is required"),
    gpa: Yup.number().required("CGPA is required"),
    discipline: Yup.string().required("Discipline is required"),
    document: Yup.string().required("Document is required")
  });
  export const validationSchemaJobReferences = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    company: Yup.string().required("Company Name is required"),
    position: Yup.string().required("Position is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  export const validationSchemaProfessionalExperience = Yup.object().shape({
    company: Yup.string().required("Company name is required"),
    job_title: Yup.string().required("Job title is required"),
    start_date: Yup.date().required("Start date is required"),
    currentlyWorking:Yup.boolean(),
    end_date: Yup.date().when('currentlyWorking', {
      is: true, 
      then: ()=>Yup.date(),
      otherwise: ()=>Yup.date().required('End Date is required')
      }),
    document: Yup.string().required("Experience letter is required")
  });