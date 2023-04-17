import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const tokenCheck = localStorage.getItem("token") === null ? "false" : "true";
  return (
    <div dir="ltr">
      <nav id="topnav" className={`defaultscroll is-sticky bg-white`}>
        <div className="container">
          <Link className="logo" to="/" replace={true}>
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
          </Link>

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
            
            <li className="inline-block pl-1 mb-0">
              <Link
                to="#"
                className="btn btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"
              >
                <img
                  src="assets/images/team/05.jpg"
                  className="rounded-full"
                  alt=""
                />
              </Link>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu justify-end nav-dark">
              <li className="has-submenu parent-menu-item">
                <Link to="/" replace={true}>
                  Home
                </Link>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link to="javascript:void(0)"> Jobs </Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <Link
                      to="/job-categories"
                      className="sub-menu-item"
                      replace={true}
                    >
                      Job Categories
                    </Link>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <Link
                      to="/job-list"
                      className="sub-menu-item"
                      replace={true}
                    >
                      Job List
                    </Link>
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
                        <Link
                          to="/candidate-detail"
                          className="sub-menu-item"
                          replace={true}
                        >
                          Candidate Detail
                        </Link>
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
                        <Link
                          to="/blogs"
                          className="sub-menu-item"
                          replace={true}
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog-detail"
                          className="sub-menu-item"
                          replace={true}
                        >
                          Blog-detail
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Auth Pages </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      {tokenCheck === "false" && (
                        <li>
                          <Link
                            to="/login"
                            className="sub-menu-item"
                            replace={true}
                          >
                            Login{" "}
                          </Link>
                        </li>
                      )}
                      {tokenCheck === "false" && (
                        <li>
                          <Link
                            to="/signup"
                            className="sub-menu-item"
                            replace={true}
                          >
                            Signup
                          </Link>
                        </li>
                      )}
                      <li>
                        <Link
                          to="/forget-password"
                          className="sub-menu-item"
                          replace={true}
                        >
                          Forgot Password
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/lock-screen"
                          className="sub-menu-item"
                          replace={true}
                        >
                          Lock Screen
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Utility </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link
                          to="/terms"
                          className="sub-menu-item"
                          replace={true}
                        >
                          Terms of Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/privacy"
                          className="sub-menu-item"
                          replace={true}
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Special </a>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link
                          to={"/comingsoon"}
                          className="sub-menu-item"
                          replace={true}
                        >
                          Coming Soon
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/maintenance"}
                          className="sub-menu-item"
                          replace={true}
                        >
                          Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/error"
                          className="sub-menu-item"
                          replace={true}
                        >
                          404!
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/thankyou"
                          className="sub-menu-item"
                          replace={true}
                        >
                          Thank you
                        </Link>
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
