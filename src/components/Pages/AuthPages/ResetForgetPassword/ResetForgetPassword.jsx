import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Signup.css";
import { ResetForgetPasswordSchema } from "./schemas/ResetForgetPasswordSchema";

const ResetForgetPassword = () => {
  let date = new Date().getFullYear();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [comfirmShowPassword, setComfirmShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleComfirmPasswordVisibility = () => {
    setComfirmShowPassword(!comfirmShowPassword);
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: ResetForgetPasswordSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        postData(values);
        // action.resetForm();
      },
    });

  const postData = async (values) => {
    try {
      const response = await axios.post(
        "https://jobs.orcaloholding.co.uk/api/signup",
        values
      );
      const { data, status } = response;
      console.log(data);
      switch ((status, data?.status)) {
        case true:
          navigate("/login");

        default:
          setErrorMessage(data?.msg);
          break;
      }
    } catch (error) {
      console.log(error);
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
                    className="mx-auto  block dark:hidden"
                    alt=""
                  />
                  <img
                    src="assets/images/logo-light.png"
                    className="mx-auto dark:block hidden"
                    alt=""
                  />
                </Link>
                <h5 className="my-6 text-xl font-semibold">
                  Reset Forget Your Password
                </h5>
                <div className="grid grid-cols-1">
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

                      <div className="mb-4 ltr:text-left rtl:text-right">
                        <label className="font-semibold" htmlFor="password">
                          Password:
                        </label>
                        <div style={{ display: "flex", position: "relative" }}>
                          <input
                            className="form-input mt-3 rounded-md"
                            type={showPassword ? "text" : "password"}
                            autoComplete="off"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <div
                            onClick={togglePasswordVisibility}
                            style={{ position: "absolute", right: 10, top: 20 }}
                          >
                            {showPassword ? (
                              <i className="uil uil-eye-slash"></i>
                            ) : (
                              <i className="uil uil-eye"></i>
                            )}
                          </div>
                        </div>
                        {errors.password && touched.password ? (
                          <p className="form-error">{errors.password}</p>
                        ) : null}
                      </div>

                      <div className="mb-4 ltr:text-left rtl:text-right">
                        <label
                          className="font-semibold"
                          htmlFor="password_confirmation"
                        >
                          Confirm Password:
                        </label>
                        <div style={{ display: "flex", position: "relative" }}>
                          <input
                            className="form-input mt-3 rounded-md"
                            type={comfirmShowPassword ? "text" : "password"}
                            autoComplete="off"
                            name="password_confirmation"
                            id="password_confirmation"
                            placeholder="Confirm Password"
                            value={values.password_confirmation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <div
                            onClick={toggleComfirmPasswordVisibility}
                            style={{ position: "absolute", right: 10, top: 20 }}
                          >
                            {comfirmShowPassword ? (
                              <i className="uil uil-eye-slash"></i>
                            ) : (
                              <i className="uil uil-eye"></i>
                            )}
                          </div>
                        </div>
                        {errors.password_confirmation &&
                        touched.password_confirmation ? (
                          <p className="form-error">
                            {errors.password_confirmation}
                          </p>
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

export default ResetForgetPassword;
