import './App.css';
import './index.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Pages/AuthPages/Login';
import Signup from './components/Pages/AuthPages/Signup';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Service from './components/Pages/Services/Service';
import JobsApply from './components/Pages/Jobs/JobsApply';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path='/about-us' element={<AboutUs />} />
      <Route exact path='/services' element={<Service />} />
      <Route exact path='/job-apply' element={<JobsApply />} />
    </Routes>
  );
}

export default App;
