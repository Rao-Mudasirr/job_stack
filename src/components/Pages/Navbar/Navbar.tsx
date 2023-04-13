import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
 
  return (
    <div dir="ltr">
      <nav id="topnav" className={`defaultscroll is-sticky bg-white`} >
        <div className="container">
          <a className="logo" href="index.html">
            <div className="block sm:hidden">
              <img
                src="assets/images/logo-icon-40.png"
                className="h-10 inline-block dark:hidden"
                alt=""
              />
              <img
                src="assets/images/logo-icon-40-white.png"
                className="h-10 hidden dark:inline-block"
                alt=""
              />
            </div>
            <div className="sm:block hidden">
              <span className="inline-block dark:hidden">
                <img
                  src="assets/images/logo-dark.png"
                  className="h-[24px] l-dark"
                  alt=""
                />
                <img
                  src="assets/images/logo-dark.png"
                  className="h-[24px] l-light"
                  alt=""
                />
              </span>
              <img
                src="assets/images/logo-white.png"
                className="h-[24px] hidden dark:inline-block"
                alt=""
              />
            </div>
          </a>

          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle">
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <ul className="buy-button list-none mb-0">
            <li className="inline-block mb-0">
              <div className="relative top-[3px]">
                <i className="uil uil-search text-lg absolute top-[3px] ltr:right-3 rtl:left-3"></i>
                <input
                  type="text"
                  className="form-input h-9 ltr:pr-10 rtl:pr-10 rounded-3xl sm:w-44 w-36 border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900"
                  name="s"
                  id="searchItem"
                  placeholder="Search..."
                />
              </div>
            </li>
            <li className="inline-block pl-1 mb-0">
              <a
                href="#"
                className="btn btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"
              >
                <img
                  src="assets/images/team/05.jpg"
                  className="rounded-full"
                  alt=""
                />
              </a>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu justify-end nav-dark">
              <li className="has-submenu parent-menu-item">
                <a href="javascript:void(0)">Home</a>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <a href="index.html" className="sub-menu-item">
                      Hero One
                    </a>
                  </li>
                  <li>
                    <a href="index-two.html" className="sub-menu-item">
                      Hero Two
                    </a>
                  </li>
                  <li>
                    <a href="index-three.html" className="sub-menu-item">
                      Hero Three
                    </a>
                  </li>
                  <li>
                    <a href="index-four.html" className="sub-menu-item">
                      Hero Four
                    </a>
                  </li>
                  <li>
                    <a href="index-five.html" className="sub-menu-item">
                      Hero Five
                    </a>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a href="javascript:void(0)"> Jobs </a>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <a href="job-categories.html" className="sub-menu-item">
                      Job Categories
                    </a>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Job Grids </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="job-grid-one.html" className="sub-menu-item">
                          Job Grid One
                        </a>
                      </li>
                      <li>
                        <a href="job-grid-two.html" className="sub-menu-item">
                          Job Grid Two
                        </a>
                      </li>
                      <li>
                        <a href="job-grid-three.html" className="sub-menu-item">
                          Job Grid Three
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Job Lists </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="job-list-one.html" className="sub-menu-item">
                          Job List One
                        </a>
                      </li>
                      <li>
                        <a href="job-list-two.html" className="sub-menu-item">
                          Job List Two
                        </a>
                      </li>
                      <li>
                        <a href="job-list-three.html" className="sub-menu-item">
                          Job List Three
                        </a>
                      </li>
                      <li>
                        <a href="job-list-four.html" className="sub-menu-item">
                          Job List Four
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Job Detail </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="job-detail-one.html" className="sub-menu-item">
                          Job Detail One
                        </a>
                      </li>
                      <li>
                        <a href="job-detail-two.html" className="sub-menu-item">
                          Job Detail Two
                        </a>
                      </li>
                      <li>
                        <a
                          href="job-detail-three.html"
                          className="sub-menu-item"
                        >
                          Job Detail Three
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="job-apply.html" className="sub-menu-item">
                      Job Apply
                    </a>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a href="javascript:void(0)">Pages</a>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <a href="aboutus.html" className="sub-menu-item">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="services.html" className="sub-menu-item">
                      Services
                    </a>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)">Employers</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="employer-list.html" className="sub-menu-item">
                          Employers
                        </a>
                      </li>
                      <li>
                        <a
                          href="employer-detail.html"
                          className="sub-menu-item"
                        >
                          Employer Detail
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)">Candidates</a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="candidate-list.html" className="sub-menu-item">
                          Candidates
                        </a>
                      </li>
                      <li>
                        <a
                          href="candidate-detail.html"
                          className="sub-menu-item"
                        >
                          Candidate Detail
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Helpcenter </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a
                          href="helpcenter-overview.html"
                          className="sub-menu-item"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="helpcenter-faqs.html"
                          className="sub-menu-item"
                        >
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a
                          href="helpcenter-guides.html"
                          className="sub-menu-item"
                        >
                          Guides
                        </a>
                      </li>
                      <li>
                        <a
                          href="helpcenter-support.html"
                          className="sub-menu-item"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Blog </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="blogs.html" className="sub-menu-item">
                          {" "}
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a href="blog-detail.html" className="sub-menu-item">
                          {" "}
                          Blog Detail
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Auth Pages </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="login.html" className="sub-menu-item">
                          {" "}
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="signup.html" className="sub-menu-item">
                          {" "}
                          Signup
                        </a>
                      </li>
                      <li>
                        <a href="reset-password.html" className="sub-menu-item">
                          {" "}
                          Forgot Password
                        </a>
                      </li>
                      <li>
                        <a href="lock-screen.html" className="sub-menu-item">
                          {" "}
                          Lock Screen
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Utility </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a
                          className="sub-menu-item"
                          onClick={() => {
                            navigate("/terms");
                          }}
                        >
                          Terms of Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="sub-menu-item"
                          onClick={() => {
                            navigate("/privacy");
                          }}
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Special </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="comingsoon.html" className="sub-menu-item">
                          {" "}
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a href="maintenance.html" className="sub-menu-item">
                          {" "}
                          Maintenance
                        </a>
                      </li>
                      <li>
                        <a href="error.html" className="sub-menu-item">
                          {" "}
                          404!
                        </a>
                      </li>
                      <li>
                        <a href="thankyou.html" className="sub-menu-item">
                          {" "}
                          Thank you
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="contact.html" className="sub-menu-item">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
