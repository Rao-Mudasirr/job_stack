import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function jobMenuFunction(divToBeClickedOn, theDIvToBeShown) {
  divToBeClickedOn.classList.toggle("open");
  var isOpen = theDIvToBeShown;
  if (isOpen.style.display === "block") {
    isOpen.style.display = "none";
  } else {
    isOpen.style.display = "block";
  }
}
function toggleFunction() {
  document.getElementById("isToggle").classList.toggle("open");
  var isOpen = document.getElementById("navigation");
  if (isOpen.style.display === "block") {
    isOpen.style.display = "none";
  } else {
    isOpen.style.display = "block";
  }
}
const Navbar = () => {
  const location = useLocation();
  const tokenCheck = localStorage.getItem("token") === null ? "false" : "true";
  const [userProfile, setUserProfile] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  window.addEventListener("storage", () => {
    setUserProfile(JSON.parse(localStorage.getItem("user")));
  });

  return (
    <div dir="ltr">
      <nav id="topnav" className={`defaultscroll is-sticky bg-white`}>
        <div className="container">
          <Link className="logo" to="/" replace={true}>
            <div className="block sm:hidden">
              <span className="inline-block dark:hidden">
                <img
                  src="assets/images/logo-dark.png"
                  className="h-[26px] l-dark"
                  alt=""
                />
                <img
                  src="assets/images/logo-dark.png"
                  className=" l-light"
                  alt=""
                />
              </span>
              <img
                src="assets/images/logo-white.png"
                className="h-[24px] hidden dark:inline-block"
                alt=""
              />
            </div>
            <div className="sm:block hidden">
              <span className="inline-block dark:hidden">
                <img
                  src="assets/images/logo-dark.png"
                  className=" l-dark"
                  alt=""
                />
                <img
                  src="assets/images/logo-dark.png"
                  className=" l-light"
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
              <div
                className="navbar-toggle"
                id="isToggle"
                onClick={() => toggleFunction()}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          {localStorage.getItem("token") && (
            <ul className="buy-button ml-[0px !important] list-none mb-0 ">
              <li className="inline-block mb-0 ">
                <Link
                  to="/update-profile"
                  title="Update Profile"
                  className="btn btn-icon rounded-full uppercase bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"
                  replace={true}
                >
                  {userProfile?.image ? (
                    <img
                      src={`${userProfile?.image}`}
                      className="rounded-full "
                      alt=""
                    />
                  ) : (
                    `${userProfile?.first_name[0]}${userProfile?.last_name[0]}`
                  )}
                </Link>
              </li>
            </ul>
          )}

          <div id="navigation">
            <ul className="navigation-menu justify-end nav-dark">
              <li
                className={`has-submenu parent-menu-item ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link to="/" replace={true}>
                  Home
                </Link>
              </li>

              <li
                className={`has-submenu parent-parent-menu-item ${
                  location.pathname === "/my-jobs"
                    ? "active"
                    : location.pathname === "/job-list"
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  to=""
                  replace={true}
                  onClick={() =>
                    jobMenuFunction(
                      document.getElementById("jobMenu"),
                      document.getElementById("FurtherJobs")
                    )
                  }
                >
                  {" "}
                  Jobs{" "}
                </Link>
                <span className="menu-arrow" id="jobMenu"></span>
                <ul className="submenu" id="FurtherJobs">
                  {/* <li>
                    <Link
                      to="/job-categories"
                      className="sub-menu-item"
                      replace={true}
                    >
                      Job Categories
                    </Link>
                  </li> */}
                  <li
                    className={`has-submenu parent-menu-item ${
                      location.pathname === "/my-jobs" ? "active" : ""
                    }`}
                  >
                    <Link to="/my-jobs" replace={true}>
                      My Jobs
                    </Link>
                  </li>
                  <li
                    className={`has-submenu parent-menu-item ${
                      location.pathname === "/job-list" ? "active" : ""
                    }`}
                  >
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
              {tokenCheck === "false" && (
                <li>
                  <Link
                    to="/login"
                    className="p-[1.10rem!important]"
                    replace={true}
                  >
                    <button className="btn rounded-3xl bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white">
                      Login
                    </button>
                  </Link>
                </li>
              )}
              {tokenCheck === "true" && (
                <li
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  <Link to="/" className="p-[1.10rem!important]" replace={true}>
                    <button className=" btn rounded-3xl bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white">
                      Logout
                    </button>
                  </Link>
                </li>
              )}
              {/* <li className="has-submenu parent-parent-menu-item">
                <a href="javascript:void(0)">Pages</a>
                <span
                  className="menu-arrow"
                  id="pagesMenu"
                  onClick={() =>
                    jobMenuFunction(
                      document.getElementById("pagesMenu"),
                      document.getElementById("furtherPages")
                    )
                  }
                ></span>
                <ul className="submenu" id="furtherPages">
                  
                  <li className="has-submenu parent-menu-item">
                    <Link
                      to="/candidate-detail"
                      className="sub-menu-item"
                      replace={true}
                    >
                      Candidate Detail
                    </Link> 
                    <a href="javascript:void(0)">Candidates</a>
                    <span
                      className="submenu-arrow"
                      id="candidateMenu"
                      onClick={() =>
                        jobMenuFunction(
                          document.getElementById("candidateMenu"),
                          document.getElementById("furtherCandidate")
                        )
                      }
                    ></span>
                    <ul className="submenu" id="furtherCandidate">
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
                    <a href="javascript:void(0)">Employers</a>
                    <span
                      className="submenu-arrow"
                      id="emplyeeMenu"
                      onClick={() =>
                        jobMenuFunction(
                          document.getElementById("emplyeeMenu"),
                          document.getElementById("furtherEmplyee")
                        )
                      }
                    ></span>
                    <ul className="submenu" id="furtherEmplyee">
                      <li>
                        <Link
                          to="/employers"
                          className="sub-menu-item"
                          replace={true}
                        >
                          Employers
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/employer-details"
                          className="sub-menu-item"
                          replace={true}
                        >
                          Employer Detail
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Auth Pages </a>
                    <span
                      className="submenu-arrow"
                      id="authMenu"
                      onClick={() =>
                        jobMenuFunction(
                          document.getElementById("authMenu"),
                          document.getElementById("furtherAuth")
                        )
                      }
                    ></span>
                    <ul className="submenu" id="furtherAuth">
                    
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
                      
                    </ul>
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="javascript:void(0)"> Utility </a>
                    <span
                      className="submenu-arrow"
                      id="utilityMenu"
                      onClick={() =>
                        jobMenuFunction(
                          document.getElementById("utilityMenu"),
                          document.getElementById("furtherutility")
                        )
                      }
                    ></span>
                    <ul className="submenu" id="furtherutility">
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
                    <span
                      className="submenu-arrow"
                      id="specialMenu"
                      onClick={() =>
                        jobMenuFunction(
                          document.getElementById("specialMenu"),
                          document.getElementById("furtherSpecial")
                        )
                      }
                    ></span>
                    <ul className="submenu" id="furtherSpecial">
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
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
