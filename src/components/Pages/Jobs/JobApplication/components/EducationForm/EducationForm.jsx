
import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  schoolName: Yup.string().required("School name is required"),
  degree: Yup.string().required("Degree is required"),
  cgpa: Yup.number().required("CGPA is required"),
  discipline: Yup.string().required("Discipline is required"),
  attachdocument: Yup.string().required("Extra la is required"),
});

 const EducationForm = ({ onSubmit, onClose }) => {
    return (
        <Formik
          initialValues={{
            schoolName: "",
            degree: "",
            discipline: "",
            cgpa: "",
            attachdocument: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="schoolName">School Name</label>
                <Field name="schoolName" type="text" />
                {errors.schoolName && touched.schoolName ? (
                  <div>{errors.schoolName}</div>
                ) : null}
              </div>
    
              <div>
                <label htmlFor="degree">Degree</label>
                <Field name="degree" type="text" />
                {errors.degree && touched.degree ? (
                  <div>{errors.degree}</div>
                ) : null}
              </div>
    
              <div>
                <label htmlFor="discipline">Discipline</label>
                <Field name="discipline" type="text" />
                {errors.discipline && touched.discipline ? (
                  <div>{errors.discipline}</div>
                ) : null}
              </div>
    
              <div>
                <label htmlFor="cgpa">CGPA</label>
                <Field name="cgpa" type="number" />
                {errors.cgpa && touched.cgpa ? <div>{errors.cgpa}</div> : null}
              </div>
    
              <div>
                <label htmlFor="attachdocument">Extra la</label>
                <Field name="attachdocument" type="text" />
                {errors.attachdocument && touched.attachdocument ? (
                  <div>{errors.attachdocument}</div>
                ) : null}
              </div>
    
              <button type="submit" disabled={isSubmitting}>
                Save
              </button>
            </Form>
          )}
        </Formik>
      );
 }
 
 export default EducationForm
 




