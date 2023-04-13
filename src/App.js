import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Pages/HomePages/Home';

function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
    </Routes>
  );
}

export default App;