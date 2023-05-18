import react, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInSchema } from "./schemas/signInSchema";
import { useFormik } from "formik";
import "../Signup.css";
import axios from "axios";
import GlobalSnackBar from "../../UI/SnackBar";
import { AppLoader } from "../../UI/AppLoader/AppLoader";
<link
  rel="stylesheet"
  href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
></link>;

const Login = (props) => {
  const navigate = useNavigate();
  let date = new Date().getFullYear();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [snackbar, setSnackbar] = useState({
    title: "",
    isToggle: false,
    type: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    // setIsLoading(true);
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        postData(values);
        // action.resetForm();
      },
    });

  const postData = async (values) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://jobs.orcaloholding.co.uk/api/login",
        values
      );
      const { data, status } = response;
      // console.log(data);
      switch ((status, data?.status)) {
        case true:
          localStorage.setItem("token", data?.data?.token);
          localStorage.setItem("user", JSON.stringify(data?.data?.user));
          // navigate(props.previousRoute);
          // props.setPreviousRoute("/");
          setSnackbar({
            title: data?.msg,
            isToggle: true,
            type: "success",
          });
          setIsLoading(false);
          setTimeout(() => {
            navigate(props.previousRoute);
            props.setPreviousRoute("/");
          }, 2000);

          break;
        default:
          setErrorMessage(data?.msg);
          setSnackbar({
            title: data?.msg,
            isToggle: true,
            type: "error",
          });
          setIsLoading(false);
          break;
      }
    } catch (error) {
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
              <div className="p-6">
                <Link to="/" replace={true}>
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
                <h5 className="my-6 text-xl font-semibold">Login</h5>
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
                        placeholder="email"
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
                          placeholder="password"
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
                    <div></div>

                    <div className="flex justify-end mb-4">
                      <p className="text-slate-400 mb-0">
                        <Link
                          to="/forget-password"
                          replace={true}
                          className="text-slate-400"
                        >
                          Forgot password ?
                        </Link>
                      </p>
                    </div>

                    <div className="mb-4">
                      <button
                        type="submit"
                        className="flex justify-center py-2 center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
                      >
                        {/* {isLoading ? "Submitting..." : "Login"} */}
                        Login {isLoading && <AppLoader />}
                      </button>
                    </div>
                    <div className="text-center">
                      <span className="text-slate-400 me-2">
                        Don't have an account ?
                      </span>{" "}
                      <Link
                        to="/signup"
                        replace={true}
                        className="text-black dark:text-white font-bold"
                      >
                        Sign Up
                      </Link>
                    </div>
                    <div className="text-center mt-2">
                      <Link to="/" replace={true} className="text-slate-400 ">
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </form>
              </div>

              <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
                <p className="mb-0 text-gray-400 font-medium">
                  © {date} Designed by{" "}
                  <Link to="/" replace={true} className="text-reset">
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
export default Login;
