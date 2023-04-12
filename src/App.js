import { Routes, Route, Link } from "react-router-dom";
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
      <Route exact path='/candidate-detail' element={<CandidatesDetail />} />
    </Routes>
  );
}

export default App;
