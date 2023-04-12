import TermsAndServices from "./components/Pages/TermsAndServices/TermsAndServices.tsx";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy.tsx";
import Error404 from "./components/Pages/404/404.tsx";
import CommingSoon from "./components/Pages/CommingSoon/CommingSoon.tsx";
import Maintenance from "./components/Pages/Maintenance/Maintenance.tsx";
import ThankYou from "./components/Pages/ThankYou/ThankYou.tsx";
import Layout from "./components/Pages/Layout/Layout.tsx";
import './App.css';
import './index.css';
import CandidatesDetail from './components/Pages/Candidates/CandidatesDetail';
import Login from "./components/Pages/AuthPages/Login/Login";
import { Routes, Route, Link } from "react-router-dom";
import Blogs from "./components/Pages/Blog/Blogs";
import BlogDetail from "./components/Pages/Blog/BlogDetail";
import LockScreen from "./components/Pages/AuthPages/LockScreen";
import ResetPassword from "./components/Pages/AuthPages/ResetPassword/ResetPassword";
import Signup from "./components/Pages/AuthPages/Signup/Signup";
import JobCategories from './components/Pages/Jobs/JobCategories/JobCategories';
import JobDetails from './components/Pages/Jobs/JobDetails/JobDetails';
import JobApplication from './components/Pages/Jobs/JobApplication/JobApplication';

function App() {
  return (
    <Routes>
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
      <Route exact path='/candidate-detail' element={
        <Layout>
          <CandidatesDetail />
        </Layout>
      } />
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/blog-detail" element={<BlogDetail />} />
      <Route exact path="/lock-screen" element={<LockScreen />} />
      <Route exact path="/reset-password" element={<ResetPassword />} />
      <Route exact path='/job-categories' element={<JobCategories />} />
      <Route exact path='/JobDetails' element={<JobDetails />} />
      <Route exact path='/job-application' element={<JobApplication />} />
    </Routes>
  );
}

export default App;
