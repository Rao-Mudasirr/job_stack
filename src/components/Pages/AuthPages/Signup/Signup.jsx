import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpSchema } from "./schemas/signUpSchema";
import "../Signup.css";
import axios from "axios";
import GlobalSnackBar from "../../UI/SnackBar";
<link
  rel="stylesheet"
  href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
></link>;

const Signup = () => {
  let date = new Date().getFullYear();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [comfirmShowPassword, setComfirmShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    title: "",
    isToggle: false,
    type: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setIsButtonDisabled(!e.target.checked);
  };

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
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        postData(values);
        action.resetForm();
      },
    });

  const postData = async (values) => {
    try {
      const response = await axios.post(
        "https://jobs.orcaloholding.co.uk/api/signup",
        values
      );
      const { data, status } = response;
      // console.log(data);
      switch ((status, data?.status)) {
        case true:
          setSnackbar({
            title: "Successfully registered!",
            isToggle: true,
            type: "success",
          });
        // navigate("/login");
        default:
          // setErrorMessage();
          setSnackbar({
            title: data?.msg,
            isToggle: true,
            type: "error",
          });
          break;
      }
    } catch (error) {
      setSnackbar({
        title: error,
        isToggle: true,
        type: "error",
      });
      // console.log(error);
    }
  };

  return (
    <div className="dark:bg-slate-900" dir="ltr">
      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover bg-cover-auth">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <GlobalSnackBar isOpenSnack={snackbar} setIsOpenSnack={setSnackbar} />
        <div className="container">
          <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1">
            <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <div
                className="p-6"
                style={{
                  overflow: "auto",
                  height: "75vh",
                  "&::-webkit-scrollbar": { width: 5, height: 6 },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#1dc99c",
                    borderRadius: 2,
                  },
                }}
              >
                <Link to="">
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
                <h5 className="my-6 text-xl font-semibold">Signup</h5>

                <form onSubmit={handleSubmit} className="text-left">
                  <div className="grid grid-cols-1">
                    <div className="mb-4 ltr:text-left rtl:text-right">
                      <label className="font-semibold" htmlFor="first_name">
                        First Name:
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        name="first_name"
                        id="first_name"
                        className="form-input mt-3 rounded-md"
                        placeholder="Harry"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.first_name && touched.first_name ? (
                        <p className="form-error">{errors.first_name}</p>
                      ) : null}
                    </div>

                    <div className="mb-4 ltr:text-left rtl:text-right">
                      <label className="font-semibold" htmlFor="last_name">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        name="last_name"
                        id="last_name"
                        className="form-input mt-3 rounded-md"
                        placeholder="Harry"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.last_name && touched.last_name ? (
                        <p className="form-error">{errors.last_name}</p>
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
                      <div className="flex items-center w-full mb-0">
                        <input
                          className="form-checkbox text-emerald-600 rounded w-4 h-4 ltr:mr-2 rtl:ml-2 border border-inherit"
                          type="checkbox"
                          onChange={handleCheckboxChange}
                          checked={isChecked}
                        />
                        <label
                          className="form-check-label text-slate-400"
                          htmlFor="AcceptT&C"
                          id="AcceptT&C"
                        >
                          I Accept{" "}
                          <Link to="/" className="text-emerald-600">
                            Terms And Condition
                          </Link>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={`btn ${
                        !isButtonDisabled ? "bg-emerald-600" : "bg-slate-200"
                      }  hover:border-emerald-700  ${
                        !isButtonDisabled ? "text-white" : "text-slate-400"
                      } rounded-md w-full`}
                      value="Register"
                      disabled={isButtonDisabled}
                    >
                      Register
                    </button>
                    <div className="text-center mt-2">
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
                    <div className="text-center mt-2">
                      <Link to="/" className="text-slate-400  ">
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </form>
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
export default Signup;
