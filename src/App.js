import './App.css';
import Login from './components/Pages/AuthPages/Login';
import {
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Pages/AuthPages/Signup';
import Home from './components/Pages/HomePages/Home';

function App() {
  return (
    <Routes>
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;