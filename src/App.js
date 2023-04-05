import './App.css';
import Login from './components/Pages/AuthPages/Login';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Pages/AuthPages/Signup';
import { Employers } from './components/employers/Employers';

function App() {
  return (
    <Routes>
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path={"/jobs/employers"} element={<Employers />} />
    </Routes>
  );
}

export default App;
