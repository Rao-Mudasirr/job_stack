import './App.css';
import Login from './components/Pages/AuthPages/Login';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Pages/AuthPages/Signup';
import JobCategories from './components/Pages/Jobs/JobCategories/JobCategories';

function App() {
  return (
    <Routes>
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path='/job-categories' element={<JobCategories />} />
    </Routes>
  );
}

export default App;
