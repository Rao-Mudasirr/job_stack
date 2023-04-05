import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Pages/AuthPages/Login';
import Signup from './components/Pages/AuthPages/Signup';
import AboutUs from './components/Pages/AboutUs/AboutUs';

function App() {
  return (
    <Routes>
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path='/about-us' element={<AboutUs />} />
    </Routes>
  );
}

export default App;
