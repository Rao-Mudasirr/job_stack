import './App.css';
import './index.css';

import {
  Routes,
  Route
} from "react-router-dom";
import CandidatesDetail from './components/Pages/Candidates/CandidatesDetail';

function App() {
  return (
    <Routes>
      <Route exact path='/candidate-detail' element={<CandidatesDetail />} />
    </Routes>
  );
}

export default App;
