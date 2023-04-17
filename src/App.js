import TermsAndServices from "./components/Pages/TermsAndServices/TermsAndServices.tsx";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy.tsx";
import Error404 from "./components/Pages/404/404.tsx";
import CommingSoon from "./components/Pages/CommingSoon/CommingSoon.tsx";
import Maintenance from "./components/Pages/Maintenance/Maintenance.tsx";
import ThankYou from "./components/Pages/ThankYou/ThankYou.tsx";
import Layout from "./components/Pages/Layout/Layout.tsx";
import "./App.css";
import "./index.css";
import CandidatesDetail from "./components/Pages/Candidates/CandidatesDetail";
import Login from "./components/Pages/AuthPages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Blogs from "./components/Pages/Blog/Blogs";
import BlogDetail from "./components/Pages/Blog/BlogDetail";
import LockScreen from "./components/Pages/AuthPages/LockScreen";
import Signup from "./components/Pages/AuthPages/Signup/Signup";
import JobCategories from "./components/Pages/Jobs/JobCategories/JobCategories";
import JobDetails from "./components/Pages/Jobs/JobDetails/JobDetails";
import JobApplication from "./components/Pages/Jobs/JobApplication/JobApplication";
import Home from "./components/Pages/HomePages/Home";
import ForgetPassword from "./components/Pages/AuthPages/ForgetPassword/ForgetPassword";
import ResetForgetPassword from "./components/Pages/AuthPages/ResetForgetPassword/ResetForgetPassword";
import { Employers } from "./components/Pages/employers/Employers.jsx";
import { EmployerDetails } from "./components/Pages/employers/employer-details/EmployerDetails.jsx";
import { JobOpenings } from "./components/Pages/JobOpenings/JobOpenings.jsx";
import { JobList } from "./components/Pages/JobList/JobList.jsx";

function App() {
  return (
    <Routes>
      <Route
        exact
        path={"/"}
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        exact
        path="/terms"
        element={
          <Layout>
            <TermsAndServices />
          </Layout>
        }
      />
      <Route
        exact
        path="/privacy"
        element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        }
      />
      <Route exact path="/comingsoon" element={<CommingSoon />} />
      <Route exact path="/maintenance" element={<Maintenance />} />
      <Route exact path="/error" element={<Error404 />} />
      <Route exact path="/thankyou" element={<ThankYou />} />
      <Route
        exact
        path="/candidate-detail"
        element={
          <Layout>
            <CandidatesDetail />
          </Layout>
        }
      />
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route
        exact
        path="/blogs"
        element={
          <Layout>
            <Blogs />
          </Layout>
        }
      />
      <Route
        exact
        path="/blog-detail"
        element={
          <Layout>
            <BlogDetail />
          </Layout>
        }
      />
      <Route exact path="/lock-screen" element={<LockScreen />} />
      <Route exact path="/forget-password" element={<ForgetPassword />} />
      <Route
        exact
        path="/reset-forget-password"
        element={<ResetForgetPassword />}
      />
      <Route
        exact
        path="/job-categories"
        element={
          <Layout>
            <JobCategories />
          </Layout>
        }
      />
      <Route
        exact
        path="/jobDetails/:id"
        element={
          <Layout>
            <JobDetails />
          </Layout>
        }
      />
      <Route exact path="/job-application" element={<JobApplication />} />
      <Route
        exact
        path="/employers"
        element={
          <Layout>
            <Employers />
          </Layout>
        }
      />
      <Route
        exact
        path="/employer-details"
        element={
          <Layout>
            <EmployerDetails />
          </Layout>
        }
      />
      <Route exact path="/job-openings" element={<JobOpenings />} />
      <Route
        exact
        path="/job-list"
        element={
          <Layout>
            <JobList />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
