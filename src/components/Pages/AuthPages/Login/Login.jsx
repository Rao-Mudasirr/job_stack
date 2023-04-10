import react from "react";
import { Link } from "react-router-dom";
import { signInSchema } from "./schemas/signInSchema";
import { useFormik } from "formik";
import "../Signup.css";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  let date = new Date().getFullYear();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="dark:bg-slate-900">
      {/* <!-- Loader Start --> */}
      {/* <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div> */}
      {/* <!-- Loader End --> */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
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

                    <div className="flex justify-between mb-4">
                      <div className="inline-flex items-center">
                        <input
                          className="form-checkbox text-emerald-600 rounded w-4 h-4 ltr:mr-2 rtl:ml-2 border border-inherit"
                          type="checkbox"
                          value=""
                          id="Rememberme"
                        />
                        <label
                          className="form-check-label text-slate-400"
                          for="Rememberme"
                        >
                          Remember me
                        </label>
                      </div>
                      <p className="text-slate-400 mb-0">
                        <Link to="/reset-password" className="text-slate-400">
                          Forgot password ?
                        </Link>
                      </p>
                    </div>

                    <div className="mb-4">
                      <input
                        type="submit"
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
                        value="Login / Sign in"
                      />
                    </div>

                    <div className="text-center">
                      <span className="text-slate-400 me-2">
                        Don't have an account ?
                      </span>{" "}
                      <Link
                        to="/signup"
                        className="text-black dark:text-white font-bold"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>

              <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
                <p className="mb-0 text-gray-400 font-medium">
                  © {date} Jobstack. Designed by{" "}
                  <a
                    href="https://shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--end section --> */}

      {/* <div className="fixed bottom-3 right-3">
        <a
          href="#"
          className="back-button btn btn-icon bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md"
        >
          <i data-feather="arrow-left" className="h-4 w-4"></i>
        </a>
      </div> */}

      {/* <!-- Switcher --> */}
      {/* <div className="fixed top-1/4 -left-2 z-50 hidden sm:block">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
                <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i className="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i className="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
                </label>
            </span>
        </div> */}

      {/* <div className="fixed top-1/2 -right-11 z-50 hidden sm:block">
            <a href="https://1.envato.market/jobstack" target="_blank" className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-700 font-semibold"><i className="mdi mdi-cart-outline mr-1"></i> Download</a>
        </div> */}
      {/* <!-- Switcher --> */}

      {/* <!-- LTR & RTL Mode Code --> */}
      {/* <div className="fixed top-[40%] -left-3 z-50">
            <a href="#" id="switchRtl">
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" >LTR</span>
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">RTL</span>
            </a>
        </div> */}
      {/* <!-- LTR & RTL Mode Code --> */}

      {/* <!-- JAVASCRIPTS -->
        <script src="assets/libs/feather-icons/feather.min.js"></script>
        <script src="assets/js/plugins.init.js"></script>
        <script src="assets/js/app.js"></script>
        <!-- JAVASCRIPTS --> */}
    </div>
  );
};
export default Login;
