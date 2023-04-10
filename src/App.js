import "./App.css";
import Login from "./components/Pages/AuthPages/Login/Login";
import { Routes, Route, Link } from "react-router-dom";
import Blogs from "./components/Pages/Blog/Blogs";
import BlogDetail from "./components/Pages/Blog/BlogDetail";
import LockScreen from "./components/Pages/AuthPages/LockScreen";
import ResetPassword from "./components/Pages/AuthPages/ResetPassword";
import Signup from "./components/Pages/AuthPages/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/blog-detail" element={<BlogDetail />} />
      <Route exact path="/lock-screen" element={<LockScreen />} />
      <Route exact path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
