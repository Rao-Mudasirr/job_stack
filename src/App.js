import './App.css';
import Login from './components/Pages/AuthPages/Login';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Pages/AuthPages/Signup';
import JobCategories from './components/Pages/Jobs/JobCategories/JobCategories';
import JobDetails from './components/Pages/Jobs/JobDetails/JobDetails';
import JobApplication from './components/Pages/Jobs/JobApplication/JobApplication';

function App() {
  return (
    <Routes>
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path='/job-categories' element={<JobCategories />} />
      <Route exact path='/JobDetails' element={<JobDetails />} />
      <Route exact path='/job-application' element={<JobApplication />} />
    </Routes>
  );
}

export default App;
