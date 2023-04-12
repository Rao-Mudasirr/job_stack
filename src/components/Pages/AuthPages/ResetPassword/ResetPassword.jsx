import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import "../Signup.css";
import { resetPasswordSchemas } from "./schemas/resetPasswordSchemas";

const initialValues = {
  email: "",
};

const ResetPassword = () => {
  let date = new Date().getFullYear();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: resetPasswordSchemas,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div>
      <section className="h-screen flex items-center justify-center relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <div className="p-6">
                <Link to="/login">
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
                <h5 className="my-6 text-xl font-semibold">
                  Reset Your Password
                </h5>
                <div className="grid grid-cols-1">
                  <p className="text-slate-400 mb-6">
                    Please enter your email address. You will receive a link to
                    create a new password via email.
                  </p>
                  <form onSubmit={handleSubmit} className="text-left">
                    <div className="grid grid-cols-1">
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
                          placeholder="name@example.com"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                          <p className="form-error">{errors.email}</p>
                        ) : null}
                      </div>

                      <div className="mb-4">
                        <input
                          type="submit"
                          className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
                          value="Send"
                        />
                      </div>

                      <div className="text-center">
                        <span className="text-slate-400 me-2">
                          Remember your password ?
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
              </div>

              <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
                <p className="mb-0 text-gray-400 font-medium">
                  © <script>document.write(new Date().getFullYear())</script>
                  Jobstack. Designed by
                  <Link to="" target="_blank" className="text-reset">
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

export default ResetPassword;
