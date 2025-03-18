import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/home";
import Projects from "./Components/projects";
import About from "./Components/about";
import Footer from "./Components/footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={
          <>
          <Header />
          <Home /></>
        } />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={
          <>
          <About />
          <Footer />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
