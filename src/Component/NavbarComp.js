import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Recipes from "./Recipes";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

const NavbarComp = () => {
  return (
    <Router>
      <nav style={{ backgroundColor: "#333", display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
        <div>
          <Link to="/Home" style={{ color: "#fff", textDecoration: "none", marginRight: "20px" }}> Home</Link>
          <Link to="/Recipes" style={{ color: "#fff", textDecoration: "none", marginRight: "20px" }}> Recipes</Link>
          <Link to="/Contact" style={{ color: "#fff", textDecoration: "none" }}> Contact</Link>
        </div>
        <div>
          <span style={{ color: "#fff" }}>Welcome, User!</span>
        </div>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    // <Router>
    //   <nav>
    //     <Link to="/Home"> Home</Link>
    //     <Link to="/Recipes"> Recipes</Link>
    //     <Link to="/Contact"> Contact</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/Home" element={<Home />} />
    //     <Route path="/Recipes" element={<Recipes />} />
    //     <Route path="/Contact" element={<Contact />} />
    //     <Route path="*" element={<ErrorPage />} />
    //   </Routes>
    // </Router>
  );
};

export default NavbarComp;
