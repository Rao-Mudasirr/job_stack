import React from "react";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
