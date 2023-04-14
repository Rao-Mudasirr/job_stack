import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  references: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name is required"),
      compname: Yup.string().required("Company Name is required"),
      position: Yup.string().required("Position is required"),
      contactNumber: Yup.string()
        .matches(/^\d+$/, "Contact number should be a number")
        .required("Contact number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    })
  ),
});

const initialValues = {
  references: [
    {
      name: "",
      compname: "",

      position: "",
      contactNumber: "",
      email: "",
    },
  ],
};

const JobReferences = () => {
  const handleSave = (values, { resetForm }) => {
    console.log(values); // logs the value of references
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
            <h3 className="text-emerald-600 text-2xl font-bold">
              Job References
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-600">
              Add your job references here.
            </p>
            <FieldArray name="references">
              {({ push, remove }) => (
                <>
                  {values.references.map((ref, index) => (
                    <div key={index} className="grid grid-cols-5 gap-4 mt-4">
                      <div className="col-span-4 md:col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`references.${index}.name`}
                        >
                          Name <span className="text-red-500"> *</span>
                        </label>
                        <Field
                          id={`references.${index}.name`}
                          name={`references.${index}.name`}
                          type="text"
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.references &&
                            errors.references[index] &&
                            errors.references[index].name &&
                            touched.references &&
                            touched.references[index] &&
                            touched.references[index].name &&
                            "border-red-500"
                          }`}
                        />
                        {errors.references &&
                          errors.references[index] &&
                          errors.references[index].name &&
                          touched.references &&
                          touched.references[index] &&
                          touched.references[index].name && (
                            <p className="text-red-500 text-xs italic">
                              {errors.references[index].name}
                            </p>
                          )}
                      </div>

                      <div className="col-span-4 md:col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`references.${index}.compname`}
                        >
                          Company Name <span className="text-red-500"> *</span>
                        </label>
                        <Field
                          id={`references.${index}.compname`}
                          name={`references.${index}.compname`}
                          type="text"
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.references &&
                            errors.references[index] &&
                            errors.references[index].compname &&
                            touched.references &&
                            touched.references[index] &&
                            touched.references[index].compname &&
                            "border-red-500"
                          }`}
                        />
                        {errors.references &&
                          errors.references[index] &&
                          errors.references[index].compname &&
                          touched.references &&
                          touched.references[index] &&
                          touched.references[index].compname && (
                            <p className="text-red-500 text-xs italic">
                              {errors.references[index].compname}
                            </p>
                          )}
                      </div>
                      <div className="col-span-4 md:col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`references.${index}.position`}
                        >
                          Position <span className="text-red-500"> *</span>
                        </label>
                        <Field
                          id={`references.${index}.position`}
                          name={`references.${index}.position`}
                          type="text"
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.references &&
                            errors.references[index] &&
                            errors.references[index].position &&
                            touched.references &&
                            touched.references[index] &&
                            touched.references[index].position &&
                            "border-red-500"
                          }`}
                        />
                        {errors.references &&
                          errors.references[index] &&
                          errors.references[index].position &&
                          touched.references &&
                          touched.references[index] &&
                          touched.references[index].position && (
                            <p className="text-red-500 text-xs italic">
                              {errors.references[index].position}
                            </p>
                          )}
                      </div>
                      <div className="col-span-4 md:col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`references.${index}.contactNumber`}
                        >
                          Contact Number{" "}
                          <span className="text-red-500"> *</span>
                        </label>
                        <Field
                          id={`references.${index}.contactNumber`}
                          name={`references.${index}.contactNumber`}
                          type="text"
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.references &&
                            errors.references[index] &&
                            errors.references[index].contactNumber &&
                            touched.references &&
                            touched.references[index] &&
                            touched.references[index].contactNumber &&
                            "border-red-500"
                          }`}
                        />
                        {errors.references &&
                          errors.references[index] &&
                          errors.references[index].contactNumber &&
                          touched.references &&
                          touched.references[index] &&
                          touched.references[index].contactNumber && (
                            <p className="text-red-500 text-xs italic">
                              {errors.references[index].contactNumber}
                            </p>
                          )}
                      </div>

                      <div className="col-span-4 md:col-span-1">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor={`references.${index}.email`}
                        >
                          Email <span className="text-red-500"> *</span>
                        </label>
                        <Field
                          id={`references.${index}.email`}
                          name={`references.${index}.email`}
                          type="text"
                          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.references &&
                            errors.references[index] &&
                            errors.references[index].email &&
                            touched.references &&
                            touched.references[index] &&
                            touched.references[index].email &&
                            "border-red-500"
                          }`}
                        />
                        {errors.references &&
                          errors.references[index] &&
                          errors.references[index].email &&
                          touched.references &&
                          touched.references[index] &&
                          touched.references[index].email && (
                            <p className="text-red-500 text-xs italic">
                              {errors.references[index].email}
                            </p>
                          )}
                      </div>
                      <div className="col-span-1 md:col-span-2 flex items-center">
                        {values.references.length > 1 && (
                          <button
                            type="button"
                            className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out mr-2"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>
                        )}
                        {index === values.references.length - 1 && (
                          <button
                            type="button"
                            className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                            onClick={() =>
                              push({
                                name: "",
                                compname: "",

                                position: "",
                                contactNumber: "",
                                email: "",
                              })
                            }
                          >
                            Add Another Reference
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

export default JobReferences;
