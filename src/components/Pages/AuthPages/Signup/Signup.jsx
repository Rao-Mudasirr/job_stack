import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { signUpSchema } from "./schemas/signUpSchema";
import "../Signup.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  // confirm_password: "",
};

const Signup = () => {
  let date = new Date().getFullYear();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="dark:bg-slate-900" dir="ltr">
      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <div className="p-6">
                <Link to="">
                  <img
                    src="assets/images/logo-dark.png"
                    className="mx-auto h-[24px] block dark:hidden"
                    alt=""
                  />
                  <img
                    src="assets/images/logo-light.png"
                    className="mx-auto h-[24px] dark:block hidden"
                    alt=""
                  />
                </Link>
                <h5 className="my-6 text-xl font-semibold">Signup</h5>



                <form onSubmit={handleSubmit} className="text-left">
                  <div className="grid grid-cols-1">
                    <div className="mb-4 ltr:text-left rtl:text-right">

                      <label className="font-semibold" htmlFor="name">
                        Your Name:
                      </label>
                      <input
                        type="name"
                        autoComplete="off"
                        name="name"
                        id="name"
                        className="form-input mt-3 rounded-md"
                        placeholder="Harry"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <p className="form-error">{errors.name}</p>
                      ) : null}
                    </div>

                    <div className="mb-4 ltr:text-left rtl:text-right">
                      <label className="font-semibold" htmlFor="email">
                        Email Address:
                      </label>
                      <input
                        className="form-input mt-3 rounded-md"
                        type="email"
                        autoComplete="off"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}
                    </div>

                    <div className="mb-4 ltr:text-left rtl:text-right">
                      <label className="font-semibold" htmlFor="password">
                        Password:
                      </label>
                      <input
                        className="form-input mt-3 rounded-md"
                        type="password"
                        autoComplete="off"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center w-full mb-0">
                        <input
                          className="form-checkbox text-emerald-600 rounded w-4 h-4 ltr:mr-2 rtl:ml-2 border border-inherit"
                          type="checkbox"
                          value=""
                          id="AcceptT&C"
                        />
                        <label
                          className="form-check-label text-slate-400"
                          htmlFor="AcceptT&C"
                        >
                          I Accept
                          <Link to="/login" className="text-emerald-600">
                            Terms And Condition
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <input
                        type="submit"
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
                        value="Register"
                      />
                    </div>

                    <div className="text-center">
                      <span className="text-slate-400 me-2">
                        Already have an account ?
                      </span>
                      <Link
                        to="/login"
                        className="text-black dark:text-white font-bold"
                      >
                        Sign in
                      </Link>
                    </div>
                  </div>
                </form>
              </div>

              <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
                <p className="mb-0 text-gray-400 font-medium">
                  © {date} Jobstack. Designed by
                  <Link
                    to="https://shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Signup;
