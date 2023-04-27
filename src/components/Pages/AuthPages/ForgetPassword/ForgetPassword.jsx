import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Signup.css";
import { forgetPasswordSchemas } from "./schemas/forgetPasswordSchemas";

const ForgetPassword = () => {
  let date = new Date().getFullYear();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    email: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: forgetPasswordSchemas,
      onSubmit: (values, action) => {
        postData(values);
        // console.log(values);
        action.resetForm();
      },
    });

  const postData = async (values) => {
    try {
      const response = await axios.post(
        "https://jobs.orcaloholding.co.uk/api/forget-password",
        values
      );
      const { data, status } = response;
      switch ((status, data?.status)) {
        case true:
          navigate("/login");

        default:
          setErrorMessage(data?.msg);
          break;
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div>
      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover bg-cover-auth">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container">
          <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1">
            <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <div className="p-6">
                <Link to="/login">
                  <img
                    src="assets/images/logo-dark.png"
                    className="mx-auto block dark:hidden"
                    alt=""
                  />
                  <img
                    src="assets/images/logo-light.png"
                    className="mx-auto dark:block hidden"
                    alt=""
                  />
                </Link>
                <h5 className="my-6 text-xl font-semibold">
                  Forget Your Password
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
                        <button
                          type="submit"
                          className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
                        >
                          Send
                        </button>
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
                  © {date} Designed by{" "}
                  <Link to="/" className="text-reset">
                    Orcalo Holding
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

export default ForgetPassword;
